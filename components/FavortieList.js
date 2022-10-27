import React from "react";
import Championstyles from "../styles/Champions.module.css";
import ChampionItem from "./ChampionItem";

const FavortieList = ({ champions }) => {
  //   console.log("Favo component", Object.entries(champions.data).);
  const championsList = Object.entries(champions.data);

  const array = ["134", "101", "103"];

  const favortieList = championsList.filter((champion) => {
    if (array.includes(champion[1].key)) return true;
  });

  return (
    <div className={Championstyles}>
      {favortieList.map((champion, index) => {
        console.log(champion);
        return (
          <div className={Championstyles.favoriteCard}>
            <h1 key={index}>{champion[0]}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FavortieList;
