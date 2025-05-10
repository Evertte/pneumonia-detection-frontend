export default function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          &copy; {new Date().getFullYear()} PneumoPredict. All rights reserved.
        </div>
      </footer>
    );
  }
  
  