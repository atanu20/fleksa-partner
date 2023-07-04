import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://fleksa-client.vercel.app"
          target="_blank"
          className="btn btn-dark"
        >
          Get Best Dishs
        </a>
      </footer>
    </>
  );
};

export default Footer;
