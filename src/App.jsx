import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import GamePage from "./pages/GamePage.jsx";
import Rules from "./pages/Rules.jsx";
import Scores from "./pages/Scores.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Sudoku+</div>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/scores">Scores</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/easy" element={<GamePage size={6} />} />
          <Route path="/games/normal" element={<GamePage size={9} />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}