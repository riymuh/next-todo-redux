import React, { useState } from 'react'

export default function formCreate({name, value, placeholder, updateValue}) {
    
    const  handleChange = (event) => {
        const name  = event.target.name;
        const value = event.target.value;
        
        updateValue(name, value)
    }

    return (
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder={placeholder} name={name} value={value} onChange={handleChange} />
    )
}
