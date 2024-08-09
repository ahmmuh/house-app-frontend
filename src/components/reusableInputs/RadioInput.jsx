import React from 'react';

function RadioInput({
    type = 'radio',
    className = '',
    changeHandler,
    name,
    value,
    id,
    checked, label,
    ...props
                    }) {

    return (
        <div >
            <input
                type={type}
                name={name}
                value={value}
                checked={checked}
                onChange={changeHandler}
                className={className} {...props}/>
            <label style={{padding: '.3rem'}} htmlFor={id}>{label}</label>
        </div>

    );
}

export default RadioInput;