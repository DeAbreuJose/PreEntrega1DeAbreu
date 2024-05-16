import React, {useEffect, useState} from 'react';
import ItemListContainer from '../components/Navbar/cart/ItemListContainer';
import Input from '../components/Navbar/cart/input';


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




    const [name, setName] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault()
    }

    const onNameChange = (name) => {setName(name)}
    const onEmailChange = (email) => {setEmail(email)}

  return (
    <div>
    <ItemListContainer items={elements}/>

    <form onSubmit={handleSubmit}>
<Input onChange={onNameChange} placeholder='Nombre' text='Nombre' id='name'/>
<Input onChange={onEmailChange} placeholder='Email' text='email' id='name'/>
<button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Send</button>
    </form>

    </div>
  );
}

export default Home;
