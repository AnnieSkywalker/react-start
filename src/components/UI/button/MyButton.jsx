import React from "react";
import classes from "./MyButton.module.css";

const MyButton = function ({children, ...props}) {
    let cl = '';

    if (children === 'Удалить'){
        cl = classes.del;
    } else if (children === 'Открыть') {
        cl = classes.open;
    } else if (children === ' ') {
        cl = classes.add;
    }

    return(
        <button {...props} className={[classes.myBtn, cl].join(' ')}>
            {children}
        </button>
    )
}

export default MyButton;
