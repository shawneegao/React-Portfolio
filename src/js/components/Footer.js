import React from "react"
import { SocialIcon } from 'react-social-icons';
import style from './Footer.css'
export default class Footer extends React.Component{
  render(){
    return(
      <div class = {style.footerBody}>
        <SocialIcon class ={style.socialIcon} url="https://www.instagram.com/artbyshawneegao/" />
        <SocialIcon class ={style.socialIcon} url="https://www.linkedin.com/in/shawneegao?trk=hp-identity-name" />
        <SocialIcon class ={style.socialIcon} url="https://github.com/shawneegao" />
        <SocialIcon class ={style.socialIcon} url ="https://codepen.io/shawneegao" />
      </div>
    );
  }
}
