import React from 'react'
import { FaPlus } from 'react-icons/fa'
export const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                type="text"
                autoFocus
                id='addItem'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={ (e) => setNewItem(e.target.value)}
            />
            <button
                className='addButton'
                type='submit'
                aria-label='Add Item'>
                <FaPlus />
            </button>

        </form>
    )
}
