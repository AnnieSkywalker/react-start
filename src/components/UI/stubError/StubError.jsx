import React from 'react'
import cl from './StubError.module.css';
import iconClose from './../../../images/x-mark.svg'

function StubError({children, ...props}) {

    const rootClasses = [cl.StubError];

    if (props.visible) {
        rootClasses.push([cl.active]);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <h3>
                {children}
            </h3>
            <p>{props.postError}</p>

            {/* <a href={"https://github.com/AnnieSkywalker/"}  target={"_blank"} rel={"noopener noreferrer"}>
                
            </a> */}
            <img src={iconClose} alt={"Иконка Close"} onClick={()=> props.setVisible(false)}></img>

            {/* <span onClick={()=> props.setVisible(false)}>close</span> */}
        </div>
    )
}

export default StubError
