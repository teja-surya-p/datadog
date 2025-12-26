function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 4 1.5l2.7-2.6C17.1 3.6 14.8 2.5 12 2.5 6.9 2.5 2.8 6.6 2.8 11.7S6.9 20.9 12 20.9c5.8 0 7.9-4.1 7.9-6.2 0-.4 0-.7-.1-1.1H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LoggedOutView({ onSignIn }) {
  return (
    <div className="auth-layout">
      <section className="auth-hero">
        <figure className="hero-card">
          <svg viewBox="0 0 320 280" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="robot" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f7c08a" />
                <stop offset="100%" stopColor="#7fb7a0" />
              </linearGradient>
            </defs>
            <rect x="24" y="20" width="272" height="200" rx="28" fill="#fff7e9" />
            <rect x="72" y="60" width="176" height="140" rx="22" fill="url(#robot)" />
            <circle cx="128" cy="120" r="18" fill="#fff7e9" />
            <circle cx="200" cy="120" r="18" fill="#fff7e9" />
            <circle cx="128" cy="120" r="8" fill="#26323f" />
            <circle cx="200" cy="120" r="8" fill="#26323f" />
            <rect x="120" y="160" width="80" height="12" rx="6" fill="#26323f" />
            <circle cx="160" cy="46" r="10" fill="#f07b6a" />
            <path
              d="M160 46v-16"
              stroke="#26323f"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <figcaption>
            <h1>Orbit AI</h1>
            <p>Chat, summarize, and build decisions from a single calm workspace.</p>
          </figcaption>
        </figure>
      </section>
      <section className="auth-panel">
        <div className="auth-card">
          <h2>Sign in to continue</h2>
          <p>Use your Google account to unlock your chats and files.</p>
          <button className="google-button" type="button" onClick={onSignIn}>
            <span className="google-icon">
              <GoogleIcon />
            </span>
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
}
