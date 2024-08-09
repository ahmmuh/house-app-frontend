import React from 'react';

function GuestInputCounter({
    name, value, changeHandler,label,id, className, type,...props
                           }) {
    return (
        <>
            <input type={type} name={name}
                   className={className}
                   value={value} onChange={changeHandler} {...props} />
            <label htmlFor={id}>{label}</label>
        </>
    );
}

export default GuestInputCounter;