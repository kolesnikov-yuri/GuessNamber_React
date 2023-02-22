import React from "react";

import { LangButton } from "../../ui/lang_button/lang_button";
import { Logo } from "../../ui/logo/logo";
import { Level } from "../../ui/level/level";

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
                <div className="aaa"> </div>
            </section>
        </div>
        )
}

export { GuessNumber }

