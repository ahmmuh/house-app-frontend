import React from 'react';

function MainTextArea({
    placeholder,
    changeHandler,
    name,
    cols,
    rows,
    ...props
                      }) {
    return (
       <textarea
           name={name}
           className={'form-control'}
           cols={cols}
             rows={rows}
             onChange={changeHandler}
             {...props}>

       </textarea>
    );
}

export default MainTextArea;