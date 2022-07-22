import React from 'react';
import {Link, Outlet } from "react-router-dom";
import Profile from '../Profile/Profile';
import SearchBar from '../SearchBar/SearchBar';




const Sidebar = () => {
    return (
      <>
        <div className="drop-shadow-xl">
          <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
              <Outlet />
              {/* <!-- Page content here --> */}
             
              <div className=""></div>
              <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="drawer-side ">
              <label for="my-drawer-2" class="drawer-overlay"></label>
              <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-black">
                {/* <!-- Sidebar content here --> */}
                <div className="">
                  <Profile></Profile>
                </div>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <Link to="/sidebar/deals">Deals</Link>
                </li>
                <li>
                  <a>Emails</a>
                </li>
                <li>
                  <a>Investors</a>
                </li>
                <li>
                  <a>chat</a>
                </li>
                <li>
                  <a>Finaces</a>
                </li>
                <div className="divider "></div>
                <li>
                  <a>Setting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default Sidebar;