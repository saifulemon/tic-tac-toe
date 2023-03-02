import React from 'react';

const Square = (props) => {
    return (
        <div>
            <button className={props.value ? 'btn disabled' : 'btn'} onClick={props.onClick}>{props.value}</button>
        </div>
    );
};

export default Square;