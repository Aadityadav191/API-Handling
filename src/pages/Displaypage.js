import { React, useEffect, useState } from "react";
import Loader from "../Components/Loader.js";
import Star from "../Components/Star.js";

function Displaypage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1 align="center">API Data </h1>
        {data ? (
          <div>
            <style>
              {`
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 20px 0;
                }
                th, td {
                  padding: 12px;
                  text-align: left;
                  border: 1px solid #ddd;
                }
                th {
                  background-color: #f2f2f2;
                }
                tr:nth-child(even) {
                  background-color: #f9f9f9;
                }
                tr:hover {
                  background-color: #f1f1f1;
                }
                hr {
                  margin: 0;
                  border: none;
                  height: 1px;
                  background-color: #ddd;
                }
              `}
            </style>

            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {data.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

function DisplayImage() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        <style>
          {`
          .Congtitle{
            font-size: 2rem;
            background-color: #f85606;
            text-align: center;
            margin: 10px;
            padding: 20px;
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
            color: #f85606;
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
        {image ? (
          <div>
            <h1 align="center" className="Congtitle">Congratulation! Aadit Yadav.  Data Fetched!</h1>
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
                    {image.description.split(" ").slice(0, 30).join(" ")}...
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
    </>
  );
}

export { Displaypage, DisplayImage };
