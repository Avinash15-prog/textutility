import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
  setText(newText);  
  props.showAlert(" Converted to Upper Case!", "success")
}
  const handleLowClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
  setText(newText);  
    props.showAlert(" Converted to Lower Case!", "success");

}
  const handleClearClick = ()=>{
    console.log("Clear was Clicked" + text);
    let newText = '';
  setText(newText);
      props.showAlert(" Text Cleared!", "success");
  
}
  const handleCopyClick = ()=>{
    // console.log("Copy was Clicked" + text);
    // let copyText = document.getElementById("myTextAreaBox");
    navigator.clipboard.writeText(text);
    // alert("Copied the text: " + copyText.value);
    document.getElementById("copyLabel").innerHTML = "Text Copied!";
    // document.getSelection().removeAllRanges();
        props.showAlert(" Copied to Clipboard!", "success");
    setTimeout(() => {
      document.getElementById("copyLabel").innerHTML = "Copy Text";

    }, 2000);


}
  const handleClearExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
        props.showAlert(" Text Cleared!", "success");

}
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  // setText("Avinash");
    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h1>{props.heading}</h1>
          <div
            className="mb-3"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            <textarea
              className="form-control"
              placeholder="Enter text here"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "#2b3035" : "white",
              }}
              id="myTextAreaBox"
              rows="10"
            ></textarea>
          </div>
          <button disabled ={text.length ===0} className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-2"
            id="copyLabel"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-2"
            onClick={handleClearExtraSpaces}
          >
            Clear Extra Spaces
          </button>
        </div>

        <div
          className="container my-2"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {text.split(/\s+/).filter(String).length} words, {text.length}{" "}
            characters
          </p>
          <p>{0.008 * text.split(/\s+/).filter(String).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
        </div>
      </>
    );
}
  