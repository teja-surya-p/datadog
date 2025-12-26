import { useEffect, useRef, useState } from 'react';

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function ProfileMenu({ user, onSignOut }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <button className="profile-button" type="button" onClick={() => setOpen((prev) => !prev)}>
        <span className="profile-avatar">{getInitials(user.name)}</span>
      </button>
      {open ? (
        <div className="profile-popup">
          <div>
            <p className="profile-name">{user.name}</p>
            <p className="profile-email">{user.email}</p>
          </div>
          <div className="profile-meta">
            <span>{user.role}</span>
            <span>{user.team}</span>
          </div>
          <button className="ghost-button" type="button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
}
