import { server } from "../config";
import Header from "../components/Header";
import ChampionsList from "../components/ChampionsList";
import FavortieList from "../components/FavortieList";

export const Champions = ({ champions }) => {
  // console.log(champions.data);
  return (
    <div>
      <Header
        title="champion list"
        description="this is a list of the playable champions in LoL"
      />
      <FavortieList champions={champions} />
      <ChampionsList champions={champions} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json`
  );

  const champions = await res.json();

  return {
    props: {
      champions,
    },
  };
};

export default Champions;
