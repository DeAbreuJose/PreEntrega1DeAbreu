import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Category from './pages/Category'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />


          {/* <Route path="/category/cameras" element={<ItemListContainer />} />
          <Route path="/category/music" element={<ItemListContainer />} />
          <Route path="/category/tech" element={<ItemListContainer />} />


          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemDetailContainer />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;