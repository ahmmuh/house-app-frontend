import React from 'react';

function MainTextArea({
    placeholder,
    changeHandler,
    cols,
    rows,
    ...props
                      }) {
    return (
       <textarea className={'form-control'} cols={cols}
                 rows={rows}
                 onChange={changeHandler}
                 {...props}>

       </textarea>
    );
}

export default MainTextArea;