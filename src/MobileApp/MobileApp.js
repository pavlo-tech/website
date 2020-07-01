import React, { useState }  from 'react';
import './MobileApp.css'

const  MobileApp = (props) =>
{
  const [secondLeft, setSeconds] = useState(20);

  const decrementSeconds = () => {
    setSeconds(secondLeft > 0 ? secondLeft-1 : 0);
  }

  setTimeout(decrementSeconds, 1000)
  return (
    <div className='MobileApp'>
      <h1>pavlo-tech</h1>
      <p>
        Hi there!<br></br> <br></br>
        My name is Pavlo Triantafyllides, and this is the mobile version of pavlo.tech, my personal website.
        While a true mobile version of the site has not yet been built (and may never be), I would like to thank you for visiting.
        For the full experience, please visit us (me) on a PC web browser such as Chrome, Firefox, or Safari. 
        <br></br> <br></br>
        This message will self destruct in {secondLeft} seconds.
      </p>
    </div>
  );

}
export default MobileApp;