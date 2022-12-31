import Card from "./../Card/Card";
import "./CardList.scss";

function CardList(props) {
  const { inputValue, monsterList } = props;

  return (
    <>
      <div className="cardList">
        {monsterList
          .filter((card) => {
            return card.name.toLowerCase().includes(inputValue);
          })
          .map((card) => {
            return <Card key={card.id} card={card} />;
          })}
      </div>
    </>
  );
}

export default CardList;
