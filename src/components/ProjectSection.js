import { ProjectCard } from './ProjectCard'
import styled from 'styled-components';

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
        padding: 0.5rem 1rem;
        color: var(--light-blue);
    }

    .card-text{
        font-size: 1.4em;
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

const HighlightedProjectSectionStyle = styled.div`
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


export default function ProjectSection() {

  return (
    <HighlightedProjectSectionStyle>
      <CardStyle>
        <div className='cards'>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
          <ProjectCard title='purus sit amet' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' category='purus' img='https://picsum.photos/400/200'/>
        </div>
      </CardStyle>
    </HighlightedProjectSectionStyle>

  );
}