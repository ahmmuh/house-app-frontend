import React from 'react';

function MainButton({
    title,
    type= 'button',
    textColor ='#000',
    bgColor = '#fff',
    ...props
}) {
    const buttonStyle = {
        color: textColor,
        backgroundColor: bgColor,
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontsize:'16px'
    }
    return (
       <button type={type} style={buttonStyle} {...props} >{title}</button>
    );
}

export default MainButton;