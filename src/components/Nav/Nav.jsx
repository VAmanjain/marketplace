// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import "../../css/main.css";
// import { AnimatePresence, motion } from "framer-motion";

// const Nav = () => {
//   return (
//     <nav className="flex justify-between container_box items-center w-full h-[10vh] nav_bar z-20 fixed black_bg ">
//       <div>
//         <Link to="/">
//           <img
//             src="logo.png"
//             alt="logo"
//             className="w-[4.5rem] h-[4.5rem] bg-transparent "
//           />
//         </Link>
//       </div>
//       {/* Search  */}
//       <div>
//         <form class="w-[18vw] ">
//           <label
//             for="default-search"
//             class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//           >
//             Search
//           </label>
//           <div class="relative">
//             <input
//               type="search"
//               id="default-search"
//               class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#7d12ff] focus:border-[#7d12ff] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#7d12ff] dark:focus:border-[#7d12ff]"
//               placeholder="Search Mockups, Logos..."
//               required
//             />
//             <button
//               type="submit"
//               class="text-white absolute end-2.5 bottom-2.5 bg-[#7d12ff] hover:bg-[#7d12ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#7d12ff] dark:hover:bg-[#7d12ff] dark:focus:ring-[#7d12ff]"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-4 h-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* Links  */}
//       <div>
//         <ul className="flex">
//           <li>
//             <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//               <FlyoutLink href="#" FlyoutContent={CreateContent}>
//                 Create
//               </FlyoutLink>
//             </div>
//           </li>

//           <li>
//             <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//               <FlyoutLink href="#" FlyoutContent={ExploreContent}>
//                 Explore
//               </FlyoutLink>
//             </div>
//           </li>

//           <li>
//             <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//               <Link to="/about">Sell</Link>
//             </div>
//           </li>
//         </ul>
//       </div>
//       {/* Change to ecom */}
//       <div>
//         <svg
//           data-tooltip-id="switch to ecom"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//           />
//         </svg>
//         <ReactTooltip
//           id="switch to ecom"
//           place="bottom"
//           variant="info"
//           content="switch to Ecom"
//           style={{
//             backgroundColor: "#7d12ff",
//             color: "#fff",
//             borderRadius: "4px",
//           }}
//           className="tooltip"
//         />
//       </div>
//       {/* bottun */}
//       <div className="btn">
//         <button type="button">Wallet connect</button>
//       </div>

//       {/* //cart */}
//       <div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
//           />
//         </svg>
//       </div>
//     </nav>
//   );
// };

// const FlyoutLink = ({ children, href, FlyoutContent }) => {
//   const [open, setOpen] = useState(false);

//   const showFlyout = FlyoutContent && open;

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       className="relative w-fit h-fit"
//     >
//       <a href={href} className="relative text-white">
//         {children}
//       </a>
//       <AnimatePresence>
//         {showFlyout && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             style={{ translateX: "-50%" }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="absolute left-1/2 top-12"
//           >
//             <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
//             <FlyoutContent />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const CreateContent = () => {
//   return (
//     <div className=" glass_effect p-3  w-[8rem] ">
//       <div className=" space-y-3  text-center">
//         <ul className="w-full mx-auto">
//           <li className="py-3 w-full mx-auto glass_effect_hover ">
//             <Link to="/nft">NFT</Link>
//           </li>
//           <li className="py-3 w-full  glass_effect_hover">
//             <Link to="/collection">Collection</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// const ExploreContent = () => {
//   return (
//     <div className=" glass_effect p-3  w-[8rem] ">
//       <div className=" space-y-3  text-center">
//         <ul className="w-full mx-auto">
//           <li className="py-3 w-full mx-auto glass_effect_hover ">
//             <Link to="/explore/nft">NFT</Link>
//           </li>
//           <li className="py-3 w-full  glass_effect_hover">
//             <Link to="/explore/collection">Collection</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// const Nav = () => {

//   const FlyoutLink = ({ children, href, FlyoutContent }) => {
//   const [open, setOpen] = useState(false);

//   const showFlyout = FlyoutContent && open;

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       className="relative w-fit h-fit"
//     >
//       <a href={href} className="relative text-white">
//         {children}
//       </a>
//       <AnimatePresence>
//         {showFlyout && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 15 }}
//             style={{ translateX: "-50%" }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="absolute left-1/2 top-12"
//           >
//             <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
//             <FlyoutContent />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const CreateContent = () => {
//   return (
//     <div className=" glass_effect p-3  w-[8rem] ">
//       <div className=" space-y-3  text-center">
//         <ul className="w-full mx-auto">
//           <li className="py-3 w-full mx-auto glass_effect_hover ">
//             <Link to="/nft">NFT</Link>
//           </li>
//           <li className="py-3 w-full  glass_effect_hover">
//             <Link to="/collection">Collection</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// const ExploreContent = () => {
//   return (
//     <div className=" glass_effect p-3  w-[8rem] ">
//       <div className=" space-y-3  text-center">
//         <ul className="w-full mx-auto">
//           <li className="py-3 w-full mx-auto glass_effect_hover ">
//             <Link to="/explore/nft">NFT</Link>
//           </li>
//           <li className="py-3 w-full  glass_effect_hover">
//             <Link to="/explore/collection">Collection</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

//   return (
//     <>
//       <div className="nav-outer black_bg">
//         <div className="nav-img-container">
//           <img src="logo.png" alt="" />

//         </div>

//         <Form inline>
//           <Row>
//             <Col xs="auto" className="nav-search-input ver-mid nav-search-w">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className=" mr-sm-2 "
//               />
//             </Col>
//             <Col xs="auto" className="nav-search-input">
//               <Button type="submit">Submit</Button>
//             </Col>
//           </Row>
//         </Form>


//         <div>
//          <ul className="flex">
//            <li>
//              <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//                <FlyoutLink href="#" FlyoutContent={CreateContent}>
//                  Create
//                </FlyoutLink>
//              </div>
//            </li>

//            <li>
//              <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//                <FlyoutLink href="#" FlyoutContent={ExploreContent}>
//                  Explore
//                </FlyoutLink>
//              </div>
//            </li>

//            <li>
//              <div className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-[1.1rem] font-semibold  ">
//                <Link to="/about">Sell</Link>
//              </div>
//            </li>
//          </ul>
//        </div>



//         <div className="btn">
//         <button type="button">Wallet connect</button>
//        </div>

//        <div>
//          <svg
//           data-tooltip-id="switch to ecom"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//           />
//         </svg>
//         <ReactTooltip
//           id="switch to ecom"
//           place="bottom"
//           variant="info"
//           content="switch to Ecom"
//           style={{
//             backgroundColor: "#7d12ff",
//             color: "#fff",
//             borderRadius: "4px",
//           }}
//           className="tooltip"
//         />
//       </div>

//       </div>
//     </>
//   );
// };

// export default Nav;

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const FlyoutLink = ({ children, href, FlyoutContent }) => {
//     const [open, setOpen] = useState(false);

//     const showFlyout = FlyoutContent && open;

//     return (
//       <div
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//         className="relative w-fit h-fit"
//       >
//         <a href={href} className="relative text-white">
//           {children}
//         </a>
//         <AnimatePresence>
//           {showFlyout && (
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 15 }}
//               style={{ translateX: "-50%" }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="absolute left-1/2 top-12"
//             >
//               <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
//               <FlyoutContent />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   };

//   const CreateContent = () => {
//     return (
//       <div className="glass_effect p-3 w-[8rem]">
//         <div className="space-y-3 text-center">
//           <ul className="w-full mx-auto">
//             <li className="py-3 w-full mx-auto glass_effect_hover">
//               <Link to="/nft">NFT</Link>
//             </li>
//             <li className="py-3 w-full glass_effect_hover">
//               <Link to="/collection">Collection</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   const ExploreContent = () => {
//     return (
//       <div className="glass_effect p-3 w-[8rem]">
//         <div className="space-y-3 text-center">
//           <ul className="w-full mx-auto">
//             <li className="py-3 w-full mx-auto glass_effect_hover">
//               <Link to="/explore/nft">NFT</Link>
//             </li>
//             <li className="py-3 w-full glass_effect_hover">
//               <Link to="/explore/collection">Collection</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="nav-outer black_bg">
//         <div className="nav-img-container">
//           <img src="logo.png" alt="" />
//         </div>

//         <Form inline>
//           <Row>
//             <Col xs="auto" className="nav-search-input ver-mid nav-search-w">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//               />
//             </Col>
//             <Col xs="auto" className="nav-search-input">
//               <Button type="submit">Submit</Button>
//             </Col>
//           </Row>
//         </Form>

//         <button
//           className="hamburger-menu"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>

//         <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
//           <ul>
//             <li>
//               <div className="inline-flex justify-center gap-x-1.5 px-3 py-2 text-[1.1rem] font-semibold">
//                 <FlyoutLink href="#" FlyoutContent={CreateContent}>
//                   Create
//                 </FlyoutLink>
//               </div>
//             </li>
//             <li>
//               <div className="inline-flex justify-center gap-x-1.5 px-3 py-2 text-[1.1rem] font-semibold">
//                 <FlyoutLink href="#" FlyoutContent={ExploreContent}>
//                   Explore
//                 </FlyoutLink>
//               </div>
//             </li>
//             <li>
//               <div className="inline-flex justify-center gap-x-1.5 px-3 py-2 text-[1.1rem] font-semibold">
//                 <Link to="/about">Sell</Link>
//               </div>
//             </li>
//           </ul>
//         </div>

//         <div className="btn">
//           <button type="button">Wallet connect</button>
//         </div>

//         <div>
//           <svg
//             data-tooltip-id="switch to ecom"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//             />
//           </svg>
//           <ReactTooltip
//             id="switch to ecom"
//             place="bottom"
//             variant="info"
//             content="switch to Ecom"
//             style={{
//               backgroundColor: "#7d12ff",
//               color: "#fff",
//               borderRadius: "4px",
//             }}
//             className="tooltip"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;
// import { useState } from 'react';
// import { Form, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative text-white">
          {children}
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const CreateContent = () => {
    return (
      <div className="glass_effect p-3 w-[6rem] sm:w-[8rem]">
        <div className="space-y-3 text-center">
          <ul className="w-full mx-auto">
            <li className="py-3 w-full mx-auto glass_effect_hover">
              <Link to="/nft">NFT</Link>
            </li>
            <li className="py-3 w-full glass_effect_hover">
              <Link to="/collection">Collection</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const ExploreContent = () => {
    return (
      <div className="glass_effect p-3 w-[6rem] sm:w-[8rem]">
        <div className="space-y-3 text-center">
          <ul className="w-full mx-auto">
            <li className="py-3 w-full mx-auto glass_effect_hover">
              <Link to="/explore/nft">NFT</Link>
            </li>
            <li className="py-3 w-full glass_effect_hover">
              <Link to="/explore/collection">Collection</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="nav-outer black_bg relative">
        <div className="nav-img-container">
          <img src="logo.png" alt="" />
        </div>

        <Form inline>
          <Row>
            <Col xs="auto" className="nav-search-input ver-mid nav-search-w">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
            <Col xs="auto" className="nav-search-input">
              <Button type="submit" className="nav-btnn">Submit</Button>
            </Col>
          </Row>
        </Form>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-12 left-1/2 transform  bg-black text-white p-4 rounded-md shadow-md">
            <div className="flex flex-col items-center gap-2">
              <FlyoutLink href="#" FlyoutContent={CreateContent}>
                Create
              </FlyoutLink>
              <FlyoutLink href="#" FlyoutContent={ExploreContent}>
                Explore
              </FlyoutLink>
              <Link to="/about" className="font-semibold">
                Sell
              </Link>
            </div>
          </div>
        )}

        <div className="btn btnn">
          <button type="button">Wallet connect</button>
        </div>

        <div>
          <svg
            data-tooltip-id="switch to ecom"
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <ReactTooltip
            id="switch to ecom"
            place="bottom"
            variant="info"
            content="switch to Ecom"
            style={{
              backgroundColor: "#7d12ff",
              color: "#fff",
              borderRadius: "4px",
            }}
            className="tooltip"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
