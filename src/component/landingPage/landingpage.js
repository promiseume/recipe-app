import React from "react";
import Nav from "./nav";
import Section from "./section";
import Header from "./header";
import Popular from "./popular";
import Footer from "./footer";
import "./landingPage.css";
export default function Landingpage() {
  return (
    <>
      <Nav />
      <div className='landing-page'>
      <Header />
      <Section />
      <Popular />
      </div>
      <Footer />
    </>
  );
}
