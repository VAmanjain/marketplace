import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Top = () => {

  const numbers = Array.from({ length: 8 }, (_, i) => i + 1); // Concise array creation
  return (
    <section className="p-6 black_bg container_box top ">
      <div>
        <h1 className="mx-4">Top Items</h1>
        <div className="top_container my-2">
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
        <div className="w-[100%] mx-auto px-2 ">
        <button className="btn w-full  flex items-center ">
            View All Collection <BiRightArrowAlt/>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Top;
