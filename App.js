import "./index.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Happy",
  "😑": "Frustrated",
  "🥰": "Loved",
  "😒": "Annoyed",
  "🙂": "Smiling",
  "🤦🏻": "Disbelief",
  "❤️": "Love"
  
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState();

  function inputHandler(event) {
    let userInput = event.target.value;

    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not in Database";
    }
    else if (meaning === undefined) {
      meaning = "Currently not in the Database";
    }

    console.log(meaning);
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    // console.log(emoji);
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style = {{backgroundColor: 'cyan'}}>Emoji Dictionary!</h1>
      <h2>Enter The Emoji:</h2>

      <input onChange={inputHandler} />
      <h2>{meaning}</h2>

      <div>
        <h3>Emojis We Know: </h3>
        {emojis.map(function (emoji) {
          return (
            <span
              onClick={() => clickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
