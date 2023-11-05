import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* You only need to work in between the <> and </> tags for your html part 
  and make your own css same as component name and import it in your component..  */}
  <nav>
      <Link className = "navLogo" to="/">logo</Link>
      <div className="Mid" >
      <Link className="Services" to="/">
          Services
        </Link>
      <div className="Patients" onClick={expand()}>
      <Link className="Patients1" to="/">
          For Patients
        </Link>
      <Link className="Patients2" to="/">
          For Patients2
        </Link>
      <Link className="Patients3" to="/">
          For Patients3
        </Link>
        </div>
      <div className="Info" onClick={expand}>
      <Link className="Info" to="/">
          Info1
        </Link>
      <Link className="Info2" to="/">
          Info2
        </Link>
      <Link className="Info3" to="/">
          Info3
        </Link>
      </div>
      <Link className="Pricing" to="/">
          Pricing
        </Link>
      <Link className="Contact" to="/">
          Contact us
        </Link>
        </div>

      <div className ="sign">
        sign in and out
      </div>
  </nav>
    </>
  );
  function expand(){}  
};

export default Nav;
