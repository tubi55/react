import { useState, useEffect } from 'react';

function Btns({ frame }) {
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
					frame.current.style.transform = `rotate(${45 * Num}deg)`;
				}}
			>
				PREV
			</button>
			<button className='next' onClick={() => console.log(frame)}>
				NEXT
			</button>
		</>
	);
}

export default Btns;
