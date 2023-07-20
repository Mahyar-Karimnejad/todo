import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import Components
import Auth from "./Components/Auth-Page/Auth";
import Todomain from "./Components/Todo-Main/Todomain";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todo" element={<Todomain />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;