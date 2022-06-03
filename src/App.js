import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile.tsx";
import Login from "./components/Login.tsx";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
