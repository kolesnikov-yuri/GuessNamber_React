import React from 'react'

import './button_start.modules.css'


function ButtonStart ( {type, onClick, children} ) {
    return (
        <button type={type} className={'button_start'} onClick={onClick}>
        {children}
        </button>
        
    )
}
export { ButtonStart }