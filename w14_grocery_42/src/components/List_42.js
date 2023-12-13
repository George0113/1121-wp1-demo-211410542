import React from 'react'
import {FaEdit, FaTrash}from'react-icons/fa';

const List_42 = ({items,removeItem,editItem}) => {
    return (
        <div className="grocery-list">
            {items.map((item,index)=>{
                const {id,title} =item;
                return(
                    <article key={index} className='grocery-item'>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button type='button' className='edit-btn'
                             onClick={()=>editItem(id)}>
                                <FaEdit />
                            </button>
                            <button type='button' className='delete-btn' 
                             onClick={()=>removeItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};


export default List_42;