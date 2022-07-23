import React from 'react';
import toast, { Toaster } from 'react-hot-toast';




const notify = () => toast.success("Success! This deal has been saved & published for users.");
const AddNewDeal = () => {
    return (
      <div>
        {/* new dal and button Start */}
        <div className="flex justify-between m-5">
          <div className="m-5">
            <h1 className="text-2xl text-black">New Deal</h1>
          </div>
          <div className="">
            <button class="btn btn-error m-3 text-white">Cancel</button>
            <button onClick={notify} class="btn btn-info m-3 text-white">
              Make it Live
            </button>
          </div>
        </div>
        {/* new dal and button End */}

        {/* Click to Upload fille start */}

        <form action="/action_page.php ">
          <div className="w-32 h-32 bg-accent m-5">
            <div className="h-10 w-10 mx-auto pt-7">
              <img
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJg3X50TPQihJPuzlNMKwRe6Lz4uIrRc2QpA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-left ml-8 mt-5  ">
              <input
                type="file"
                id="myFile"
                name="filename"
                className="text-secondary
                cursor-pointer
              block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-accent file:text-accent
      hover:file:bg-accent
 
              "
              />
            </div>
            <h1 className=" text-black">Click to Upload</h1>
          </div>
        </form>

        {/* Click to Upload fille end */}

        {/* Company Name And Amount start */}

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
                placeholder="Eg.Swigg,Zomato,Google"
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
                placeholder="Eg,₹100 Crore,₹150 Crore"
              />
            </label>
          </div>
        </div>
        {/* Company Name And Amount end */}

        {/* Company Description start */}
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
        {/* Company Description End */}
        {/*  Upload Graphs about performance history start */}
        <div className="pl-5">
          <label class="block text-left ">
            <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Upload Graphs about performance history
            </span>
          </label>
        </div>

        <form action="/action_page.php "
        type="file"
        >
          <div className="w-32 h-32 bg-accent m-5">
            <div className="h-10 w-10 mx-auto pt-7">
              <img
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJg3X50TPQihJPuzlNMKwRe6Lz4uIrRc2QpA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-left ml-8 mt-5  ">
              <input
                type="file"
                id="myFile"
                name="filename"
                className="text-secondary
                cursor-pointer
              block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-accent file:text-accent
      hover:file:bg-accent
 
              "
              />
            </div>
            <h1 className=" text-black">Click to Upload</h1>
          </div>
        </form>
        {/*  Upload Graphs about performance history start */}

        {/* Company Any other information about Performance History start */}
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
        <Toaster />
      </div>
    );
};

export default AddNewDeal;