import React,{useState} from 'react'

export default function Textform (props) {
  const removeSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Spaces removed", "success")
  }
  const magic = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Clear", "success")
  }
  
  const clickFunc2lower = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  const clickFunc = () =>{
    console.log("uppercase " + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }
  const handleChange = (event) =>{
    console.log("on change ")
    setText(event.target.value)
  }
  const[text , setText] =useState("");
   
  return (
    <>
    <div className = "container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading} </h1>
        <div className="mb-3">
  <textarea className="form-control" value = {text} 
  style={{backgroundColor : props.mode==='dark'?'#7B8FA1':'white' ,
          color : props.mode==='dark'?'white':'black'}} 
          onChange={handleChange} rows="9"></textarea>
    </div>
    <button className="btn btn-primary mx-4"  onClick={clickFunc}>UPPER</button>
    <button className="btn btn-primary mx-4"  onClick={clickFunc2lower}>LOWER</button>
    <button className="btn btn-primary mx-4"  onClick={magic}>Clear</button>
    <button className="btn btn-primary mx-4"  onClick={removeSpace}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
