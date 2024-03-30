import { useState, useRef, useEffect } from 'react';
import { motion, spring } from 'framer-motion';
import "../../css/main.css";

import * as Ariakit from "@ariakit/react";

const NftExplore = () => {
  const numbers = Array.from({ length: 15 }, (_, i) => i + 1); // Concise array creation


  return (
    <div className="black_bg container_box pt-[11vh] explore_collection">
      <h1>NFT's</h1>
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

<div className="top">


      <div className="top_container">
        {numbers.map((number, index) => ( // Consistent indentation
          <div class="card my-3 " key={index} >
          <div class="card__content ">
            <div className="img_div ">
              <img
                src="https://i.seadn.io/gcs/files/9bac6e05942fda332d71a0782320b238.png?auto=format&dpr=1&h=500"
                alt=""
              />
            </div>
            <div className="owner">
              <a href="/productsDetails">
                <img
                  src="https://madebydesignesia.com/themes/gigaland/images/author/author-1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="top_desc">
              <h1>Name</h1>

              <div className="desc my-1  ">
                <p>
                  <span className="mb-1">Price</span>
                  0.001ETH
                </p>
                <p>
                  <span className="mb-1">Highest bid</span>
                  No bid yet
                </p>
              </div>
            </div>
          </div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default NftExplore;
