import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono Regular';
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--white);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--white);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'RobotoMono Regular';
  }
`;

export default Typography;