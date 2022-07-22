import React from 'react';
import { Outlet } from "react-router-dom";
const Sidebar = () => {
    return (
      <div>
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col  ">
            <Outlet />
            {/*
     <!-- Page content here --> */}
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div class="drawer-side drop-shadow-xl">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-black">
              {/* <!-- Sidebar content here --> */}
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Deals</a>
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
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;