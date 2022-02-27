import React from 'react';
import styled from 'styled-components';
import Button from './BannerButton';

const ContactBannerStyles = styled.div`
  padding-bottom: 5rem;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Do you want to see more?</h3>
          <Button btnText="View All Projects" btnLink="/projects" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}