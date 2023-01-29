import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ monsterList }) => {
  console.log(monsterList);
  return (
    <div className="cardList">
      {monsterList.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
