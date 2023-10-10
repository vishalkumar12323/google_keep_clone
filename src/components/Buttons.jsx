import React, { useContext, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { NoteData } from "./NoteData";
const Buttons = () => {
  const { setNote, inputValue, setInputValue, clearNote } =
    useContext(NoteData);
  const [bgColor, setBgColor] = useState("bg-white");
  const [bgColorPalette, setBgColorPalette] = useState(false);
  // addNote Click Handler
  const addNote = () => {
    if (!inputValue) {
      alert("please write your note before add");
    } else if (inputValue) {
      setNote((previousValue) => {
        return [...previousValue, inputValue];
      });
      setInputValue({ title: "", contant: "" });
    }
  };

  // convert text to upperCase
  const convertUpperCase = () => {
    let titleUpperCaseValue = inputValue.title.toUpperCase();
    let contantUpperCaseValue = inputValue.contant.toUpperCase();
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        title: titleUpperCaseValue,
        contant: contantUpperCaseValue,
      };
    });
  };
  // convert text to lowerCase
  const convertLowerCase = () => {
    let titleUpperCaseValue = inputValue.title.toLowerCase();
    let contantUpperCaseValue = inputValue.contant.toLowerCase();
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        title: titleUpperCaseValue,
        contant: contantUpperCaseValue,
      };
    });
  };

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
  const handleBackgroundColorChange = () => {
    backgroundColor.find(() => {});
  };
  return (
    <>
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
                      handleBackgroundColorChange();
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
          className=" disabled: fa-solid fa-plus hover:cursor-pointer bg-gray-50 p-1 rounded-full text-[12px] hover:bg-gray-300 hover:text-green-500 mr-1"
          onClick={addNote}
          disabled
        ></i>
      </Tooltip>
      <Tooltip title="add background" arrow>
        <i
          className="fa-regular fa-image hover:cursor-pointer bg-gray-50 p-1 rounded-full text-[12px] hover:bg-gray-300 hover:text-green-500 mr-1"
          onClick={() => {
            setBgColorPalette(!bgColorPalette);
          }}
        ></i>
      </Tooltip>
      <Tooltip title="convert uppercase" arrow>
        <i
          className="fa-solid fa-u hover:cursor-pointer bg-gray-50 p-1 px-[0.30rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-green-500 mr-1"
          onClick={convertUpperCase}
        ></i>
      </Tooltip>
      <Tooltip title="convert lowercase" arrow>
        <i
          className="fa-solid fa-l hover:cursor-pointer bg-gray-50 p-1 px-[0.32rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-green-500 mr-1"
          onClick={convertLowerCase}
        ></i>
      </Tooltip>
      <Tooltip title="clear" arrow>
        <i
          className="fa-solid fa-c hover:cursor-pointer bg-gray-50 p-1 px-[0.30rem] rounded-full text-[10px] hover:bg-gray-300 hover:text-green-500 mr-1"
          onClick={clearNote}
        ></i>
      </Tooltip>
    </>
  );
};

export default Buttons;
