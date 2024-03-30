import React from "react";
import ImageInput from "./ImageInput";

const Collection = () => {
  const estimatedCostForPolygon = "00.47";
  const estimatedCostForEthereum = "28.97";

  return (
    <React.Fragment>
      <div className="pt-[11vh] black_bg container_box drop ">
        <div className="drop_left">
          <h1 className="heading">
          First, you’ll need to deploy a contract
          </h1>
          <p>You’ll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.</p>
          <div className="   drop_left_input">

            <div className=" drop_left_input_box  ">
              <ImageInput className="  img" />

              <div className=" inputs px-2 ">
                <div className="w-full px-2 my-2 ">
                  <label
                    htmlFor="contract_name"
                    
                  >
                    Contract Name
                  </label>
                  <div className="mt-2 input_div ">
                    <input
                      type="text"
                      name="contract_name"
                      id="contract_name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 "
                      placeholder="My collection Name "
                    />
                  </div>
                </div>
                <div className="w-full px-2 my-2">
                  <label
                    htmlFor="token_symbol"
                    className="block text-sm font-medium leading-6"
                  >
                    Token Symbol
                  </label>
                  <div className="mt-2 input_div">
                    <input
                      type="text"
                      name="token_symbol"
                      id="token_symbol"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm bg-[#1f05898f] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                      placeholder="MCN"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="blockchain">
              <h1 className="text-[2rem] font-semibold">Blockchain </h1>
              <div className="blockchain_container">
                <div className=" blockchain_container_box glass_effect">
                  <div className=" blockchain_container_box_details ">
                    <img
                      src="https://opensea.io/static/images/logos/ethereum.svg"
                      alt=""
                    />
                    <div className="name">
                      <h2>Ethereum</h2>

                      <span className=" tag glass_effect">Most Popular</span>
                    </div>
                    <div className="cost">
                      <span>
                        Estimated cost to deploy contract: $
                        {estimatedCostForEthereum}{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" blockchain_container_box glass_effect">
                  <div className=" blockchain_container_box_details ">
                    <img
                      src="https://opensea.io/static/images/logos/polygon.svg"
                      alt=""
                    />
                    <div className="name">
                      <h2>Polygon</h2>

                      <span className=" tag glass_effect">Cheaper</span>
                    </div>
                    <div className="cost">
                      <span>
                        Estimated cost to deploy contract: $
                        {estimatedCostForPolygon}{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" blockchain_container_box glass_effect">
                  <div className=" blockchain_container_box_details ">
                    <img
                      src="https://opensea.io/static/images/logos/ethereum.svg"
                      alt=""
                    />
                    <div className="name">
                      <h2>Polygon</h2>

                      <span className=" tag glass_effect">Most Popular</span>
                    </div>
                    <div className="cost">
                      <span>
                        Estimated cost to deploy contract: $
                        {estimatedCostForPolygon}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop_right">
          <div className="inst glass_effect">
            <div className="inst_box">
              <div className="inst_box_1">
                <h1>After you deploy your contract you’ll be able to:</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="n-container">
                  <div className="n-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 n-one-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                  </div>
                  <div className="n-two">
                    <p>Manage collection settings</p>
                    <p>Edit collection details, earnings, and links.</p>
                  </div>
                </div>
                <div className="n-container">
                  <div className="n-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </div>
                  <div className="n-two">
                    <p>Set up your drop</p>
                    <p>Set up your mint schedule and presale stages.</p>
                  </div>
                </div>
                <div className="n-container">
                  <div className="n-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                  <div className="n-two">
                    <p>Prepare designs</p>
                    <p>Customize your pages and upload all assets..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inst_box">
              <div className="inst_box_1">
                <h1>Your community:x</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="n-container">
                  <div className="n-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  </div>
                  <div className="n-two">
                    <p>Can’t view</p>
                    <p>Your drop page or items until you publish them.</p>
                  </div>
                </div>
                <div className="n-container">
                  <div className="n-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <div className="n-two">
                    <p>Can view</p>
                    <p>That you’ve deployed a contract onto the blockchain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
         <div className="empty"></div>
        <div className="drop_button ">
<button className="btn ">Continue</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Collection;
