import styled from 'styled-components';
import logo from '../assets/images/hero.jpeg';

const AboutSectionStyle = styled.div`
  .about-container {
    width: 100%;
    background: var(--dark-gray);
    padding-bottom: 10rem;
    border-top: 0.3rem solid var(--gunmetal);
  }
  .contactSection__wrapper {
    display: flex;
    gap: 10rem;
    padding-top: 10rem;
    justify-content: center;
    position: relative;
  }

  .title-1 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 5rem;
  }

  .title-2 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-top: 1.5rem;
    padding-bottom: 2rem;
  }

  .line {
    width: 8rem;
    height: 0.3rem;
    background-color: var(--steel-teal);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }

  .letter {
    font-size: 1.4rem;
    line-height: 1.7em;
    margin-top: 2rem;
    line-height: 165%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .letter-header {
    font-size: 3rem;
  }

  .letter-highlight {
    color: var(--steel-teal);
  }

  em {
    font-style: normal;
    color: var(--steel-teal);
    font-weight: 500;
  }

  .image {
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid var(--gunmetal);
    padding: 15px;
  }

  @media only screen and (min-width: 700px) and (max-width: 1150px) {
    .contactSection__wrapper {
      margin-left: 15rem;
      margin-right: 15rem;
    }

    .left,
    .right {
      max-width: 100%;
    }
    .right {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .contactSection__wrapper {
      flex-direction: column-reverse;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .left {
      max-width: none;
      order: 1;
    }
    .right {
      display: contents;
    }

    .image {
      border: none;
      padding: 0px;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="about-container">
        <div className="contactSection__wrapper">
          <div className="left">
            <div className="title-1">Back-End Developer</div>
            <div className="title-2">About Me</div>
            <div className="line" />
            <div className="letter">
              Hello, and thanks for stopping by!
              <br /> <br />
              I`&apos;`m an enthusiastic Software Engineering student at{' '}
              <em>McGill University</em>, with a knack for building robust{' '}
              <em>back-end solutions</em>.
              <br /> <br />
              Having been hands-on with projects involving <em>SaaS</em>,{' '}
              <em>Serverless services</em>, <em>E-Commerce apps</em>, and{' '}
              <em>CRM solutions</em>, I`&apos;`ve developed a solid grasp of{' '}
              <em>Agile</em> methodologies & Scrum practices.
              <br /> <br />
              My toolbox includes a mix of <em>Java</em>, <em>JavaScript</em>,{' '}
              <em>Python</em>, <em>Ruby</em>, and cloud computing services like{' '}
              <em>AWS</em> and <em>GCP</em>.
              <br /> <br />
              I`&apos;`m also fluent in <em>English</em>, <em>French</em>,{' '}
              <em>Arabic</em>, and native in <em>Armenian</em>.
            </div>
          </div>
          <div className="right">
            <img className="image" src={logo} alt="Alec" />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
