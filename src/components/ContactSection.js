import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
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
    background-color: var(--steel-teal);
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

  .letter {
    font-size: 1.8rem;
  }

  em{
    font-style: normal; 
    font-weight: 500;
    color: var(--steel-teal);
  }
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column-reverse;
      margin-top: 5rem;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
      padding: 0rem 2rem 0rem 2rem;
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
      <ContactSectionStyle>
        <div className="container">   
          <SectionTitleStyle className="section-title">
            <p>get in touch</p>
            <h2>contact</h2>
          </SectionTitleStyle>
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactForm />
            </div>          
            <div className="right">
              <div className='letter'>
                Hello there!<br/><br/>

                If you enjoyed browsing my website or have any <em>feedback</em>, I'd love to <em>hear</em> from <em>you</em>!
                <br/><br/>
                
                Feel free to drop me a message using this <em>form</em>, and it will instantly ping me on <em>Discord</em>.
                <br/><br/>

                You're welcome to share your thoughts <em>anonymously</em> if you prefer.
                <br/><br/>

                Thanks!

              </div>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </>

  );
}


