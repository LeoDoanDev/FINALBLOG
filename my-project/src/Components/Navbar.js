
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
import fun from  "../Assets/Logo/fun1.png"
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
  justify-content:center;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  padding-top:20px;
  margin-left:57px;
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
  top: 0px;
  right: ${({ sidebar }) => (sidebar ? "0%" : "-100%")};
  transition: 300ms;
  z-index: 100;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;
const Menus = styled.div`
  position: absolute;
  background: #2f3138;
  list-style-type: none;
  margin: 25px -18px;
 
  flex-direction: row;
  text-align: center;
  a{
  margin:0;
  color:white;
  }
  a:hover {
  background: rgb(108, 155, 199);

  }
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
          <div className="relative pt-2  opacity-[.75] ">
            <a href="/"><img  src={fun} className='h-10 w-50 rounded-full'/></a>
          </div>
          <div className="pt-2 pr-[80px] opacity-[.60]">
            <a href="/"><img  src={logo} className='h-10 w-50'/></a>
          </div>
          <div className="hidden space-x-6 md:flex font-bold text-[16px] ">
            <a href="/" className="hover:text-darkGrayishBlue text-white pt-1">Home</a>
            <ul className="pt-1">
              <a href="#" className="hover:text-darkGrayishBlue items-center text-white" onClick={showbar}>Menus</a>
                  <Menus>    
                    {open ? (
                      <ul className="relative flex flex-row pr-1 pl-1 space-x-2 pb-3">
                        <a href="/about-us/aim" className="menu-item">
                            <a >Menu 1</a>
                        </a><br/>
                        <a href="/about-us/vision" className="menu-item">
                            <a>Menu 2</a>
                        </a><br/>
                      </ul>
                    ) : null}
                  </Menus>
              </ul>
            <div className=" relative flex flex-row right-6 top-1 pt-1">
                {open?<RiIcons.RiArrowDownSFill />:<RiIcons.RiArrowUpSFill />}
            </div> 
            <a href="/news" className="relative hover:text-darkGrayishBlue text-white right-6 pt-1">News</a>

          </div>
          <div  className="hidden md:flex border border-purple-200 rounded mr-[50px]">
                  <input
                      type="text"
                      className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Search..."
                  />
                  <a href="" className=" px-4 pt-2 text-white bg-purple-600 border-l rounded"> <button className=" ">
                      <RiIcons.RiSearchLine/>
                  </button> </a>
          </div>
            <a href="/signin" className=" relative bg-purple-600 rounded md:flex hidden pt-2 pb-2 px-4 py-2 rounded pb-1 text-white  round-full baseline hover:text-brightRed"><button >Sign In</button></a>
            <NavIcon to="#" className="md:hidden focus:outline-none pl-16 ">
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