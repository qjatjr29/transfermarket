import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:28px;
    margin-top:20px;
`;
const LoadingDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
`;
const Loading = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 170px;
    animation: rotate 3s infinite linear;
    border: 2px solid transparent;
    border-top: 2px solid #FFF;
    border-bottom: 2px solid #FFF;
    border-radius: 100%;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
export default () =>
    <Container>
        <LoadingDiv>
            <span>Loading...</span>
            <Loading />
        </LoadingDiv>
        {/* <span role="img" aria-label="Loading">Loading..... ⏰</span> */}

    </Container>

