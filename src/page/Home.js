import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import personData from "../Data";

// Get user information from backend - API

function Home() {
  const [data, setdata] = useState(personData);
  const [userEdit, setuserEdit] = useState(false);

  const handleclick = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setdata(data.filter((i) => i.ID !== id));
    }
  };

  return (
    <div className="home_container">
      <div className="header">
        <h2>ELZIAN AGRO EMPLOYEES MANAGEMENT SYSTEM</h2>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr className="tableNav">
              <th>ID</th>
              <th>Emp Name</th>
              <th>Emp Email</th>
              <th>Emp Contact</th>
              <th>Emp Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.ID}</td>
                    <td>{val.name}</td>
                    <td>{val.mail}</td>
                    <td>{val.contact}</td>
                    <td>
                      <div className="buttons">
                        <Link to={`/edit/${val.ID}`}>
                          <button className="btn btn-Edit">Edit</button>
                        </Link>
                        <div onClick={() => handleclick(val.ID)}>
                          <button className="btn btn-Delete">Delete</button>
                        </div>
                        <Link to={`/view/${val.ID}`}>
                          <button className="btn btn-View">View</button>
                        </Link>
                      </div>
                    </td>

                    <td>{val.action}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
