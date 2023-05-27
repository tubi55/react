import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import './scss/style.scss';
import Btns from './Btns';
import { useRef } from 'react';

function App() {
	const frame = useRef(null);
	const len = useRef(0);
	console.log(frame);

	return (
		<>
			<Header />
			<Section frame={frame} len={len} />
			<Btns frame={frame} len={len} />
			<Footer />
		</>
	);
}

export default App;
