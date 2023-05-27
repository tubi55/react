import Card from './Card';

function Section({ frame }) {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	return (
		<section style={{ top: '140%' }} ref={frame}>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} len={arr.length} index={idx} />;
			})}
		</section>
	);
}

export default Section;
