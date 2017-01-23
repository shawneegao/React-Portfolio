import React from "react"
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component{
  render(){
    const footerStyle = {
      padding:20
    };
    const socialIcon = {
      margin:10
    };
    return(
      <div class = "row " style ={footerStyle}>
        <SocialIcon style ={socialIcon} url="https://www.instagram.com/artbyshawneegao/" />
        <SocialIcon style ={socialIcon} url="https://www.linkedin.com/in/shawneegao?trk=hp-identity-name" />
        <SocialIcon style ={socialIcon} url="https://github.com/shawneegao" />
        <SocialIcon style ={socialIcon} url ="https://codepen.io/shawneegao" />
      </div>
    );
  }
}
