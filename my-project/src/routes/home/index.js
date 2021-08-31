import { h } from "preact";
import style from "./style.css";
import Diapo from "../../components/Diapo/Diapo";

const Home = () => (
  <div class={style.home}>
    <Diapo />
  </div>
);

export default Home;
