import React from "react"
var info = {
  "imageInfo": [
    {
      "title": "Solaris",
      "src": "../../imagesrc/Solaris.jpg",
      "caption": "f"
    },
    {
      "title": "Niffler Holding to Hopes and Dreams",
      "src": "../../imagesrc/Niffler.jpg",
      "caption": "f"
    },
    {
      "title": "Picking Favorites",
      "src": "../../imagesrc/Bowtruckle.jpg",
      "caption": "f"
    },
     {
      "title": "Nana",
      "src": "../../imagesrc/Nana.jpg",
      "caption": "f"
    },
    {
      "title": "Gold Fish",
      "src": "../../imagesrc/FishGlitter.jpg",
      "caption": "f"
    },
     {
      "title": "Kimchi",
      "src": "../../imagesrc/Kimchi.jpg",
      "caption": "f"
    },
    {
      "title": "My Hogwarts Letter",
      "src": "../../imagesrc/HogwartsLetter.jpg",
      "caption": "f"
    },
     {
      "title": "Cake Explorers",
      "src": "../../imagesrc/AngelFoodCake.jpg",
      "caption": "f"
    },
     {
      "title": "Pi & Joules",
      "src": "../../imagesrc/PiJoules.jpg",
      "caption": "f"
    },
     {
      "title": "For a Shoe Lover",
      "src": "../../imagesrc/Shoes.jpg",
      "caption": "f"
    },
     {
      "title": "Peppers",
      "src": "../../imagesrc/Pepper.jpg",
      "caption": "f"
    },
     {
      "title": "Dachshund",
      "src": "../../imagesrc/Dachshund.jpg",
      "caption": "f"
    },
    {
      "title": "Yuri On Ice",
      "src": "../../imagesrc/YOI.jpg",
      "caption": "f"
    },

  ]
}

export default class ImageInfo extends React.Component{
  constructor(){
    super();
    this.state = info
  }
  render(){
    return(
      <div>
        <h1>Portfolio</h1>
        <Image elements ={this.state.elements}/>
      </div>
    );
  }
}
