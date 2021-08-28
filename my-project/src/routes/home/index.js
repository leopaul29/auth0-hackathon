import { h } from 'preact';
import style from './style.css';
import quizz from '../../openquizzdb_175.json'

const test = () => {
	console.log(test)
}

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		{test()}
	</div>
);

export default Home;
