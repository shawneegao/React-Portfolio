import React from "react"
import {Col} from "react-bootstrap"
import Roles from "../components/Roles"
import Minions from "../components/Minions"
import style from "./About.css"
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
    return(
      <div class = "row jose">
        <div class = "col-lg-12 col-md-12 col-sm-12">
          <img class ={ style.aboutStyle } src="../../imagesrc/barlong.jpg" >
            <div class = "overlay-text">
              <h3> - Hello -</h3>
              <Roles/>
            </div>
          </img>
          <div class = "row">
            <div class = "col-lg-12">
              <h1 class = { style.minionLabel }>Minions</h1>
              <Minions elements = {this.state.elements}></Minions>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
