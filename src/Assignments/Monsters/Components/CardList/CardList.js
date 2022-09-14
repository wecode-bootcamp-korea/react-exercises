import styled from "@emotion/styled";
import React, { useState } from "react";

import Card from "../Card/Card";
import Detail from "../../Detail";

const CardList = ({ item }) => {
    const [clicked, setClicked] = useState();
    const handleCardClick = (id) => {
        console.log(id);
        setClicked(item.find((el) => el.id === id));
    };
    return (
        <CardListContainer>
            {item.map((monster) => (
                <Card
                    name={monster.name}
                    id={monster.id}
                    phone={monster.phone}
                    email={monster.email}
                    key={monster.id}
                    image={monster.image}
                    onClick={() => handleCardClick(monster.id)}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            ))}
            {clicked && <Detail clicked={clicked} setClicked={setClicked} />}
        </CardListContainer>
    );
};

export default CardList;

const CardListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 220px;
    gap: 10px;
    width: 100%;
`;
