import React from "react"
import style from "./Header.css"
export default class Header extends React.Component{
  render(){
      return(
        <img class = {style.logoStyle} src = "../../imagesrc/shawnee.png" alt = "shawnee"/>
      );
    }
  }
