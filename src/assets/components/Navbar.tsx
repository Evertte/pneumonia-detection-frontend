type NavbarProps = {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
  };
  
  export default function Navbar({ theme, setTheme }: NavbarProps) {
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  
    const navbarStyle = {
      backgroundColor: theme === 'light' ? '#f0f8ff' : '#2c3e50', // aliceblue vs dark blue-gray
      color: theme === 'light' ? '#000' : '#fff',
    };
  
    return (
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: navbarStyle.color }}>
            PneumoPredict
          </a>
  
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`btn ${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}
                onClick={toggleTheme}
              >
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  