import "./styles/App.css";
import Employees from "./assets/employees";
import NewEmployeeForm from "./NewEmployeeForm";
import EmployeeList from "./EmployeeList";
import {useState} from "react";

/// 3, 4, 8, 1, 6
const App = () => {
	const [employees, setEmployees] = useState(Employees);

	const addNewEmployee = (newEmployee) => {
		newEmployee.id = employees.at(-1)?.id + 1 || 0;
		setEmployees([...employees, newEmployee]);
	};

	const removeEmployee = (id) => {
		setEmployees(employees.filter((el) => el.id !== id));
	};

	return (
		<div className="app-container">
			<NewEmployeeForm addNewEmployee={addNewEmployee}/>
			<EmployeeList employeeList={employees} removeEmployee={removeEmployee} employees={employees}
						  setEmployees={setEmployees}/>
		</div>
	);
};

export default App;
