import './App.css';
import logo from './assets/hotbites-logo.png';
import QRCode from 'react-qr-code';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function formatRecipeName(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function RecipePage() {
  const { recipe_name, recipe_id } = useParams();
  const appUrl = `hotbitesapp://home/recipe/${recipe_id}`;
  const formattedRecipeName = formatRecipeName(recipe_name);

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
            <p className="qr-text">Scan to open <b>{formattedRecipeName}</b> recipe in HotBites app</p>
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
        <Route path="/:recipe_name/:recipe_id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
