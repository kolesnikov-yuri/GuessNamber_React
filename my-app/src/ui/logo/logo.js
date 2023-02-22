import React from 'react'

import './logo.modules.css'


function Logo ( {type, onClick, children} ) {
    return (
        <>
        <div className="logo">
                    <div className="logo_type">
                        <div className="logo_type-text">KG</div>
                    </div>
                    <div className="logo_doctype">kolesnikovgrup</div>
            </div>
    </>
    )
        
        
    
}
export { Logo }