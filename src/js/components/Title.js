import React from "react"

export default class Title extends React.Component{

  render(){
    const logoStyle = {
      width:260
    };
    return(
      <img style = {logoStyle} src = "../../imagesrc/shawnee.png" alt = "shawnee"/>
    );
  }
}
