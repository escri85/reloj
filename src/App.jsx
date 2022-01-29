import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Chrono from "./components/Chrono";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/clock" element={<Clock />} />
          <Route path="/crono" element={<Chrono />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
