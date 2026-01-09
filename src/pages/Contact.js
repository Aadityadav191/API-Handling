import React from "react";

 function Contact() {
  async function fetchData() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <>
      <h1>Contact Page </h1>
      <button onClick={fetchData}>Show Data</button>


      <details>
        <summary>Details and summary tag ? </summary>
        <p>Software is a set of instructions, data, or programs used to operate computers and perform specific tasks. Unlike hardware, which is the physical parts of a computer (like the keyboard or processor), software is intangible—it tells the hardware what to do.</p>
      </details>


      <select className="select-option">
      <option>Select option </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <progress value="70" max="100"></progress>


      <meter min="0" max="100" value="20" low="30" high="80" optimum="90">
        60%
      </meter>


      <div contentEditable={true} suppressContentEditableWarning={true}>
        Edit this text
      </div>
      

      <input type="color" />
      <input type="range" min="1" max="100" />
      <input type="date" />
      <input type="time" />
      <input type="week" />
      <input type="month" />
      <input type="search"  placeholder="search here "/>


      <p>&lt;div&gt;This is a div tag&lt;/div&gt;</p>



      <style>
        {`
      h1{
        text-align: center;
        margin-top: 200px;
        font-size: 3rem;
        color: #0f6a06;}
      button{
        display: block;
        margin: auto;
        margin-top: 50px;
        padding: 10px 20px;
        font-size: 1.2rem;
        background-color: #0f6a06;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover{
        background-color: #0a3d03; 
      }
      details{
        margin: auto;
        margin-top: 50px;
        width: 50%;
        padding: 10px;
        font-size: 1.2rem;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      summary{
        cursor: pointer;
        font-weight: bold;
      }
      p{
        margin-top: 10px;
      }
      body{
        background-color: #f0f0f0;
      }   
      progress{
        display: block;
        margin: auto;
        margin-top: 50px;
        width: 50%;
        height: 20px;
      }
      meter{
        display: block;
        margin: auto;
        margin-top: 50px;
        width: 50%;
        height: 20px;
      }   
      [contentEditable=true]{
        display: block;
        margin: auto;
        margin-top: 50px;
        width: 50%;
        padding: 10px;
        font-size: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
      }
      [contentEditable=true]:focus{
        outline: none;
        border-color: #0f6a06;
        box-shadow: 0 0 5px rgba(15, 106, 6, 0.5);  
      }
      input[type="color"],
      input[type="range"],
      input[type="date"],
      input[type="time"],
      input[type="week"],
      input[type="month"],
      input[type="search"]{
        display: block;
        margin: auto;
        margin-top: 50px;
        width: 50%;
        padding: 10px;
        font-size: 1.2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
      }
      input[type="color"]:focus,
      input[type="range"]:focus,
      input[type="date"]:focus,
      input[type="time"]:focus,
      input[type="week"]:focus,
      input[type="month"]:focus,
      input[type="search"]:focus{
        outline: none;
        border-color: #0f6a06;
        box-shadow: 0 0 5px rgba(15, 106  , 6, 0.5);  
      }

      `}
      </style>
    </>
  );
}


export default Contact