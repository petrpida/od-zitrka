import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./routes/About";
import Housekeeping from "./routes/Housekeeping";
import Traveling from "./routes/Traveling";
import Blog from "./routes/Blog";
import Projects from "./routes/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route path="About" element={<About />} />
                  <Route path="Housekeeping" element={<Housekeeping />} />
                  <Route path="Traveling" element={<Traveling />} />
                  <Route path="Blog" element={<Blog />} />
                  <Route path="Project1" element={<Projects />} />
                  <Route path="Project2" element={<Projects />} />
                  <Route path="Project3" element={<Projects />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
