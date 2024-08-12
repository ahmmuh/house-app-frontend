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
           className={'form-control mb-3'}
           cols={cols}
             rows={rows}
             onChange={changeHandler}
             {...props}>

       </textarea>
    );
}

export default MainTextArea;