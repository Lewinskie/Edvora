import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exaxt path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
