import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import "./List.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.option);

	console.log(location, destination, date, options);
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
							<input type="text" placeholder={destination} />
						</div>
						<div className="listItem">
							<label>Check-in date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy",
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
								/>
							)}
						</div>
						<div className="listItem">
							<div className="listOptions">
								<label>options</label>
								<div className="listOptionItem">
									<span className="listOptionText">
										Min Price <small>per night</small>
									</span>
									<input type="text" className="listOptionInput" />
								</div>
								<div className="listOptionItem">
									<span className="listOptionText">
										Max Price <small>per night</small>
									</span>
									<input type="text" className="listOptionInput" />
								</div>
								<div className="listOptionItem">
									<span className="listOptionText">Adult</span>
									<input
										type="number"
										className="listOptionInput"
										placeholder={options.adult}
										min={1}
									/>
								</div>
								<div className="listOptionItem">
									<span className="listOptionText">Children</span>

									<input
										type="number"
										className="listOptionInput"
										placeholder={options.children}
										min={0}
									/>
								</div>
								<div className="listOptionItem">
									<span className="listOptionText">Room</span>

									<input
										type="number"
										className="listOptionInput"
										placeholder={options.room}
										min={0}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
