import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

var Roles = React.createClass({
   componentDidUpdate: function() {
     this.rotate();
   },
    render:function(){
      console.log(this.props)
      var style = {
          listStyle: "none"
      };
       return (
         <div class="wrapper">
          <div class = "reenie final">It&#39;s nice to meet you</div>
           <div class="roles">
         <div>
             I am a developer.
         </div>
         <div>
             I am a guilt-induced health enthusiast.
         </div>
         <div>
             I am a wannabe artist.
         </div>
         <div>
             I am an aspiring individual.
         </div>

         </div>
         </div>
        );
    },
    rotate:function(){
      /*not super pround that this is here but one day i will understand react-motion*/
          var current = 1; //keeps track of the current div
          var height = $('.roles').height(); //the height of the roles div
          var numberDivs = $('.roles').children().length; //the number of children of the roles div
          var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
          setInterval(function() {
             $('.final').css('opacity', 0);
             $('.roles').css('visibility','visible');
              var number = current * -height;
              first.css('margin-top', number + 'px');
              if (current === numberDivs) {

                 $('.final').css('opacity', 1);
                  current = 0;
              } else current++;
          }, 2000);
    }

});

module.exports = Roles;
