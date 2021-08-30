import { h } from 'preact';
import style from './style.css';
import Diapo from '../../components/Diapo';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div className="questionList">
			<h1>Quizz</h1>
			<Diapo/>
		</div>
	</div>
);

export default Home;
