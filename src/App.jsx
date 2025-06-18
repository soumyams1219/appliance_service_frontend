// src/App.jsx
// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="relative">
        <Home />
      </div>
    </Router>
  );
}

export default App;