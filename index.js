import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App';
import { AppContainer } from 'react-hot-loader';

ReactDom.render(<AppContainer>
  <App />
</AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextApp = require('./src/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  })
}


