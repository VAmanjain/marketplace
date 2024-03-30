import React from 'react'

const Form2 = () => {
  return (
    <form>
      <div className="space-y-12 create_form ">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="min-bid"
                className="block text-sm font-medium leading-6"
              >
                Minimun Bid
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="min-bid"
                  id="min-bid"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* -----Remove after some time=------- */}
<div date-rangepicker class="flex items-center ">
  <div class="relative sm:col-span-3 ">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
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
  )
}

export default Form2