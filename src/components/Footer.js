import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  .container {
    font-size: 1.5rem;
  }
  
  .copyright {
    border-top: 0.3rem solid var(--deep-dark);
    background-color: var(--dark-bg);
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
            © 2022 - Alec Tufenkjian | Designed By Me
        </div>
      </div>
    </FooterStyle>
  );
}