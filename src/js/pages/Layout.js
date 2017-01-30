import React from "react"
import ReactBootstrap from "react-bootstrap"
import { Link } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import style from "./Layout.css"

//change this to a create className
export default class Layout extends React.Component{
  render(){
    return(
      <div class = {style.layoutStyle}>
        <Header />
        <div class= "row">

            <Link class = {style.linkStyle} to="about" activeclassName = "shawnee" >
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                About
              </button>
            </Link>

            <Link class = {style.linkStyle} to="portfolio/default">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Water Color Portfolio
              </button>
            </Link>

            <Link class = {style.linkStyle} to="vector">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Animated Vector Graphics
              </button>
            </Link>

            <Link class = {style.linkStyle} to="digital">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Digital Art
              </button>
            </Link>

            <Link class = {style.linkStyle} to="sculpture">
              <button type="button" id="myButton" data-toggle="button" class="jose button button4">
                Sculpture
              </button>
            </Link>

        </div>
        <div class = "row">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
