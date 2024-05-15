


import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleToCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  
const clearToClick = () => {
  let newText = '';
  setText(newText);
}
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary me-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary me-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary me-1 my-2" onClick={handleToCopy}>Copy Text</button>
      <button className="btn btn-primary me-0" onClick={clearToClick}>Clear Text</button>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter sonething in the text to preview it hear"}</p>
      </div>
    </div>
  )
}

