import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from '../components/Link'
import DATA from '../assets/content/links.json';

import {
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGithub,
	faLinkedin
)

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

  .links{
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    right: 0;
  }

  .fa-2x {
    font-size: 1.5em;
  }

  .link-sub{
    display: none;
  }

  ul{
    display: flex;
    justify-content: center;
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
      top: 1rem;
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

      .links{
        position: initial;
      }

    }
  }
`;

const links = [
  {
      key: 1,
      name: "LinkedIn",
      link: DATA.LINK_LINKEDIN,
      icon: ['fab', 'linkedin'],
  },
  {
      key: 2,
      name: "GitHub",
      link: DATA.LINK_GITHUB,
      icon: ['fab', 'github'],
  }
]

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
            {
              links.map( (link) => 
                <Link key={link.key} name={link.name} link={link.link} icon={link.icon} copy={link.copy} size="2x"/>
              )
            }
        </li>
      </ul>
    </NavStyles>
  );
}