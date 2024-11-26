import React from 'react'
import classes from './SocialBlock.module.css'

function SocialBlock({...props}) {
    return (
        <a href={props.href} className={classes.SocialBlock} target={props.target} rel={props.rel}>
            <img  src={props.src} alt={props.alt} />
        </a>
    )
}

export default SocialBlock