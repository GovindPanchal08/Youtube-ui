import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import ytlogo from "../images/yt-logo.png";
import ytlogomobile from "../images/yt-logo-mobile.png";
import { Context } from "../context/Context";
import Loader from "../shared/Loader";

function Header() {
  const [Searchquery, setSearchquery] = useState("");
  const { loading, mobilemenu, setmobilemenu } = useContext(Context);

  const navigate = useNavigate();

  const searchqueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      Searchquery?.length > 0
    ) {
      navigate(`/SearchResult/${Searchquery}`);
    }
    console.log("was clicked ");
  };
  const mobilemenuToggle = () => {
    setmobilemenu(!mobilemenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/").filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5   dark:bg-white   bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video " && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer  items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobilemenuToggle}
          >

            {mobilemenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}{" "}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img className="h-full hidden   dark: md:block " src={ytlogo} />
          <img className="h-full md:hidden  " src={ytlogomobile} alt="" />
        </Link>
      </div>
      <div className="group flex  items-center ">
        <div className="flex h8 md:h-10 md:ml-10 md:pl-5 border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
          type="text"
           placeholder="Search"
          className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-foucs-within:pl-0  md:w-64 lg:w-[500px] "
          value={Searchquery}
          onChange={(e) => setSearchquery(e.target.value)}
          onKeyUp={searchqueryHandler}
          name=""
          id=""
        />
        </div>
        <button className="w-[40px]  md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/20">
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
        <div className="flex items-center ">
          <div className="hidden md:flex" >
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" >
              <RiVideoAddLine className="text-white text-xl cursor-pointer"/>
            </div>
            <div className="flex items-center justify-center ml-2  h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" >
              <FiBell className="text-white text-xl cursor-pointer"/>
            </div>

          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 "> 
            <img src="https://media.istockphoto.com/id/1224555060/photo/adapting-the-new-normal.webp?b=1&s=170667a&w=0&k=20&c=fSA_zd3EZGUv0z-ralCdQsvyqV9_sZlezdyBWBZec50=" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Header;
