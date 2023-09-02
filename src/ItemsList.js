import React from 'react'

import { LineItem } from './LineItem';
export const ItemsList = ({items, handleCheck, handleDelete}) => {
    return (
        <div>

            <ul>
                {
                    items.map(item =>
                        <LineItem  
                             item={item}                                
                             handleCheck={handleCheck}
                             handleDelete={handleDelete}
                             key={item.id}
                        />
                    )
                }

            </ul>

        </div>
    )
}
