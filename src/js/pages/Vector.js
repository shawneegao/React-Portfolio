import React from "react"
import Video from '../components/Video'

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
          <div class = "col-lg-12">
            <Video elements ={this.state.elements}/>
          </div>
        </div>
      </div>
  );
  }
}
