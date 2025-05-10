// Info.tsx
import React from 'react';
import lungImage from '../../assets/Pneumonia-image.jpg';

// const [file, setFile] = React.useState<File | null>(null);

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (!file) return alert("Please upload a file");

//   const formData = new FormData();
//   formData.append("xray", file);

//   try {
//     const response = await fetch("http://localhost:8000/predict/", {
//       method: "POST",
//       body: formData,
//     });
//     const result = await response.json();
//     alert(`Prediction: ${result.prediction}`);
//   } catch (error) {
//     alert("Upload failed. Try again.");
//     console.error(error);
//   }
// };


const backgroundStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${lungImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
  filter: 'brightness(0.6)',
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
};

const contentWrapperStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  padding: '6rem 2rem 4rem 2rem',
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  color: '#fff',
};

const navbarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '1rem 2rem',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  color: '#fff',
  zIndex: 3,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const overviewCardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '2rem',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#ffffff',
  marginBottom: '2rem',
};

const cardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2rem',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 60, 90, 0.75)',
  borderRadius: '12px',
  padding: '1rem',
  width: '24rem',
  height: '28rem',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#f0f8ff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const Info: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .hover-box:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
          }
        `}
      </style>

      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>

      {/* NavBar */}
      <div style={navbarStyle}>
        <h2 style={{ margin: 0 }}>PneumoPredict</h2>
        <nav>
          <a href="/" style={{ marginRight: '1.5rem', cursor: 'pointer', textDecoration: 'none', color: '#fff' }}>Home</a>
          <a href="#info" style={{ marginRight: '1.5rem', cursor: 'pointer', textDecoration: 'none', color: '#fff' }}>Info</a>
          <a href="#contact" style={{ cursor: 'pointer', textDecoration: 'none', color: '#fff' }}>Contact</a>
        </nav>
      </div>

      {/* Page Content */}
      <div style={contentWrapperStyle}>
        {/* Overview Title Only */}
        <div style={{ ...overviewCardStyle, animation: 'fadeIn 1s ease-in-out' }}>
          <h1>Pneumonia Overview</h1>
        </div>

        {/* Cards Section */}
        <div style={cardContainerStyle}>
          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>What is Pneumonia?</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Pneumonia is a serious lung infection where the air sacs fill with fluid or pus, making breathing difficult.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Causes</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Pneumonia can be caused by bacteria, viruses, or fungi. The most common bacterial cause is Streptococcus pneumoniae.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Symptoms</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Common symptoms include persistent cough, high fever, chills, shortness of breath, and chest pain.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Diagnosis</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Physicians may use physical exams, chest X-rays, blood tests, and oxygen saturation checks to diagnose pneumonia.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>AI in Detection</h2>
            <p style={{ fontSize: '1.2rem' }}>
              AI models analyze chest X-rays to detect early signs of pneumonia, assisting doctors in diagnosis.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Treatment</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Treatment depends on the cause: antibiotics for bacterial pneumonia, antivirals for viral, and antifungals for fungal causes.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Prevention</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Vaccines like the pneumococcal and flu vaccines reduce the risk of pneumonia. Good hygiene also helps.
            </p>
          </div>

          <div style={cardStyle} className="hover-box">
            <h2 style={{ fontSize: '3rem' }}>Prognosis</h2>
            <p style={{ fontSize: '1.2rem' }}>
              With timely treatment, most people recover well from pneumonia. Recovery time varies by individual.
            </p>
          </div>
        {/* Upload Section
<div style={{ ...overviewCardStyle, textAlign: 'center' }}>
  <h2 style={{ fontSize: '2.5rem' }}>Upload Chest X-ray</h2>
  <p style={{ fontSize: '1.2rem' }}>Upload your X-ray image to let our AI model predict pneumonia risk.</p>
  <form 
    onSubmit={handleSubmit}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}
    encType="multipart/form-data"
  >
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files?.[0] || null)}
      style={{ padding: '0.5rem', backgroundColor: '#fff', borderRadius: '8px', color: '#000' }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: '#00bcd4',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Upload and Predict
    </button>
  </form>
</div> */}

          
        </div>
      </div>
    </>
  );
};

export default Info;
