import Link from "next/link";
import ChampionsStyles from "../styles/Champions.module.css";

const ChampionsItem = ({ champion }) => {
  console.log(champion);
  return (
    <div className={ChampionsStyles.card}>
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
      <p className={ChampionsStyles.para}>{champion.blurb}</p>
    </div>
  );
};

export default ChampionsItem;
