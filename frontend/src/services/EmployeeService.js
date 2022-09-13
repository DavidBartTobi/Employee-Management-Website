const BASE_URL = "http://localhost:8080/employee/";

const addEmployee = async (employee) => {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  };
  await fetch(BASE_URL + "addEmployee", post).then(() => {
    console.log("added new employee ", employee);
  });
};

const getEmployee = async (id, setFirstName, setLastName, setEmail) => {
  await fetch(BASE_URL + "getEmployeeByID/" + id)
    .then((res) => res.json())
    .then((res) => {
      console.log("fetched employee ", res);
      setFirstName(res.firstName);
      setLastName(res.lastName);
      setEmail(res.email);
    });
};

const updateEmployee = async (id, employee) => {
  const put = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  };
  await fetch(BASE_URL + "updateEmployee/" + id, put).then(() => {
    console.log("updated employee ", employee);
  });
};

const deleteEmployee = async (id) => {
  const del = {
    method: "DELETE",
  };
  await fetch(BASE_URL + "deleteEmployee/" + id, del).then(() => {
    console.log("employee" + id + "deleted");
  });
};

const getEmployees = async (setEmployees) => {
  await fetch(BASE_URL + "getEmployees")
    .then((res) => res.json())
    .then((res) => {
      console.log("fetched all employees ", res);
      setEmployees(res);
    });
};

export {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
};
