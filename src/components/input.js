import reactDOM, {useEffect, useRef, useState} from "react";
import Container from "./container";

import("../css/input.css")

export default function Input(props) {

    /* Le contenu de l'input ainsi que son setter */
    const [texte_of_input, setTexte_of_input] = useState('')
    const [animationState, setAnimationState] = useState(true)
    const [boutonBackground, setBoutonBackground] = useState("url('../icons/pause-button-svgrepo-com.svg")
    /* Rendu de ce qui est écrit dans la barre d'input */
    function handlePrint(event) {
        const typing = event.target.value // On récupère ce qui est écrit
        setTexte_of_input(typing) // On modifie l'état grâce au setter
        // Chacun des block affiche le texte écrit en direct
        document.querySelectorAll("p").forEach((e) => {
            e.innerHTML = typing
            if (typing === '') {
                e.innerHTML = e.className
            }
        })


    }

    function notSubmit(event) {
        event.preventDefault()
    }
    
    function changeBackground() {

    }

    function setPause() {
        if (animationState === true) {
            document.querySelectorAll("p").forEach((element) => {
                element.style.animationPlayState = 'paused'
            })
            setAnimationState(false)
        } else if (animationState === false) {
            document.querySelectorAll("p").forEach((element) => {
                element.style.animationPlayState = 'running'
            })
            setAnimationState(true)

        }
    }


    return <div className={"input"}>
        <form onSubmit={(event) => notSubmit(event)} className={"inputForm"}>
            <input id={"input"} onChange={(event) => handlePrint(event)} type="text" value={texte_of_input}/>
            <button className={"bouton"} onClick={(event) => setPause(event)}></button>
        </form>
    </div>


}