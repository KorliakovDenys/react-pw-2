import { useRef } from "react";
import "./styles/NewEmployeeForm.css";

const NewEmployeeForm = ({ addNewEmployee }) => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const positionRef = useRef();
	const createEventHandler = () => {
		const firstNameValue = firstNameRef.current.value;
		const lastNameValue = lastNameRef.current.value;
		const positionValue = positionRef.current.value;
		if (firstNameValue.length < 1 || lastNameValue.length < 1 || positionValue.length < 1) return;
		const newEmployee = {
			id: -1,
			firstName: firstNameValue,
			lastName: lastNameValue,
			position: positionValue,
		};
		addNewEmployee(newEmployee);
		firstNameRef.current.value = "";
		lastNameRef.current.value = "";
		positionRef.current.value = "";
	};
	return (
		<>
			<div className="section-heading form-header">Create new employee</div>
			<div className="new-employee-form">
				<input ref={firstNameRef} type="text" name="" id="" placeholder="first name" />
				<input ref={lastNameRef} type="text" name="" id="" placeholder="last name" />
				<input ref={positionRef} type="text" name="" id="" placeholder="postion" />
				<input type="button" value="Create" onClick={createEventHandler} />
			</div>
		</>
	);
};

export default NewEmployeeForm;
