import React from "react"
import Image from "../components/Image"
const rootImageFolder = "../../imagesrc/"
import style from "./Portfolio.css"

var elements = '{\
  "imageInfo": [\
    {\
      "title": "Solaris",\
      "src": "../../imagesrc/Solaris.jpg",\
      "caption": "A friend\'s original character"\
    },\
    {\
     "title": "Nana",\
     "src": "../../imagesrc/Nana.jpg",\
     "caption": "Practice painting darker skin"\
   },\
    {\
      "title": "Picking Favorites",\
      "src": "../../imagesrc/Bowtruckle.jpg",\
      "caption": "Best relationship in the movie"\
    },\
    {\
      "title": "Circus",\
      "src": "../../imagesrc/Circus.jpg",\
      "caption": "Alternative career goals"\
    },\
    {\
      "title": "Niffler",\
      "src": "../../imagesrc/Niffler.jpg",\
      "caption": "...holding onto his hopes and dreams"\
    },\
    {\
      "title": "Close up - Niffler",\
      "src": "../../imagesrc/NifflerCloseup.jpg",\
      "caption": "...holding onto his hopes and dreams"\
    },\
    {\
      "title": "Gold Fish",\
      "src": "../../imagesrc/FishGlitter.jpg",\
      "caption": "Playing with some glitter"\
    },\
     {\
      "title": "Kimchi",\
      "src": "../../imagesrc/Kimchi.jpg",\
      "caption": "Season 8 Rupaul\'s Drag Race. Watch it"\
    },\
    {\
      "title": "My Hogwarts Letter",\
      "src": "../../imagesrc/HogwartsLetter.jpg",\
      "caption": "I waited by my fire place after this"\
    },\
     {\
      "title": "Cake Explorers",\
      "src": "../../imagesrc/AngelFoodCake.jpg",\
      "caption": "Was feeling hungry and adventurous"\
    },\
     {\
      "title": "Pi & Joules",\
      "src": "../../imagesrc/PiJoules.jpg",\
      "caption": "I like my co-worker\'s dogs"\
    },\
    {\
     "title": "If You Give a Mouse a Cookie",\
     "src": "../../imagesrc/mouse.jpg",\
     "caption": "An ode to a favorite children\'s book"\
   },\
   {\
    "title": "Soldier in Apocalypse",\
    "src": "../../imagesrc/Tokyo.jpg",\
    "caption": "Inspired by Tsuabasa by CLAMP"\
  },\
  {\
   "title": "Close Up - Soldier in Apocalypse",\
   "src": "../../imagesrc/TokyoCloseup.jpg",\
   "caption": "Inspired by Tsuabasa by CLAMP"\
 },\
     {\
      "title": "For a Shoe Lover",\
      "src": "../../imagesrc/Shoes.jpg",\
      "caption": "Creating some stationary designs"\
    },\
     {\
      "title": "Peppers",\
      "src": "../../imagesrc/Peppers.jpg",\
      "caption": "Some kitchen decor"\
    },\
     {\
      "title": "Dachshund",\
      "src": "../../imagesrc/Dachshund.jpg",\
      "caption": "Controlling watercolor within a silhouette"\
    },\
    {\
      "title": "Yuri On Ice",\
      "src": "../../imagesrc/YOI.jpg",\
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
    return(
      <div class = "col-lg-12">
        <Image style = {style.imageStyle} elements ={this.state.elements}/>
      </div>
    );
  }
}
