import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import PlayerStatSection from 'Components/playerStatSection';
import LaLigaImg from '../../../assets/laLiga.PNG';
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
const DivideDiv = styled.div`
    height:20px;    
`;
const SectionTitle = styled.span`
    margin-top:20px;
    font-size:23px;
    font-weight:600;
`;
const LigueImage = styled.img`
    height:200px;
    width:230px;
    border-radius:5px;
`;
const SectionHr = styled.hr`
    margin-top:15px;
`;
// const ValueContent = styled.div`
//     height: 150px;
//     display: grid;
//     gap: 5px;
//     align-items: center;
//     grid-auto-flow: column;
//     grid-auto-columns: 8%;
//     overflow-x: auto;
// `;

const Table = styled.table`
    width:100%;
    border-spacing:50px;
    border-collapse: separate;
`;

const usePlyerStat = () => {
    const [loading, setLoading] = useState(true);
    const [laligaPlayers, setlaligaPlayers] = useState([]);
    // const [clubValues, setClubValues] = useState([]);
    const loadStat = async () => {
        setLoading(true);
        try {


            let res = await fetch('http://127.0.0.1:8000/laligaPlayer/');
            const laligaPlayers = await res.json();
            setlaligaPlayers(laligaPlayers);

            // res = await fetch('http://127.0.0.1:8000/bundesligaPlayer/')
            // const bundesligaPlayers = await res.json();
            // setbundesligaPlayers(bundesligaPlayers);

            // res = await fetch('http://127.0.0.1:8000/serieAPlayer/')
            // const serieAPlayers = await res.json();
            // setserieAPlayers(serieAPlayers);

            // res = await fetch('http://127.0.0.1:8000/defenderValue/')
            // const ligue1Players = await res.json();
            // setligue1Players(ligue1Players);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadStat();
    }, []);
    return { loading, laligaPlayers };
}

const LiLigaPlayerStat = () => {
    const { loading, laligaPlayers } = usePlyerStat();
    // console.log(playerValues);
    // console.log(playerValues[0].player_image);
    return (
        loading ? (
            <Loader>
                <Helmet>
                    <title>LiLiga Player Stats</title>
                </Helmet>
            </Loader>
        ) : (
            <Container>
                <Helmet>
                    <title>LiLiga Player Stats</title>
                </Helmet>
                <Content>
                    {laligaPlayers && laligaPlayers.length > 0 && (
                        <Item>
                            <SectionTitle><LigueImage src={LaLigaImg} /> LiLiga</SectionTitle>
                            <SectionHr></SectionHr>
                            <Table>
                                <thead>
                                    <tr>
                                        <td>Ranking</td>
                                        <td>Name / Club</td>
                                        <td>Age</td>
                                        <td>Position</td>
                                        <td>Games</td>
                                        <td>Goals</td>
                                        <td>Assists</td>
                                        <td>SpG</td>
                                        <td>PS</td>
                                        <td>MotMPS</td>
                                        <td>Rating</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {laligaPlayers.map(player => (
                                        <PlayerStatSection
                                            key={player.specific_id}
                                            ranking={player.specific_id}
                                            name={player.name}
                                            age={player.age}
                                            position={player.position}
                                            games={player.Games}
                                            goals={player.goals}
                                            assists={player.Assists}
                                            SpG={player.SpG}
                                            Ps={player.PS}
                                            MotM={player.MotM}
                                            Rating={player.Rating}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        </Item>
                    )}
                </Content>

            </Container>

        ));
}

export default LiLigaPlayerStat;