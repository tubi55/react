import { useState, useEffect } from 'react';

function Btns({ frame, len }) {
	let [Num, setNum] = useState(0);

	useEffect(() => {
		console.log(Num);
	}, [Num]);

	return (
		<>
			<button
				className='prev'
				onClick={() => {
					setNum(++Num);
					frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
				}}
			>
				PREV
			</button>
			<button
				className='next'
				onClick={() => {
					setNum(--Num);
					frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
				}}
			>
				NEXT
			</button>
		</>
	);
}

export default Btns;
