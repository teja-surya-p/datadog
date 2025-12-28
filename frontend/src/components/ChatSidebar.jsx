function ChevronIcon({ direction = 'left' }) {
  const rotation = direction === 'left' ? '0' : '180';
  return (
    <svg viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)` }}>
      <path
        d="M14.5 6 9 12l5.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ChatSidebar({
  threads,
  activeThreadId,
  onSelectThread,
  onNewChat,
  collapsed,
  onToggle,
  isLoading = false,
  error = '',
}) {
  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-header">
        <div>
          <p className="sidebar-title">Chats</p>
          <p className="sidebar-subtitle">Recent threads</p>
        </div>
        <button className="icon-button" type="button" onClick={onToggle} aria-label="Toggle">
          <ChevronIcon direction={collapsed ? 'right' : 'left'} />
        </button>
      </div>
      <button className="new-chat-button" type="button" onClick={onNewChat} disabled={isLoading}>
        + New chat
      </button>
      <div className="chat-list">
        {isLoading ? (
          <p className="sidebar-status">Loading chats...</p>
        ) : error ? (
          <p className="sidebar-status">{error}</p>
        ) : threads.length === 0 ? (
          <p className="sidebar-status">No chats yet.</p>
        ) : (
          threads.map((thread) => (
            <button
              key={thread.id}
              type="button"
              className={`chat-card ${thread.id === activeThreadId ? 'active' : ''}`}
              onClick={() => onSelectThread(thread.id)}
            >
              <div>
                <p className="chat-card-title">{thread.title}</p>
                <p className="chat-card-subtitle">{thread.lastMessage}</p>
              </div>
              <span className="chat-card-time">{thread.updatedAt}</span>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}
