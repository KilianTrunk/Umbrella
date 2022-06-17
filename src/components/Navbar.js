import React, { useContext } from "react";

import "../css/styles.css";

import { Row } from "react-flexbox-grid";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";
import {Context} from '../global-state/Store'

const Navbar = () => {
  const [state, setState] = useContext(Context);

  const navItems = state?.Navbar


  return (
    <>
      {navItems && (
        <>
          <Row center="xs" className="navbar-section">
            {navItems.map((navItem, index) => {
              if (index === 2) {
                return (
                  <>
                    <Logo key={index} />
                    <NavItem navItem={navItem} key={index} />
                  </>
                );
              }

              if (index < 4) {
                return <NavItem navItem={navItem} key={index} />;
              }
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default Navbar;
