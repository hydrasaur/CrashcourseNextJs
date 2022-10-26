import Link from "next/link";
import ChampionItem from "./ChampionItem";
import Championstyles from "../styles/Champions.module.css";

const ChampionsList = ({ champions }) => {
  return (
    <div className={Championstyles.grid}>
      {Object.entries(champions.data).map((c) => {
        const champion = c[1];
        return <ChampionItem champion={champion} />;
      })}
    </div>
  );
};

export default ChampionsList;
