import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div>
          <div className="textContent">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <Link to="/booking">
            <button className="button" aria-label="Reserve A Table">
              Reserve A Table
            </button>
          </Link>
        </div>
        <div className="bannerImg">
          <img src="/Images/restauranfood.jpg" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
