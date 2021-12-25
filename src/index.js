import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Kids from './components/Kids';
import Theatre from "./components/Theatre"
import Rrated from "./components/Rrated"
import Drama from "./components/Dramas"
import NoPage from "./components/NoPage"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/kids" element={<Kids />}/>
    <Route path="/theatre" element={<Theatre />}/>
    <Route path="/rrated" element={<Rrated />}/>
    <Route path="/dramas" element={<Drama />}/>
    <Route path="*" element={<NoPage />}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
