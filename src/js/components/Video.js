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
               <div class = "video-wrapper col-lg-6 col-md-6 col-sm-12">
                 <div class= "text-wrapper col-lg-6 col-md-6 col-sm-12">
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
        </div>
        );
    }
});

module.exports = Video;
