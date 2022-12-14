import React, { useState } from 'react'

export default function InputString({name, value, placeholder, updateValue, required, pattern, errorMessage}) {
    
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    }

    const  handleChange = (event) => {
        const name  = event.target.name;
        const value = event.target.value;
        
        updateValue(name, value)
    }

    return (
        <div>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-4 text-grey-darker" 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                onChange={handleChange}
                pattern={pattern}
                onBlur={handleFocus}
                focused={focused.toString()}
                required={required}
            />
            <span className="text-sm mt-2 hidden text-red-900">{errorMessage}</span>
        </div>
    )
}
