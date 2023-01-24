import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiFire, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import NavItem from "./NavItem";
import '../../styles/navbar.css';

const MENU_LIST = [
    { 
        text: "HOME", 
        href: "/" 
    },
    { 
        text: "PRODUCTS", 
        href: "/products" 
    },
    { 
        text: "ABOUT US", 
        href: "/aboutus" 
    },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const style = { 
    color: "#323232", 
    fontSize: "1.5em" 
  }

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
          <div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
          <div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>

        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <HiFire className='logoSig' style={style}/>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem 
                {...menu} 
              />
            </div>
          ))}
        </div>
        
        <div className='logo'>
            <NavLink exact='true' to="/" className="a">
                <h1>
                    ThatsLifeStudio
                </h1>
            </NavLink>
        </div>
        <div className='options'>
            <div className='search'>
                <HiOutlineSearch style={style}/>
            </div>
            <div className='user'>
                <HiOutlineUser style={style}/>
            </div>
            <div className='cart'>
                1
            </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;