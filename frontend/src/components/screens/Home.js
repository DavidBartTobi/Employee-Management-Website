import { Button, IconButton } from "@material-ui/core";
import { FaTrash, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirm } from "react-confirm-box";

import { deleteEmployee, getEmployees } from "../../services/EmployeeService";
import AddEmployee from "../AddEmployee";

function Home(props) {
  const [employees, setEmployees] = useState([]);
  const [showNewEmployeeEntry, setShowNewEmployeeEntry] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getEmployees(setEmployees);
  }, []);

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const confirmDeleteAll = async () => {
    return await confirm("Are you sure?", options);
  };

  const handleDeleteEmployee = (id) => {
    deleteEmployee(id).then(() => getEmployees(setEmployees));
  };

  const handleDeleteAll = () => {
    confirmDeleteAll().then((confirmed) => {
      if (confirmed) {
        employees.map((employee) => {
          handleDeleteEmployee(employee.id);
        });
      }
    });
  };

  const handleUpdateEmployee = (id) => {
    navigate("/updateEmployee", { state: { id: id } });
  };

  return (
    <div className="home">
      <div className="employee-list">
        <br></br>
        <div className="general-btns">
          <IconButton
            style={{ marginLeft: "-8px" }}
            onClick={() => {
              setShowNewEmployeeEntry(true);
            }}
          >
            <FaPlusCircle color="#12416d" size={"5vh"} />
          </IconButton>
          <Button class="btn btn-danger" onClick={handleDeleteAll}>
            Delete All
          </Button>
          {showNewEmployeeEntry ? (
            <AddEmployee
              closeComp={() => setShowNewEmployeeEntry(false)}
              setEmployees={setEmployees}
            />
          ) : null}
        </div>
        <div className="row">
          <table className="table table-hover table-light table-bordered">
            <thead>
              <tr>
                <th style={{ width: "20px" }}> </th>
                <th> ID </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email Address </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <IconButton
                      onClick={() => {
                        handleUpdateEmployee(employee.id);
                      }}
                    >
                      <FaPencilAlt color="#0dcaf0" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      <FaTrash color="#dc143c" />
                    </IconButton>
                  </td>
                  <td> {employee.id} </td>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName} </td>
                  <td> {employee.email} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
