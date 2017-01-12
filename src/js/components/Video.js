import React from "react"
import ReactPlayer from 'react-player'
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0,
    gutter:100,

};

var Video = React.createClass({

    render:function(){
      console.log(this.props)
      var style = {
          listStyle: "none"
      };
      var imageStyle = this.props.style
      var childElements = this.props.elements.imageInfo.map(function(element){
          return (
               <div class = "video-wrapper">
               <div class= "text-wrapper">
                 <span class = "video-title fred"> {element.title} </span>
                 <p class ="jose">{element.caption}</p>
                 <p class = "jose">{element.method}</p>
               </div>
                 <ReactPlayer width={400} loop={true} url={element.src} playing/>
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

module.exports = Video;
