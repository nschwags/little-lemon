import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerSection">
      <section>
        <img src="Images/Logo.svg" alt="Little Lemon Logo" />
      </section>
      <section className="footerLinks">
        <h2>Navigation</h2>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Menu"}>Menu</Link>
        <Link to={"/booking"}>Reservation</Link>
        <Link to={"/Order"}>Order Online</Link>
        <Link to={"/Login"}>Login</Link>
      </section>
      <section className="footerContact">
        <h2>Contact</h2>
        <p>(651) 888-8888</p>
        <p>LittleLemon@gmail.com</p>
        <p>Chicago, Illinois</p>
      </section>
    </footer>
  );
}

export default Footer;
