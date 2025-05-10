# Pneumonia Detection Frontend

Welcome to the **Pneumonia Detection Frontend** repository! 🚀

This is a **React-based** web application designed to detect pneumonia from chest X-ray images using machine learning. The application communicates with a FastAPI backend to make predictions and display results to the user in real-time.

### 🚀 Demo

Check out the live demo of the application here:  
[Live Demo](https://your-vercel-deployment-link)

### 🧠 About the Project

The frontend of this project allows users to upload a chest X-ray image, and in turn, it uses a deep learning model to determine whether the image indicates **Pneumonia** or **Normal** lungs. The backend, powered by **FastAPI**, processes the image and returns the result with a confidence score. This project is designed for healthcare professionals and anyone interested in automating the diagnostic process of pneumonia detection.

### 🔧 Technologies Used

- **Frontend:** React.js
- **Backend:** FastAPI (Hosted on Render)
- **Machine Learning:** TensorFlow (MobileNet Model for Pneumonia Detection)
- **Styling:** CSS & Bootstrap
- **Deployment:** Vercel for frontend, Render for backend

### 🖥️ Features

- **Image Upload:** Users can upload an X-ray image of the chest.
- **Prediction Result:** The model predicts whether the X-ray indicates Pneumonia or a Normal lung with a confidence score.
- **Responsive UI:** Works on all screen sizes, providing a seamless experience across devices.

### 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pneumonia-detection-frontend.git
````

2. **Navigate to the project directory:**

   ```bash
   cd pneumonia-detection-frontend
   ```

3. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages with npm:

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   Your app will be running on [http://localhost:3000](http://localhost:3000)!

### 🌐 Backend Integration

The frontend communicates with a **FastAPI** backend hosted on **Render**. The backend accepts image uploads and responds with prediction results. Ensure the backend URL is set correctly in the frontend code for smooth integration.

### 🔄 Backend Setup

The backend repository can be found here:
[Backend Repository](https://github.com/Evertte/pneumonia-detection-backend)

### 🤝 Contributing

We welcome contributions! If you'd like to improve the project, feel free to fork it and make a pull request. Make sure to follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

### 📜 License

Distributed under the MIT License. See LICENSE for more information.

---

Made with ❤️ by Evertte
```
