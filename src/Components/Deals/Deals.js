import React from 'react';
import { Link } from "react-router-dom";

const Deals = () => {
    return (
      <div className="p-5">
        <div className="flex justify-between my-5">
          <div className="">
            <h1 className="text-2xl text-black ">Deals</h1>
          </div>
          <div className="">
            <p className="inline-block mr-4">
              Company : <span className="text-info">All</span>
            </p>
            <Link to="/sidebar/addnewdeal">
              <button class="btn btn-info inline-block text-white">+ Add new deal</button>
            </Link>
          </div>
        </div>

        {/* Table start */}
        <div class="overflow-x-auto w-full text-black">
          <table class="table mx-auto ">
            {/* <!-- head --> */}
            <thead className=" shadow-xl">
              <tr className="">
                <th className="bg-white">
                  <label>
                    <input type="checkbox" class="checkbox border" />
                  </label>
                </th>
                <th className="bg-white ">Name of Company</th>
                <th className="bg-white">Company Description</th>
                <th className="bg-white">Amount to be Raised</th>
                <th className="bg-white">Performance history</th>
                <th className="bg-white">Pre-tax</th>
                <th className="bg-white">post-tax</th>
                <th className="bg-white">tenure</th>
                <th className="bg-white">Action</th>
              </tr>
              <div className=""></div>
            </thead>

            <tbody>
              {/* <!-- row 1 --> */}

              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>

                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div>
                      <Link to="/sidebar/zomato">
                        {" "}
                        <div class="font-bold">Hart Hagerty</div>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to="/sidebar/zomato">Lorem ipsum dolor sit amet....</Link>
                  <br />
                </td>

                <td>$100 Corore</td>
                <td>Viow Charts</td>
                <td>3%</td>
                <td>3%</td>
                <td>2 Years</td>

                <th>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 ">
                      <a href="#">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Simple_Icon_Eye.svg/1024px-Simple_Icon_Eye.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-5 h-5">
                      <a href="#">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>

              {/* <!-- row 2 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>

                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div>
                      <Link to="/sidebar/zomato">
                        {" "}
                        <div class="font-bold">Hart Hagerty</div>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to="/sidebar/zomato">Lorem ipsum dolor sit amet....</Link>
                  <br />
                </td>

                <td>$100 Corore</td>
                <td>Viow Charts</td>
                <td>3%</td>
                <td>3%</td>
                <td>2 Years</td>

                <th>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 ">
                      <a href="#">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Simple_Icon_Eye.svg/1024px-Simple_Icon_Eye.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-5 h-5">
                      <a href="#">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>

                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div>
                      <Link to="/sidebar/zomato">
                        {" "}
                        <div class="font-bold">Hart Hagerty</div>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to="/sidebar/zomato">Lorem ipsum dolor sit amet....</Link>
                  <br />
                </td>

                <td>$100 Corore</td>
                <td>Viow Charts</td>
                <td>3%</td>
                <td>3%</td>
                <td>2 Years</td>

                <th>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 ">
                      <a href="#">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Simple_Icon_Eye.svg/1024px-Simple_Icon_Eye.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-5 h-5">
                      <a href="#">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>

                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div>
                      <Link to="/sidebar/zomato">
                        {" "}
                        <div class="font-bold">Hart Hagerty</div>
                      </Link>
                    </div>
                  </div>
                </td>
                <td>
                  <Link to="/sidebar/zomato">Lorem ipsum dolor sit amet....</Link>
                  <br />
                </td>

                <td>$100 Corore</td>
                <td>Viow Charts</td>
                <td>3%</td>
                <td>3%</td>
                <td>2 Years</td>

                <th>
                  <div className="flex gap-3">
                    <div className="w-5 h-5 ">
                      <a href="#">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Simple_Icon_Eye.svg/1024px-Simple_Icon_Eye.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-5 h-5">
                      <a href="#">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
            {/* <!-- foot --> */}
          </table>
        </div>
      </div>
    );
};

export default Deals;