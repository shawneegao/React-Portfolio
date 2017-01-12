import React from "react"
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: '0.8s',
    stagger: 30,
    gutter:40,
};


var Image = React.createClass({

    render:function(){
      console.log(this.props)

      var imageWidth = this.props.style
      var childElements = this.props.elements.imageInfo.map(function(element){
          return (
               <div class= "image-wrapper" >
                <div class= "text-wrapper">
                  <span class = "piece-title fred"> {element.title} </span>
                  <p class ="jose">{element.caption}</p>
                </div>
                   <img className="piece" style ={imageWidth} src={element.src}/>
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
});

module.exports = Image;
