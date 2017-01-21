import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: '0.8s',
    stagger: 30,
    gutter:40,
};


export default class Portfolio extends React.Component{
  constructor(){
    super();
    this.state = {
        isOpen: false
    };
  }
  render(){
    console.log(this.props)

    var imageWidth = this.props.style
    var isOpen = false;
    var openLightbox = function(){
      isOpen = true
      console.log(isOpen)
    }
    console.log(isOpen)
    var childElements = this.props.elements.imageInfo.map(function(element){
        return (
             <div class= "image-wrapper" >
                <div class= "text-wrapper">
                  <span class = "piece-title fred"> {element.title} </span>
                  <p class ="jose">{element.caption}</p>
                </div>
                   <img onClick= {openLightbox} className="piece" style ={imageWidth} src={element.src}/>
                   {isOpen && <div>SOMETHING IS THERE </div>}
             </div>
         );
     });
     return (
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
          >
          {childElements}
          </Masonry>
      );
  }
};
