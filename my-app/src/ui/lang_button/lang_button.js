import React from 'react'

import './lang_button.modules.css'


function LangButton ( {type, onClick, children} ) {
    return (
        <div class="lang-button">
                <div class="lang lang-ru">
                    <p class="signature signature-ru">RUS</p>
                    <div class="flag flag-ru"></div>
                </div>
                <div class="lang lang-en">
                    <p class="signature signature-en">ENG</p>
                    <div class="flag flag-en"></div>
                </div>
             </div> 
            
        
    )
}

export { LangButton }