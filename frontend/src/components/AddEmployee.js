import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { addEmployee, getEmployees } from "../services/EmployeeService";
import "../style/AddEmployeeModal.css";

function AddEmployee({ closeComp, setEmployees }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnChangeText = (value, field) => {
    if (field === "firstName") setFirstName(value);
    else if (field === "lastName") setLastName(value);
    else if (field === "email") setEmail(value);
  };

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmitNewEmployee = () => {
    const employee = { firstName: firstName, lastName: lastName, email: email };
    addEmployee(employee).then(() => getEmployees(setEmployees));
    closeComp();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={closeComp}>X</button>
        </div>
        <form>
          <TextField
            style={{ marginRight: "15px" }}
            label="First Name"
            value={firstName}
            onChange={(text) =>
              handleOnChangeText(text.target.value, "firstName")
            }
            autoFocus
          />
          <TextField
            style={{ marginLeft: "15px" }}
            label="Last Name"
            value={lastName}
            onChange={(text) =>
              handleOnChangeText(text.target.value, "lastName")
            }
          />
          <TextField
            label="Email"
            value={email}
            onChange={(text) => handleOnChangeText(text.target.value, "email")}
          />
        </form>
        <div className="footer">
          <button onClick={closeComp} id="cancelBtn">
            Cancel
          </button>
          <button onClick={resetFields} id="resetBtn">
            Reset
          </button>
          <button onClick={handleSubmitNewEmployee}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
