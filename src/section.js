import Card from './Card';

function Section() {
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
		<section>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} />;
			})}
		</section>
	);
}

export default Section;
