// Home.tsx
import React from 'react';

interface HomeProps {
  theme: 'light' | 'dark';
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f8f9fa',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '4rem 2rem',
    textAlign: 'center' as 'center',
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    padding: '3rem 2rem',
    textAlign: 'center' as 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    margin: 'auto',
    maxWidth: '1200px',
  };

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#444' : '#fff',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: theme === 'dark' ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
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

  return (
    <div>
      {/* Navigation Bar */}
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
        <h2>AI Pneumonia Detection</h2>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0 }}>
          <li style={{ margin: '0 1rem' }}><a href="/" style={{ color: theme === 'dark' ? '#fff' : '#000', textDecoration: 'none' }}>Home</a></li>
          <li style={{ margin: '0 1rem' }}><a href="/info" style={{ color: theme === 'dark' ? '#fff' : '#000', textDecoration: 'none' }}>Info</a></li>
          <li style={{ margin: '0 1rem' }}><a href="/about" style={{ color: theme === 'dark' ? '#fff' : '#000', textDecoration: 'none' }}>About</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Understanding Pneumonia</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: 'auto' }}>
          Learn about pneumonia, its risks, and how AI can help predict it.
        </p>
      </header>

      {/* Info Cards Section */}
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
                  Pneumonia is an infection of the lungs. It can cause inflammation of the air sacs, leading to difficulty breathing and fever.
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
                <h2>Why Early Detection Matters</h2>
                <p>
                  Identifying pneumonia early helps in preventing complications and ensures that proper treatment can begin promptly.
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
                <h2>How AI is Helping</h2>
                <p>
                  AI is being used to analyze chest X-rays, detecting early signs of pneumonia that may not be easily visible to the human eye.
                </p>
                <a
                    href="/xray-uploader"
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                  >
                    Upload Your X-ray
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <section style={sectionStyle}>
        <h2>Get Started</h2>
        <p style={{ maxWidth: '600px', margin: 'auto' }}>
          Explore detailed information about pneumonia and its treatment options by clicking the button below.
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

      
    </div>
  );
};

export default Home;
