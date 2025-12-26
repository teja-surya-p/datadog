import ChatMessage from './ChatMessage.jsx';

export default function ChatWindow({ messages }) {
  if (!messages.length) {
    return (
      <div className="chat-window chat-empty">
        <div>
          <p className="empty-title">Start a new conversation</p>
          <p className="empty-subtitle">
            Drop a file or write a prompt and the assistant will respond here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <ChatMessage key={message.id} message={message} index={index} />
      ))}
    </div>
  );
}
