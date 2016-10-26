import React from "react"
import Title from "./Title"

export default class Header extends React.Component{
  handleChange(e){
    this.props.changeTitle(e.target.value);
  }
  render(){
    return(
      <div class = "title">
        <Title title = {this.props.title}/>
        <input value = {this.props.title} onChange = {this.handleChange.bind(this)}/>
      </div>
    );
  }
}
