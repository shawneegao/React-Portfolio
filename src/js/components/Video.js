import React from "react"
import ReactPlayer from 'react-player'
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0,
    gutter:100,

};

export default class Video extends React.Component{
  constructor(){
    super();
    this.state = {
        isOpen: false,
        currentImage:null
    };
  }

  lightbox(param){
    console.log(param);
    this.setState({currentImage:param});
    this.setState({ isOpen: true })
  }

  render(){
    console.log(this.props)
    const {
            photoIndex,
            isOpen
        } = this.state;
    var childElements = this.props.elements.imageInfo.map((element)=>{
        return (
             <div class = "video-wrapper col-lg-6 col-md-6 col-sm-12" >
               <div onClick = {()=>this.lightbox(element.src)} class= "text-wrapper">
                 <span class = "video-title fred"> {element.title} </span>
                 <p class ="jose">{element.caption}</p>
                 <p class = "jose">{element.method}</p>
               </div>
               <ReactPlayer width={'initial'} loop={true} url={element.src} playing/>
             </div>
         );
     });
     return (
       <div>
          {childElements}
          {isOpen && <Lightbox mainSrc = {this.state.currentImage} onCloseRequest={() => this.setState({ isOpen: false })}></Lightbox>}
      </div>
      );
    }
  };
