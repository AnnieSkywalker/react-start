import React from 'react'
import cl from './Section.module.css'

function Section({children, ...props}) {
    const rootClasses = [cl.Section];

    if (props.margin) {
        rootClasses.push([cl.mTop]);
    }

    return (
        <div className={rootClasses.join(' ')}>{children}</div>
    )
}

export default Section