import React from "react"
import { Link } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"


export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      title:"Shawnee"
    };
  }
  navigate(){
    console.log(this.props);
  }
  changeText(title){
    this.setState({title})
  }
  render(){
    return(
      <div>
        <Header changeTitle = {this.changeText.bind(this)} title = {this.state.title}/>
        {this.props.children}
        <Link to="about" activeClassName = "shawnee" >About</Link>
        <Link to="portfolio/default">portfolio</Link>
        <Link to="/"><button onClick = {this.navigate.bind(this)}>Home</button></Link>
        <Footer/>
      </div>
    );
  }
}
