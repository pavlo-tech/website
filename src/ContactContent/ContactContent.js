import React from 'react';
import './ContactContent.css';
import pic from './self.jpeg';

const ContactContent = (props) =>
{
  return (
    <div className="ContactContent">
      <h3>Feel free to contact me:</h3>
      
      <img height="100" width="100" src={pic} alt="smiley face"/>

      <p>
          Pavlo Triantafyllides
      </p>
      <p>GitHub: <a href="https://github.com/pavlo-tech" target="__blank">pavlo-tech</a></p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/pavlo-triantafyllides/" target="__blank">pavlo-triantafyllides</a></p>
      <p> Email: <a href="mailto:triantafyllides@gmail.com">triantafyllides@gmail.com</a></p>
    </div>
  );
}
export default ContactContent;