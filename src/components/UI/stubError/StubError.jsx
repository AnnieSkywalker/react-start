import React from 'react'
import cl from './StubError.module.css';

function StubError({children, ...props}) {
    return (
        <div className={cl.StubError}>
            <h3>
                {children}
            </h3>
            <p>{props.postError}</p>
        </div>
    )
}

export default StubError
