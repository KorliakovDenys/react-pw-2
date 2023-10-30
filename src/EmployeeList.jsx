import "./styles/EmployeeList.css";
import Employee from "./Employee";
import ToolBox from "./ToolBox.jsx";
import Employees from "./assets/employees.js";

const EmployeeList = ({employeeList, removeEmployee, employees, setEmployees}) => {
	const sorters = [
		[
			(left, right) => (left.id < right.id ? -1 : left.id > right.id ? 1 : 0),
			(left, right) => (left.firstName < right.firstName ? -1 : left.firstName > right.firstName ? 1 : 0),
			(left, right) => (left.lastName < right.lastName ? -1 : left.lastName > right.lastName ? 1 : 0),
			(left, right) => (left.position < right.position ? -1 : left.position > right.position ? 1 : 0),
		],
		[
			(left, right) => (left.id < right.id ? 1 : left.id > right.id ? -1 : 0),
			(left, right) => (left.firstName < right.firstName ? 1 : left.firstName > right.firstName ? -1 : 0),
			(left, right) => (left.lastName < right.lastName ? 1 : left.lastName > right.lastName ? -1 : 0),
			(left, right) => (left.position < right.position ? 1 : left.position > right.position ? -1 : 0),
		],
	];

	const clear = () => {
		setEmployees(Employees);
	};

	const setDisplayParams = (params) => {
		const filter = params.filter.toLowerCase();
		const filterBy = params.filterBy;
		const newDisplayData = employees.filter((el) => {
			switch (filterBy) {
				case 0:
					return el.id.toString().includes(filter)
				case 1:
					return el.firstName.toLowerCase().includes(filter)
				case 2:
					return el.lastName.toLowerCase().includes(filter)
				case 3:
					return el.position.toLowerCase().includes(filter)
				default:
					alert("Something went wrong.")
			}
		});

		newDisplayData.sort(sorters[params.sortMethod][params.sortBy]);

		setEmployees(newDisplayData);
	};
	let key = 0;
	return (
		<>
			<ToolBox clearAction={clear} setDisplayParams={setDisplayParams}/>
			<div className="employee-list">
				<div className="section-heading">Employee List</div>
				<div className="employee-caption employee-table-row">
					<div>Id</div>
					<div>First name</div>
					<div>Last name</div>
					<div>Position</div>
				</div>

				{employeeList.map((empl) => {
					key += 1;
					return <Employee key={key} employee={empl} removeEmployee={removeEmployee}/>
				})}
			</div>
		</>
	);
};

export default EmployeeList;
