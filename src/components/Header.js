import React from "react";

import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
    </header>
  );
};

export default Header;
