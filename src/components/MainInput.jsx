import React from 'react';

const MainInput = ({
                       label,
                       placeholder,
                       maxLength,
                       type,
                       value,
                       onChange,
                       ...props }) => {
    return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">{label}</span>
            <input
                type={type}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default MainInput;
