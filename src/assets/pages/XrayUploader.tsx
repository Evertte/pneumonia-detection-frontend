import React, { useState } from 'react';
import { motion } from 'framer-motion';
import lungImage from '../../assets/Pneumonia-image.jpg';

const UploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // const backgroundStyle: React.CSSProperties = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundImage: `url(${lungImage})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   zIndex: 0,
  //   filter: 'brightness(0.6)',
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus('Please select at least one file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFiles[0]); // Only upload the first file

    setLoading(true);
    setUploadStatus('');

    try {
      const response = await fetch('https://pneumonia-detection-backend.onrender.com/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Upload failed');
      }

      const label = data.prediction;
      const confidence = (data.confidence * 100).toFixed(2);
      setUploadStatus(`${label} (Confidence: ${confidence}%)`);
    } catch (error) {
      console.error(error);
      setUploadStatus('Error uploading file. Please try again.');
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    setUploadStatus('');
  };

  const downloadSelectedFiles = () => {
    selectedFiles.forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(fileUrl);
    });
  };

  return (
    // <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden p-4">
      <div className="XrayUploader-background flex flex-col items-center justify-center font-sans overflow-hidden p-4">

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-blue-300 border-dashed rounded-full animate-spin"></div>
            <p className="text-white text-xl font-semibold">Analyzing X‑ray...</p>
          </div>
        </div>
      )}

      {/* Upload Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-4xl p-10 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md"
      >
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-blue-900 drop-shadow">Upload Chest X‑ray</h1>
          <p className="text-blue-800">Select or drop your chest X‑ray image for pneumonia prediction.</p>
        </div>

        <label className="block cursor-pointer p-10 border-2 border-dashed border-blue-400 hover:bg-blue-100 transition-all rounded-2xl text-blue-900 text-center font-semibold">
          <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
          📤 Click or drag-and-drop images here
        </label>

        {previewUrls.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {previewUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Preview ${idx + 1}`}
                className="rounded-xl shadow-md border border-blue-400"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            Upload & Analyze
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-100 text-blue-700 font-semibold rounded-xl hover:bg-gray-200 transition-all shadow-md"
          >
            Reset
          </button>
        </div>
      </motion.div>

      {/* Result Card */}
      {uploadStatus && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 w-full max-w-2xl mt-10 p-8 rounded-2xl bg-blue-50 shadow-2xl border border-blue-300 backdrop-blur-lg"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Diagnosis Result</h2>
          <p
            className={`text-xl font-medium ${
              uploadStatus.toUpperCase().includes('PNEUMONIA')
                ? 'text-red-600'
                : uploadStatus.toUpperCase().includes('NORMAL')
                ? 'text-green-600'
                : 'text-yellow-600'
            }`}
          >
            {uploadStatus}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default UploadPage;
