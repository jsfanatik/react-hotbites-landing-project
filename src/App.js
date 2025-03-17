import './App.css';
import logo from './assets/hotbites-logo.png';
import QRCode from 'react-qr-code';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

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
        <Route path="/:recipe_id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
