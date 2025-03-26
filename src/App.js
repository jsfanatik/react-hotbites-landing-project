import './App.css';
import logo from './assets/hotbites-logo.png';
import homeImage from './assets/hotbites-home.png';
import recipeImage from './assets/hotbites-recipe.png';
import QRCode from 'react-qr-code';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-card">
          <img src={logo} alt="HotBites Logo" className="logo" />
          <div className="home-content">
            <img src={homeImage} alt="HotBites Home" className="home-image" />
            <div className="instructions">
              <h3 className="instructions-title">Get the HotBites App!</h3>
              <p>1. Download HotBites from the App Store.</p>
              <p>2. Create your account.</p>
              <p>3. Start exploring delicious recipes!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-card">
          <img src={logo} alt="HotBites Logo" className="logo" />
          {/* <h1 className="error-code">404</h1> */}
          <p className="tagline">Oops! Recipe Not Found</p>
          {/* <p className="error-message">The recipe you're looking for doesn't exist or has been removed.</p> */}
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
          <p className="tagline">View the recipe in the HotBites app!</p>
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
              Let's go!
            </button>
          </div>
          <p className="pinterest-mobile-note">
            Viewing from Pinterest? Click the three dots and select "Open in browser"
          </p>
          <a href="/" className="app-link">Get the HotBites app!</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:recipe_id" element={<RecipePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
