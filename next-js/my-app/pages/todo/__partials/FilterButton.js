import React from 'react'

function FilterButton({type, value, label, style, updateFilter}) {
    const handleFilter = () => {
        updateFilter(value)
    }
  return (
    <button 
        type={type} 
        value={value}  
        className={style}
        onClick={handleFilter}
    >
        {label}
    </button>
  )
}

export default FilterButton