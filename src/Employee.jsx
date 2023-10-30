import "./styles/Employee.css";

const Employee = ({ employee, removeEmployee }) => {
	const removeMeEventHandler = () => {
		removeEmployee(employee.id);
	};

	return (
		<div className="employee employee-table-row">
			<div className="employee-info">{employee.id}</div>
			<div className="employee-info">{employee.firstName}</div>
			<div className="employee-info">{employee.lastName}</div>
			<div className="employee-info">{employee.position}</div>
			<div className="employee-remove" onClick={removeMeEventHandler}></div>
		</div>
	);
};

export default Employee;
