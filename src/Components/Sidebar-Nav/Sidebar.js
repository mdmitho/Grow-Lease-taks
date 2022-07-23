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
            </div>
            <div class="drawer-side ">
              <label for="my-drawer-2" class="drawer-overlay"></label>
              <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-black">
                {/* <!-- Sidebar content here --> */}
                <div className="">
                  <Profile></Profile>
                </div>
                <li>
                  <div className="mt-5">
                    <div className="">
                      <img
                        className="w-6 h-6 inline-block"
                        src="https://icons.veryicon.com/png/o/miscellaneous/decon/dashboard-76.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">Dashboard</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-5 inline-block"
                        src="https://i.pinimg.com/originals/aa/9e/84/aa9e84de3c8bc1ed8bc2c6253ceabdbb.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Link to="/sidebar/deals">Deals</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-3 inline-block"
                        src="https://flyclipart.com/thumb2/mail-icon-mail-multimedia-icon-with-png-and-vector-format-18627.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">Emails</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-5 inline-block"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OC4tz2MqSWlqmLxvc02-_6WzVxRd4kOkgA3mNRoIpbmYyr0feFRyFcJMm_gJGdlKnpk&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">Investors</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-5 inline-block"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chat_icon.svg/1218px-Chat_icon.svg.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">chat</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-5 inline-block"
                        src="https://icon-library.com/images/finance-icon/finance-icon-21.jpg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">Finaces</a>
                    </div>
                  </div>
                </li>
           
                <li>
                  <div className="">
                    <div className="">
                      <img
                        className="w-5 h-5 inline-block"
                        src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Settings_black-512.png"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <a className="">Setting</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default Sidebar;