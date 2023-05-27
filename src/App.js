import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import './scss/style.scss';
import Btns from './Btns';
import { useRef } from 'react';

function App() {
	const frame = useRef(null);
	console.log(frame);

	return (
		<>
			<Header />
			<Section frame={frame} />
			<Btns frame={frame} />
			<Footer />
		</>
	);
}

export default App;
