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
      <nav class="u-full-width shift-right">
        <SocialIcon url="https://twitter.com/neeldugar" />
        <SocialIcon url="https://github.com/neeldug" />
        <SocialIcon url="https://www.linkedin.com/in/neel-dugar-711807196" />
      </nav>
      </div>
    </div>
    <Hello />
  </div>
);

export default App;
