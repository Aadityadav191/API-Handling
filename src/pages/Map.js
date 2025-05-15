import React from "react";

export default function Map() {
  const students = [
    {
      id: 1,
      name: "Alice",
      age: 22,
      rollNo: "A101",
      address: "123 Main St",
      class: "Math",
    },
    {
      id: 2,
      name: "Bob",
      age: 24,
      rollNo: "B102",
      address: "456 Oak St",
      class: "Science",
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      rollNo: "C103",
      address: "789 Pine St",
      class: "History",
    },
    {
      id: 4,
      name: "David",
      age: 23,
      rollNo: "D104",
      address: "101 Maple St",
      class: "English",
    },
    {
      id: 5,
      name: "Eve",
      age: 25,
      rollNo: "E105",
      address: "202 Birch St",
      class: "Computer Science",
    },
    {
      id: 6,
      name: "Frank",
      age: 27,
      rollNo: "F106",
      address: "303 Cedar St",
      class: "Physics",
    },
    {
      id: 7,
      name: "Grace",
      age: 26,
      rollNo: "G107",
      address: "404 Elm St",
      class: "Chemistry",
    },
    {
      id: 8,
      name: "Hannah",
      age: 22,
      rollNo: "H108",
      address: "505 Ash St",
      class: "Biology",
    },
    {
      id: 9,
      name: "Ivy",
      age: 20,
      rollNo: "I109",
      address: "606 Redwood St",
      class: "Philosophy",
    },
    {
      id: 10,
      name: "Jack",
      age: 28,
      rollNo: "J110",
      address: "707 Fir St",
      class: "Psychology",
    },
    {
      id: 11,
      name: "Kenny",
      age: 30,
      rollNo: "K111",
      address: "808 Oakwood St",
      class: "Sociology",
    },
    {
      id: 12,
      name: "Liam",
      age: 23,
      rollNo: "L112",
      address: "909 Pinewood St",
      class: "Mathematics",
    },
    {
      id: 13,
      name: "Mona",
      age: 29,
      rollNo: "M113",
      address: "1011 Cedarwood St",
      class: "Literature",
    },
    {
      id: 14,
      name: "Nathan",
      age: 22,
      rollNo: "N114",
      address: "1112 Willow St",
      class: "Geography",
    },
    {
      id: 15,
      name: "Olivia",
      age: 25,
      rollNo: "O115",
      address: "1213 Maplewood St",
      class: "Economics",
    },
    {
      id: 16,
      name: "Paul",
      age: 21,
      rollNo: "P116",
      address: "1314 Birchwood St",
      class: "Law",
    },
    {
      id: 17,
      name: "Quincy",
      age: 24,
      rollNo: "Q117",
      address: "1415 Elmwood St",
      class: "Business",
    },
    {
      id: 18,
      name: "Rachel",
      age: 22,
      rollNo: "R118",
      address: "1516 Redwoodwood St",
      class: "Political Science",
    },
    {
      id: 19,
      name: "Sophia",
      age: 20,
      rollNo: "S119",
      address: "1617 Firwood St",
      class: "Art",
    },
    {
      id: 20,
      name: "Tom",
      age: 26,
      rollNo: "T120",
      address: "1718 Ashwood St",
      class: "History",
    },
    {
      id: 21,
      name: "Uma",
      age: 23,
      rollNo: "U121",
      address: "1819 Oakwood St",
      class: "Philosophy",
    },
    {
      id: 22,
      name: "Vera",
      age: 28,
      rollNo: "V122",
      address: "1920 Maplewood St",
      class: "Psychology",
    },
    {
      id: 23,
      name: "William",
      age: 27,
      rollNo: "W123",
      address: "2021 Birchwood St",
      class: "Computer Science",
    },
    {
      id: 24,
      name: "Xander",
      age: 22,
      rollNo: "X124",
      address: "2122 Cedarwood St",
      class: "Mathematics",
    },
    {
      id: 25,
      name: "Yara",
      age: 24,
      rollNo: "Y125",
      address: "2223 Willowwood St",
      class: "Literature",
    },
    {
      id: 26,
      name: "Zane",
      age: 29,
      rollNo: "Z126",
      address: "2324 Firwood St",
      class: "Sociology",
    },
  ];

  return (
    <>
      <div>
        <h1>Student Details Using Map Function </h1>
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Roll No.</th>
              <th>Address</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.rollNo}</td>
                <td>{student.address}</td>
                <td>{student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>
        {`
          .student-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            text-align: center;
            font-family: Arial, sans-serif;
            font-size: 16px;
          }

          .student-table th, .student-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }

          .student-table th {
            background-color:rgb(242, 242, 242);
            font-weight: bold;
          }

          .student-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .student-table tr:hover {
            background-color:rgb(198, 231, 204);
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
}
