import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // alert("converted to uppercase")
    props.showAlert("converted Uppercase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted Lowercase", "success");

  }

  const handleToCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied text", "success");


  }

  const clearToClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Clear all text", "success");

  }

  const handleRemoveSpacesClick = () => {
    // Remove extra spaces: leading, trailing, and multiple spaces between words
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("white space", "Remove");

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2d3436':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="6"></textarea>
      </div>

      <button className="btn btn-outline-secondary shadow  me-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-outline-secondary shadow  me-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-outline-secondary shadow  me-1 my-2" onClick={handleToCopy}>Copy Text</button>
      <button className="btn btn-outline-secondary shadow  me-1" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
      <button className="btn btn-outline-secondary shadow  me-0" onClick={clearToClick}>Clear Text</button>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p className="">{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p className="">{text.length>0?text:"Enter sonething in the text to preview it hear"}</p>
      </div>
    </div>
  )
}


 {/* import React, { useState } from 'react';

 export default function AlertButton() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handleClick}>
        Show Alert
      </button>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          This is a 2-second alert!
        </div>
      )}
    </div>
  );
} */}

