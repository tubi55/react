function Btns({ frame }) {
	return (
		<>
			<button className='prev' onClick={() => console.log(frame)}>
				PREV
			</button>
			<button className='next' onClick={() => console.log(frame)}>
				NEXT
			</button>
		</>
	);
}

export default Btns;
