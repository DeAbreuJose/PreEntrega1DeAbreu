import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Category from './pages/Category'
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import CustomContext from './Context';

function App() {
  return (
    <Router>
      <div>
          <CustomContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path= "/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
          </CustomContext>
      </div>
    </Router>
  );
}

export default App;