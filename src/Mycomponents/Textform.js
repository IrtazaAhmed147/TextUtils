import "./Textform.css";
import React, { useState } from "react";


export default function Textform(props) {
    let textArea = document.getElementById("textarea")

    const upperCase = () => {

        setText(text.toLocaleUpperCase())
        props.Alertfunc("success", "Text is converted to Uppercase")
    }
    const lowerCase = () => {

        setText(text.toLocaleLowerCase())
        props.Alertfunc("success", "Text is converted to Lowercase")
    }
    const toClear = () => {

        setText("")
        props.Alertfunc("success", "Text is Cleared")
    }
    const toRemoveSpaces = () => {

        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
        props.Alertfunc("success", "Extra spaces are removed")
    }
    const toCopyText = () => {

        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        props.Alertfunc("success", "Text is Copied")

    }
    async function toPaste() {
        try {
        
            if (navigator.clipboard) {
              
                const pasteText = await navigator.clipboard.readText();
               
                textArea.value = text + pasteText;
            } else {
                alert('Clipboard API not available');
            }
        } catch (err) {
            console.error('Failed to paste text: ', err);
        }
    }
    const toSpeak = () =>{
        if (textArea.value === "") {
            
            props.Alertfunc("danger", "no value");
        } else {

            let speech = new SpeechSynthesisUtterance();
            props.Alertfunc("success", "Speaking Text");
            speech.text = text;
            
            window.speechSynthesis.speak(speech); // Speak the text
        }

    }

    const handleOnCHange = (event) => {

        let updateVal = event.target.value
        setText(updateVal)

    }



    const [text, setText] = useState("Enter text here");

    return (
        <>

            <div className="box">
                <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>{props.heading}</h2>
                <textarea id="textarea" value={text} onChange={handleOnCHange} ></textarea>
                <button className="btn btn-primary" onClick={upperCase} >To Uppercase</button>
                <button className="btn btn-primary ms-3 me-3 " onClick={lowerCase}>To Lowercase</button>
                <button className="btn btn-primary " onClick={toClear}>To clear</button>
                <button className="btn btn-primary ms-3" onClick={toRemoveSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary ms-3" onClick={toCopyText}>Copy text</button>
                <button className="btn btn-primary ms-3" onClick={toPaste}>Paste</button>
                <button className="btn btn-primary mt-2" onClick={toSpeak}>Speak</button>
                <p id="char" className={`text-${props.mode === "light" ? "dark" : "light"}`}>Characters: {text.length} &nbsp; Words : {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} </p>

                <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Preview</h3>
                <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{text}</p>

            </div>



        </>
    )






}

