import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import "./App.css";
import { Counter } from "./Counter";
import { NewPost } from "./new-post";
import { PokemonNames } from "./pokemon-names";
import { ToggleTimer } from "./toggle-timer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<NewPost />} />
        <Route path="counter" element={<Counter />} />
        <Route path="timer" element={<ToggleTimer />} />
        <Route path="pokemon" element={<PokemonNames />} />
      </Routes>

        <nav className="nav-items">
          <Link to="/">New Post</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/pokemon">Pokemon names</Link>
        </nav>
    </BrowserRouter>
  );
}

export default App;
