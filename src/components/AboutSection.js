import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/hero.jpeg';

const AboutSectionStyle = styled.div`
    .about-container{
        width: 100%;
        background: var(--dark-gray);
        padding-bottom: 10rem;
    }
    .contactSection__wrapper {
      display: flex;
      gap: 10rem;
      padding-top: 10rem;
      justify-content: center;
      position: relative;
    }

  .title-1{
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 5rem;
  }

  .title-2{
    font-size: 3.6rem;
    font-weight: 700;   
    margin-top: 1.5rem;
    padding-bottom: 2rem;
  }

  .line{
    width: 8rem;
    height: 0.3rem;
    background-color: var(--steel-teal);

  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }  
  
  .letter {
    font-size: 1.4rem;
    line-height: 1.7em;
    margin-top: 2rem;
    line-height: 165%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .letter-header {
    font-size: 3rem;
  }

  .letter-highlight {
    color: var(--steel-teal);
  }

  em{
    font-style: normal; 
    color: var(--steel-teal);
    font-weight: 500;
  }

  .image{
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid var(--steel-teal);
    padding: 15px;
  }
  
  @media only screen and (min-width: 700px) and (max-width: 1150px) {
    .contactSection__wrapper {
      margin-left: 15rem;
      margin-right: 15rem;
    }
    


    .left,
    .right {
      max-width: 100%;
    }
    .right {
      display: none;
    }    
  }

  @media only screen and (max-width: 700px) {
    .contactSection__wrapper {
      flex-direction: column-reverse;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .left{
      max-width: none;
      order: 1;
    }
    .right {
      display: contents;
    }

    .image{
      border: none;
      padding: 0px;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className='about-container'>
        <div className="contactSection__wrapper">
          <div className="left">
              <div className='title-1'>Full-Stack Web Developer</div>
              <div className='title-2'>About Me</div>
              <div className='line' />
              <div className='letter'>
                I am a Software Engineering Co-op student at McGill University who is very passionate about <em>full-stack web development.</em>
                <br /><br />
                I have developed this website to demonstrate my skills and show the various projects I have worked on using <em>React.js, Node.js, Express.js, Java, Zoho deluge</em> as well as many other technologies.
                Outside school, I do a lot of freelancing as a <em>Shopify developer</em> and a <em>Zoho developer</em>. I write programs in node.js to solve various problems.
                <br /><br />
                If you found anything about me interesting, please reach out to me at <em>alectufenkjian@gmail.com</em> or leave me a short message by filling out the contact form.
              </div> 
          </div>          
          <div className="right">
              <img className = "image" src={logo} alt="Alec"/>
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}