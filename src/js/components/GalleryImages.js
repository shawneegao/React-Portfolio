import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: '0.8s',
    stagger: 30,
    gutter:40,
};

export default class GalleryImages extends React.Component{

  render(){
    const imageWidth =this.props.imageWidth;
    
    const child = this.props.elements.imageInfo.map(function(element){
      return(
         <div class= "image-wrapper" >
            <div class= "text-wrapper">
              <span class = "piece-title fred"> {element.title} </span>
              <p class ="jose">{element.caption}</p>
            </div>
               <img onClick = {() => that.openLightbox(element.src)} className="piece" style ={imageWidth} src={element.src}/>
         </div>)
       }
       )

    console.log(this.props);
      return(<div>
        {child}
      </div>)
   }
};
