import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { TimerPage, PalettePage } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/timer">Таймер</Link>
          </li>
          <li>
            <Link to="/palette">Палитра</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/palette" element={<PalettePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
