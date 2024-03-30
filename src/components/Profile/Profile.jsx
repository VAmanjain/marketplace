import React from "react";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="pt-[11vh] min-h-[100vh] container_box black_bg profile">
        {/* <div className="cover_image bg-slate-50 w-full h-[30vh] "></div>
        <div className="profile_image bg-[#753be9e7] w-[12rem] h-[12rem] rounded-full absolute  top-[6%] left-[4rem] p-2 ">
          <img
            src="https://i.seadn.io/s/raw/files/a91f3e538fd31e2ff4204131e3fe8072.jpg?auto=format&dpr=1&h=500"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="w-full grid text-end py-2 ">
          <h1 className="font-semibold text-[2rem]">Name</h1>
          <span className="text-[1.2rem] font-medium">Somethings.....</span>
        </div> */}
         <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <img
          className="rounded-full w-[12rem] h-[12rem] shadow-md"
          src="https://i.seadn.io/s/raw/files/a91f3e538fd31e2ff4204131e3fe8072.jpg?auto=format&dpr=1&h=500"
          alt="Image description"
        />
      </div>
    </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
