import React from "react"
import ReactBootstrap from "react-bootstrap"
import { Link } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container, Row, Col } from 'reactstrap';
var Radium = require('radium');
var color = require('color');

//change this to a create className
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
    var linkStyle = {
      textDecoration: 'none'
    }
    var style = {
      textAlign:'center'
    }
    return(
      <div style = {style}>
        <Header title = {this.state.title}/>
        <div classNameName = "row">
            <Link style = {linkStyle} to="about" activeclassName = "shawnee" >
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                About
              </button>
            </Link>

            <Link style = {linkStyle} to="portfolio/default">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Water Color Portfolio
              </button>
            </Link>
            <Link style = {linkStyle} to="vector">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Animated Vector Graphics
              </button>
            </Link>

            <Link style = {linkStyle} to="digital">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Digital Art
              </button>
            </Link>
        </div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
