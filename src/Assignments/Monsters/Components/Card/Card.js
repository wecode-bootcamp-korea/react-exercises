import React from "react";
import styled from "@emotion/styled";

const Card = ({ name, email, phone, image, onClick }) => {
    return (
        <CardContainer onClick={onClick}>
            <img src={image} alt="프로필 사진 오류" />
            <UserInfo>
                <Name>{name}</Name>
                <Info>▶︎ PHONE : {phone}</Info>
                <Info>▶︎ EMAIL : {email}</Info>
            </UserInfo>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    display: flex;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    img {
        width: 60px;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`;

const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
`;
const Info = styled.span`
    font-size: 14px;
`;
