import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  .copyright {
    font-size: 1.5rem;
    border-top: 0.3rem solid var(--gunmetal);
    background-color: var(--dark-gray);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <div className="container">
            © 2022 - Developed by Alec Tufenkjian
        </div>
      </div>
    </FooterStyle>
  );
}