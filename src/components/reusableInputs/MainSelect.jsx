import React from 'react';

const MainSelect = ({ value, name, onChange, options, label, ...props }) => {
    return (
        <select className="form-control mb-3" value={value} name={name} onChange={onChange}  {...props}>
            {options && options?.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default MainSelect;
