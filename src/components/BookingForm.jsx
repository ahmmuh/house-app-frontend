import React from 'react';

function BookingForm({title,children}) {
    return (
    <div className={'container'}>
        <div className={'row'}>
            <div className={'col'}>
                <span>{title}</span>
                {children}
            </div>
        </div>
    </div>
    );
}

export default BookingForm;