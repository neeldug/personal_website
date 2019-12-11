import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Hello from './Hello.jsx';

const App = () => (
  <div>
    <div class ="u-full-width row">
    <div class ="one-half column">
      <h1>Welcome to my website</h1>
      </div>
      <div class="one-half column">
      <nav class="u-full-width">
        <SocialIcon url="http://twitter.com/neeldugar" />
        <SocialIcon url="http://github.com/neeldug" />
      </nav>
      </div>
    </div>
    <Hello />
  </div>
);

export default App;
