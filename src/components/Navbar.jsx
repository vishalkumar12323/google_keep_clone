import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="w-[100%] flex flex-row border-b border-gray-300 bg-slate-400 py-2 px-3  items-center h-[3rem]">
        <div className="logo flex flex-row gap-1 items-center">
          <i className="fa-solid fa-file text-yellow-500 text-[2.2rem] "></i>
          <h1 className="text-[20px] text-white"> Keep </h1>
        </div>
        <div className="search-input ml-10 px-2 w-[50%] flex flex-row items-center rounded-md bg-white drop-shadow-md transition-all">
          <i className="fa-solid fa-magnifying-glass text-[14px] mt-[2px] hover:bg-gray-300  hover:cursor-pointer p-[5px] rounded-full text-gray-400"></i>
          <input
            type="search"
            className="w-[100%] p-[5px] px-1 ml-1  outline-none  text-[15px] transition-all placeholder:text-gray-500"
            placeholder="search your notes.."
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
