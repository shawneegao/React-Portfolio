import React from "react"
import {Col} from "react-bootstrap"
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
    return(
      <div class = "row">
        <div class = "col-lg-12">
          <img class = "col-lg-12" src="../../imagesrc/barlong.jpg" >
            <div class = "overlay-text jose">
              <h3> - Hello -</h3>
              <Roles/>
            </div>
          </img>
          <div class = "row">
            <div class = "col-lg-12">
              <h2 class = "jose">Minions</h2>
                <Minions elements = {this.state.elements}></Minions>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
