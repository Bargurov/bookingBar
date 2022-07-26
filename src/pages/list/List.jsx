import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import "./List.css";
const List = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Search</h1>
						<div className="listItem">
							<label>Destination</label>
							<input type="text" />
						</div>
						<div className="listItem">
							<label>Check-in date</label>
							<input type="text" />
						</div>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
