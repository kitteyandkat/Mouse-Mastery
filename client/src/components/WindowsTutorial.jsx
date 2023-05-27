import React from "react";
import './WindowsTutorial.css';
import Modal from "./Modal";
import Quiz from "./Quiz";


function WindowsTutorial() {
    const [selectedAnswer, setSelectedAnswer]=React.useState("");

    function handleCheckAnswer() {
      let result = "";
      if(selectedAnswer === correctAnswer){
        result = checkAnswer(selectedAnswer === correctAnswer);
      }
  }
    
    return (
      <div className="container">
        <div id="start-menu">
          <h2>Start Menu</h2>
          <p>The Start Menu is where you can access all of your apps</p>
          <img src="https://www.karlstechnology.com/blog/wp-content/uploads/2021/02/Windows-10-redesigned-Start-Menu-Sun-Valley-mockup-Windows-Central-2.jpg" alt="Start Menu"></img>
        </div>
  
        <div id="taskbar">
          <h2>Taskbar</h2>
          <p>The taskbar is located at the bottom of your screen.  It's a quick way to access your apps.</p>
          <img src="https://i.stack.imgur.com/nrHmO.png" alt="Taskbar"></img>
        </div>
  
        <div id="desktop">
          <h2>Desktop</h2>
          <p>The Desktop is the body of your screen. You can place shortcuts to your favorite apps and files for easy access</p>
          <img src="https://cdn.windowsreport.com/wp-content/uploads/2023/01/Untitled-design-2023-01-08T184815.647-1200x900.jpg" alt="Desktop"></img>
        </div>

      
          </div>   
   )       
  }
  

  
   export default WindowsTutorial;