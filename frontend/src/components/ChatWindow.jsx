import ChatMessage from './ChatMessage.jsx';

export default function ChatWindow({
  messages,
  isLoading = false,
  error = '',
  onRetry,
  onFeedback,
  feedbackPendingId,
  emptyState = {
    title: 'Start a new conversation',
    subtitle: 'Drop a file or write a prompt and the assistant will respond here.',
  },
}) {
  if (isLoading) {
    return (
      <div className="chat-window chat-empty">
        <div className="status-card">
          <p className="status-title">Loading conversation...</p>
          <p className="status-subtitle">Syncing messages from the server.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chat-window chat-empty">
        <div className="status-card">
          <p className="status-title">Unable to load messages</p>
          <p className="status-subtitle">{error}</p>
          {onRetry ? (
            <button className="ghost-button" type="button" onClick={onRetry}>
              Retry
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  if (!messages.length) {
    return (
      <div className="chat-window chat-empty">
        <div>
          <p className="empty-title">{emptyState.title}</p>
          <p className="empty-subtitle">{emptyState.subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <ChatMessage
          key={message.id}
          message={message}
          index={index}
          onFeedback={onFeedback}
          isFeedbackPending={feedbackPendingId === message.id}
        />
      ))}
    </div>
  );
}
