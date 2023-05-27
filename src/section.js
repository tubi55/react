import Card from './Card';

function Section({ frame, items, Active }) {
	console.log(items);
	return (
		<section style={{ top: '140%' }} ref={frame}>
			{items.map((data, idx) => {
				return <Card key={idx} data={data} len={items.length} index={idx} Active={Active} />;
			})}
		</section>
	);
}

export default Section;
