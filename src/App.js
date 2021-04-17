import React, { Component } from "react";
import NavBar from "./NavBar";

const App = () => {
 const onButtonClicked = ()=> {

    console.log("Button has been clicked!");
  }

  return(
    <NavBar title="Hello,Im an example" searchBox="Search" onButtonClicked={onButtonClicked}/>
  )
};

export default App;