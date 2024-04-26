import React from "react";
import Counter from "./Counter";
import { useState, useEffect, Fragment } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0)
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		const id = setInterval(() => {

			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);
		setIntervalId(id);
		return () => {
			clearInterval(id);
		};
	}, []);

	const stopCounter = () => {
		clearInterval(intervalId);
	};

	const resetCounter = () => {
		setSeconds(0);
		clearInterval(intervalId);
		const id = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);
		setIntervalId(id);
	};


	useEffect(() => {
		if (seconds === 15) {
			alert("¡Haz algo con tu vida!");
		}
	}, [seconds]);

	const formatTime = (time) => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const secs = time % 60;
		return { hours, minutes, secs };
	};

	const { hours, minutes, secs } = formatTime(seconds);




	return (



		<div className="row text-center bg-dark pb-5">
			<h1 className="text-center mt-5 mb-5 text-light">Tic, tac, tic tac...</h1>
			<div className="col-6">
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-clock" viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
				</svg>
				<div className="row mt-4">
				<div className="col text-center">
					<button type="button" className="btn btn-outline-light m-3" onClick={stopCounter}>Stop</button>
					<button type="button" class="btn btn-outline-light m-3" onClick={resetCounter}>Reset</button>
				</div>
			</div>
			</div>
			<div className="counter col-6 d-flex">
				{hours >= 10 ? (
					<Fragment>
						<div className="col-1 border border-black rounded">
							<Counter value={Math.floor(hours / 10)} />
						</div>
						<div className="col-1 border border-black rounded">
							<Counter value={hours % 10} />
						</div>
					</Fragment>
				) : (
					<div className="col-2 border border-black rounded">
						<Counter value={hours} />
					</div>
				)}
				{minutes >= 10 ? (
					<Fragment>
						<div className="col-1 border border-black rounded">
							<Counter value={Math.floor(minutes / 10)} />
						</div>
						<div className="col-1 border border-black rounded">
							<Counter value={minutes % 10} />
						</div>
					</Fragment>
				) : (
					<div className="col-2 border border-black rounded">
						<Counter value={minutes} />
					</div>
				)}
				{secs >= 10 ? (
					<Fragment>
						<div className="col-1 border border-black rounded">
							<Counter value={Math.floor(secs / 10)} />
						</div>
						<div className="col-1 border border-black rounded">
							<Counter value={secs % 10} />
						</div>
					</Fragment>
				) : (
					<div className="col-2 border border-black rounded ">
						<Counter value={secs} />
					</div>
				)}
			</div>
			
		</div>
	);


};

export default Home;
