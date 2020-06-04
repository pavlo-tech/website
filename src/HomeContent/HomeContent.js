import React from 'react';
import './HomeContent.css';

const HomeContent = (props) =>
{
  return (
    <div className="HomeContent">
      <h1>
        <em>Welcome</em> to the Personal Website of Pavlo Triantafyllides
      </h1>
      <p>
        This site is a testbed for different ideas and projects of mine. 
        I wrote it as a way to practice HTML, CSS, and the react framework.
        If you have any ciriticisms or advice, feel free to <button onClick={props.click}>contact me.</button>
      </p>
      <footer>
        &copy; 2020 Pavlo Triantafyllides
      </footer>
    </div>
  );
}
export default HomeContent;