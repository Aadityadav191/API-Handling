import Star from "../Components/Star.js";
import { React, useEffect, useState } from "react";
import Loader from "../Components/Loader.js";

function DisplayImage() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      })
      .catch((error) => {
        alert("Failed to fetch data. Please try again later.");
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div>
        {image ? (
          <div>
          <h1 className="Congtitle" align="center">Images from API</h1>
            <div className="image-container">
              {image.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.images[0]}
                    alt="Product_Image"
                    width="200px"
                    height="200px"
                  />
                  <h4>{image.title}</h4>
                  <b className="price"> Price</b>:{image.price} <br />
                  <Star/>
                  {/* <p className="description">
                    {image.description.split(" ").slice(0, 20).join(" ")}...
                  </p> */}
                   
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <style>
          {`
          .Congtitle{
            font-size: 2rem;
            background-color: #0f6a06;
            text-align: center;
            margin: 100px;
            padding: 5px;
            margin-bottom: 20px;
          }
          body{
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            
            }
          .description {
            font-size: 14px;
            color: #f85606;
            max-width: 300px;
          }
          img {
            border-radius: 8px;
          }
          hr {
            margin: 20px 0;
            border: none;
            height: 1px;
            background-color: #ddd;
          }
          .price{
            font-size: 18px;
            color: #0f6a06;;
            font-weight: bold;
          }
          h4{
            font-size: 16px;
            color: #333;
            max-width: 200px;
            }
          .image-container{
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
            padding: 10px;
          }
        `}
        </style>
    </>
  );
}

export { DisplayImage };