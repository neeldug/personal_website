import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Hello from './Hello.jsx';

const App = () => (
  <div>
    <div class ="u-full-width row">
      <div class ="two-thirds column">
        <h1>Welcome to my website</h1>
      </div>
      <div class="one-third column">
        <nav class="u-full-width shift-right">
          <SocialIcon url="https://twitter.com/neeldugar" />
          <SocialIcon url="https://github.com/neeldug" />
          <SocialIcon url="https://www.linkedin.com/in/neel-dugar-711807196" />
          <SocialIcon url="https://open.spotify.com/user/o3u0vaf3h4e3zgtccse96pevg?si=PawGP8oCRce0dIq9BP6AWg" />
        </nav>
      </div>
    </div>
    <Hello />
  </div>
);

export default App;
