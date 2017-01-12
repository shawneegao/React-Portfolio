import React from "react"
import Image from "../components/Image"
const rootImageFolder = "../../imagesrc/"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "Solaris",\
      "src": "../../imagesrc/Solaris-min.jpg",\
      "caption": "A friend\'s original character"\
    },\
    {\
      "title": "Niffler",\
      "src": "../../imagesrc/Niffler-min.jpg",\
      "caption": "...holding onto his hopes and dreams"\
    },\
    {\
      "title": "Picking Favorites",\
      "src": "../../imagesrc/Bowtruckle-min.jpg",\
      "caption": "Best relationship in the movie"\
    },\
     {\
      "title": "Nana",\
      "src": "../../imagesrc/Nana.jpg",\
      "caption": "My first try painting darker skin"\
    },\
    {\
      "title": "Gold Fish",\
      "src": "../../imagesrc/FishGlitter.jpg",\
      "caption": "Playing with some glitter"\
    },\
     {\
      "title": "Kimchi",\
      "src": "../../imagesrc/Kimchi-min.jpg",\
      "caption": "Season 8 Rupaul\'s Drag Race. Watch it"\
    },\
    {\
      "title": "My Hogwarts Letter",\
      "src": "../../imagesrc/HogwartsLetter-min.jpg",\
      "caption": "I waited by my fire place after this"\
    },\
     {\
      "title": "Cake Explorers",\
      "src": "../../imagesrc/AngelFoodCake-min.jpg",\
      "caption": "Was feeling hungry and adventurous"\
    },\
     {\
      "title": "Pi & Joules",\
      "src": "../../imagesrc/PiJoules-min.jpg",\
      "caption": "I like my co-worker\'s dogs"\
    },\
     {\
      "title": "For a Shoe Lover",\
      "src": "../../imagesrc/Shoes-min.jpg",\
      "caption": "Creating some stationary designs"\
    },\
     {\
      "title": "Peppers",\
      "src": "../../imagesrc/Peppers-min.jpg",\
      "caption": "Would you call this interpretated realism?"\
    },\
     {\
      "title": "Dachshund",\
      "src": "../../imagesrc/Dachshund.jpg",\
      "caption": "Controlling watercolor within a silhouette"\
    },\
    {\
      "title": "Yuri On Ice",\
      "src": "../../imagesrc/YOI-min.jpg",\
      "caption": "I am anime trash"\
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
    var imageStyle = {
        width: 300
    };
    return(
      <div>
        <Image style = {imageStyle} elements ={this.state.elements}/>
      </div>
    );
  }
}
