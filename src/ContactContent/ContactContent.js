import React from 'react';
import './ContactContent.css';
import pic from './self.jpeg';

const ContactContent = (props) =>
{
  //<h1>Feel free to contact me!</h1>


  return (
    <div className="ContactContent">
      <h1 id='T0'>Feel</h1>
      <h1 id='T1'>free</h1>
      <h1 id='T2'>to</h1>
      <h1 id='T3'>cont</h1>
      <h1 id='T4'>act</h1>
      <h1 id='T5'>me!</h1>

      
      <img src={pic} alt="really good pic of me"/>

 
      <h2>
        Pavlo Triantafyllides
      </h2>
      <p>
        GitHub: <a href="https://github.com/pavlo-tech" target="__blank">pavlo-tech</a><br/>
        Linkedin: <a href="https://www.linkedin.com/in/pavlo-triantafyllides/" target="__blank">pavlo-triantafyllides</a><br/>
        Email: <a href="mailto:triantafyllides@gmail.com">triantafyllides@gmail.com</a><br/>
        </p>
    </div>
  );
}
export default ContactContent;