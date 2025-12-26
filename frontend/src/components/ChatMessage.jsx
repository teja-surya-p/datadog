function ThumbsUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7 11v8a2 2 0 0 0 2 2h6.2a2 2 0 0 0 1.9-1.4l1.8-5.4a2 2 0 0 0-1.9-2.6H14V7a3 3 0 0 0-3-3l-3 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 11h3v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThumbsDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7 13V5a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.9 1.4l1.8 5.4a2 2 0 0 1-1.9 2.6H14v4a3 3 0 0 1-3 3l-3-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 3h3v10H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ChatMessage({ message, index }) {
  const isAi = message.sender === 'ai';
  const avatarLabel = isAi ? 'AI' : 'ME';

  return (
    <div
      className={`message message--${message.sender}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="message-avatar">{avatarLabel}</div>
      <div className="message-body">
        <div className="message-bubble">
          <p>{message.text}</p>
          {message.attachments?.length ? (
            <div className="message-attachments">
              {message.attachments.map((file) => (
                <span key={file.name} className="attachment-chip">
                  {file.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="message-footer">
          <span className="message-time">{message.time}</span>
          {isAi ? (
            <div className="message-actions">
              <button className="icon-button" type="button" aria-label="Thumbs up">
                <ThumbsUpIcon />
              </button>
              <button className="icon-button" type="button" aria-label="Thumbs down">
                <ThumbsDownIcon />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
