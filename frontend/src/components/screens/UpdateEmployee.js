import { Button, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../../services/EmployeeService";

function UpdateEmployee(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { state } = useLocation();
  const { id } = state;
  let navigate = useNavigate();

  useEffect(() => {
    getEmployee(id, setFirstName, setLastName, setEmail);
  }, []);

  const handleOnChangeText = (value, field) => {
    if (field === "firstName") setFirstName(value);
    else if (field === "lastName") setLastName(value);
    else if (field === "email") setEmail(value);
  };

  const handleUpdateEmployee = () => {
    const employee = { firstName: firstName, lastName: lastName, email: email };
    updateEmployee(id, employee).then(() => navigate("/"));
  };

  return (
    <div className="update-employee">
      <Paper elevate={3} className="update-container">
        <form>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(text) =>
              handleOnChangeText(text.target.value, "firstName")
            }
            autoFocus
          ></TextField>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(text) =>
              handleOnChangeText(text.target.value, "lastName")
            }
          ></TextField>
          <TextField
            label="Email"
            value={email}
            onChange={(text) => handleOnChangeText(text.target.value, "email")}
          ></TextField>
          <Button
            style={{ margin: "0px 10px" }}
            class="btn btn-info"
            onClick={handleUpdateEmployee}
          >
            Submit
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            class="btn btn-light"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default UpdateEmployee;
