import React from 'react';
import { ItemsList } from './ItemsList';


export const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <>
            {(items.length > 0 ) ? (
               <ItemsList                
               items={items}        
               handleCheck={handleCheck}
               handleDelete={handleDelete}
               
               />
            ) : <p style={{ marginTop: '2em' }}>Your List is Empty</p>
            }

        </>
    );


}
