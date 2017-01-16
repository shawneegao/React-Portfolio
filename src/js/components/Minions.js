import React from "react"
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0,
    gutter:0,
};

var Image = React.createClass({

    render:function(){
      console.log(this.props)
      var imageStyle = {
          listStyle: "none",
          width:"200px"
      };
      var childElements = this.props.elements.imageInfo.map(function(element){
          return (
            <div class = "col-lg-3">
                   <img style ={imageStyle} src={element.src} />
               <p class = "pet-name">{element.title}</p>
               <a href={element.caption}>{element.extra}</a>
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

module.exports = Image;
