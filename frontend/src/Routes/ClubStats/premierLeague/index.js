import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import ClubStatSection from 'Components/clubStatSection';
import PremierImg from '../../../assets/premierLeague.PNG';
import LaLigaImg from '../../../assets/laLiga.PNG';
import BundesLigaImg from '../../../assets/bundesLiga.PNG';
import SerieAImg from '../../../assets/serieA.PNG';
import Ligue1Img from '../../../assets/ligue1.PNG';
import { Link } from "react-router-dom"

const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;

    padding:50px;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    z-index:1;
    height:100%;
`;
const Item = styled.div`
    margin-bottom:30px;
`;


const Divider = styled.span`
    font-size:25px;
    margin:0 10px;
`;
const LeagueDiv = styled.div`
    height: 70px;
    display: flex;
    gap: 20px;
    align-items: center;
    /* justify-content:space-between; */
    /* grid-auto-flow: column;
    grid-auto-columns: 8%;
    overflow-x: auto;     */
    margin-bottom:30px;
`;

const SectionTitle = styled.span`
    margin-top:20px;
    font-size:23px;
    font-weight:600;
`;
const LigueImage = styled.img`
    height:50px;
    width:50px;
    border-radius:5px;
`;
const SectionHr = styled.hr`
    margin-top:15px;
`;
const ValueContent = styled.div`
    height: 150px;
    display: grid;
    gap: 5px;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: 8%;
    overflow-x: auto;
`;

const SLink = styled(Link)`
`;
const Table = styled.table`
    width:800px;
    border-spacing:30px;
    border-collapse: separate;
`;
const useValue = () => {
    const [loading, setLoading] = useState(true);
    const [premierClubs, setpremierClubs] = useState([]);

    const loadValue = async () => {
        setLoading(true);
        try {

            let res = await fetch('http://127.0.0.1:8000/premierClub/');
            const premierClubs = await res.json();
            setpremierClubs(premierClubs);


        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadValue();
    }, []);
    return { loading, premierClubs };
}

const Value = () => {
    const { loading, premierClubs } = useValue();
    // console.log(playerValues);
    // console.log(playerValues[0].player_image);
    return (
        loading ? (
            <Loader>
                <Helmet>
                    <title>5 Ligue Clubs Stats</title>
                </Helmet>
            </Loader>
        ) : (
            <Container>
                <Helmet>
                    <title>5 Ligue Clubs Stats</title>
                </Helmet>
                <Content>


                    {premierClubs && premierClubs.length > 0 && (
                        <>
                            <LeagueDiv>
                                <SLink to="/premierCStats"><LigueImage src={PremierImg} /></SLink>
                                <SLink to="/LaLigaCStats"><LigueImage src={LaLigaImg} /></SLink>
                                <SLink to="/bundesLigaCStats"><LigueImage src={BundesLigaImg} /></SLink>
                                <SLink to="/serieACStats"><LigueImage src={SerieAImg} /></SLink>
                                <SLink to="/Ligue1CStats"><LigueImage src={Ligue1Img} /></SLink>
                            </LeagueDiv>
                            <Item>
                                <SLink to="/premierPStats"><SectionTitle>Premier League</SectionTitle></SLink>
                                <SectionHr></SectionHr>
                                <Table>
                                    <thead>
                                        <tr>
                                            <td>Ranking</td>
                                            <td>Club</td>
                                            <td>P</td>
                                            <td>W</td>
                                            <td>D</td>
                                            <td>L</td>
                                            <td>GF</td>
                                            <td>GA</td>
                                            <td>GD</td>
                                            <td>Pts</td>
                                            <td>State</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {premierClubs.map(clubs => (
                                            <ClubStatSection
                                                key={clubs.specific_id}
                                                ranking={clubs.ranking}
                                                name={clubs.name}
                                                play={clubs.play}
                                                win={clubs.win}
                                                draw={clubs.draw}
                                                lose={clubs.lose}
                                                gf={clubs.gf}
                                                ga={clubs.ga}
                                                gd={clubs.gd}
                                                pts={clubs.pts}
                                                state={clubs.state}
                                            />
                                        ))}
                                    </tbody>
                                </Table>
                            </Item>
                        </>
                    )}
                </Content>

            </Container>

        ));
}


export default Value;