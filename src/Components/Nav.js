import React from "react";
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCvWhBg3X8h9QSXBEPO-GsOToZEEoHaCHg",
  authDomain: "wecureall-40f33.firebaseapp.com",
  projectId: "wecureall-40f33",
  databaseURL: "https://wecureall-40f33.firebaseio.com",
  storageBucket: "wecureall-40f33.appspot.com",
  messagingSenderId: "654568417763",
  appId: "1:654568417763:web:4dec8a8893a42b3ee098d6",
  measurementId: "G-89EZ4Z01R4",
});

const Nav = () => {
  return (
    <>
      {/* You only need to work in between the <> and </> tags for your html part 
  and make your own css same as component name and import it in your component..  */}
        <nav>
      <div className="Start"><Link className = "navLogo" to="/">logo</Link>
      </div>
      <div className="Mid" >
      <Link className="Services" to="/">
          Services
        </Link>
      <div className="Patients" onClick={expand()}>
      <Link className="Patients1" to="/">
          For Patients &#10147;
        </Link>
      {/* <Link className="Patients2" to="/">
          For Patients2
        </Link>
      <Link className="Patients3" to="/">
          For Patients3
        </Link> */}
        </div>
      <div className="Info" onClick={expand}>
      <Link className="Info" to="/">
          Info &#10147;
        </Link>
      {/* <Link className="Info2" to="/">
          Info2
        </Link>
      <Link className="Info3" to="/">
          Info3
        </Link> */}
      </div>
      <Link className="Pricing" to="/">
          Pricing
        </Link>
      <Link className="Contact" to="/">
          Contact us
          </Link>
        </div>

        <div className="sign">
          <button className="logIn" onClick={logIn()}>
            Log in
          </button>
          <button className="signIn" onClick={signIn()}>
            Sign in
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
  function expand() {}
  function logIn() {}
  function signIn() {}
};

export default Nav;
