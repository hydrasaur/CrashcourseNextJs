import Image from "next/image";
// import Syndra from "../assets/syndra.jpg";
// import Ahri from "../assets/ahri.jpeg";
// import Xerath from "../assets/xerath.jpg";
// import Velkoz from "../assets/velkoz.jpg";
// import Anivia from "../assets/anivia.jpeg";
import Championstyles from "../styles/Champions.module.css";
import ChampionItem from "./ChampionItem";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

const FavoriteList = ({ champions }) => {
  // console.log("Favo component", Object.entries(champions.data));
  const championsList = Object.entries(champions.data);

  const array = ["134", "101", "103", "34", "161"];

  const favoriteList = championsList.filter((champion) => {
    if (array.includes(champion[1].key)) return true;
  });

  return (
    <div>
      {favoriteList.map((champion, index) => {
        console.log(champion[1]);
        return (
          <div key={index} className={Championstyles.favCard}>
            <Image
              src={`/assets/${champion[1].image.full.toLowerCase()}`}
              alt="picture of the champion"
              width="380px"
              height="180px"
            />
            <div>
              <h1>{champion[0]}</h1>
              <h2>{champion[1].title}</h2>
              <p>{champion[1].blurb}</p>
            </div>
            <h4>{champion[1].tags}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteList;
