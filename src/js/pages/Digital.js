import React from "react"
import Image from "../components/Image"
const rootImageFolder = "../../imagesrc/"
import style from "./Digital.css"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "Legendary Birds",\
      "src": "../../imagesrc/pudge.jpg",\
      "caption": "all pudged up"\
    },\
    {\
      "title": "One Punch Man Tower",\
      "src": "../../imagesrc/opm.jpg",\
      "caption": "All of our favorite heros"\
    },\
    {\
      "title": "Captain Levi",\
      "src": "../../imagesrc/levi.jpg",\
      "caption": "Prepared for battle"\
    },\
     {\
      "title": "Elvis Watermelon Steven",\
      "src": "../../imagesrc/elvis.jpg",\
      "caption": "Thank you. Thank you very much"\
    },\
    {\
      "title": "Sesshoumaru",\
      "src": "../../imagesrc/sesshoumaru.jpg",\
      "caption": "Essentially my childhood"\
    },\
     {\
      "title": "Durarara!",\
      "src": "../../imagesrc/durarara.jpg",\
      "caption": "Favorite characters"\
    },\
    {\
      "title": "Picking Oranges",\
      "src": "../../imagesrc/suzalulu.jpg",\
      "caption": "Go watch Code Geass."\
    }\
  ]\
}'

export default class Digital extends React.Component{
  constructor(){
    super();
    this.state = {
      elements:JSON.parse(elements)
      };
  }
  render(){
    return(
      <div>
        <h2>mostly just me being anime trash ....</h2>
        <Image style = {style.imageStyle} elements ={this.state.elements}/>
      </div>
    );
  }
}
