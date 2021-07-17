import React from 'react';
import styled from 'styled-components/macro';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { EN, RU } from '../constants';
import ruFlagImg from '../images/flag_ru.svg';
import enFlagImg from '../images/flag_en.svg';

const Div = styled.div`
  position: relative;
`;

const Select = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
`;

const Img = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const Options = styled.ul`
  position: absolute;
  left: 25px;
  list-style-type: none;
  color: #fff;
  cursor: pointer;
`;

const chevronStyle = { width: '10px', marginLeft: '5px', marginRight: '10px', marginTop: '2px' };

const LangSelect = ({ setLang, lang }) => {
  const [isShow, setIsShow] = React.useState(false);

  const hanlderOnSelectClick = () => {
    setIsShow((isShow) => !isShow);
  };

  const hanlderOnOptionClick = (event) => {
    const selectedLang = event.target.innerText;
    window.localStorage.setItem('lang', selectedLang);
    setLang(selectedLang);
    setIsShow(false);
  };

  const langRef = React.useRef();

  const handlerOnClickOutside = (event) => {
    const path = event.path || (event.comrosedPath && event.comrosedPath());
    if (path && !path.includes(langRef.current)) {
      setIsShow(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handlerOnClickOutside);
    return () => {
      document.body.removeEventListener('click', handlerOnClickOutside);
    };
  }, []);

  return (
    <Div ref={langRef}>
      <Select onClick={hanlderOnSelectClick}>
        {lang === RU ? (
          <Img src={ruFlagImg} alt="" />
        ) : (
          <Img src={enFlagImg} alt="" />
        )}
        <span>{lang === RU ? RU : EN}</span>
        {isShow ? (
          <FaChevronUp style={chevronStyle} />
        ) : (
          <FaChevronDown style={chevronStyle} />
        )}
      </Select>
      {isShow && (
        <Options>
          <li onClick={hanlderOnOptionClick}>{lang === RU ? EN : RU}</li>
        </Options>
      )}
    </Div>
  );
};

export default LangSelect;
