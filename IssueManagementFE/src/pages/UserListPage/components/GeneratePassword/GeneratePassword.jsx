import React, { useState } from "react";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";

export const GeneratePassword = ({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  placeholder,
  classNameDiv,
  classNameInput,
  label,
  important,
  isRandom,
}) => {
  const [passwordGen, setPasswordGen] = useState({
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    numbers: numbers,
    symbols: symbols,
  });
  const [handelText, setHandelText] = useState("");
  const [random, setRandom] = useState(true);

  const handleChangeUppercase = () => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  //   const setPasswordLength = (val) => {
  //     setPasswordGen({
  //       ...passwordGen,
  //       length: val,
  //     });
  //   };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandelText(characters.join(""));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    <>
      {random === true ? (
        <BaseInputField
          type="password"
          value={handelText}
          onClick={generatePassword}
          placeholder={placeholder}
          label={label}
          classNameInput={classNameInput}
          classNameDiv={classNameDiv}
          important={important}
          random={random}
          isRandom={isRandom}
          setRandom={setRandom}
        />
      ) : (
        <BaseInputField
          type="password"
          placeholder={placeholder}
          label={label}
          classNameInput={classNameInput}
          classNameDiv={classNameDiv}
          important={important}
          random={random}
          isRandom={isRandom}
          setRandom={setRandom}
        />
      )}
    </>
  );
};
