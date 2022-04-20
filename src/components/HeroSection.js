import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
    .hero-container{
        width: 100%;
        height: 700px;
        background-color: var(--black);
    }

    .titles{
      display: flex;
      flex-flow: column;
      margin-left: 10%;
      margin-right: 10%;
      position: absolute;
      top: 50%;
      gap: 10px;
    }

    .title-1{
      font-weight: 700;
      font-size: 1.5rem;
      font-family: "Heebo",sans-serif;
      word-spacing: 10px;
    }

    .titles div::before{
      
      content: "";
      position: absolute;
      left: 225px;
      top: 7px;
      width: 15%;
      max-width: 100px;
      height: 1px;
      background: #fff;
      transition: all .3s;
      color: white;
    }

    .title-2{
      font-weight: 700;
      font-size: 4rem;
      font-family: "Oswald",sans-serif;
    }

    @media only screen and (max-width: 400px) {
      .titles div::before{
        left: 180px;
      }
      .title-1{
        font-size: 1.125rem;
      }
      .title-2{
        font-size: 3rem;
      }
    }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className='hero-container'>
        <div className='titles'>
          <div className='title-1'>I AM ALEC TUFENKJIAN</div>
          <div className='title-2'>SOFTWARE ENGINEERING STUDENT</div>
        </div>
      </div>
    </HeroStyle>
  );
}