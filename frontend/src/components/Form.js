import React from "react";
import './Entry.css'
import EmojiPicker from "emoji-picker-react";
import { useNavigate } from 'react-router-dom';

function Form(props) {
  const currentDate = new Date();
  const navigate = useNavigate();

  const [entry, setEntry] = React.useState("");
  const [emoji, setEmoji] = React.useState(null);

  function updateEntry(event) {
    setEntry(event.target.value);
  }

  function onEmojiClick(emojiData, event) {
    setEmoji(emojiData);
  }

  function handlePost() {
    props.onPost(currentDate, entry);

    setEntry("");
  }

  function goBack() {
    navigate(-1); 
  };

  return (
    <div className="form">
    <h2>{currentDate.toDateString()}</h2>
    <textarea 
      placeholder="How was your day?"
      onChange={updateEntry}
      value={entry}
    />
    {emoji ? (
        <div className="emoji-bar">
          <p>Mood:&nbsp;</p>
          <h1>{emoji.emoji}</h1>
        </div>
      ) : (
      <div className="emoji-bar">
        <p>Mood:&nbsp;</p>
        <EmojiPicker
          reactionsDefaultOpen={true}
          allowExpandReactions={false}
          onEmojiClick={onEmojiClick}
        />
      </div>
  )}
    <button className="button back" onClick={goBack}>Back</button>
    <button className="button post" onClick={handlePost}>Post</button>
  </div>
  );
}

export default Form;