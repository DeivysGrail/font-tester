/* eslint-disable no-unused-vars */

import {Fragment, useRef, useState} from "react";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import Input from "./input";
import("../css/container.css")
export default function Container(props) {

    const fromLeft = document.querySelectorAll(".left")
    const fromRight = document.querySelectorAll(".right")
    const [texte, setTexte] = useState(props.name)


    // Animation de défilement de gauche à droite
    const leftToRight = (event) => {
        event.animate([
                {transform: "translateX(-100vh)"},
                {transform: "translateX(200vh)"}
            ],
            {
                duration: 3000,
                iterations: "Infinity"

            })
    }
    // Animation défilement de droite à gauche
    const rightToLeft = (event) => {
        event.animate([
                {transform: "translateX(200vh)"},
                {transform: "translateX(-100vh)"}
            ],
            {
                duration: 3000,
                iterations: "Infinity"

            })
    }
    function animation(x) {
        if (x.target.style.visibility === "none") {
          x.target.style.background = "yellow"

        }
    }



    return <div className="div_for_text">
            <p onChange={(event) => animation(event)} sens={props.direction} className={texte} id={props.id}>{texte}</p>
    </div>

}