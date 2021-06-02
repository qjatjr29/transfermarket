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
import { SonStatistic } from "../../Api/api";


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
const SubText = styled.p`
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 8px 0;
    line-height: 1.5;
`;
const Title = styled.div`
  font-family: 'Jua', sans-serif;
  font-size: 5rem;
  margin-bottom: 1.2rem;
  opacity: 0.8;
`;
const Main = styled.div`
    
    padding: 0px 25px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
    flex-direction: column;
`;
const Description = styled.div`
  width: 100%;
  z-index: 3;
  color: white;
  opacity: 0.6;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-bottom: 30px;
`;

const First = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    flex-direction: column;
    font-family: 'Jua', sans-serif;
    & ${Wrap} {
        flex-direction: column;
    }

    @media only screen and (min-width: 800px) {
        height: 600px;

        ${MainImg} {
            width: 250px;
        }
        ${SubText} {
            font-size: 20px;
        }
        ${MainText} {
            font-size: 26px;
        }
        ${Title} {
            font-size: 26px;
        }
        ${Description} {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1280px) {
        height: 800px;
        ${MainImg} {
            width: 350px;
        }
        ${SubText} {
            font-size: 25px;
        }
        ${MainText} {
            font-size: 38px;
        }
        ${Title} {
            font-size: 38px;
        }
        ${Description} {
            font-size: 26px;
        }
    }

    @media only screen and (min-width: 2000px) {
        height: 1000px;
        ${MainImg} {
            width: 450px;
        }
        ${SubText} {
            font-size: 28px;
        }
        ${MainText} {
            font-size: 50px;
        }
        ${Title} {
            font-size: 45px;
        }
        ${Description} {
            font-size: 30px;
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

const LoadData = () => {
    const [sonData, setSondata] = useState([]);
    const [loading, setLoading] = useState(true);
    const LoadDatas = async () => {
        setLoading(true);
        try {
            const SonStat = await SonStatistic();
            console.log(SonStat.data);
            setSondata(SonStat.data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        LoadDatas();
    }, []);


    return { loading, sonData }
}


const Home = () => {
    const { loading, sonData } = LoadData();
    // console.log(sonData);
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
            {loading ? <Loader /> :
                <>
                    {sonData && sonData.length > 0 &&
                        <First>
                            <Title>{sonData[0].name}</Title>
                            <Description>리그 : {sonData[0].League}</Description>
                            <Description>나이 : {sonData[0].age}</Description>
                            <Description>경기수 : {sonData[0].Games}</Description>
                            <Description>골 : {sonData[0].Goals}</Description>
                            <Description>어시스트 : {sonData[0].Assists}</Description>
                            <Description>평점 : {sonData[0].Rating}</Description>
                        </First>
                    }
                </>
            }


            {/* <First>

                <Wrap>
                    <MainText>{sonData[0].name}</MainText>

                    <SubText>{sonData[0].League}</SubText>
                    <SubText>{sonData[0].age}</SubText>
                    <SubText>{sonData[0].Games}</SubText>
                    <SubText>{sonData[0].Goals}</SubText>
                    <SubText>{sonData[0].Assists}</SubText>
                    <MainText>

                    </MainText>
                </Wrap>
            </First> */}
            {/* <Content>
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
            </Content> */}
        </Container>
    )

}

export default Home;