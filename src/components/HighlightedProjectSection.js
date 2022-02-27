import styled from 'styled-components';

const HighlightedProjectSectionStyle = styled.div`
  .container {
    width: 90%;
    margin: 0 auto;
    max-width: 1000px;
  }

  p {
    font-size: 1.6rem;
    color: var(--white);
  }
  section {
    display: flex;  
    align-items: center;
    justify-content: center;
  }

  img {
    height: 100%;
  }

  .section-heading {
    font-size: clamp(2rem, 10vw, 8rem);
    text-transform: uppercase;
    font-family: 'RobotoMono Regular';
    letter-spacing: 0.2rem;
    text-align: center;
    position: relative;
    margin-bottom: 10rem;
  } 

  .section-heading::before {
    content: attr(data-outline);
    position: absolute;
    left: 2%;
    top: -20%;
    width: 100%;

    text-align: center;
    text-transform: uppercase;
    font-family: 'RobotoMono Regular';
    letter-spacing: 0.2rem;

    color: transparent;
    /* -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.103); */
    -webkit-text-stroke: 1.5px #ffffff0d;
    z-index: -1;
  }

  .buttons {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }
  .primary-btn {
    display: inline-block;
    background-color: var(--white);
    color: var(--light-blue);
    font-size: 1.8rem;
    padding: 0.6em 1.6em;
    border-radius: 50px;
  }

  .buttons .primary-btn.outline {
    background-color: transparent;
    border: 2px solid var(--white);
    color: var(--light-blue);
  }

  .buttons svg {
    width: 50px;
    color: var(--light-blue);
  }

  #projects {
    padding: 10rem 0 0 0;
  }
  #projects .item {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 15rem;
    /* gap: 2rem; */
  }
  #projects .item:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  #projects .item .left {
    flex: 1;
  }
  #projects .item .right {
    margin-left: -150px;
    flex: 1;
    background-color: var(--gray-2);
    padding: 5rem 3rem;
    border-radius: 12px;
    z-index: 2;
  }
  #projects .item:nth-of-type(even) .right {
    margin-left: 0;
  }
  #projects .item:nth-of-type(even) .left {
    margin-left: -150px;
  }
  #projects .item .left .img {
    height: 500px;
    overflow: hidden;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 0px 20px var(--gray-2);
    position: relative;
  }

  #projects .item .left .img img {
    object-fit: cover;
    transition: 0.3s ease transform;
  }
  #projects .item:hover .left .img img {
    transform: scale(1.1);
    z-index: 1;
  }
  #projects .item .right .project-title {
    font-size: 2.5rem;
    font-family: 'RobotoMono Regular';
    margin-bottom: 1rem;
  }
  #projects .item .right .project-sub-title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    color: var(--light-blue);
  }
  #projects .item .right .project-desc {
    color: var(--secondary-gray);
    margin-bottom: 3rem;
  }
  #projects .item .right .external-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: calc(0.6em - 4px) calc(1.6em - 4px);
  }
  #projects .item .right .external-link svg {
    width: 25px;
  }

  @media only screen and (max-width: 768px) {
    #projects .item {
      flex-direction: column;
    }
    #projects .item .left {
      width: 100%;
    }
    #projects .item .right {
      margin-left: 0;
      width: 90%;
      margin-top: -150px;
    }
    #projects .item:nth-of-type(even) {
      flex-direction: column;
    }
    #projects .item:nth-of-type(even) .left {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 450px) {
    #projects .item .right .buttons {
      flex-direction: column;
    }
    #projects .item .right .buttons a {
      width: 100%;
      text-align: center;
    }
  }
`;


export default function HighlightedProjectSection() {
  // console.log(projects);
  return (
    <HighlightedProjectSectionStyle>
      <section id="projects">
        <div className="container">
          <h2 className="section-heading" data-outline="Projects">Projects</h2>
          <div className="all-items">
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={"https://picsum.photos/450/500"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">quis varius quam</h2>
                <h3 className="project-sub-title">quis varius quam</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.</p>
                <div className="buttons">
                  <a href="#" className="primary-btn outline external-link"> <span>Try it out!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                <img src={"https://picsum.photos/450/500"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">quis varius quam
                </h2>
                <h3 className="project-sub-title">quis varius quam
                </h3>
                <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.</p>
                <div className="buttons">
                  <a href="#" className="primary-btn outline external-link"> <span>Try it out!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                <img src={"https://picsum.photos/450/500"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">quis varius quam</h2>
                <h3 className="project-sub-title">quis varius quam</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.</p>
                <div className="buttons">
                  <a href="#" className="primary-btn outline external-link"> <span>Try it out!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HighlightedProjectSectionStyle>
  );
}