import React, {useEffect, useState} from 'react';
import ItemListContainer from '../components/Navbar/cart/ItemListContainer';


function Home() {

  const [elements, setElements] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/DeAbreuJose/PreEntrega2DeAbreu/main/src/components/Navbar/cart/productos.json');
          const products = await response.json();
          
          setElements(products)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <ItemListContainer items={elements}/>
  );
}

export default Home;
