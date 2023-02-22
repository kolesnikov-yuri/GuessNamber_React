import React from 'react'

import './question.modules.css'


function Question ( {type, onClick, children} ) {
    return (
        <div class="task_game">
            <h2 class="task_game-text">
                Угадай, какое число я загадал? <br></br>
                 ОТ 
                    <span class="task_numb">
                        1
                    </span>
                        до 
               <span class="task_numb task_numb-variable">
                        100
              </span>
            </h2>
        </div>
            
        
    )
}

export { Question }