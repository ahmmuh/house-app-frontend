import React from 'react';
import Calender from "react-calendar"
function DatePicker(
    {name, dateValue, changeHandler}
) {
    return (
        <Calender
            value={dateValue}
            onChange={changeHandler}
            name={name} />
    );
}

export default DatePicker;