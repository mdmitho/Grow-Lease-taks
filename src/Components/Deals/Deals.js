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
        <div class="overflow-x-auto w-full">
          <table class="table mx-auto">
            {/* <!-- head --> */}
            <thead className="">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox border" />
                  </label>
                </th>
                <th>Name of Company</th>
                <th>Company Description</th>
                <th>Amount to be Raised</th>
                <th>Performance history</th>
                <th>Pre-tax</th>
                <th>post-tax</th>
                <th>tenure</th>
                <th>Action</th>
              </tr>
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
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>

              {/* <!-- row 2 --> */}
            </tbody>
            {/* <!-- foot --> */}
          </table>
        </div>
      </div>
    );
};

export default Deals;