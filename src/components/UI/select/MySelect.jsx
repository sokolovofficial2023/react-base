import React, {useState} from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({defaultValue, option, value, onChange}) => {



    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={classes.myInp}
        >
            <option disabled value="value1">{defaultValue}</option>
            {option.map(opt =>
                <option value={opt.value} key={opt.value}>{opt.name}</option>
            )}
        </select>
    );
};

export default MySelect;