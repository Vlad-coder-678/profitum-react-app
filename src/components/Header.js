import React from 'react';

import Navbar from './Navbar';
import Dropdown from './Dropdown';

const Header = ({ setLang }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar toggle={toggle} setLang={setLang} />
      <Dropdown toggle={toggle} isOpen={isOpen} setLang={setLang} />
    </header>
  );
};

export default Header;
