// Home.tsx
import React from 'react';
import logo from '../../assets/logo.jpg';

interface HomeProps {
  theme: 'dark' | 'light';
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f8f9fa',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '4rem 2rem 2rem',
    textAlign: 'center' as const,
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    padding: '3rem 2rem',
    textAlign: 'center' as const,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
    margin: 'auto',
    maxWidth: '1200px',
  };

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#444' : '#fff',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: theme === 'dark'
      ? '0 4px 8px rgba(255, 255, 255, 0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.25rem',
    display: 'inline-block',
    marginTop: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.2s ease-in-out',
  };

  const footerStyle = {
    textAlign: 'center' as const,
    padding: '2rem',
    fontStyle: 'italic',
    color: theme === 'dark' ? '#bbb' : '#555',
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        style={{
          backgroundColor: theme === 'dark' ? '#222' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
  {/* Logo */}
  <img
    src={logo}
    alt="Logo"
    style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
    }}
  />

  {/* Dropdown Menu */}
  <div style={{ position: 'relative' }}>
    <button
      style={{
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      onClick={(e) => {
        const menu = document.getElementById('dropdown-menu');
        if (menu) {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
      }}
    >
      Menu ▾
    </button>
    <ul
      id="dropdown-menu"
      style={{
        display: 'none',
        position: 'absolute',
        top: '110%',
        left: 0,
        backgroundColor: '#fff',
        listStyle: 'none',
        margin: 0,
        padding: '0.5rem 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        zIndex: 1000,
        width: '160px',
      }}
    >
      <li>
        <a
          href="/"
          style={{
            display: 'block',
            padding: '0.75rem 1rem',
            color: '#222',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/info"
          style={{
            display: 'block',
            padding: '0.75rem 1rem',
            color: '#222',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          Info
        </a>
      </li>
      <li>
        <a
          href="/xray-uploader"
          style={{
            display: 'block',
            padding: '0.75rem 1rem',
            color: '#222',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          About
        </a>
      </li>
    </ul>
  </div>
</div>


      </nav>

      {/* Header */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Welcome 👋</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: 'auto' }}>
          Discover how Artificial Intelligence is transforming pneumonia detection through medical imaging.
        </p>
      </header>

      {/* Info Cards */}
      <section style={sectionStyle}>
        <div className="container">
          <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div className="col-md-4" style={{ flex: '1', maxWidth: '350px' }}>
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
              >
                <h2>What is Pneumonia?</h2>
                <p>
                  Pneumonia is a lung infection causing inflammation of air sacs, often leading to cough, fever, and difficulty breathing.
                </p>
                <p>
                  This AI system is designed to assist—not replace—medical professionals.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4" style={{ flex: '1', maxWidth: '350px' }}>
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
              >
                <h2>How AI Learns</h2>
                <p>
                  This system uses computer vision trained on a dataset from Kaggle. The model analyzes chest X-rays to detect potential pneumonia.
                </p>
                <p>
                  ⚠️ For educational purposes only. It may make mistakes and should not be used for diagnosis.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4" style={{ flex: '1', maxWidth: '350px' }}>
              <div
                style={cardStyle}
                className="card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
              >
                <h2>Try It Yourself</h2>
                <p>
                  Upload your chest X-ray image to see how the AI interprets the scan and predicts possible pneumonia.
                </p>
                <a
                  href="/xray-uploader"
                  style={buttonStyle}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                >
                  Upload X-ray
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <h2>Get Started</h2>
        <p style={{ maxWidth: '600px', margin: 'auto', fontSize: '1.2rem' }}>
          Learn more about pneumonia, symptoms, and how modern technology can improve patient outcomes.
        </p>
        <a
          href="/info"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Learn More
        </a>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        Built with ❤️ by <strong>Evertte</strong> | PneumoPredict 2025
      </footer>
    </div>
  );
};

export default Home;
