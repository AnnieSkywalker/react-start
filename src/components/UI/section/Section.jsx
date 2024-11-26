import React from 'react'
import cl from './Section.module.css'

function Section({children, margin}) {
    const rootClasses = [cl.Section];

    if (margin) {
        rootClasses.push([cl.mTop]);
    }

    return (
        <div className={rootClasses.join(' ')}>{children}</div>
    )
}

export default Section