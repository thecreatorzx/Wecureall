import React from "react";
import "./Services.css";
function Services() {
  return (
    <>
      {/* You only need to work in between the <> and </> tags for your html part
          and make your own css same as component name and import it in your component..  */}
      <h1>Are You Looking For</h1>
      <p>Whether you're an athlete, someone who performs regular physical la  bor or somewhere in between-- we can help.
      </p>
      <div className="Cards">
        <div className="Card Card1"> 
         <div class="container">
          <div class="image"></div> 
         <h3 class="heading">Health Consult</h3>
         </div>
         <p  class="content">Are you looking for health consulting ? We offer our best health consult. </p>
         </div>
        <div className="Card Card2">Card 2</div>
        <div className="Card Card3">Card 3</div>
        <div className="Card Card4">Card 4</div>
        <div className="Card Card5">Card 5</div>
      </div>
      <input type="radio" />
    </>
  );
}

export default Services;
