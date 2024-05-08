import React from "react";
import './Entry.css'
import { useParams, useNavigate } from "react-router-dom";

function Entry(props) {
  const navigate = useNavigate();
  const { date_id } =  useParams()

  const [month, date, year] = date_id.split("_");
  const entryDate = new Date(Number(year), Number(month), Number(date));

  const content = "Some journal content to be modified later"
  const emoji = "😀"

  function handleDelete() {
    // do nothing
  }

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