import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import LoggedOutView from './components/LoggedOutView.jsx';
import { signInWithGoogle, signOutUser, subscribeToAuth } from './services/firebaseClient.js';

export default function App() {
  const [authUser, setAuthUser] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => {
      setAuthUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google sign in failed', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Sign out failed', error);
    }
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const userProfile = authUser
    ? {
        name: authUser.displayName || authUser.email || 'Orbit user',
        email: authUser.email || 'No email',
        role: 'Google account',
        team: 'Firebase Auth',
      }
    : null;

  return (
    <div className="app-shell">
      {authUser ? (
        <MainPage
          user={userProfile}
          onSignOut={handleSignOut}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      ) : (
        <LoggedOutView onSignIn={handleSignIn} />
      )}
    </div>
  );
}
