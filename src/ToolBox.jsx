import {useRef} from "react";

const ToolBox = (props) => {
	const filter = useRef();
	const sortBy = useRef();
	const sortMethod = useRef();

	const apply = () => {
		props.setDisplayParams({
			filter: filter.current.value,
			sortBy: Number(sortBy.current.value),
			sortMethod: Number(sortMethod.current.value),
		});
	};

	return (
		<div className="tool-box">
			<span>Filter string: </span>
			<input ref={filter} placeholder="filter by" />
			<div className="sorting">
				<span>Sorting options: </span>
				<select ref={sortBy}>
					<option value="0">Id</option>
					<option value="1">First name</option>
					<option value="2">Last name</option>
					<option value="3">Position</option>
				</select>
				<select ref={sortMethod}>
					<option value="0">Ascending</option>
					<option value="1">Descending</option>
				</select>
			</div>
			<button onClick={apply}>Apply</button>
			<button onClick={props.clearAction}>Clear</button>
		</div>
	);
};

export default ToolBox;
