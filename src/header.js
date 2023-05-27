import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
	return (
		<header>
			<h1>DCODELAB</h1>
			<FontAwesomeIcon icon={faBars} />
		</header>
	);
}

export default Header;
