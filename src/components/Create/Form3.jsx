import React from 'react'

const Form3 = () => {
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

export default Form3