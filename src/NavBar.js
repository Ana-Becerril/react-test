import React, { useState } from 'react';

const NavBar = ({title, searchBox, onButtonClicked}) => {
    const [input, setInput] = useState("nada aún");

    return ( 
    <div> 
        <h1>{title}</h1>
        <input placeholder={searchBox} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={onButtonClicked}>Search</button>
        <p>Adivinaré lo que estás escribiendo:{input}</p>
    </div>
)};


export default NavBar;