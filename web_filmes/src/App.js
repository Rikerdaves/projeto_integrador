import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Screen/Home';
import Movies from './Screen/Movies';
import Series from './Screen/Series';

function App() {
  return (
    <>
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
      </Routes>
    </div>
  </Router>
  </>
  );
}


export default App;
