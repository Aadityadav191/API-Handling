// import { useEffect, useState } from "react";

export default function Contact() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);
//     // Cleanup when component unmounts
//     return () => clearInterval(interval);
//   }, []);

  let name = " Aadit Yadav ";
  console.log(name.toUpperCase());

  return (
    <>
      {/* <h2>3:34:{count}</h2> */}
      <h1>Contact {name.toUpperCase()}</h1>
      <h1>Contact {name.trim()}</h1>
      <h2>Contact {name.toUpperCase()}</h2>
      <p> {name.slice(2, 5)}</p>
      <p> {name.replace("Aadit", "shyam")}</p>
    </>
  );
}
