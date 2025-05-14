import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
    setUploadStatus('');
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus('Please select at least one file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFiles[0]);

    try {
      const response = await fetch('https://pneumonia-detection-backend.onrender.com/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Upload failed');
      }

      const label = data.prediction;
      const confidence = (data.confidence * 100).toFixed(2);
      setUploadStatus(`${label} (Confidence: ${confidence}%)`);
    } catch (error) {
      console.error(error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    setUploadStatus('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px] xl:h-[600px] overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/src/assets/image.png"
            alt="Lungs Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-800 shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Upload X‑ray</h1>
          <p className="text-gray-700 dark:text-gray-300">Select or drag‑and‑drop chest X‑ray images below.</p>

          {/* File picker */}
          <label className="w-full max-w-md p-10 rounded-xl cursor-pointer border-2 border-dashed border-blue-400 bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-200 flex flex-col items-center justify-center space-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l3-3m-3 3l-3-3m0-9h6a2 2 0 012 2v4H7v-4a2 2 0 012-2z" />
            </svg>
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
            <span className="text-blue-600 dark:text-blue-300 font-medium">Click or drop images here</span>
          </label>

          {/* Preview thumbnails */}
          {previewUrls.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {previewUrls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Preview ${idx + 1}`}
                  className="mt-4 rounded-md shadow border border-gray-300"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
              ))}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpload}
              className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all shadow-md"
            >
              Upload & Analyze
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all shadow-md"
            >
              Reset
            </button>
          </div>

          {/* Output message */}
          {uploadStatus && (
            <div
              className={`mt-6 p-4 rounded-xl shadow-lg text-2xl font-semibold w-full max-w-sm
              ${uploadStatus.includes('PNEUMONIA') ? 'bg-red-100 text-red-700 border border-red-400'
                : uploadStatus.includes('NORMAL') ? 'bg-green-100 text-green-700 border border-green-400'
                : 'bg-yellow-100 text-yellow-700 border border-yellow-400'}`}
            >
              {uploadStatus}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UploadPage;
