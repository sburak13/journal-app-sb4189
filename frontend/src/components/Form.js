import React from "react";
import './Entry.css'
import EmojiPicker from "emoji-picker-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form(props) {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const number = currentDate.getDate();
  const year = currentDate.getFullYear();
  const date = `${month + 1}_${number}_${year}`;

  const navigate = useNavigate();

  const [content, setContent] = React.useState("");
  const [emoji, setEmoji] = React.useState("");

  function updateContent(event) {
    setContent(event.target.value);
  }

  function updateEmoji(emojiData, event) {
    setEmoji(emojiData.emoji);
  }

  function postEntry(e) {
    e.preventDefault();
    axios
      .post('http://localhost:5001/entries', {
        date,
        content,
        emoji,
      })
      .then((res) => {
        setContent("");
        setEmoji("");
        navigate(-1);
      })
      .catch((err) => console.log(err));
  }

  function goBack() {
    navigate(-1); 
  };

  return (
    <div className="form">
    <h2>{currentDate.toDateString()}</h2>
    <textarea 
      placeholder="How was your day?"
      onChange={updateContent}
      value={content}
    />
    {emoji ? (
        <div className="emoji-bar">
          <p>Mood:&nbsp;</p>
          <h1>{emoji}</h1>
        </div>
      ) : (
      <div className="emoji-bar">
        <p>Mood:&nbsp;</p>
        <EmojiPicker
          reactionsDefaultOpen={true}
          allowExpandReactions={false}
          onEmojiClick={updateEmoji}
        />
      </div>
    )}
    <button className="button back" onClick={goBack}>Back</button>
    <button className="button post" onClick={postEntry}>Post</button>
  </div>
  );
}

export default Form;