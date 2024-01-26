import React, { useEffect, useState } from "react";
import "./Lists.css";
import axios from "axios";

import List from "../../components/List/List";

export default function Lists() {
  const [salary, setsalary] = useState("");
  const [fname, setfname] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchpost = async () => {
      const res = await axios.get("/employee");
      setdata(res.data);
    };
    fetchpost();
  }, []);

  const handlefilter = async (e) => {
    e.preventDefault();
    console.log(fname);
    if (!fname) {
      try {
        const result = await axios.get(
          `/employee/filtersalary?salary=${salary}`
        );
        setdata(result.data);
      } catch (err) {
        console.log("error");
      }
    }
    if (!salary) {
      try {
        const result = await axios.get(`/employee/filterfname?fname=${fname}`);
        setdata(result.data);
      } catch (err) {
        console.log("error");
      }
    }
    if (salary && fname) {
      try {
        const result = await axios.get(
          `/employee/filter?fname=${fname}&${salary}`
        );
        setdata(result.data);
      } catch (err) {
        console.log("error");
      }
    }

    if (!salary && !fname) {
      try {
        const result = await axios.get("/employee");
        setdata(result.data);
      } catch (err) {
        console.log("error");
      }
    }
  };

  return (
    <div className="lists">
      <div className="topcontent">
        <div className="h1">
          <h1>Filter</h1>
        </div>
        <div className="form">
        <form action="" onSubmit={handlefilter}>
          <div className="input">
            <label className="lable">salary</label>
            <input type="number" onChange={(e) => setsalary(e.target.value)} />
          </div>
          <div className="input">
            <label className="lable">name</label>
            <input type="text" onChange={(e) => setfname(e.target.value)} />
          </div>

          <button className="button">do filter</button>
        </form></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Employee_id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <List data={data} />
        </tbody>
      </table>
    </div>
  );
}
