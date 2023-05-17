import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

import Menu from './Components/Menu';
import Home from './Screen/Home';
import Movies from './Screen/Movies';
import Series from './Screen/Series';
import Footer from './Components/Footer/footer';
import DetalhesFilme from './Screen/PageMovie';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Defina o tempo necessário para a sua operação de carregamento
  }, []);

  return (
    <div style={isLoading ? { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } : {}}>
      {isLoading ? (
        <div className='Load'>
          {/* Aqui você pode colocar um indicador de carregamento, como um spinner */
            <PacmanLoader color="#f9ff00" />}
          <h1>Carregando...</h1>
        </div>
      ) : (
        <div>
          {/* Conteúdo do aplicativo após o carregamento */}
          <>
            <Router>
              <div>
                <Menu />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/Movies" element={<Movies />} />
                  <Route path="/Series" element={<Series />} />
                  <Route path="/filme/:id" element={<DetalhesFilme />} />
                </Routes>
                <Footer />
              </div>
            </Router>
          </>
        </div>
      )}
    </div>
  );
}


export default App;
