import React, { useState } from "react";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
	faBed,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
	const [destination, setDestination] = useState("");
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const navigate = useNavigate();
	const [openOption, setOpenOption] = useState(false);
	const [option, setOption] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const handleOption = (name, operation) => {
		setOption((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? option[name] + 1 : option[name] - 1,
			};
		});
	};
	const handleSearch = () => {
		navigate("/hotels", { state: { destination, date, option } });
	};
	return (
		<div className="header">
			<div
				className={
					type === "list" ? "headerContainer listMode" : "headerContainer"
				}
			>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Texi</span>
					</div>
				</div>
				{type !== "list" && (
					<>
						<h1 className="headerTitle">
							A lifetime of discounts? It's Genius
						</h1>
						<p className="headerDesc">
							Get rewarded for your travels - unlock instant savings of 10% or
							more with free bookingbar account
						</p>
						<button className="headerButton">Sign in / Register</button>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="headerSearchInput"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
								<span
									className="headerSearchText"
									onClick={() => setOpenDate(!openDate)}
								>
									{`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(
										date[0].endDate,
										"MM/dd/yyyy",
									)}`}
								</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
										minDate={new Date()}
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIcon" />
								<span
									onClick={() => setOpenOption(!openOption)}
									className="headerSearchText"
								>{`${option.adult} adult · ${option.children} · children · ${option.room} room`}</span>
								{openOption && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button
													disabled={option.adult <= 1}
													className="optionButton"
													onClick={() => handleOption("adult", "d")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{option.adult}
												</span>
												<button
													className="optionButton"
													onClick={() => handleOption("adult", "i")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													disabled={option.children <= 0}
													className="optionButton"
													onClick={() => handleOption("children", "d")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{option.children}
												</span>
												<button
													className="optionButton"
													onClick={() => handleOption("children", "i")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button
													disabled={option.room <= 1}
													className="optionButton"
													onClick={() => handleOption("room", "d")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{option.room}
												</span>
												<button
													className="optionButton"
													onClick={() => handleOption("room", "i")}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="headerButton" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
