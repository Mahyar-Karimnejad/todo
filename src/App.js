import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import Components
import Login from "./Components/Auth-Page/Login";
import Register from "./Components/Auth-Page/Register";
import Todomain from "./Components/Todo-Main/Todomain";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Todomain />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;