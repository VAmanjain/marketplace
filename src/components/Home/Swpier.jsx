import React from "react";
import Marquee from "react-fast-marquee";
import "../../css/main.css";

const Swpier = () => {

  return (
    <section className="p-6 black_bg container_box">
      <div className="py-5">
        <Marquee pauseOnHover={true}>
          <div className="my-2 mx-16 max-w-full  grid col-span-2 cursor-pointer ">
            <div className="c-card">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029"
                alt=""
                className="img"
              />
              <div className="textBox">
                <p className="text head">Etherum</p>

                <p className="text price"> $1000</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-16 max-w-full  grid col-span-2 cursor-pointer">
            <div className="c-card">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029"
                alt=""
                className="img"
              />
              <div className="textBox">
                <p className="text head">Etherum</p>

                <p className="text price"> $1000</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-16 max-w-full  grid col-span-2 cursor-pointer">
            <div className="c-card">
              <img
                src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=029"
                alt=""
                className="img"
              />
              <div className="textBox">
                <p className="text head">Etherum</p>

                <p className="text price"> $1000</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-16 max-w-full  grid col-span-2 cursor-pointer">
            <div className="c-card">
              <img
                src="https://cryptologos.cc/logos/xrp-xrp-logo.png?v=029"
                alt=""
                className="img"
              />
              <div className="textBox">
                <p className="text head">Etherum</p>

                <p className="text price"> $1000</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-16 max-w-full  grid col-span-2 cursor-pointer">
            <div className="c-card">
              <img
                src="https://cryptologos.cc/logos/chainlink-link-logo.png?v=029"
                alt=""
                className="img"
              />
              <div className="textBox">
                <p className="text head">Etherum</p>

                <p className="text price"> $1000</p>
              </div>
            </div>
          </div>
         
        </Marquee>
      </div>
    </section>
  );
};

export default Swpier;
