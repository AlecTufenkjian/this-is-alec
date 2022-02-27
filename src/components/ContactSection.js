import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import SectionTitle from './SectionTitle';

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

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec. Mus mauris vitae ultricies leo integer malesuada.

              </div>
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </>

  );
}