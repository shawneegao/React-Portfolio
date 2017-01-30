import React from "react"
import Video from '../components/Video'
import style from "./Vector.css"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "Welcome to Water 7",\
      "src": "../../imagesrc/water7.mp4",\
      "caption": "Setting for Water7 arc from One Piece.",\
      "method":"CSS animation for water, GSAP for everything else."\
    },\
    {\
      "title": "Cupcake Intro",\
      "src": "../../imagesrc/cupcake.mp4",\
      "caption": "Opening for a cupcake store\'s website.",\
      "method":"Animated with GSAP."\
    }\
    ,\
    {\
      "title": "Human Advancement in Technology",\
      "src": "../../imagesrc/tech_thru_ages.mp4",\
      "caption": "Somethings never change.",\
      "method":"Animated with GSAP- WIP."\
    }\
  ]\
}'

export default class Vector extends React.Component{
  constructor(){
    super();
    this.state = {
      elements:JSON.parse(elements)
      };
  }
  render () {
    return(
      <div class= 'container'>
        <div class = "row">
          <div class = "col-lg-12 col-md-12 col-sm-12">
            <Video style = {style.vectorStyle} elements ={this.state.elements}/>
          </div>
        </div>
      </div>
  );
  }
}
