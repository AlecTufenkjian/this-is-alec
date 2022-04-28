import { ProjectCard } from './ProjectCard'
import styled from 'styled-components';
import JsonProjectsData from '../assets/content/projects.json';

import img1 from "../assets/images/aroom.jpg";
import img2 from "../assets/images/maalem2.jpg";
import img3 from "../assets/images/pong.png";
import img4 from "../assets/images/painting.png";
import img5 from "../assets/images/asteroids.jpg";
import img6 from "../assets/images/monopoly.JPG";

const images = [img1, img2, img3, img4, img5, img6];

const CardStyle = styled.div`
    .card{
        position: relative;
        display: flex;
        flex-direction: column;
        background: #16171d;
        overflow: hidden;
        cursor: pointer;
        transition: all ease 200ms;
        min-width: 0;
        word-wrap: break-word;
    }

    .card:hover {
        transform: scale(1.03);
    }

    .card-title{
        font-family: 'Montserrat SemiBold';
        font-size: 2.2em;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .card-body{
        flex: 1 1 auto;
        padding: 1rem 1rem;
    }

    .card-body p{
      font-size: 1.4em;
    }

    .card-footer{
        border-top: 1px solid rgba(0,0,0,.125);
        font-size: 1.4em;
        padding: 1rem;
        color: var(--mountain-meadow);
    }

    .card-text{
        font-size: 1.4em;
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      gap: 10px; 
    }
    .tag {
      padding-right: 10px;
      padding-left: 10px;
      border-radius: 0.6em;
      background-color: var(--gunmetal);
    }


    @media screen and (max-width: 575px) {
        .card {
            flex: 0 1 100%;
        }    
    } 


    @media screen and (min-width: 576px) and (max-width:900px) {
        .card {
            flex: 0 1 45%;
            border-radius: 0.6em;
        }
    } 


    @media screen and (min-width: 901px) {
        .card {
            flex: 0 1 27%;
            border-radius: 0.6em;
        }
    }
`

const ProjectPageStyle = styled.div`
  div.cards{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 23px;
    row-gap: 23px;
    font-size: 1em;
    padding-top: 80px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;


export default function ProjectPage() {

  return (
    <ProjectPageStyle>
      <CardStyle>
        <div className='cards'>

            {JsonProjectsData.projects.map((project, idx) => (
              <ProjectCard
                key={idx} 
                title={project.title} 
                description={project.description}
                category={project.tags}
                img={images[idx]}
              />
            ))}

        </div>
      </CardStyle>
    </ProjectPageStyle>

  );
}