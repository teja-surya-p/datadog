import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import LoggedOutView from './components/LoggedOutView.jsx';

const demoUser = {
  name: 'Avery Patel',
  email: 'avery.patel@orbit.ai',
  role: 'Product Lead',
  team: 'Experience Lab',
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell">
      {isAuthenticated ? (
        <MainPage
          user={demoUser}
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
