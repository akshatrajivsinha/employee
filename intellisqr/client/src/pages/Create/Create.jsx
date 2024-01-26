import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [lname, setlname] = useState("");
  const [fname, setfname] = useState("");
  const [employee_id, setemployee_id] = useState("");
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/employee/create", {
        fname,
        lname,
        employee_id,
        position,
        salary,
      });
      navigate("/list");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <div className="create">
      <div className="container">
        <h1 className="h1">Create Employee</h1>

        <form action="" className="form" onSubmit={handleRegistration}>
          <label className="label">Employee_id</label>
          <input
            className="input"
            type="text"
            placeholder="Enter employee id"
            onChange={(e) => setemployee_id(e.target.value)}
          />
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            placeholder="Enter employee name"
            onChange={(e) => setfname(e.target.value)}
          />
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            placeholder="Enter employee name"
            onChange={(e) => setlname(e.target.value)}
          />
          <label className="label">Position</label>
          <input
            className="input"
            type="text"
            placeholder="Enter employee position"
            onChange={(e) => setposition(e.target.value)}
          />
          <label className="label">Salary</label>
          <input
            className="input"
            type="number"
            placeholder="Enter employee salary"
            onChange={(e) => setsalary(e.target.value)}
          />
          <button className="button">Create Employee</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
