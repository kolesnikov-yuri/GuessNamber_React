import React from 'react'

import './level.modules.css'


function Level ( {type, onClick, children} ) {
    return (
        <div class="level">
                <p class="level_text">
                    Уровень <span class="level_text-numb">1</span>
                </p>
            </div>
        
    )
}

export { Level }