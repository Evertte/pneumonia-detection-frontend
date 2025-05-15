import React, { useState, useRef, useEffect } from 'react';
import lungImage from '../../assets/Pneumonia-image.jpg';
import logo from '../../assets/logo.jpg';

const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const BACKEND_URL = 'http://pneumonia-detection-backend.onrender.com/predict/';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setModalMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    const handleUpload = async () => {
      if (!selectedFile) return;
      setLoading(true);
      setModalMessage(null);
  
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await fetch(BACKEND_URL, {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
  
        const prediction = result.prediction;
        const confidence = result.confidence;
  
        if (!prediction || confidence === undefined) {
          throw new Error('Invalid response from server');
        }
  
        const confidencePercent = (confidence * 100).toFixed(2);
        const predictionText = `${prediction} (Confidence: ${confidencePercent}%)`;
  
        let advice = '';
        if (prediction === 'PNEUMONIA') {
          advice = 'The uploaded X-ray indicates pneumonia. It’s important to consult a healthcare professional immediately. Pneumonia is treatable, especially when detected early. Ensure proper hydration, rest, and follow prescribed medications.';
        } else if (prediction === 'NORMAL') {
          advice = 'The uploaded X-ray appears normal. This suggests no signs of pneumonia. Continue practicing healthy habits and consult your doctor if you experience any symptoms. Stay informed and proactive about your health.';
        } else {
          advice = 'The diagnosis was unclear. Please try another image or consult your doctor for more information.';
        }
  
        setModalMessage(`${predictionText}\n\n${advice}`);
      } catch (error) {
        console.error('Error uploading file:', error);
        setModalMessage('Something went wrong while uploading. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile, BACKEND_URL]);
  

  return (
    <>
      {/* Background and overlay */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${lungImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'brightness(0.8)', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }} />
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '1rem', right: '1rem', width: '90px', height: '90px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover', zIndex: 3 }} />
      <button style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: '#ffffff', color: '#3498db', padding: '0.5rem 1rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', zIndex: 3 }} onClick={() => window.location.href = '/'}>
        Home
      </button>
      <div style={{ position: 'absolute', top: '5rem', left: 0, right: 0, textAlign: 'center', color: '#ffffff', fontSize: '3rem', fontWeight: 'bold', zIndex: 2 }}>
        Evertte's Pneumonia Detection App
      </div>

      {/* Cards and upload */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', flexWrap: 'wrap', gap: '2.8rem', zIndex: 2, paddingTop: '8rem' }}>
        <div style={cardStyle}>
        <h2 style={{ fontSize: '2rem' }}>Welcome 👋</h2>

<p>
  This web application uses a <strong>Computer Vision</strong> algorithm trained to detect signs of pneumonia in chest X-ray images.</p> 
<p>
  It leverages the power of <strong>deep learning</strong> to analyze radiographic patterns and assist in identifying abnormalities. </p> 
<p>
  The model was trained using a publicly available dataset from <strong>Kaggle</strong>, comprising thousands of labeled X-ray images.
</p>

        </div>
        <div style={cardStyle}>
          <h2 style={{ fontSize: '2rem' }}>Upload X-ray</h2>
          <p>Upload your X-ray image to diagnose pneumonia.</p>
          <input type="file" accept="image/*" style={{ fontSize: "1rem", padding: "0.3rem 0.7rem", marginTop: '1rem' }} ref={fileInputRef} onChange={handleFileChange} />
          {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '100%', maxHeight: '200px', borderRadius: '8px', marginTop: '1rem' }} />}
          <button onClick={handleReset} style={{ backgroundColor: '#3498db', color: '#fff', padding: '0.3rem 0.7rem', fontSize: '1rem', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>Reset</button>
        </div>
        <div style={cardStyle}>
        <h2 style={{ fontSize: '2rem' }}>Disclaimer!</h2>
<p>
  This application is intended <strong>strictly for educational and demonstration purposes</strong>.</p>
<p>
   It is not a certified diagnostic tool 
  and should <strong>not</strong> be used as a substitute for professional medical evaluation.
</p>
<p>
  While the AI model performs with reasonable accuracy, it is still prone to <strong>errors and false predictions</strong>. </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
        <button style={{ marginTop: '3rem', padding: '0.8rem 2rem', borderRadius: '10px', fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '2px solid #fff', cursor: 'pointer' }}>
          Pneumonia Overview
        </button>
      </div>

      {loading && (
        <div style={modalStyle}>
          <p>Analyzing image... Please wait.</p>
        </div>
      )}

{modalMessage && !loading && (
  <div style={modalStyle}>
    {modalMessage.split('\n\n').map((line, i) => (
      <p key={i}>{line}</p>
    ))}
    <button onClick={() => setModalMessage(null)} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
      Close
    </button>
  </div>
)}

    </>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 60, 90, 0.75)',
  color: '#f0f8ff',
  padding: '2rem',
  borderRadius: '12px',
  width: '400px',
  minHeight: '400px',
  backdropFilter: 'blur(10px)',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'transform 0.3s ease',
  fontSize: '1.15em',
};

const modalStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  color: '#333',
  padding: '2rem',
  borderRadius: '12px',
  zIndex: 100,
  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
  width: '90%',
  maxWidth: '500px',
  textAlign: 'center'
};

export default UploadPage;
