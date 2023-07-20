import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import Components
import Auth from "./Components/Auth-Page/Auth";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;