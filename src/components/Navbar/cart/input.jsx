import React from 'react'

function Input ({

id = "Test",
type = "Text",
placeholder = "Escriba un valor",
text = "Input test",
onChange

}) {

    const handleChange = (e) =>{
        onChange(e.target.value)
    }
    
    
return(

    <div>


<label htmlFor={id} className='text-white'>{text}</label>
<input type={type} id={id} placeholder={placeholder} className='text-black p-2 rounded-md shadow-md' onChange={handleChange}/>


    </div>
)


}

export default Input