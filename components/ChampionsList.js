import Link from "next/link";
import ChampionItem from "./ChampionItem";
import Championstyles from "../styles/Champions.module.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Buttonstyles from "../styles/Button.module.css";
const ChampionsList = ({ champions }) => {
  return (
    <div className={Championstyles.grid}>
      <LolChamp />

      {Object.entries(champions.data).map((champion) => {
        const champ = champion[1];
        return <ChampionItem champion={champ} />;
      })}
    </div>
  );
};

function LolChamp() {
  const [name, setName] = useState("");

  return (
    <form className={Buttonstyles.button}>
      <label>
        Enter champ here:
        <input
          type="text"
          placeholder="which champ?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button type="submit">search</button>
    </form>
  );
}
export default ChampionsList;
