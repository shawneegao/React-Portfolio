import React from "react"
import Roles from "../components/Roles"
import Minions from "../components/Minions"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "Sobey",\
      "src": "../../imagesrc/Sobey.png",\
      "extra": "",\
      "caption": ""\
    },\
    {\
      "title": "Buddy",\
      "src": "../../imagesrc/Buddy.png",\
      "extra": "Also presidential candidate",\
      "caption": "http://52.89.123.80/buddy16/"\
    },\
    {\
      "title": "Coconut",\
      "extra": "",\
      "src": "../../imagesrc/Coco.png",\
      "caption": ""\
    },\
     {\
      "title": "Jumbo",\
      "extra": "",\
      "src": "../../imagesrc/Jumbo.png",\
      "caption": ""\
    }\
  ]\
}'

export default class About extends React.Component{
  constructor(){
    super();
    this.state = {
      elements:JSON.parse(elements)
      };
    }

  render(){
    const imageStyle = {
      width:800
    }
    const minionStyle = {
        width: 200
    };

    return(
      <div class = "row">
        <img style ={imageStyle} src="../../imagesrc/barlong.jpg" >
          <div class = "overlay-text jose">
            <h3> - Hello -</h3>
            <Roles/>
          </div>
        </img>
        <h2 class = "jose">Minions</h2>
          <Minions style = {minionStyle} elements = {this.state.elements}></Minions>
      </div>
    );
  }
}
