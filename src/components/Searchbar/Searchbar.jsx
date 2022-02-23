import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import style from './Searchbar.module.scss';
import { Link } from 'react-router-dom';

export default function Searchbar() {
	const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');
    const searchbar = useRef();

	useEffect(() => {
		axios.get('https://hollie-pi.herokuapp.com/countries').then(({ data }) => setCountries(data));
	}, [setCountries]);

    function handleChange(e) {
        const { value } = e.target;
		setInput(value);
    }

    const results = countries
		.filter((country) => country.name.startsWith(input))
		.map((country) => (
			<Link key={country.id} to={`/country/${country.id}`}>
				<li>{country.name}</li>
			</Link>
        ));

	return (
		<div className={style.searchbar} ref={searchbar}>
			<input type="text" placeholder="Canada" onChange={handleChange} />
			<div className={style.resultBox}>
				<ul>{input && results.length ? results : <li>{input ? <h2>Couldn't find countries.</h2> : placeholderCountries}</li>}</ul>
			</div>
		</div>
	);
}
