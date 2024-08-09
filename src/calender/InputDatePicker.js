import React from 'react';
import DatePicker from 'react-datepicker';
function InputDatePicker({ selectedDate,name, changeHandler, ...props}) {
    const handleDateChange = (date) =>{
        changeHandler({target: {value: date,name}});
    }
    return (
        <>
            <DatePicker
                selected={selectedDate} name={name} onChange={handleDateChange} {...props}/>
        </>
    );
}

export default InputDatePicker;