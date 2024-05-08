import React from "react";
import './Form.css'
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

function Form(props) {
  const currentDate = new Date();

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

  return (
    <div className="form">
    <h2>{currentDate.toDateString()}</h2>
    <textarea 
      placeholder="How was your day?"
      onChange={updateEntry}
      value={entry}
    />
    {emoji ? (
        <div class="emoji-bar">
          <p>Mood:&nbsp;</p>
          <h1>{emoji.emoji}</h1>
        </div>
      ) : (
      <div class="emoji-bar">
        <p>Mood:&nbsp;</p>
        <EmojiPicker
          reactionsDefaultOpen={true}
          allowExpandReactions={false}
          onEmojiClick={onEmojiClick}
        />
      </div>
  )}
    <button className="post" onClick={handlePost}>Post</button>
  </div>
  );
}

export default Form;