import React, { useRef, useState } from "react";
import "../../css/main.css";
import { motion } from "framer-motion";
import Details from "./Details";
import Bids from "./Bids";
import CountdownTimer from "./CountdownTimer";

const ProductsDetails = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const inputRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Details",
      getContent: () => {
        return <Details />;
      },
    },
    {
      label: "Bids",
      getContent: () => {
        return <Bids />;
      },
    },
   
  ];


  return (
    <React.Fragment>
      <div className="pt-[11vh] black_bg container_box products_details ">
        <div className="products_details__left">
          <div className="products_details__preview glass_effect ">
            <div className="img_div">
              <img
                src="https://i.seadn.io/gae/DLA-sw1dn7YIpH-OCaY1Ci9GAO7Vc6tMlKV-46PqvdS7quNvRXfZB214rbFAv1qG7eKx8rqqS5qgNAATHQcy-tej1BPWrqeMDWPs?auto=format&dpr=1&h=500"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="products_details_right">
          <div className="products_details_info">
            <div className="nft_name">
              <h1> The Amazing AI </h1>
              <div className="like glass_effect ">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                21
              </div>
            </div>
            <div className="bid">
              <span>Highest Bid </span>
              0.11wETH
            </div>
            <div className="collection">
              <span>Collection Name</span>
              <div className="collection_details">
                <a href="/">
                  <div className="img_div glass_effect">
                    <img
                      src="https://rainbowit.net/html/nuron/assets/images/client/client-2.png"
                      alt=""
                    />
                  </div>
                  Brodband
                </a>
              </div>
            </div>

            <div className="tabs">
              <motion.ul className="tabs__list ">
                {tabs.map((tab, index) => (
                  <motion.li
                    key={index}
                    className={`tabs__item glass_effect ${
                      activeTab === index ? "tabs__item--active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>{tab.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div className="tabs__content">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={index}
                    className={`tabs__pane ${
                      activeTab === index ? "tabs__pane--active" : ""
                    }`}
                  >
                    {tab.getContent()} {/* Call the function to get content */}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="place_bid glass_effect">
              <CountdownTimer targetDate={"2024-04-01T00:00:00"} />
              <button className="btn place_bid_btn">Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsDetails;
