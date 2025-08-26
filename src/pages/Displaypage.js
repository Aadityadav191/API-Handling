import { React, useEffect, useState } from "react";
import Loader from "../Components/Loader.js";

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
        <h1 className="Congtitle" align="center">
          List from API
        </h1>
        {data ? (
          <div>
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
    </>
  );
}

export { Displaypage };
