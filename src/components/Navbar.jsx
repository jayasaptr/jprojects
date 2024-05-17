/** @format */

import { useState } from "react";
import "../styles/navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
  const [isTampil, setIsTampil] = useState("");
  function tampilMenu() {
    if (isTampil == "") {
      setIsTampil("tampil");
    } else {
      setIsTampil("");
    }
  }
  return (
    <nav>
      <div className='wrapper'>
        <div className='logo'>
          <Link to='/'>JProjects</Link>
        </div>
        <button onClick={tampilMenu}>
          {isTampil == "" ? <FaBarsStaggered /> : <IoIosClose />}
        </button>
        <div className={`menu ${isTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to='/#portfolio'>Portfolio</HashLink>
            </li>
            <li>
              <HashLink to='/#about'>About</HashLink>
            </li>
            <li>
              <Link to='/experiance'>Experiance</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
