import React from "react";

export default function Contact() {
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
      `}
      </style>
    </>
  );
}
