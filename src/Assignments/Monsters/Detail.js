import React from "react";

import styled from "@emotion/styled";

import Overlay from "./Overlay";

const Detail = ({ clicked, setClicked }) => {
    return (
        <>
            <Overlay onClick={() => setClicked()} />
            <Container>
                <h2>연락처 정보</h2>
                <img src={clicked.image} alt="프로필사진" />
                <Info>
                    <InfoLeft> Name : </InfoLeft>
                    <InfoRight>{clicked.name}</InfoRight>
                </Info>
                <Info>
                    <InfoLeft> Phone : </InfoLeft>
                    <InfoRight>{clicked.phone}</InfoRight>
                </Info>
                <Info>
                    <InfoLeft> Company : </InfoLeft>
                    <InfoRight>{clicked.company.name}</InfoRight>
                </Info>
                <Info>
                    <InfoLeft> Email : </InfoLeft>
                    <InfoRight>{clicked.email}</InfoRight>
                </Info>
            </Container>
        </>
    );
};

export default Detail;

const Container = styled.div`
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    background-color: white;
    border-radius: 20px;
    padding-bottom: 30px;

    img {
        width: 300px;
        margin-bottom: 20px;
    }
`;

const Info = styled.div``;

const InfoLeft = styled.span`
    font-weight: 600;
    font-size: 18px;
`;

const InfoRight = styled.span``;
