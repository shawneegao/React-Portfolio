import React from "react"
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0,
    gutter:0,

};

var Image = React.createClass({

    render:function(){
      console.log(this.props)
      var style = {
          listStyle: "none"

      };
      var imageStyle = this.props.style
      var childElements = this.props.elements.imageInfo.map(function(element){
          return (
            <div>
               <ul style ={imageStyle} className="image-element-class">
                   <img style ={imageStyle} src={element.src} />
               </ul>
               <p class = "pet-name">{element.title}</p>
               <a href={element.caption}>{element.extra}</a>
               </div>
           );
       });
       return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
            {childElements}
            </Masonry>
        );
    }
});

module.exports = Image;
