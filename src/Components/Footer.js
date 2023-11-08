import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* You only need to work in between the <> and </> tags for your html part 
  and make your own css same as component name and import it in your component..  */}

      <footer>
        {/* Section 1 (footer) */}
        <div className="sec sec1">
          <div className="logo">logo</div>
          <p>Medicines cure diseases but only doctors can cure patients.</p>
          <h3 className="callCenter">Call Center:</h3>
          <div className="num1">+054 043353</div>
          <div className="num2">+034 832493</div>
          <h3 className="follow">Follow Us On Social:</h3>
          <div className="socialLinks">Social Links</div>
        </div>

        {/* Section 2(footer) */}
        <div className="sec sec2">
          <h3>About Us</h3>
          <Link className="Services" to="/">
            Services
          </Link>
          <Link className="Patients1" to="/">
            For Patients
          </Link>
          <Link className="Info" to="/">
            Info
          </Link>
          <Link className="Pricing" to="/">
            Pricing
          </Link>
          <Link className="Contact" to="/">
            Contact us
          </Link>
        </div>

        {/* Section 3(footer) */}

        <div className="sec sec3">
          <h3> For Patients</h3>
          Links related to patients access of website
        </div>

        {/* Section 4(footer) */}

        <div className="sec sec4">
          <h3> For Hospitals</h3>
          Section for
          <h3> For Doctors</h3>
        </div>

        {/* Section 5(footer) */}

        <div className="sec sec4">
          <h3>More</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
