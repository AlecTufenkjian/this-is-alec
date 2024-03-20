import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from './Link';
import DATA from '../assets/content/links.json';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faEnvelope, faFileAlt);

const HeroStyle = styled.div`
  .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-color: var(--black);
    border-top: 0.4rem solid var(--gunmetal);
  }

  .titles {
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 40px;
    gap: 10px;
  }

  .titles div::before {
    content: '';
    width: 15%;
    max-width: 100px;
    height: 1px;
    background: #fff;
    transition: all 0.3s;
    color: white;
  }

  .title-1 {
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Heebo', sans-serif;
    word-spacing: 10px;
    margin-left: 1%;
  }

  .title-2 {
    background-image: linear-gradient(
      to right,
      #06556a, 
      #7ed8ed,
      #00796B,
      var(--steel-teal)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 300%;
    animation: animatedText 2s infinite alternate-reverse;

    font-weight: 700;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
  }

  @keyframes animatedText {
    from {
      background-position: 0%;
    }

    to {
      background-position: 100%;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 150px;
    margin-top: 40px;

    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100px;

      .fa {
        margin-left: 12px;
        margin-right: 12px;
      }

      p {
        visibility: hidden;
        margin: 0;
        font-size: 14px;
        text-align: center;
        opacity: 0;
        transition:
          visibility 0s,
          opacity 0.2s,
          margin 0.2s ease-in-out;
      }

      &:hover {
        p {
          margin-top: 15px;
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .titles div::before {
      left: 180px;
    }
    .title-1 {
      font-size: 1.125rem;
    }
    .title-2 {
      font-size: 3rem;
    }
    .links {
      justify-content: center;
    }
  }
`;

const links = [
  {
    key: 1,
    name: 'Resume',
    link: DATA.LINK_RESUME,
    icon: ['fas', 'file-alt'],
  },
  {
    key: 2,
    name: 'LinkedIn',
    link: DATA.LINK_LINKEDIN,
    icon: ['fab', 'linkedin'],
  },
  {
    key: 3,
    name: 'GitHub',
    link: DATA.LINK_GITHUB,
    icon: ['fab', 'github'],
  },
  {
    key: 4,
    name: 'Email',
    link: null,
    copy: DATA.EMAIL,
    icon: ['fas', 'envelope'],
  },
];

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero-container">
        <div className="titles">
          <div className="title-1">I AM ALEC TUFENKJIAN</div>
          <div className="title-2">SOFTWARE ENGINEERING STUDENT</div>
        </div>
        <div className="links">
          {links.map((link) => (
            <Link
              key={link.key}
              name={link.name}
              link={link.link}
              icon={link.icon}
              copy={link.copy}
              size="4x"
            />
          ))}
        </div>
      </div>
    </HeroStyle>
  );
}
