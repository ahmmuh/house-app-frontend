import React from 'react';

function MainCard({title, children}) {
    return (
        <div className={'card mb-4'}>
             <h5 className={'card-header lead'}>{title}</h5>
             <div className={'card-body d-flex'}>{children}</div>
        </div>
    );
}

export default MainCard;