import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import logo from "../../../img/landing/logo-makr.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MDBNavbar color="#00897b teal darken-1" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">
          <img src={logo} height="30" />
          ApplianceMaster
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/appliancerepair">App. Repair</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/contact">Contact Us</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="facebook-f" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="instagram" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavBar;
