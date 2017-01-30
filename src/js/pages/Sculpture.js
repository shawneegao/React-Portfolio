import React from "react"
import Image from "../components/Image"
const rootImageFolder = "../../imagesrc/"
import style from "./Portfolio.css"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "The Graduate",\
      "src": "../../imagesrc/bustFront.jpg",\
      "caption": "A friend\'s original character"\
    },\
    {\
      "title": "The Graduate",\
      "src": "../../imagesrc/bustSide.jpg",\
      "caption": "I waited by my fire place after this"\
    },\
     {\
      "title": "The Graduate",\
      "src": "../../imagesrc/bustUp.jpg",\
      "caption": "Was feeling hungry and adventurous"\
    },\
    {\
      "title": "Study of Lips",\
      "src": "../../imagesrc/lips.jpg",\
      "caption": "...holding onto his hopes and dreams"\
    },\
    {\
      "title": "A Friendly Face",\
      "src": "../../imagesrc/faceFront.jpg",\
      "caption": "Best relationship in the movie"\
    },\
     {\
      "title": "A Friendly Face",\
      "src": "../../imagesrc/faceSide.jpg",\
      "caption": "My first try painting darker skin"\
    },\
    {\
      "title": "Study of Ears",\
      "src": "../../imagesrc/ear.jpg",\
      "caption": "Playing with some glitter"\
    },\
     {\
      "title": "Study of Nose",\
      "src": "../../imagesrc/nose.jpg",\
      "caption": "Season 8 Rupaul\'s Drag Race. Watch it"\
    }\
  ]\
}'

export default class Portfolio extends React.Component{
  constructor(){
    super();
    this.state = {
      elements:JSON.parse(elements)
      };
  }
  render(){
    return(
      <div class = "col-lg-12">
        <Image style = {style.imageStyle} elements ={this.state.elements}/>
      </div>
    );
  }
}
