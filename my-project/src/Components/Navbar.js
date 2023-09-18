
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from "./Sidebar";
import Subbar from "./Subbar";
import { IconContext } from "react-icons/lib";
import logo from "../Assets/Logo/logo.png"
import '../CSS/Navbar.css'
const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
  background: #252831;
  border-left: 4px solid green;
  cursor: pointer;
}
`;
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  padding-top:20px;
  justify-content: flex-end;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20px;
  right: ${({ sidebar }) => (sidebar ? "0%" : "-100%")};
  transition: 350ms;
  z-index: 100;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;
 
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [open, setbar] = useState(false);
  const showbar = () => setbar(!open);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
        <div className="pt-2">
         <img src={logo} className='h-10 w-50' walt="" />
       </div>
      
       <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue text-white">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue text-white">Product</a>
          <ul>
          <a href="#" className="hover:text-darkGrayishBlue items-center text-white" onClick={showbar}>About Us</a>

                          
                          
                          {open ? (
                                  <ul className="menu ">
                                    <a href="/about-us/aim" className="menu-item">
                                      <a >Menu 1</a>
                                    </a><br/>
                                    <a href="/about-us/vision" className="menu-item">
                                      <a>Menu 2</a>
                                    </a>
                                  </ul>
                                ) : null}
                        </ul>
                       <div className=" relative flex flex-row right-4">
                       {open?<RiIcons.RiArrowDownSFill />:<RiIcons.RiArrowUpSFill />}
                      </div> 
          <a href="#" className="relative hover:text-darkGrayishBlue text-white right-4">Careers</a>
          <a href="#" className="relative hover:text-darkGrayishBlue text-white right-4">Community</a>
        </div>
          <NavIcon to="#" className="md:hidden focus:outline-none ">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {Sidebar.map((item, index) => {
              return <Subbar item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
 
export default Navbar;