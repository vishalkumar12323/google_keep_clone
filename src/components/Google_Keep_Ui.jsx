import React, { useContext } from "react";
import Notes from "./Notes";
import Buttons from "./Buttons";
import { NoteData } from "./NoteData";
const Google_Keep_Ui = () => {
  const { inputValue, handleInputValue, note } = useContext(NoteData);
  const handleInputClick = () => {
    const textarea = document.querySelector(".textarea");
    textarea.classList.remove("hidden");

    const buttons = document.querySelector(".buttons");
    buttons.classList.remove("hidden");
  };

  return (
    <>
      <div className=" w-[100%] mt-5 flex justify-center">
        <div
          className={` border border-gray-600 drop-shadow-lg note_box w-[50%] relative  rounded-md`}
        >
          <input
            onChange={handleInputValue}
            onClick={handleInputClick}
            name="title"
            value={inputValue.title}
            type="text"
            className={`text-[#1e272e] font-bold input w-[100%] outline-none p-2  text-[16px] placeholder:text-[17px] placeholder:text-gray-800 bg-transparent`}
            placeholder="Title..."
          />

          <textarea
            onChange={handleInputValue}
            name="contant"
            value={inputValue.contant}
            rows="5"
            className={`text-[#1e272e] font-semibold textarea hidden  w-[100%] outline-none p-2  text-[16px] placeholder:text-[16px] placeholder:text-gray-800 bg-transparent`}
            placeholder="Take a note..."
          ></textarea>
          <div className="buttons hidden flex-row gap-3 absolute bottom-2 left-1 textarea ">
            <Buttons />
          </div>
        </div>
      </div>
      <div className="w-screen grid place-items-center">
        <div className="flex flow-row flex-wrap gap-[5px] justify-start p-2 w-[80%] mt-2 h-fit">
          {note.map((value, index) => {
            return <Notes key={index} value={value} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Google_Keep_Ui;
