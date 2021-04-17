import React from "react";

const NavBar = ({title, searchBox, onButtonClicked}) => (
    <div> 
        <h1>{title}</h1>
        <input placeholder={searchBox}/>
        <button onClick={onButtonClicked}>Search</button>
    </div>
)

export default NavBar;