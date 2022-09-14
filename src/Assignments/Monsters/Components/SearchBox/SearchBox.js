import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import CardList from "./CardList";

const Monsters = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [copy, setCopy] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            data.map(
                (e) =>
                    (e.image = `https://robohash.org/${e.id}?set=set2&size=180x180`)
            );

            setMonsters(data);
            setCopy(data);
        };
        fetch();
    }, []);

    console.log(copy);
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        setMonsters(
            copy.filter(
                (e) =>
                    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    e.phone.includes(searchTerm) ||
                    e.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, copy]);

    return (
        <Container>
            <FixedWrap>
                <Title>연락처</Title>
                <Search
                    placeholder="이름, 연락처, 이메일 검색"
                    onChange={handleInputChange}
                />
            </FixedWrap>
            <CardList item={monsters} />
        </Container>
    );
};

export default Monsters;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    height: 1600px;
    text-align: center;
    padding: 10px;
`;

const FixedWrap = styled.div`
    position: fixed;
    background-color: aliceblue;
    top: 0;
    width: 100%;
`;

const Title = styled.h1`
    color: navy;
`;

const Search = styled.input`
    all: unset;
    background-color: white;
    width: 90%;
    height: 50px;
    font-size: 25px;
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    ::placeholder {
        font-size: 16px;
    }
`;
