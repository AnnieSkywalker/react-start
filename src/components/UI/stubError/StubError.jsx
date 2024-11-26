import React from 'react'
import cl from './StubError.module.css';
import clText from './StubErrorText.module.css';
import clTitle from './StubErrorTitle.module.css'

function StubError({children, ...props}) {

    return (
        <div className={cl.StubError}>
            <h3 className={clTitle.StubErrorTitle}>
                {children}	
            </h3>
            <p className={clText.StubErrorText}>{props.postError}</p>
        </div>
    )
}

export default StubError
