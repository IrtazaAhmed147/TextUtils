import React, { useState } from 'react'


export default function About(props) {

  // const [btnMode, setBtnMode] = useState("Dark Mode")
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // }
  // );
  // const toggleBtn = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black"
  //     })
  //     setBtnMode("Light Mode")
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setBtnMode("Dark Mode")
  //   }
  //   console.log("hello world")
  // }


  return (
    <>
    
      <div className={`container  border py-3 rounded  mt-5 bg-${props.mode}`} >
      <h1 className={`text-${props.mode === "light"?"dark":"light"}`}>About</h1>
      <p className={`text-${props.mode === "light"?"dark":"light"}`}>TextUtils is a versatile online platform designed to help users with various text-related tasks. Whether you need to manipulate, format, analyze, or convert text, TextUtils provides an easy-to-use interface with a wide range of tools. It caters to both casual users and professionals who regularly work with textual data, offering features like word and character counting, text case conversion (uppercase, lowercase, title case), text trimming, and more.</p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header ">
              <button className={`accordion-button bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">             
               <strong> User-Friendly and Intuitive: TextUtils for Effortless Text Management </strong>
              </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} `}data-bs-parent="#accordionExample">
              <div className={`accordion-body text-${props.mode === "light"?"dark":"light"}`} >
                <p className='mb-0'>TextUtils is user-friendly, intuitive, and aims to meet the diverse needs of its users in a straightforward and efficient manner</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong> Free and Lightweight </strong>
              </button>
            </h2>
            <div id="collapseTwo" className={`accordion-collapse collapse bg-${props.mode}`} data-bs-parent="#accordionExample">
              <div className={`accordion-body text-${props.mode === "light"?"dark":"light"}`}>
              The platform is completely free to use, with no downloads or installations required. Its lightweight design ensures fast performance, even on slower internet connections, making it highly efficient for users.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Time-Saving for Professionals </strong>
              </button>
            </h2>
            <div id="collapseThree" className={`accordion-collapse collapse bg-${props.mode} `} data-bs-parent="#accordionExample">
              <div className={`accordion-body text-${props.mode === "light"?"dark":"light"}`} >
              With its quick and easy interface, TextUtils helps professionals—such as developers, writers, and editors—speed up repetitive tasks like formatting or analyzing text, enhancing overall productivity.
              </div>
            </div>
          </div>
        </div>



        {/* <button className='btn btn-primary mt-3' onClick={toggleBtn}>{btnMode}</button> */}


      </div>
    </>
  )
}
