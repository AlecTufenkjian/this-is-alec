import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContactMeStyle = styled.div`
  .contact-me-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 200px;
  }

  .contact-me-link {
    background-color: var(--white);
    padding: 20px 80px 20px 80px;
    color: var(--black);
    border-radius: 10px;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default function ContactMe() {
  return (
    <ContactMeStyle>
      <div className="contact-me-container">
        <NavLink to="/contact" role="button">
          <div className="contact-me-link">
            Contact Me
          </div>
        </NavLink>
      </div>
    </ContactMeStyle>
  );
}
