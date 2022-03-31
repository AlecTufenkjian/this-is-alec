import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import Footer from './components/Footer';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
    <Footer />
  </>,

  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
