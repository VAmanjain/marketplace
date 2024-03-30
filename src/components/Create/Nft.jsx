import React, { useRef, useState } from "react";
import "../../css/main.css";
import FilePreview from "./FilePreview";
import { motion } from "framer-motion";
import Fixed from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const Nft = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const inputRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
 
// /
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission here
//   };

  const tabs = [
    {
      label: "Fixed Price",
      p: "lorem",
      getContent: () => {
        return (
          <Fixed/>
        );
      },
    },
    {
      label: "Time Auction",
      p: "lorem",
      getContent: () =>{
        return(
          <Form2/>
        )
      },
    },
    {
      label: "Open for Bids",
      p: "lorem",
      getContent: () => {
        return(
          <Form3/>
        )
      },
    },
  ];

  const handleChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleClear = () => {
    setImageFiles([]);
    if (inputRef?.current) {
      inputRef.current.value = "";
      inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const resetInputFile = (inputElement) => {
    if (inputElement.value) {
      inputElement.value = "";
    }
    if (inputElement.length) {
      inputElement.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };
  return (
    <React.Fragment>
      <div className="create_nft container_box black_bg">
        <div className="create_nft__preview">
          <div className="file-input-wrapper ">
            <div className="file-input-button-wrapper ">
              <label
                htmlFor="file-input"
                className="file-input-button w-full h-full flex justify-center items-center  "
              >
                Upload File
                <span className="file-input-button-extension mx-2 p-1">
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
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </span>
              </label>
              <input
                id="file-input"
                type="file"
                accept=".png,.jpeg,.jpg,.mp3,.mp4"
                className="file-input"
                maxLength={120 * 1024 * 1024} // Max 120 MB
                onChange={handleChange}
                ref={(ref) => (inputRef.current = ref)}
                multiple
                onLoad={(event) => resetInputFile(event.target)}
              />
            </div>
            {imageFiles.length > 0 && (
              <button className="file-input-clear-button" onClick={handleClear}>
                Clear
              </button>
            )}
          </div>
          <div className="file-preview-wrapper">
            {imageFiles.map((file, index) => (
              <FilePreview key={`${file.name}-${index}`} file={file} />
            ))}
          </div>
        </div>

        <div className="create_nft__form">
          <h1>Select Method</h1>
          <div className="tabs">
            <motion.ul className="tabs__list">
              {tabs.map((tab, index) => (
                <motion.li
                  key={index}
                  className={`tabs__item ${
                    activeTab === index ? "tabs__item--active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>{tab.label}</span>
                  <p>{tab.p}</p>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nft;
