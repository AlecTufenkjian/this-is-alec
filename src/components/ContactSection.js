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

  .letter {
    font-size: 1.8rem;
  }

  .letter-highlight {
    color: var(--light-blue);
  }

  em{
    font-style: normal; 
    font-weight: 500;
    color: var(--light-blue);
  }
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
      padding: 4rem 2rem 2rem 2rem;
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
      <ContactSectionStyle>
        <div className="container">
          <SectionTitle heading="contact" subheading="get in touch" />
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactForm />
            </div>          
            <div className="right">
              <div className='letter'>
                Hello stranger!<br/><br/>

                If you liked my website, have a comment or want to meet me, please <em>reach out!</em>
                <br/><br/>
                
                Anything you <em>send</em> via this form will immediately notify me on <em>discord</em>.
                <br/><br/>

                It's totally fine if you do not want to share your name or your <em>contact info</em>.
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
function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}