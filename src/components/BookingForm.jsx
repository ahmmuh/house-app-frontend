import React from 'react';

function BookingForm({title,children}) {
    return (
    <div className={'container'}>
        <div className={'row'}>
            <div className={'col-lg-4 col-md-6 col-xs-12'}>
                <span>{title}</span>
                {children}
            </div>
        </div>
    </div>
    );
}

export default BookingForm;