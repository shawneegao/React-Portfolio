import React from "react"
var Masonry = require('react-masonry-component');
import style from "./Minions.css"

var masonryOptions = {
    transitionDuration: 0,
    gutter:0,
};

var Image = React.createClass({
  render:function(){
      var childElements = this.props.elements.imageInfo.map(function(element){
          return (
            <div class = "col-lg-3 col-md-6 col-sm-6">
              <img class = {style.minionStyle} src={element.src} />
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
