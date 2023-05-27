function Card({ data }) {
	return (
		<article>
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
