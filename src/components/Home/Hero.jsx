import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//Swiperjs css import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/main.css";

const Hero = () => {
  const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="hero container_box black_bg">
      <div className="hero_left">
        <h1>
          COLLECT
          <span className="span-1"> </span>
          AND CREATE YOUR NFT
        </h1>
        <p>
          Where Bitcoin was hailed as the digital answer to currency, NFTs are
          now being touted as the digital answer to collectables.
        </p>
        <button className="btn mb-[2rem] ">Explore</button>
      </div>
      <div className="hero_right">
        <div class="card ">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="card-inner z-20">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="img_div">
                  <a href="/productsDetails">
                    <img
                      src="https://i.seadn.io/s/raw/files/a91f3e538fd31e2ff4204131e3fe8072.jpg?auto=format&dpr=1&h=500"
                      alt=""
                    />
                  </a>
                </div>
                <div className="img_content flex justify-between items-center">
                  <div className="owner">
                    <a href="/" className="flex justify-center items-center">
                      <img
                        src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0F2SEk1T2dDZHBMaWhQblE0OFJhdF92OHh5LUlORXNEQU44aWQ4bmFhWnJINkp3Y1lxc0Y2TGN2UUFuRG91YmJlbVJvU3psOUZnOE80T3poZUF3VDNtU1VTNURwWWU1NE95eUxydz1zMTIw"
                        alt="owner"
                      />
                      <span className="p-2 text-[0.85rem]">
                        <h1 className="text-[0.95rem]">Owner</h1>
                        Owner id
                      </span>
                    </a>
                  </div>
                  <div className="bid">
                    <h1 className="text-[0.95rem]">Current Bid</h1>
                    <span className="text-[0.85rem]">1ETH</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_div">
                  <a href="/">
                    <img
                      src="https://i.seadn.io/s/raw/files/2cb6f80f48e9f8c3a3427b5f3710ec11.png?auto=format&dpr=1&h=500"
                      alt=""
                    />
                  </a>
                </div>
                <div className="img_content flex justify-between items-center">
                  <div className="owner">
                    <a href="/" className="flex justify-center items-center">
                      <img
                        src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0F2SEk1T2dDZHBMaWhQblE0OFJhdF92OHh5LUlORXNEQU44aWQ4bmFhWnJINkp3Y1lxc0Y2TGN2UUFuRG91YmJlbVJvU3psOUZnOE80T3poZUF3VDNtU1VTNURwWWU1NE95eUxydz1zMTIw"
                        alt="owner"
                      />
                      <span className="p-2 text-[0.85rem]">
                        <h1 className="text-[0.95rem]">Owner</h1>
                        Owner id
                      </span>
                    </a>
                  </div>
                  <div className="bid">
                    <h1 className="text-[0.95rem]">Highest Bid</h1>
                    <span className="text-[0.85rem]">1ETH</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img_div">
                  <a href="/">
                    <img
                      src="https://i.seadn.io/s/raw/files/0ae8e4c028150b81a7235fd1b5d9e2d1.png?auto=format&dpr=1&h=500"
                      alt=""
                    />
                  </a>
                </div>
                <div className="img_content flex justify-between items-center">
                  <div className="owner">
                    <a href="/" className="flex justify-center items-center">
                      <img
                        src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0F2SEk1T2dDZHBMaWhQblE0OFJhdF92OHh5LUlORXNEQU44aWQ4bmFhWnJINkp3Y1lxc0Y2TGN2UUFuRG91YmJlbVJvU3psOUZnOE80T3poZUF3VDNtU1VTNURwWWU1NE95eUxydz1zMTIw"
                        alt="owner"
                      />
                      <span className="p-2 text-[0.85rem]">
                        <h1 className="text-[0.95rem]">Owner</h1>
                        Owner id
                      </span>
                    </a>
                  </div>
                  <div className="bid">
                    <h1 className="text-[0.95rem]">Highest Bid</h1>
                    <span className="text-[0.85rem]">1ETH</span>
                  </div>
                </div>
              </SwiperSlide>

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  {/* <circle cx="24" cy="24" r="20"></circle> */}
                </svg>
                {/* <span ref={progressContent}></span> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
