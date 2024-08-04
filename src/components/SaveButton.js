import React from 'react';

function SaveButton({type, title,backgroundColor, textColor, changeHandler, ...props}) {
    return (
        <button type={type} className={backgroundColor}
           color={textColor}
            onClick={changeHandler}
        >{title}</button>
    );
}

export default SaveButton;