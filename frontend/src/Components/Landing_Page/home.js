import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './home.css';

export const SideBar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const index = 0;
  const navigate = useNavigate();
  return (
    <div>
      <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <i className="bi bi-columns-gap fw-500" onClick={showSidebar} title="click for side bar"/>
          </Link>
      </div>
     
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         
          <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <p>IntelliBuild</p>
              <span className='menu-bars'>
              <i className="bi bi-arrow-bar-left menu-bars" />
              </span>
              
          </li>
          
                  {/* Register */}
              <li id='1' className='nav-text'>
                <Link to='/registration'>
                  <i className="bi bi-pencil-square"/>
                  <span>Register</span>
                </Link>
          </li>
          {/* Tools */}
          <li id='2' className='nav-text'>
                <Link to='/ticketForNewTool'>
                  <i className="bi bi-tools"/>
                  <span>Ticket for new Tool</span>
                </Link>
          </li>

          {/* Settings*/}
          <li id='three' className='nav-tex'>
                <Link to='/settings'>
                  <i className="bi bi-gear"/>
                  <span>Settings</span>
                </Link>
          </li>
              
          </ul>
      </nav>
      <div className="boxes">
        <div>
        <div className="box">
        <h6>usecase1</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="box">
        <h6>usecase2</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
        <div>
        <div className="box">
        <h6>usecase3</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloridatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="box">
        <h6>usecase4</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
      </div>
        </div>
      </div>
    </div>
  );
};
