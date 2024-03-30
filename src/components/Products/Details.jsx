import React from "react";
import "../../css/main.css";

const Details = () => {
  return (
    <div className="details">
      <div className="owner">
        <h1>Owner</h1>
        <span className="owner_name">
          <div className="img_div glass_effect">
            <img
              src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
              alt=""
            />
          </div>
          bordbone
        </span>
      </div>
      <div className="royalty">
        <h1>Royalty: </h1>
        <span> 10%</span>
      </div>
      <div className="current_bid glass_effect">
        <h1>Current bid: </h1>
        <span> 10%</span>
      </div>

      <div className="category">
        <h1>Catergory</h1>
        <div className="category_container">
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
          <div className="category_container_box glass_effect">
            <span>App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
