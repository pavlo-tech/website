import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className='AboutContent'>
      <h2>Who is Pavlo Triantafyllides?</h2>

      <p>
        I am just a guy. Specifically, I am a guy who graduated with a Bachelor of Science in Computer Engineering from Clemson University in Spring 2020
        (<a href="https://meritpages.com/Pavlo-Dimitri-Triantafyllides/4061977" target="blank">proof here</a>). 
        During my time at Clemson, I was an undergraduate researcher studying lossy compression, 
        which produced multiple posters and one <a href="https://ieeexplore.ieee.org/document/8891052" target="blank">publication</a>.
        Additionally, I spent 3 semesters working as a Test Engineer at Itron, Inc. During my co-op, I worked on databases, user interfaces,
        robots, and computer vision. Starting Summer 2020 I will be working as a Test Engineer at Credit Karma &#x1F60A;!
         
      </p>

    </div>
  );

  
};
//document.querySelector('.badge__input').children[0].value='Pavlo'
//document.querySelector('.badge__input').children[0].focus()
//document.querySelector('.badge__input').children[1].children[0].click()
export default AboutContent;