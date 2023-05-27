import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import './scss/style.scss';
import Btns from './Btns';
import { useRef, useState } from 'react';

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
	//좌우 버튼을 클릭할때 활성화 될 순번을 담을 State
	const [Active, setActive] = useState(0);

	//기존의 활성화 순번을 초기값으로 해서 prev버튼 클릭시 활성화될 순번을 반환하는 함수
	const prev = () => {
		setActive((Active) => (Active === 0 ? arr.length - 1 : --Active));
	};

	return (
		<>
			<Header />
			<Section frame={frame} items={arr} Active={Active} />
			<Btns frame={frame} len={arr.length} prev={prev} />
			<Footer />
		</>
	);
}

export default App;
