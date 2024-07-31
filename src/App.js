// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Documents from './components/Documents';

const App = () => {
  return (
    <Router>
      <Routes>       
        <Route path="/" element={<Documents />} />
      </Routes>
    </Router>
  );
};

export default App;
