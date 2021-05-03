import React, { Component, useState, useEffect } from 'react';
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import ValueSection from 'Components/ValueSection';

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
            let res = await fetch('http://127.0.0.1:8000/playerValue/');
            const playerValues = await res.json();
            setPlayerValues(playerValues);
            res = await fetch('http://127.0.0.1:8000/forwardValue/');
            const fowardValues = await res.json();
            setFowardValues(fowardValues);

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadValue();
    }, []);
    return { loading, playerValues, fowardValues };
}

const Value = () => {
    const { loading, playerValues, fowardValues } = useValue();
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
                        <div>
                            <SectionTitle>Most Valuable Players</SectionTitle>
                            <SectionHr></SectionHr>
                            <ValueContent>
                                {playerValues.map(player => (
                                    <ValueSection
                                        key={player.specific_id}
                                        ranking={player.ranking}
                                        name={player.name}
                                        player_image={player.player_image}
                                        team={player.team}
                                        value={player.value}
                                        team_image={player.team_image}
                                    />
                                ))}
                            </ValueContent>

                        </div>
                    )}
                </Content>
                < div >
                    {
                        fowardValues.map(player => (
                            <div key={player.ranking}>
                                <h3>{player.name}</h3>
                                <span>{player.value}</span>
                            </div>
                        ))
                    }
                </div >
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