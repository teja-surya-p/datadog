import { useEffect, useRef, useState } from 'react';
import ChatSidebar from '../components/ChatSidebar.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import ChatComposer from '../components/ChatComposer.jsx';
import ProfileMenu from '../components/ProfileMenu.jsx';
import DropZoneOverlay from '../components/DropZoneOverlay.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import {
  createChat,
  fetchChatMessages,
  fetchChats,
  sendChatMessage,
  sendMessageFeedback,
} from '../services/chatApi.js';

const formatMessageTime = (value) => {
  if (!value) {
    return '';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatChatTimestamp = (value) => {
  if (!value) {
    return '';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  const now = new Date();
  const isSameDay = date.toDateString() === now.toDateString();
  if (isSameDay) {
    return formatMessageTime(date);
  }
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};

const mapChatToUi = (chat) => ({
  id: chat.id,
  title: chat.title || 'Untitled chat',
  lastMessage: chat.lastMessage || 'Start a new conversation',
  updatedAt: formatChatTimestamp(chat.updatedAt),
});

const mapMessageToUi = (message) => ({
  id: message.id,
  sender: message.role === 'ai' ? 'ai' : 'user',
  text: message.content,
  time: formatMessageTime(message.createdAt),
  attachments: message.attachments?.length ? message.attachments : undefined,
  feedback: message.feedback?.rating || null,
});

const buildChatTitle = (text) => {
  if (!text) {
    return 'New chat';
  }
  const words = text.trim().split(/\s+/).slice(0, 4);
  return words.join(' ');
};

export default function MainPage({ user, onSignOut, theme, onToggleTheme }) {
  const [threads, setThreads] = useState([]);
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isLoadingChats, setIsLoadingChats] = useState(true);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [chatError, setChatError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [sendError, setSendError] = useState('');
  const [feedbackPendingId, setFeedbackPendingId] = useState(null);
  const fileInputRef = useRef(null);

  const activeThread = threads.find((thread) => thread.id === activeThreadId);

  useEffect(() => {
    let isActive = true;

    const loadChats = async () => {
      setIsLoadingChats(true);
      setChatError('');
      try {
        const data = await fetchChats();
        if (!isActive) {
          return;
        }
        const nextThreads = (data.chats || []).map(mapChatToUi);
        setThreads(nextThreads);
        setActiveThreadId((prev) => {
          if (prev && nextThreads.some((thread) => thread.id === prev)) {
            return prev;
          }
          return nextThreads[0]?.id || null;
        });
      } catch (error) {
        if (isActive) {
          setChatError(error.message || 'Failed to load chats.');
        }
      } finally {
        if (isActive) {
          setIsLoadingChats(false);
        }
      }
    };

    loadChats();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!activeThreadId) {
      setMessages([]);
      setIsLoadingMessages(false);
      return;
    }

    let isActive = true;

    const loadMessages = async () => {
      setIsLoadingMessages(true);
      setMessageError('');
      try {
        const data = await fetchChatMessages(activeThreadId);
        if (!isActive) {
          return;
        }
        const mapped = (data.messages || []).map(mapMessageToUi);
        setMessages(mapped);
      } catch (error) {
        if (isActive) {
          setMessageError(error.message || 'Failed to load messages.');
        }
      } finally {
        if (isActive) {
          setIsLoadingMessages(false);
        }
      }
    };

    loadMessages();
    return () => {
      isActive = false;
    };
  }, [activeThreadId]);

  const handleFilesAdded = (fileList) => {
    const nextFiles = Array.from(fileList || []);
    if (!nextFiles.length) {
      return;
    }
    setAttachedFiles((prev) => [...prev, ...nextFiles]);
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed && attachedFiles.length === 0) {
      return;
    }
    if (isSending) {
      return;
    }

    setIsSending(true);
    setMessageError('');
    setSendError('');
    setChatError('');

    const attachmentMeta = attachedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    try {
      let chatId = activeThreadId;
      if (!chatId) {
        const title = buildChatTitle(trimmed);
        const created = await createChat(title);
        const mappedChat = mapChatToUi(created.chat);
        setThreads((prev) => [mappedChat, ...prev]);
        chatId = created.chat.id;
        setActiveThreadId(chatId);
        setMessages([]);
      }

      const response = await sendChatMessage(chatId, {
        content: trimmed,
        attachments: attachmentMeta,
      });

      const userMessage = mapMessageToUi(response.userMessage);
      const aiMessage = mapMessageToUi(response.aiMessage);

      setMessages((prev) => [...prev, userMessage, aiMessage]);
      setInputValue('');
      setAttachedFiles([]);

      setThreads((prev) => {
        const updated = prev.map((thread) =>
          thread.id === chatId
            ? {
                ...thread,
                lastMessage: userMessage.text || 'Shared files',
                updatedAt: formatChatTimestamp(response.aiMessage.createdAt),
              }
            : thread
        );
        const active = updated.find((thread) => thread.id === chatId);
        if (!active) {
          return updated;
        }
        return [active, ...updated.filter((thread) => thread.id !== chatId)];
      });
    } catch (error) {
      setSendError(error.message || 'Failed to send message.');
    } finally {
      setIsSending(false);
    }
  };

  const handleNewChat = async () => {
    setMessageError('');
    setSendError('');
    setChatError('');
    try {
      const created = await createChat();
      const mappedChat = mapChatToUi(created.chat);
      setThreads((prev) => [mappedChat, ...prev]);
      setActiveThreadId(created.chat.id);
      setMessages([]);
    } catch (error) {
      setChatError(error.message || 'Failed to create a new chat.');
    }
  };

  const handleRemoveFile = (fileName) => {
    setAttachedFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) {
      return;
    }
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    handleFilesAdded(event.dataTransfer.files);
  };

  const handleSelectThread = (threadId) => {
    setActiveThreadId(threadId);
    setMessageError('');
    setSendError('');
  };

  const handleRetryMessages = () => {
    if (!activeThreadId) {
      return;
    }
    setMessageError('');
    setIsLoadingMessages(true);
    fetchChatMessages(activeThreadId)
      .then((data) => {
        const mapped = (data.messages || []).map(mapMessageToUi);
        setMessages(mapped);
      })
      .catch((error) => {
        setMessageError(error.message || 'Failed to load messages.');
      })
      .finally(() => setIsLoadingMessages(false));
  };

  const handleFeedback = async (messageId, rating) => {
    if (!messageId || feedbackPendingId) {
      return;
    }
    setSendError('');
    setFeedbackPendingId(messageId);
    try {
      const response = await sendMessageFeedback(messageId, rating);
      const updated = mapMessageToUi(response.message);
      setMessages((prev) => prev.map((message) => (message.id === messageId ? updated : message)));
    } catch (error) {
      setSendError(error.message || 'Failed to record feedback.');
    } finally {
      setFeedbackPendingId(null);
    }
  };

  return (
    <div className="main-page">
      <header className="top-bar">
        <div className="brand">
          <div className="brand-mark">OA</div>
          <div>
            <p className="brand-title">Orbit AI</p>
            <p className="brand-subtitle">Studio chat</p>
          </div>
        </div>
        <div className="top-actions">
          <button
            className="ghost-button"
            type="button"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? 'Hide chats' : 'Show chats'}
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <ProfileMenu user={user} onSignOut={onSignOut} />
        </div>
      </header>

      <div className={`workspace ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <section
          className="chat-panel"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <DropZoneOverlay active={dragActive} />
          <div className="chat-header">
            <div>
              <p className="chat-label">Active chat</p>
              <h2 className="chat-title">{activeThread?.title || 'New conversation'}</h2>
            </div>
            <div className="chat-meta">
              <span className="status-pill">Live</span>
            </div>
          </div>
          <ChatWindow
            messages={messages}
            isLoading={isLoadingMessages}
            error={messageError}
            onRetry={handleRetryMessages}
            onFeedback={handleFeedback}
            feedbackPendingId={feedbackPendingId}
            emptyState={{
              title: activeThreadId ? 'Start a new conversation' : 'Create your first chat',
              subtitle: activeThreadId
                ? 'Drop a file or write a prompt and the assistant will respond here.'
                : 'Click New chat to start and ask your first question.',
            }}
          />
          <ChatComposer
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSend={handleSend}
            onAttachClick={() => fileInputRef.current?.click()}
            onFilesAdded={handleFilesAdded}
            attachedFiles={attachedFiles}
            onRemoveFile={handleRemoveFile}
            fileInputRef={fileInputRef}
            isSending={isSending}
            error={sendError}
          />
        </section>

        <ChatSidebar
          threads={threads}
          activeThreadId={activeThreadId}
          onSelectThread={handleSelectThread}
          onNewChat={handleNewChat}
          collapsed={!sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
          isLoading={isLoadingChats}
          error={chatError}
        />
      </div>
    </div>
  );
}
