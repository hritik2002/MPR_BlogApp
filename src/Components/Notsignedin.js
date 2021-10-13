import React from "react";
import './NotSignedin.css'

const Notsignedin = ()=>{
    return(
        <div className="Notsignedin_container">
            <div className="left">
                Logo
            </div>
            <div className="right">
                <a href="#">Explore</a>
                <a href="#">Sign in</a>
                <a href="#">Sign up</a>
            </div>
        </div>
    )
}

export default Notsignedin ;