import React from "react";
import"./Reviews.css";
const Reviews = () => {
  return (
    <>
      {/* You only need to work in between the <> and </> tags for your html part 
  and make your own css same as component name and import it in your component..  */}
     <div class="card">
      <div class="image"></div>
        <p class="text">Dolor deserunt est labore cupidatat pariatur. Et ipsum aliquip cillum veniam veniam excepteur officia proident. Occaecat fugiat veniam ad voluptate cupidatat ex non irure. Occaecat minin .</p>
        <div class="container">
        <div class="left">
        <div class="name">Cameron williamson</div>
        <div class="city">Westminister bridge ABC</div>
        </div>
        <div class="right reviews">4.8(240)</div>

        </div>
     </div>
    </>
  );
};

export default Reviews;
