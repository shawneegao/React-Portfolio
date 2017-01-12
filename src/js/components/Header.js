import React from "react"
import Title from "./Title"

export default class Header extends React.Component{
  render(){
    return(
      <div class = "title">
        <Title title = {this.props.title}/>
      </div>
    );
  }
}
