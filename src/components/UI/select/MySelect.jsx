import React from "react";
import cl from './MySelect.module.css'

const MySelect = function ({options, defaultValue, value, onChange}) {

    return(
        <select className={cl.MySelect} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect;
