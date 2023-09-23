import React, { useEffect, useState } from "react";
import Google_Keep_Ui from "./Google_Keep_Ui";
import Navbar from "./Navbar";
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

  // addNote Click Handler
  const addNote = () => {
    setNote((previousValue) => {
      return [...previousValue, inputValue];
    });
    setInputValue({ title: "", contant: "" });
  };

  // deleteNote Click Handler;
  const deleteNote = (id) => {
    setNote((previousValue) => {
      return previousValue.filter((value, index) => {
        return index !== id;
      });
    });
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
      <Navbar />
      <Google_Keep_Ui
        note={note}
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        addNote={addNote}
        convertUpperCase={convertUpperCase}
        convertLowerCase={convertLowerCase}
        clearNote={clearNote}
        deleteNote={deleteNote}
      />
    </>
  );
};

export default Google_Keep_Ux;
