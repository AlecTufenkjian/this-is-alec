import React from 'react';

import styled from 'styled-components';
import SectionTitle from './SectionTitle';


const AboutMeSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */


  }  
  
  .letter {
    font-size: 1.8rem;
    margin-top: 2rem;
    line-height: 165%;
  }

  .letter-header {
    font-size: 3rem;
  }

  .letter-highlight {
    color: var(--light-blue);
  }

  em{
    font-style: normal; 
    color: var(--light-blue);
    font-weight: bold;
  }

  .img{
    border: 3px solid var(--light-blue);
  }
  
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column-reverse;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      display: none;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
      <AboutMeSectionStyle>
        <div className="container">
          <SectionTitle heading="about me" subheading="" />
          <div className="contactSection__wrapper">
            <div className="left">
                <div className='letter-header'><em>Hi, I’m Alec Tufenkjian</em></div>
                <div className='letter'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                </div>          
            <div className="right">
                <div className="img">
                  <img src={"https://picsum.photos/450/500"} alt="" />
                </div>
            </div>
          </div>
        </div>
      </AboutMeSectionStyle>
    </>

  );
}