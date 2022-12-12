import React from 'react'

export default function AddButton({createFunction}) {
    const handleAction = () => {
        createFunction();
    }
    return (
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={handleAction}>
            Add
        </button>
    )
}
