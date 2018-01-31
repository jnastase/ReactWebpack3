import React from 'react';

const TodoItem = (props) => {
    const { name, otherProp} = props;
    
    return (
        <li onClick={props.onClick}>
            <div>
            {otherProp}
                </div>
             <div>
                {name}
            </div>
        </li>
    )
}

export default TodoItem;