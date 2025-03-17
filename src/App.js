import './App.css';
import logo from './assets/hotbites-logo.png';
import QRCode from 'react-qr-code';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';

function NotFound() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-card">
          <img src={logo} alt="HotBites Logo" className="logo" />
          <h1 className="error-code">404</h1>
          <p className="tagline">Oops! Recipe Not Found</p>
          <p className="error-message">The recipe you're looking for doesn't exist or has been removed.</p>
          <div className="cta-buttons">
            <button className="primary-button" onClick={() => window.location.href = '/'}>
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipePage() {
  const { recipe_id } = useParams();
  const appUrl = `hotbitesapp://home/recipe/${recipe_id}`;

  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-card">
          <img src={logo} alt="HotBites Logo" className="logo" />
          <p className="tagline">The ultimate recipe discovery platform!</p>
          <div className="qr-section">
            <QRCode 
              value={appUrl}
              size={200}
              level="H"
              className="qr-code"
            />
            <p className="qr-text">Scan to open in HotBites app</p>
          </div>
          <div className="cta-buttons">
            <button className="primary-button" onClick={() => window.location.href = appUrl}>
              Navigate to the recipe!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/404" replace />} />
        <Route path="/:recipe_id" element={<RecipePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
