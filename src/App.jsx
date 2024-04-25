import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/Navbar/cart/ItemListContainer';
import ItemDetailContainer from './components/Navbar/cart/ItemDetailContainer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />

          
          <Route path="/category/cameras" element={<ItemListContainer />} />
          <Route path="/category/music" element={<ItemListContainer />} />
          <Route path="/category/tech" element={<ItemListContainer />} />

          
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemDetailContainer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
