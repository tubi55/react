import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import './scss/style.scss';
import Btns from './Btns';
import { useRef } from 'react';

function App() {
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
	const frame = useRef(null);

	return (
		<>
			<Header />
			<Section frame={frame} items={arr} />
			<Btns frame={frame} len={arr.length} />
			<Footer />
		</>
	);
}

export default App;
