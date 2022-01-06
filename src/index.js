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
import Favorite from "./components/Favorite"
import NoPage from "./components/NoPage"
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

ReactDOM.render(
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={reducer}>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/kids" element={<Kids />}/>
    <Route path="/theatre" element={<Theatre />}/>
    <Route path="/rrated" element={<Rrated />}/>
    <Route path="/dramas" element={<Drama />}/>
    <Route path="/favorite" element={<Favorite />}/>
    <Route path="*" element={<NoPage />}/>
  </Routes>
  </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
