import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "../pages/home"; // Use 'H' if your file is named 'Home.jsx'

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
