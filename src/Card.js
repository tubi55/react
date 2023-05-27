function Card({ data, len, index, Active }) {
	const style = { transform: `rotate(${(360 / len) * index}deg) translateY(-180%)` };
	let isOn = '';
	//index : 반복도는 현재 카드 순번
	//Active : 활성화되야 되는 카드의 순번

	//현재 반복도는 카드의 순번과 활성화되야 되는 순번이 같으면 class 'on'적용
	index === Active ? (isOn = 'on') : (isOn = '');

	return (
		<article style={style} className={isOn}>
			<div className='inner'>
				<div className='pic'>
					<img src={`${process.env.PUBLIC_URL}/img/${data}.jpg`} alt={data} />
				</div>
				<h2>{data}</h2>
			</div>
		</article>
	);
}

export default Card;
