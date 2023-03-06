import React from "react";
import img from "../../images/img.jpg";

export default function Header() {
  return (
    <section className="header">
      <div className="header-text">
        <h3>Let's Start Cooking With Popular Recipes</h3>
        <p>
          Want to make a dish but don't know where to start?
          <br /> No need to worry!
        </p>
      </div>
      <div className="header-img">
        <img src={img} alt="vegetables" />
      </div>
    </section>
  );
}
