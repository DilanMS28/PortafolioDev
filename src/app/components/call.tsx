import Link from "next/link"
import React from 'react'

export default function call(){
    return(
        <div className="action">
            <div className="callToAction container intro">
                <p className="Paction">¡Here we go, I'm excited that we're <span>working together!</span></p>
                <a href="#" className="btnp btnCall">Let's Go!</a>
            </div>
        </div>
    )
}