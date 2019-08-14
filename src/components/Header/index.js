import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SC from "styled-components";
import colors from "../../constants/colors";
import HeaderNavigationURLS from "../../constants/navigation-header-urls";

const HeaderContainer = SC.div`
  background-color: ${colors.primaryColor};
  border-bottom: 1px solid ${colors.primaryBorderColor};
  display: flex;
  flex: 1 1 auto;
  padding: 8px 16px;
`;

const TitleBar = SC.div`
  align-items: center;
  color: ${colors.whiteColor};
  display: flex;
  flex: 1 1 auto;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2.25px;
`;

const HamburgerButton = SC.div`
  align-items: center;
  border: 1px solid ${colors.whiteColor};
  border-radius: 4px;
  color: ${colors.whiteColor};
  cursor: pointer;
  display: flex;
  flex: 0 1  auto;
  justify-content: center;
  padding: 8px;

  &:hover {
    color: ${colors.blackColor};
    border-color: ${colors.blackColor};
  }
`;

const DropdownContainer = SC.div`
  background-color: ${colors.primaryColor};
  border-bottom: 1px solid ${colors.primaryBorderColor};

  > a {
    text-decoration: none;
  }
`;

const DropdownLink = SC.div`
  color: ${colors.whiteColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 16px;

  &:hover {
    background-color: ${colors.whiteColor};
    color: ${colors.primaryColor};
  }
`;

const LinkComponent = props => {
  const { title, path } = props.item;
  return (
    <Link to={path}>
      <DropdownLink>{title}</DropdownLink>
    </Link>
  );
};

export default function Header() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const DropdownComponents = () => (
    <DropdownContainer>
      {HeaderNavigationURLS.map((item, index) => (
        <LinkComponent key={index} item={item} />
      ))}
    </DropdownContainer>
  );
  return (
    <div>
      <HeaderContainer>
        <TitleBar>Personal Resume</TitleBar>
        <HamburgerButton
          onClick={() => setDropdownVisibility(!dropdownVisibility)}
        >
          <FaBars />
        </HamburgerButton>
      </HeaderContainer>
      {dropdownVisibility && <DropdownComponents />}
    </div>
  );
}
