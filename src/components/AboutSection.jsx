import styled from 'styled-components';
import timesquare1 from '../assets/images/time-square-official.jpg';
import timesquare2 from '../assets/images/time-square-livestream.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AboutSectionStyle = styled.div`
  .about-container {
    width: 100%;
    background: var(--dark-gray);
    padding-bottom: 10rem;
    border-top: 0.3rem solid var(--gunmetal);
    display: flex;
    justify-content: center;
  }

  .contactSection__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding-top: 10rem;
    position: relative;
    max-width: 1300px;
    grow: 1;
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

  .left,
  .right {
    width: 100%;
    max-width: 600px;
  }

  .letter {
    font-size: 1.4rem;
    line-height: 1.7em;
    margin-top: 2rem;
    line-height: 165%;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .letter p {
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
    width: 100%;
  }

  .react-multi-carousel-list {
    border-radius: 20px;
  }

  @media only screen and (min-width: 1400px) {
    .contactSection__wrapper {
      flex-direction: row;
    }

    .left,
    .right {
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 700px) {
    .left{
      max-width: 85vw;
    }

    .right{
      max-width: 95vw;
    }

    .about-container {
      padding-bottom: 2rem;
    }
`;

export default function AboutSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <AboutSectionStyle>
      <div className="about-container">
        <div className="contactSection__wrapper">
          <div className="left">
            <div className="title-1"> Back-End Developer </div>
            <div className="title-2"> About Me </div> <div className="line" />
            <div className="letter">
              <p>
                Hello, and <em>thank you</em> for visiting!
              </p>
              <p>
                I&apos;m a <em>Software Engineering</em> student at{' '}
                <em>McGill University</em>, dedicated to crafting back-end
                solutions.
              </p>
              <p>
                Having been hands-on with projects involving <em>SaaS</em>,{' '}
                <em> Serverless services</em>, and <em>E-Commerce apps</em>,
                I&apos;ve developed a solid grasp of <em>Agile</em>{' '}
                methodologies.
              </p>
              <p>
                My toolkit comprises a blend of <em>Java</em>,{' '}
                <em>JavaScript</em>, <em>Python</em>, <em>Ruby</em>, and
                proficiency in leveraging cloud computing services such as{' '}
                <em>GCP</em>. Moreover, I&apos;m fluent in English, French,
                Arabic, and Armenian.
              </p>
              <p>
                Throughout my journey, I&apos;ve had the privilege of
                contributing to entreprise projects, such as Morgan
                Stanley&apos;s <em>Shareworks</em> platform within{' '}
                <em>Wealth Management</em>, an <em>equity compensation</em>{' '}
                solution utilized by many of the world&apos;s largest companies.
                I also collaborated on Garda&apos;s <em>Crisis24</em>, a leading{' '}
                <em>risk management</em> solution serving the world&apos;s most
                influential individuals.
              </p>
            </div>
          </div>
          <div className="right">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              swipeable={false}
              draggable={false}
              removeArrowOnDeviceType={['mobile']}
            >
              <div>
                <img
                  className="image"
                  src={timesquare1}
                  alt="Time Square Official"
                />
              </div>
              <div>
                <img
                  className="image"
                  src={timesquare2}
                  alt="Time Square Livestream"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
