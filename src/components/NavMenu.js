import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { ReactComponent as MarkGitHub} from '../assets/logos/mark-github.svg';
import { ReactComponent as MarkLinkedIn} from '../assets/logos/mark-linkedin.svg';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-gray);

  ul {
    li {
      margin-right: 1rem;
      margin-left: 1rem;
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--gunmetal);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--white);
      outline: none;
    }
    .active {
      color: var(--white);
    }

  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }

  @media only screen and (min-width: 769px) {

    ul{
      display: flex;
      justify-content: center;
    }

    .links{
      position: absolute;
      top: 7px;
      right: 0;
    }

    .link{ 
      padding: 0px;
      margin-top: 12px;
      margin-bottom: 10px;
      margin-right: 10px;
      margin-left: 10px;
      height: 30px;
      width: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - 1rem));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      display: block;
      transition: 0.3s ease transform;
      background-color: var(--gunmetal);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: 1 rem;
      text-align: center;
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }

    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>

        <li className='links'>
          <div>
            <a href="https://www.linkedin.com/in/alec-tufenkjian/" className='link' target="_blank" rel="noreferrer noopener">
              <MarkLinkedIn height={25} width={25}/>
            </a>  

            <a href="https://github.com/AlecTufenkjian/This-is-ALEC" className='link' target="_blank" rel="noreferrer noopener">
              <MarkGitHub height={25} width={25}/>
            </a>  

          </div>

        </li>
      </ul>
    </NavStyles>
  );
}