import React, { useState } from "react";
import { Link } from "react-router-dom";
import planets from '../data.json';
import HamburgerIcon from "../icons/HamburgerIcon";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (      
        <nav className="flex flex-row p-2 gap-6 bg-transparent font-antonio font-bold uppercase justify-between border-b-2 border-darkGray">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  className="text-2xl font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white hover:text-white"
                  to="/"
                >
                  The Planets
                </Link>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <HamburgerIcon />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center pt-2 md:justify-end" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="navbar-info"
              >
                <div className="text-lightGray">
                    <ul className="flex flex-col md:flex-row gap-6">
                        {/* <li><Link to="/">Home</Link></li> */}
                        {planets.map((planet) => {
                            return (
                                <li className="flex gap-4 pl-4 mt-0">
                                  <div className="p-3 rounded-full md:hidden" style={ {backgroundColor: `${planet.colorHex}`}}>
                                  </div>
                                  <Link 
                                    to={planet.name} 
                                    className="hover:text-white md:hover:border-t-4    focus:text-white md:focus:border-t-4" 
                                    style={{borderTopColor: `${planet.colorHex}`}}>
                                      {planet.name}
                                  </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
              </div>
            </div>
        </nav>
  );
}

export default Nav;