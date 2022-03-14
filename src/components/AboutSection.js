import React from 'react';
import styled from 'styled-components';

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
    font-weight: 500;
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

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'RobotoMono Regular';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
      <AboutMeSectionStyle>
        <div className="container">
          <SectionTitle heading="about me" />
          <div className="contactSection__wrapper">
            <div className="left">
                <div className='letter-header'><em>Hi, I’m Alec Tufenkjian</em></div>
                <div className='letter'>
                  I am a Software Engineering Co-op student at McGill University who is very passionate about <em>full-stack web development.</em>
                  <br /><br />
                  I have developed this website to demonstrate my skills and show the various projects I have worked on using <em>React.js, Node.js, Express.js, Java, Zoho deluge</em> as well as many other technologies.
                  <br /><br />
                  Outside school, I do a lot of freelancing as a <em>Shopify developer and a Zoho developer</em>. I write programs in node.js to solve various problems.
                  <br /><br />
                  If you found anything about me interesting, please reach out to me at <em>alectufenkjian@gmail.com</em> or leave me a short message by filling out the contact form.
                </div>    
            </div>          
            <div className="right">
                <div className="img">
                  <img src={"https://picsum.photos/id/893/450/500"} alt="" />
                </div>
            </div>
          </div>
        </div>
      </AboutMeSectionStyle>
    </>

  );
}

function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}