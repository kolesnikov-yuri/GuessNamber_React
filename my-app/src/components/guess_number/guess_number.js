import React from "react";

import { LangButton } from "../../ui/lang_button/lang_button";
import { Logo } from "../../ui/logo/logo";
import { Level } from "../../ui/level/level";
import { Heading } from "../../ui/heading/heading";
import { Question } from "../../ui/question";
import { Dialog } from "../../ui/dialog";
import { InputNumbers } from "../../ui/input_numbers";
import { ButtonStart } from "../../ui/button_start/button_start";

import './guess_number.modules.css'


function GuessNumber () {
    return (
        <div className="root">
            <header className="header">
            <div className="wrapper">
                <div className="header_wrapper">
                 <Logo></Logo> 
                 <Level></Level>
                 <LangButton></LangButton>
                </div>
            </div>
            </header>
            <section className="section">
                <Heading></Heading>
                <Question></Question>
                <div className="wrapper">
                    <div class="narration">
                        <div class="dialogue">
                            <Dialog></Dialog>
                            <InputNumbers></InputNumbers>
                            <ButtonStart><span>ответ</span></ButtonStart>
                        </div>
                        <div class="animal"></div>                         
                    </div>
                </div>
                        
                
            </section>
        </div>
        )
}

export { GuessNumber }

