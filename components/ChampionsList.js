import Link from "next/link";
import ChampionItem from "./ChampionItem";
import Championstyles from "../styles/Champions.module.css";

const ChampionsList = ({ champions }) => {
  return (
    <div className={Championstyles.grid}>
      {Object.entries(champions.data).map((champion) => {
        const champ = champion[1];
        return <ChampionItem champion={champ} />;
      })}
    </div>
  );
};

export default ChampionsList;
