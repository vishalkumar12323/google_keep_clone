import React, { useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import { NoteData } from "./NoteData";

const Notes = (props) => {
  const { value, index } = props;
  const { setNote } = useContext(NoteData);
  // deleteNote Click Handler;
  const deleteNote = (id) => {
    setNote((previousValue) => {
      return previousValue.filter((value, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div
        className={`  flex flex-col py-1 px-2 mt-3 w-[33%] shadow-lg  border`}
      >
        <h2 className="title text-[15px] text-[#1e272e] font-bold">
          {value.title}
        </h2>
        <p className="text-[13px] text-[#1e272e] font-semibold">
          {value.contant}
        </p>
        <div className="mt-3 flex items-center">
          <Tooltip title="delete" arrow>
            <i
              className="fa-solid fa-trash text-[12px] text-red-500 hover:text-red-800 cursor-pointer hover:bg-gray-300 rounded-full p-1"
              onClick={() => {
                deleteNote(index);
              }}
            ></i>
          </Tooltip>
          <Tooltip title="edit" arrow>
            <i className="fa-solid fa-square-pen text-[15px] text-green-500 hover:text-green-800 cursor-pointer hover:bg-gray-300 rounded-full p-1"></i>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Notes;
