import { useRef, useState } from 'react';
import ChatSidebar from '../components/ChatSidebar.jsx';
import ChatWindow from '../components/ChatWindow.jsx';
import ChatComposer from '../components/ChatComposer.jsx';
import ProfileMenu from '../components/ProfileMenu.jsx';
import DropZoneOverlay from '../components/DropZoneOverlay.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';

const initialThreads = [
  {
    id: 't1',
    name: 'Launch checklist',
    lastMessage: 'Outline the release steps',
    updatedAt: 'Today',
  },
  {
    id: 't2',
    name: 'Design sync',
    lastMessage: 'Refine the chat panel layout',
    updatedAt: 'Yesterday',
  },
  {
    id: 't3',
    name: 'Roadmap',
    lastMessage: 'Summarize Q3 initiatives',
    updatedAt: 'Mon',
  },
];

const initialMessages = [
  {
    id: 'm1',
    sender: 'ai',
    text: 'Welcome back. Tell me what you want to explore today, and I will organize the details.',
    time: '09:41',
  },
  {
    id: 'm2',
    sender: 'user',
    text: 'Draft a rollout plan for the new analytics view.',
    time: '09:42',
  },
  {
    id: 'm3',
    sender: 'ai',
    text: 'Got it. I can draft milestones, risks, and comms in one pass. Do you want weekly or phased milestones?',
    time: '09:43',
  },
];

export default function MainPage({ user, onSignOut, theme, onToggleTheme }) {
  const [threads, setThreads] = useState(initialThreads);
  const [activeThreadId, setActiveThreadId] = useState(initialThreads[0].id);
  const [messages, setMessages] = useState(initialMessages);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const activeThread = threads.find((thread) => thread.id === activeThreadId);

  const handleFilesAdded = (fileList) => {
    const nextFiles = Array.from(fileList || []);
    if (!nextFiles.length) {
      return;
    }
    setAttachedFiles((prev) => [...prev, ...nextFiles]);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed && attachedFiles.length === 0) {
      return;
    }

    const timestamp = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const attachmentMeta = attachedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    const userMessage = {
      id: `m${Date.now()}`,
      sender: 'user',
      text: trimmed || 'Shared files for review.',
      time: timestamp,
      attachments: attachmentMeta.length ? attachmentMeta : undefined,
    };

    const aiMessage = {
      id: `m${Date.now() + 1}`,
      sender: 'ai',
      text:
        'Thanks. I will map out the response and surface key insights. Tell me if you want it in bullets or a narrative.',
      time: timestamp,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInputValue('');
    setAttachedFiles([]);

    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === activeThreadId
          ? {
              ...thread,
              lastMessage: trimmed || 'Shared files',
              updatedAt: 'Just now',
            }
          : thread
      )
    );
  };

  const handleNewChat = () => {
    const id = `t${Date.now()}`;
    const newThread = {
      id,
      name: `New chat ${threads.length + 1}`,
      lastMessage: 'Start a new conversation',
      updatedAt: 'Now',
    };
    setThreads((prev) => [newThread, ...prev]);
    setActiveThreadId(id);
    setMessages([]);
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
              <h2 className="chat-title">{activeThread?.name || 'New conversation'}</h2>
            </div>
            <div className="chat-meta">
              <span className="status-pill">Live</span>
            </div>
          </div>
          <ChatWindow messages={messages} />
          <ChatComposer
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSend={handleSend}
            onAttachClick={() => fileInputRef.current?.click()}
            onFilesAdded={handleFilesAdded}
            attachedFiles={attachedFiles}
            onRemoveFile={handleRemoveFile}
            fileInputRef={fileInputRef}
          />
        </section>

        <ChatSidebar
          threads={threads}
          activeThreadId={activeThreadId}
          onSelectThread={setActiveThreadId}
          onNewChat={handleNewChat}
          collapsed={!sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
}
