import React from 'react';
import styled from 'styled-components';
import { Links } from './Links'


import {library} from "@fortawesome/fontawesome-svg-core";


// Icons

import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
	faEnvelope,
	faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
	faLinkedin,
  faEnvelope,
	faFileAlt,
)


const HeroStyle = styled.div`
    .hero-container{
        width: 100%;
        height: 700px;
        background-color: var(--black);
    }

    .titles{
      display: flex;
      flex-flow: column;
      margin-left: 10%;
      margin-right: 10%;
      position: absolute;
      top: 50%;
      gap: 10px;

    }

    .title-2{

      background-image: linear-gradient(to right, #2193b0 , #6dd5ed, var(--steel-teal));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; 

      background-size: 300%;    

      animation: animatedText 3s infinite alternate-reverse;
    }

    @keyframes animatedText{
      from{
        background-position: 0%;
      }

      to{
        background-position: 100%;
      }
    }

    .title-1{
      font-weight: 700;
      font-size: 1.5rem;
      font-family: "Heebo",sans-serif;
      word-spacing: 10px;
    }

    .titles div::before{
      
      content: "";
      position: absolute;
      left: 225px;
      top: 7px;
      width: 15%;
      max-width: 100px;
      height: 1px;
      background: #fff;
      transition: all .3s;
      color: white;
    }

    .title-2{
      font-weight: 700;
      font-size: 4rem;
      font-family: "Oswald",sans-serif;
    }



    .links {

      height: 80px;
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      align-items: center;
      position: absolute;
      top: 70%;
      margin-left: 10%;
      margin-right: 10%;

    .link {

      display: flex;
      flex-direction: column;
      justify-content: center;
      

      .fa {
        margin-left: 12px;
        margin-right: 12px;
      }

      p {
        visibility: hidden;
        margin: 0;
        font-size: 14px;
        text-align: center;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s, margin 0.2s ease-in-out;
      }

      &:hover {

        p {
          margin-top: 15px;
          visibility: visible;
          opacity: 1;
        }

      }

    }

    }    
    
    @media only screen and (max-width: 400px) {
      .titles div::before{
        left: 180px;
      }
      .title-1{
        font-size: 1.125rem;
      }
      .title-2{
        font-size: 3rem;
      }

      .links{
        margin-left: 5%;
        margin-right: 0;
        justify-content: center;
      }


    }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className='hero-container'>
        <div className='titles'>
          <div className='title-1'>I AM ALEC TUFENKJIAN</div>
          <div className='title-2'>SOFTWARE ENGINEERING STUDENT</div>
        </div>
        <Links />
      </div>
    </HeroStyle>
  );
}