import React from "react";
import { useState } from "react";

export default function About () {

    const[myStyle , setmyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
    const [btntxt, setbtntxt] = useState("Enable Dark Mode")

    const changeBg = ()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
            color : 'black',
            backgroundColor : 'white',
            border : '2px solid white'})
            setbtntxt("enable dark mode")
        }else{
            setmyStyle({
            color : 'white',
            backgroundColor : 'black'
            })
            setbtntxt("enable light mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
    <h2 className="my-4">About Us</h2>
      <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            
          </h2>
          <div
            id="flush-collapseOne"
            style={myStyle}
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
           
          </h2>
          <div
          style={myStyle}
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
            style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
          style={myStyle}
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
      <button type = "button" className="btn btn-primary" onClick={changeBg}>{btntxt}</button>
      </div>
    </div>
  );
}
