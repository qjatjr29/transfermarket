/* global kakao */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
// import Beach from "../../assets/basketball.jpg";
// import Beach2 from "../../assets/basketball.jpg";
// import Airplane from "../../assets/basketball.jpg";
import CoverImage from "../../assets/mainImage.jpg";
import basketballImage from "../../assets/basketball.jpg";
import PlayerImage from "../../assets/playerResult.PNG";
import ClubImage from "../../assets/clubResult.PNG";

const Container = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
`;

const Item = styled.div`
    margin-bottom:30px;
`;
const SectionTitle = styled.span`
    margin-top:20px;
    font-size:23px;
    font-weight:600;
`;
const Cover = styled.div`
    position:absolute;
    background-image: url(${props => props.small});
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (min-width: 800px) {
        height: 400px;
    }

    @media only screen and (min-width: 1280px) {
        background-image: url(${props => props.medium});
        height: 800px;
    }

    @media only screen and (min-width: 2000px) {
        background-image: url(${props => props.large});
        height: 1000px;
    }

    opacity: 0.3;
    z-index: -1;
`;
const Wrap = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainImg = styled.li`
    width: 150px;
    & img {
        width: 100%;
        height: auto;
    }
`;
const MainText = styled.p`
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
    line-height: 1.5;
`;


const First = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    flex-direction: column;

    & ${Wrap} {
        flex-direction: column;
    }

    @media only screen and (min-width: 800px) {
        height: 600px;

        ${MainImg} {
            width: 250px;
        }
     
        ${MainText} {
            font-size: 26px;
        }
    }

    @media only screen and (min-width: 1280px) {
        height: 800px;
        ${MainImg} {
            width: 350px;
        }
      
        ${MainText} {
            font-size: 38px;
        }
    }

    @media only screen and (min-width: 2000px) {
        height: 1000px;
        ${MainImg} {
            width: 450px;
        }
        ${MainText} {
            font-size: 50px;
        }
    }
`;

const RotateHolder = styled.div`
    position: relative;
    width: 140px;
    height: 210px;
`;

const Image = styled.img`
    width: 200px;
    height: auto;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;

    &:not(:last-child) {
        border-top: 10px solid #303030;
        border-bottom: 10px solid #303030;
    }

    @media only screen and (min-width: 800px) {
        height: 400px;
        ${RotateHolder} {
            width: 200px;
            height: 270px;
        }
        ${MainText} {
            font-size: 26px;
        }
        ${Image} {
            width: 400px;
        }
    }

    @media only screen and (min-width: 1280px) {
        height: 600px;
        ${RotateHolder} {
            width: 250px;
            height: 320px;
        }
        ${MainText} {
            font-size: 30px;
        }
        ${Image} {
            width: 400px;
        }
    }

    @media only screen and (min-width: 2000px) {
        height: 700px;
        ${RotateHolder} {
            width: 300px;
            height: 370px;
        }
        ${MainText} {
            font-size: 50px;
        }
        ${Image} {
            width: 320px;
        }
    }

    & ${Wrap} {
        justify-content: space-between;
        width: 100%;
        max-width: 1100px;
    }
`;

const RotateImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
   
    background-image: url(${props => props.bg});
    top: 0;
    left: 0;
    background-size: 300px;
    background-position-x: center;
    /* background-position: center; */
    background-repeat: no-repeat;
    object-fit: fill;
    box-shadow: 0px 0px 10px 0px #E50914;
    &:nth-child(1) {
        z-index: 10;
        animation: rotate1 12s ease-in-out infinite;
    }
    &:nth-child(2) {
        z-index: 0;
        animation: rotate2 12s ease-in-out infinite;
    }

    @keyframes rotate1 {
        0% {
            z-index: 10;
            transform: perspective(800px) rotateY(0deg);
        }
        50% {
            z-index: 0;
            transform: perspective(800px) rotateY(180deg);
        }
        100% {
            z-index: 10;
            transform: perspective(800px) rotateY(360deg);
        }
    }

    @keyframes rotate2 {
        0% {
            z-index: 0;
            transform: perspective(800px) rotateY(180deg);
        }
        50% {
            z-index: 10;
            transform: perspective(800px) rotateY(360deg);
        }
        100% {
            z-index: 0;
            transform: perspective(800px) rotateY(540deg);
        }
    }
`;


const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Cover
                small="https://tot-tmp.azureedge.net/media/33584/sonny-kr-header-2021.jpg"
                medium="https://tot-tmp.azureedge.net/media/33584/sonny-kr-header-2021.jpg"
                large="https://tot-tmp.azureedge.net/media/33584/sonny-kr-header-2021.jpg?anchor=center&amp;mode=crop&amp;width=1200"
            // bgImage="https://resources.premierleague.com/photos/2020/07/10/8bfb6be4-5e23-4ce2-970b-e85ced220cc0/GettyImages-955249480.jpg?width=2000height=800"
            >
            </Cover>
            <First>
                <Wrap>
                    {/* <MainImg>
                        <img src={CoverImage} />
                    </MainImg> */}
                    <MainText>

                    </MainText>
                    <MainText>

                    </MainText>
                </Wrap>
            </First>
            <Content>
                <Wrap>
                    <MainText>
                        Statistics<br /><br />
                            선수와 팀<br />
                            기록을 보여줍니다.<br />
                    </MainText>
                    <RotateHolder>
                        <RotateImage bg={PlayerImage} />
                        <RotateImage bg={ClubImage} />
                    </RotateHolder>
                </Wrap>
            </Content>
            <Content>
                <Wrap>
                    <Image src={basketballImage} />
                    <MainText>
                        Value<br /><br />
                            선수와 팀<br />
                            가치를 보여줍니다.

                    </MainText>

                </Wrap>
            </Content>
        </Container>
    )

}

export default Home;