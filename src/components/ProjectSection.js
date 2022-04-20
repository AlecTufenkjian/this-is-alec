import React from 'react';
import styled from 'styled-components';
import Button from './BannerButton';
import JsonProjectsData from '../assets/content/projects.json';
import { SmallProjectCard } from './SmallProjectCard'

import img1 from "../assets/images/aroom.jpg";
import img2 from "../assets/images/maalem2.jpg";
import img3 from "../assets/images/pong.png";
import img4 from "../assets/images/painting.png";
import img5 from "../assets/images/asteroids.jpg";
import img6 from "../assets/images/monopoly.JPG";

const images = [img1, img2, img3, img4, img5, img6];

const ProjectSectionStyle = styled.div`
    .section-container{
        width: 100%;
        height: 100%;
        background: var(--steel-teal);
    }

    .title{
      padding-top: 5rem;
      margin: auto;
      width: fit-content; 
      font-size: 3.6rem;
      font-weight: 700;
      padding-bottom: 5rem;
    }

    .projects-container{
      display: flex;
      flex-flow: row wrap;      
      justify-content: center;
      margin: auto;
      gap: 30px;
      max-width: 1200px;
      padding-bottom: 3rem;
    }

    .project{
      position: relative;
      flex-basis: 30%;
      height: 400px; 

      

      background-color: black;
      background-size: cover;
      cursor: pointer;
      
      -webkit-box-shadow: 0 0 5px #000;
            box-shadow: 0 0 5px #000;
    }

    .overlay{
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 2fr 1fr;
      opacity: 0;
      transition: all 0.5s;

      background: rgba(77, 77, 77, .9);
      color: #FEF5DF;
    }

    .project-item {
      padding-left: 20px;
      letter-spacing: 3px;
    }

    .head{
      position: absolute;
      top:0; right: 0; left: 0; bottom: 0;

      font-size: 30px;
      line-height: 40px;
      
      transform: translateY(40px);
      transition: all 0.7s;

      display: none;

      height: fit-content;
    }

    .hr{
      width: 75px;

      border: none;
      border-bottom: solid 2px #FEF5DF;
    }

    .short-description{
      position: absolute;
      top:0; right: 0; left: 0; bottom: 0;

      font-size: 15px;
      line-height: 20px;
      letter-spacing: 1px;
      
      transform: translateY(120px);
      transition: all 0.7s;

      display: none;    
      height: fit-content;
    
    }

    .project:hover .head{
      display: block;
    }

    .project:hover .short-description{
      display: block;
    }

    .project:hover .overlay{
      opacity: 1;
    }


    @media only screen and (max-width: 1200px) {
      .project {
        flex-basis: 30%;
        height: 300px; 
      }

      .projects-container{
        max-width: 900px;
      }
    }

    @media only screen and (max-width: 930px) {
      .project {
        flex-basis: 40%;
        height: 400px; 
      }

      .projects-container{
        max-width: 800px;
      }

      .head, .short-description{
        display: block;
      }

      .overlay{
        opacity: 1;
      }
    }

    @media only screen and (max-width: 600px) {
      .project {
        flex-basis: 80%;
        height: 400px; 
      }

      .projects-container{
        max-width: 400px;
      }
    }

    @media only screen and (max-width: 400px) {
      .project {
        flex-basis: 100%;
        height: 400px; 
      }

      .projects-container{
        max-width: 100%;
      }

      .title{
        font-size: 2.5rem;
      }    

    }

    .projectsBanner__wrapper {
      border-radius: 12px;
      text-align: center;
      padding-bottom: 5rem;
    }


`;

export default function ProjectSection() {

  return (
    <ProjectSectionStyle>
      <div className='section-container'>
        <div className='title'>My Projects</div>
        <div className='projects-container'>         
            {
              JsonProjectsData.projects.map((project, idx) => (
                <SmallProjectCard 
                  key = {idx}
                  title = {project.title}
                  img = {images[idx]}
                />
              ))
            }            
        </div>
        <div className="projectsBanner__wrapper">
          <Button btnText="View All Projects" btnLink="/projects" />
        </div>
      </div>
    </ProjectSectionStyle>
  );
}