import CardContainer from '../CardContainer/CardContainer.jsx';
import SearchOptions from '../SearchOptions/SearchOptions.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import style from './Home.module.scss';

export default function Home() {
    return (
		<div className={style.Home}>
			<h1 className={style.moto}>Find your destination...</h1>
			<Searchbar />
			<SearchOptions />
			<CardContainer />
		</div>
	);
}