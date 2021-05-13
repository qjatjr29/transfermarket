import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import ValueSection from 'Components/ValueSection';
import { AllValueList, ForwardValueList, MidfielderValueList, DefenderValueList, GoalkeeperValueList, ClubValueList } from '../../Api/api';
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

const useValue = () => {
    const [loading, setLoading] = useState(true);
    const [playerValues, setPlayerValues] = useState([]);
    const [fowardValues, setFowardValues] = useState([]);
    const [midfielderValues, setMidfielderValues] = useState([]);
    const [defenderValues, setDefenderValues] = useState([]);
    const [goalkeeperValues, setGoalkeeperValues] = useState([]);
    const [clubValues, setClubValues] = useState([]);
    const loadValue = async () => {
        setLoading(true);
        try {
            // let res = await fetch('http://127.0.0.1:8000/playerValue/');
            // const playerValues = await res.json();
            // setPlayerValues(playerValues);

            // res = await fetch('http://127.0.0.1:8000/forwardValue/');
            // const fowardValues = await res.json();
            // setFowardValues(fowardValues);

            // res = await fetch('http://127.0.0.1:8000/clubValue/')
            // const clubValues = await res.json();
            // setClubValues(clubValues);

            // res = await fetch('http://127.0.0.1:8000/midfieldValue/')
            // const midfielderValues = await res.json();
            // setMidfielderValues(midfielderValues);

            // res = await fetch('http://127.0.0.1:8000/defenderValue/')
            // const defenderValues = await res.json();
            // setDefenderValues(defenderValues);

            // res = await fetch('http://127.0.0.1:8000/goalKeeperValue/')
            // const goalkeeperValues = await res.json();
            // setGoalkeeperValues(goalkeeperValues);

            const playerValues = await AllValueList();
            const fowardValues = await ForwardValueList();
            const midfielderValues = await MidfielderValueList();
            const defenderValues = await DefenderValueList();
            const goalkeeperValues = await GoalkeeperValueList();
            const clubValues = await ClubValueList();
            console.log(clubValues.data);
            setFowardValues(fowardValues.data);
            setPlayerValues(playerValues.data);
            setMidfielderValues(midfielderValues.data);
            setDefenderValues(defenderValues.data);
            setGoalkeeperValues(goalkeeperValues.data);
            setClubValues(clubValues.data);

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadValue();
    }, []);
    return { loading, playerValues, clubValues, fowardValues, midfielderValues, defenderValues, goalkeeperValues };
}

const Value = () => {
    const { loading, playerValues, clubValues, fowardValues, midfielderValues, defenderValues, goalkeeperValues } = useValue();
    // console.log(playerValues);
    // console.log(playerValues[0].player_image);
    return (
        loading ? (
            <Loader>
                <Helmet>
                    <title>Most Valuable Players</title>
                </Helmet>
            </Loader>
        ) : (
            <Container>
                <Helmet>
                    <title>Most Valuable Players</title>
                </Helmet>
                <Content>
                    {playerValues && playerValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable Players</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {playerValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        image={player.player_image}
                                        // team={player.team}
                                        value={player.value}
                                    // team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                    {clubValues && clubValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable Club</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {clubValues.map(club => (
                                    <ValueSection
                                        key={club.specific_id}
                                        ranking={club.ranking}
                                        name={club.name}
                                        image={club.club_image}
                                        Competition={club.Competition}
                                        value={club.value}
                                    // team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                    {fowardValues && fowardValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable Forward</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {fowardValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        image={player.player_image}
                                        team={player.team}
                                        value={player.value}
                                        team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                    {midfielderValues && midfielderValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable MidFielders</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {midfielderValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        image={player.player_image}
                                        team={player.team}
                                        value={player.value}
                                    // team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                    {defenderValues && defenderValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable Defenders</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {defenderValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        image={player.player_image}
                                        team={player.team}
                                        value={player.value}
                                    // team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                    {goalkeeperValues && goalkeeperValues.length > 0 && (
                        <Item>
                            <SectionTitle>Most Valuable GoalKeepers</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {goalkeeperValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        image={player.player_image}
                                        team={player.team}
                                        value={player.value}
                                    // team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>
                        </Item>
                    )}
                </Content>

            </Container>

        ));
}


// class PlayerValue extends Component {
//     state = {
//         playerValues: [],
//         fowardValues: [],
//         midfielderValues: [],
//         defenderValues: [],
//         goalkeeperValues: [],
//         clubValues: [],
//     };

//     async componentDidMount() {
//         try {
//             let res = await fetch('http://127.0.0.1:8000/playerValue/');
//             const playerValues = await res.json();
//             res = await fetch('http://127.0.0.1:8000/forwardValue/');
//             const fowardValues = await res.json();
//             this.setState({
//                 playerValues,
//                 fowardValues
//             });
//             console.log(fowardValues);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     render() {
//         return (
// <div>
//     {this.state.playerValues.map(player => (
//         <div key={player.ranking}>
//             <h3>{player.name}</h3>
//             <span>{player.value}</span>
//         </div>
//     ))}
// </div>
// <div>
//     {this.state.forwardValues.map(player => (
//         <div key={player.ranking}>
//             <h3>{player.name}</h3>
//             <span>{player.value}</span>
//         </div>
//     ))}
// </div>
//         );
//     }
// }

// export default PlayerValue;
export default Value;