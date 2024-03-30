import { useState, useRef, useEffect } from 'react';
import { motion, spring } from 'framer-motion';
import "../../css/main.css";

import * as Ariakit from "@ariakit/react";

const CollectionExplore = () => {
  const numbers = Array.from({ length: 15 }, (_, i) => i + 1); // Concise array creation


  return (
    <div className="black_bg container_box pt-[11vh] explore_collection">
      <h1>Collection</h1>
     <div className='filter '>

     
<div className='filter_container'>
<div className="wrapper">
      <Ariakit.SelectProvider defaultValue="Apple">
        <Ariakit.SelectLabel className="label">
          Favorite fruit
        </Ariakit.SelectLabel>
        <Ariakit.Select className="button" />
        <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
          <Ariakit.SelectItem className="select-item" value="Apple" />
          <Ariakit.SelectItem className="select-item" value="Banana" />
          <Ariakit.SelectItem className="select-item" value="Grape" disabled />
          <Ariakit.SelectItem className="select-item" value="Orange" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
<div className="wrapper">
      <Ariakit.SelectProvider defaultValue="Apple">
        <Ariakit.SelectLabel className="label">
          Favorite fruit
        </Ariakit.SelectLabel>
        <Ariakit.Select className="button" />
        <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
          <Ariakit.SelectItem className="select-item" value="Apple" />
          <Ariakit.SelectItem className="select-item" value="Banana" />
          <Ariakit.SelectItem className="select-item" value="Grape" disabled />
          <Ariakit.SelectItem className="select-item" value="Orange" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
<div className="wrapper">
      <Ariakit.SelectProvider defaultValue="Apple">
        <Ariakit.SelectLabel className="label">
          Favorite fruit
        </Ariakit.SelectLabel>
        <Ariakit.Select className="button" />
        <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
          <Ariakit.SelectItem className="select-item" value="Apple" />
          <Ariakit.SelectItem className="select-item" value="Banana" />
          <Ariakit.SelectItem className="select-item" value="Grape" disabled />
          <Ariakit.SelectItem className="select-item" value="Orange" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
<div className="wrapper">
      <Ariakit.SelectProvider defaultValue="Apple">
        <Ariakit.SelectLabel className="label">
          Favorite fruit
        </Ariakit.SelectLabel>
        <Ariakit.Select className="button" />
        <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
          <Ariakit.SelectItem className="select-item" value="Apple" />
          <Ariakit.SelectItem className="select-item" value="Banana" />
          <Ariakit.SelectItem className="select-item" value="Grape" disabled />
          <Ariakit.SelectItem className="select-item" value="Orange" />
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
</div>
     </div>


      <div className="collection_container">
        {numbers.map((number, index) => ( // Consistent indentation
          <div className="collection" key={index}>
            <div className="user-profile">
              <div className="user-info">
                <img
                  src="https://i.seadn.io/s/raw/files/c8a9c700170dc5c2e2462f0b7e56da7e.png?auto=format&dpr=1&w=48"
                  alt="User avatar"
                />
                <div className="user-details">
                  <div className="user">
                    <span className="username">Mason Woodward</span>
                    <div className="product-count">
                      <span className="product-number">26</span>
                      <span className="product-text">items</span> {/* Corrected text */}
                    </div>
                  </div>
                  <span className="follower-count">
                    <button>Following</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="collection_images">
              <div className="img_div">
                <img
                  src="https://i.seadn.io/s/raw/files/790e7959fd1cc45f031e43bd3e606eb6.png?auto=format&dpr=1&w=384"
                  alt="Collection image 1" 
                />
              </div>
              <div className="img_div">
                <img
                  src="https://i.seadn.io/s/raw/files/694d4eace73506b4a15337d3b9f5e2b1.png?auto=format&dpr=1&w=384"
                  alt="Collection image 2" 
                />
              </div>
              <div className="img_div">
                <img
                  src="https://i.seadn.io/s/raw/files/a6f5e29a4b010111513d19a7bffdea65.png?auto=format&dpr=1&w=384"
                  alt="Collection image 3" 
                />
              </div>
              <div className="img_div">
                <img
                  src="https://i.seadn.io/s/raw/files/c0c99b74fce8a6d6a0d3c78b34bc0572.png?auto=format&dpr=1&w=384"
                  alt="Collection image 4" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionExplore;
