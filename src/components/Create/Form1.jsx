import React, { useState } from "react";
import "../../css/main.css";


const Fixed = () => {
  // const [formValues, setFormValues] = useState({
  //   price: "",
  //   fixedPrice: false,
  //   timeAuctions: false,
  //   openForBids: false,
  //   title: "",
  //   itemName: "",
  //   description: "",
  //   royalties: "",
  //   size: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  return (
    <form>
      <div className="space-y-12 create_form ">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="desc"
                className="block text-sm font-medium leading-6"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="desc"
                  name="desc"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="royality"
                className="block text-sm font-medium leading-6"
              >
                Royalties
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="royality"
                  id="royality"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="size"
                className="block text-sm font-medium leading-6"
              >
                Size
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="size"
                  id="size"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="abstraction"
                className="block text-sm font-medium leading-6"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="abstraction"
                  name="abstraction"
                  autoComplete="abstraction-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Fixed;
