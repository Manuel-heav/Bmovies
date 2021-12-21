import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Kids from "./components/Kids"
import Theatre from "./components/Theatre"
import Rrated from "./components/Rrated"
import Drama from "./components/Dramas"
import NoPage from "./components/NoPage"
import Header from "./components/Header";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="theatre" element={<Theatre />} />
          <Route path="kids" element={<Kids />} />
          <Route path="rrated" element={<Rrated />} />
          <Route path="drama" element={<Drama />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
