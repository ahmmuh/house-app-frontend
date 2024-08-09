import React from 'react';

function CheckboxInput(
    {
        label,
        name,
        className,
        value,
        type,
        id,
        checked,
        changeHandler,
        ...props
    }
) {
    return (
        <div className={'col'}>
            <input type={type}
                   name={name}
                   id={id}
                   value={value}
                   checked={checked}
                   onChange={changeHandler}
                   className={className}
                   {...props}/>/
            />
           <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default CheckboxInput;