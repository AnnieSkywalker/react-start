import React from "react";
import classes from "./MyButton.module.css";

const MyButton = function ({children, ...props}) {
  
  const cl = (children === 'Удалить')
      ? classes.del
      : classes.open

  return(
    <button {...props} className={[classes.myBtn, cl].join(' ')}>
      {children}
    </button>
  )
}

export default MyButton;