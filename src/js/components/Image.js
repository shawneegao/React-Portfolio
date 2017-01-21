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


    var childElements = this.props.elements.imageInfo.map((element) => {
        return (
             <div class= "image-wrapper" >
                <div class= "text-wrapper">
                  <span class = "piece-title fred"> {element.title} </span>
                  <p class ="jose">{element.caption}</p>
                </div>
                   <img onClick = {()=>this.lightbox(element.src)} className="piece" style ={this.props.style} src={element.src}/>
             </div>
         );
     });
     return (
       <div>
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
          >
          {childElements}
          {isOpen && <Lightbox mainSrc = {this.state.currentImage} onCloseRequest={() => this.setState({ isOpen: false })}></Lightbox>}
          </Masonry>

        </div>
      );
  }
};
