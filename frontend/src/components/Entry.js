import React, { useState, useEffect } from "react";
import './Entry.css'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { RAILWAY_DEPLOY_URI } from './../constants.js';

function Entry(props) {
  const navigate = useNavigate();
  const { date } =  useParams()

  const [month, num, year] = date.split("_");
  const entryDate = new Date(Number(year), Number(month - 1), Number(num));

  const [content, setContent] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    axios.get(`${RAILWAY_DEPLOY_URI}/entries/${date}`).then((res) => {
      console.log(res.data);
      setContent(res.data.content);
      setEmoji(res.data.emoji);
    });
}, [date]);

  function goBack() {
    navigate(-1); 
  };

  return (
    <div className="form">
    <h2>{entryDate.toDateString()}</h2>
    <textarea 
      readOnly={true}
      value={content}
    />
    {emoji && (
        <div className="emoji-bar">
          <p>Mood:&nbsp;</p>
          <h1>{emoji}</h1>
        </div>
    )}
    <button className="button back" onClick={goBack}>Back</button>
  </div>
  );
}

export default Entry;