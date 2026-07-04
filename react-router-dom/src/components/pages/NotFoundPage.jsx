// import React from 'react'
import "../../js/script.js";
import  {initRandomMessage,initCountdownRedirect,initMouseFollower,initThemeToggle,GoBack} from '../../js/script.js'
import "../../App.css"
import pic from '../../assets/astronaut.png'


function NotFoundPage() {


  return (
    <>
      <div className="space-container">
        <button id="theme-toggle" className="theme-toggle-button">
          ☀️
        </button>
        <div className="stars"></div>
        <div className="mouse-follower"></div>
        {/* <img src="../../assets/astronaut.png" alt="Floating Astronaut" class="astronaut"> */}
        <img
          src={pic}
          className="astronaut"
        />
        <div className="content">
          <h1 className="error-code">404</h1>
          <p id="error-message" className="error-message">
            Houston, we have a problem. You've ventured into the unknown.
          </p>
          <div className="buttons">
            <a href="/" className="button spaceship-button">
              Return to Spaceship
            </a>
            <button onclick={()=>{GoBack()}} className="button">
              Go Back
            </button>
          </div>
          <p className="countdown-message">
            Auto-redirecting to the spaceship in <span id="countdown">10</span>{" "}
            seconds...
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
