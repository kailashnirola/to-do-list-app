import React from 'react';

function Item(props) {
    return (
        <li>
            <div className="item-content">{props.item}</div>
            <button className="delete-button" onClick={() => props.delete(props.id)}>Delete</button>
        </li>
    );
}

export default Item;
