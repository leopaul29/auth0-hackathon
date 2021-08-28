import { h } from 'preact';
import style from './style.css';
import data from '../../openquizzdb_175.json'
import QuestionComponent from '../../components/QuestionComponent';

const questions = data.quizz.en.débutant;

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div className="questionList">
			<h1>Quizz</h1>
			{questions.map((question, i) => {
				return <QuestionComponent key={question.id} questionData={question} max={questions.length} />
			})}
		</div>
	</div>
);

export default Home;
