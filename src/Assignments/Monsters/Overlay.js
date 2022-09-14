import React from "react";
import styled from "@emotion/styled";

const Overlay = ({ onClick }) => {
    return <Container onClick={onClick} />;
};

export default Overlay;

const Container = styled.div`
    background-color: black;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
`;
