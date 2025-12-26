function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.4" fill="currentColor" />
      <path
        d="M12 3v2.2M12 18.8V21M4.2 12H2m20 0h-2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M16.9 15.8A7.3 7.3 0 0 1 8.2 7a7.5 7.5 0 1 0 8.7 8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <span className="theme-toggle-icons" aria-hidden="true">
        <span className="theme-icon sun">
          <SunIcon />
        </span>
        <span className="theme-icon moon">
          <MoonIcon />
        </span>
      </span>
      <span className="theme-toggle-thumb" aria-hidden="true" />
    </button>
  );
}
