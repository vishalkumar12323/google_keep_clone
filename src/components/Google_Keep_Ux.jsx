import React, { useEffect, useState } from "react";
import Google_Keep_Ui from "./Google_Keep_Ui";
import Navbar from "./Navbar";
import { NoteData } from "./NoteData";
const getLocalStorageData = () => {
  const notes = localStorage.getItem("myNotes");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};
const Google_Keep_Ux = () => {
  const [inputValue, setInputValue] = useState({ title: "", contant: "" });
  const [note, setNote] = useState(getLocalStorageData());

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  //storeData in LocalStorage
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(note));
  }, [note]);
  const clearNote = () => {
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        title: "",
        contant: "",
      };
    });
  };
  return (
    <>
      <NoteData.Provider
        value={{
          note,
          setNote,
          clearNote,
          setInputValue,
          inputValue,
          handleInputValue,
        }}
      >
        <Navbar />
        <Google_Keep_Ui />
      </NoteData.Provider>
    </>
  );
};

export default Google_Keep_Ux;
