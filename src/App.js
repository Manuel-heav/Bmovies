import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Header from "./components/Header";
function App() {
  return (
    <div className="app">
        <Home />
    </div>
  );
}

export default App;
