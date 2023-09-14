import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef(
    (props, ref) => {
        return (
            <input {...props} type="text" className={classes.myInp} ref={ref}/>
        );
    });
export default MyInput;