import React from 'react';

const Zomato = () => {
    return (
      <div>
        <div>
 
          <div className="flex justify-between m-5">
            <div className="m-5">
              <h1 className="text-2xl text-black"> Zomato</h1>
            </div>
            <div className="">
              <button class="btn btn-info m-3 text-white">Invest Now</button>
            </div>
          </div>
         
          <div className="w-32 h-32 bg-green-500 rounded m-5">
            <h1 className=" text-black pt-11">Dummy Image</h1>
          </div>

          

          <div className="flex justify-between mx-5">
            <div className="w-full mr-5 text-left">
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Company Name
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 px-3 py-2 bg-accent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Zomato"
                />
              </label>
            </div>
            <div className="w-full  text-left">
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Amount to be Raised
                </span>
                <input
                  type="number"
                  name="email"
                  class="mt-1 px-3 py-2 bg-accent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="₹100 Crore"
                />
              </label>
            </div>
          </div>
     
          <div class="form-control m-5">
            <label class="block text-left m-1">
              <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Company Description
              </span>
            </label>
            <textarea
              class="textarea textarea-bordered bg-accent h-24"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui nobis maxime tempore illum incidunt non error fugiat inventore odio quod dolorem, debitis pariatur quos dolorum ipsum. Maxime, at! Facilis"
            ></textarea>
          </div>
       
          <div className="pl-5">
            <label class="block text-left ">
              <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Upload Graphs about performance history
              </span>
            </label>
          </div>

          <div className="w-32 h-32 bg-green-500 rounded m-5">
            <h1 className=" text-black pt-11">Dummy Image</h1>
          </div>
      
      
          <div class="form-control m-5">
            <label class="block text-left m-1">
              <span class=" after:ml-0.5 block text-sm font-medium text-slate-700">
                Any other information about Performance History
              </span>
            </label>
            <textarea
              class="textarea textarea-bordered bg-accent h-24"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui nobis maxime tempore illum incidunt non error fugiat inventore odio quod dolorem, debitis pariatur quos dolorum ipsum. Maxime, at! Facilis"
            ></textarea>
          </div>
        </div>
      </div>
    );
};

export default Zomato;