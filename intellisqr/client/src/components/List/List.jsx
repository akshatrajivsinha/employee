import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./List.css"

export default function List({ data }) {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    try {
      await axios.delete("/employee/" + e);
      navigate("/");
    } catch (err) {
      console.log("error in deleting");
    }
  };

  return (
    <>
      {data.map((curdata) => {
        const { employee_id, fname, lname, position, salary } = curdata;

        return (
          <tr key={employee_id}>
            <td>{employee_id}</td>
            <td>
              {fname} {lname}
            </td>
            <td>{position}</td>
            <td>{salary}</td>
            <td>
              <button className="button"
                onClick={(e) => {
                  handleDelete(employee_id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
