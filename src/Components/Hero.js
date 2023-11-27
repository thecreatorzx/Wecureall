import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
    <div class="main">
      <div class="first">
        <img src="#"></img>
      </div>
      <div class="second">
          <h2>Live without pain & get<br/>back to being you</h2>
          <p>Our unique step process gives us the opportunity to<br/>
          perform a full diagnostic procedure to uncover the<br/>
          source of your pain. From there, our medical team will<br/>
          develop a unique, personalized and individualized<br/>
          treatment plans.</p>
          <ul>
            <li><b>Check doctors profile</b></li>
            <li><b>Request consultation</b></li>
            <li><b>Recieve your consultation</b></li>
            <li><b>Get your solution</b></li>
          </ul>
          <button class="button">
            <span class="button-content">Explore More</span>
          </button>
      </div>
    </div>
    <br/>
      {/* You only need to work in between the <> and </> tags for your html part 
  and make your own css same as component name and import it in your component..  */}
    </>
  );
};
export default Hero;
