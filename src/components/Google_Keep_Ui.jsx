import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const Google_Keep_Ui = (props) => {
  const [bgColor, setBgColor] = useState({
    bg_Color: "bg-white",
    bgColorId: Number(0),
  });
  const [bgColorPalette, setBgColorPalette] = useState(false);
  const {
    handleInputValue,
    addNote,
    inputValue,
    note,
    convertUpperCase,
    convertLowerCase,
    clearNote,
    deleteNote,
  } = props;

  const backgroundColor = [
    "bg-[#4b6584]",
    "bg-[#7bed9f]",
    "bg-[#fd79a8]",
    "bg-[#32ff7e]",
    "bg-teal-500",
    "bg-[#a29bfe]",
    "bg-[#feca57]",
    "bg-[#81ecec]",
    "bg-[#C4E538]",
    "bg-[#cc8e35]",
    "bg-[#EE5A24]",
    "bg-[#eb3b5a]",
    "bg-[#eb2f06]",
    "bg-[#fd79a8]",
    "bg-[#FFC312]",
  ];
  const handleInputClick = () => {
    const textarea = document.querySelector(".textarea");
    textarea.classList.remove("hidden");

    const buttons = document.querySelector(".buttons");
    buttons.classList.remove("hidden");
  };
  const handleBackgroundColorChange = (id) => {
    backgroundColor.find((value, index) => {
      if (index === id) {
        setBgColor((previousValue) => {
          return {
            ...previousValue,
            bg_Color: value,
            bgColorId: index,
          };
        });
      }
    });
  };
  return (
    <>
      <div className=" w-[100%] mt-5 flex justify-center">
        <div
          className={` ${bgColor.bg_Color} ${bgColor.bgColorId} drop-shadow-lg note_box w-[50%] relative  rounded-md`}
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
            {bgColorPalette && (
              <>
                <ul className=" flex flex-row gap-2  ">
                  {backgroundColor.map((value, index) => {
                    return (
                      <>
                        <li
                          className={`p-[0.60rem] rounded-full w-[5px] cursor-pointer ${value} shadow-lg`}
                          key={index}
                          onClick={() => {
                            handleBackgroundColorChange(index);
                          }}
                        ></li>
                      </>
                    );
                  })}
                </ul>
              </>
            )}

            <Tooltip title="add note" arrow>
              <i
                className="fa-solid fa-plus hover:cursor-pointer bg-gray-50 p-1 rounded-full text-[12px] hover:bg-gray-300 hover:text-yellow-600 mr-1"
                onClick={addNote}
              ></i>
            </Tooltip>
            <Tooltip title="add background" arrow>
              <i
                className="fa-regular fa-image hover:cursor-pointer bg-gray-50 p-1 rounded-full text-[12px] hover:bg-gray-300 hover:text-yellow-600 mr-1"
                onClick={() => {
                  setBgColorPalette(!bgColorPalette);
                }}
              ></i>
            </Tooltip>
            <Tooltip title="convert uppercase" arrow>
              <i
                className="fa-solid fa-u hover:cursor-pointer bg-gray-50 p-1 px-[0.30rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-yellow-600 mr-1"
                onClick={convertUpperCase}
              ></i>
            </Tooltip>
            <Tooltip title="convert lowercase" arrow>
              <i
                className="fa-solid fa-l hover:cursor-pointer bg-gray-50 p-1 px-[0.32rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-yellow-600 mr-1"
                onClick={convertLowerCase}
              ></i>
            </Tooltip>
            <Tooltip title="clear" arrow>
              <i
                className="fa-solid fa-c hover:cursor-pointer bg-gray-50 p-1 px-[0.30rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-yellow-600 mr-1"
                onClick={clearNote}
              ></i>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="w-screen grid place-items-center">
        <div className="flex flow-row flex-wrap gap-[5px] justify-start p-2 w-[80%] mt-2 h-fit">
          {note.map((value, index) => {
            return (
              <>
                <div
                  className={` ${bgColor.bg_Color} ${bgColor.bgColorId} flex flex-col py-1 px-2 mt-3 w-[33%] shadow-lg  border`}
                  key={index}
                >
                  <h2 className="title text-[15px] text-[#1e272e] font-bold">
                    {value.title}
                  </h2>
                  <p className="text-[13px] text-[#1e272e] font-semibold">
                    {value.contant}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Tooltip title="edit" arrow>
                      <i className="fa-solid fa-file-pen text-[11px] hover:text-green-700 cursor-pointer hover:bg-gray-300 rounded-full p-1"></i>
                    </Tooltip>
                    <Tooltip title="delete" arrow>
                      <i
                        className="fa-solid fa-trash text-[11px] hover:text-red-800 cursor-pointer hover:bg-gray-300 rounded-full p-1"
                        onClick={() => {
                          deleteNote(index);
                        }}
                      ></i>
                    </Tooltip>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Google_Keep_Ui;
