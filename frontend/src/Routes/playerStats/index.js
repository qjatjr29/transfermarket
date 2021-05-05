// import React, { Component, useState, useEffect } from 'react';
// import styled from "styled-components";
// import Helmet from "react-helmet";
// import Loader from "Components/Loader";
// import ValueSection from 'Components/ValueSection';

// const Container = styled.div`
//     height:calc(100vh - 50px);
//     width:100%;

//     padding:50px;
// `;
// const Content = styled.div`
//     display:flex;
//     flex-direction:column;
//     width:100%;
//     position:relative;
//     z-index:1;
//     height:100%;
// `;
// const Item = styled.div`
//     margin-bottom:30px;
// `;


// const Divider = styled.span`
//     font-size:25px;
//     margin:0 10px;
// `;
// const DivideDiv = styled.div`
//     height:20px;    
// `;
// const SectionTitle = styled.span`
//     margin-top:20px;
//     font-size:23px;
//     font-weight:600;
// `;
// const LigueImage = styled.img`
//     height:80px;
//     width:80px;
//     border-radius:5px;
// `;
// const SectionHr = styled.hr`
//     margin-top:15px;
// `;
// const ValueContent = styled.div`
//     height: 150px;
//     display: grid;
//     gap: 5px;
//     align-items: center;
//     grid-auto-flow: column;
//     grid-auto-columns: 8%;
//     overflow-x: auto;
// `;

// const useValue = () => {
//     const [loading, setLoading] = useState(true);
//     const [premierPlayers, setpremierPlayers] = useState([]);
//     const [laligaPlayers, setlaligaPlayers] = useState([]);
//     const [bundesligaPlayers, setbundesligaPlayers] = useState([]);
//     const [serieAPlayers, setserieAPlayers] = useState([]);
//     const [ligue1Players, setligue1Players] = useState([]);
//     // const [clubValues, setClubValues] = useState([]);
//     const loadValue = async () => {
//         setLoading(true);
//         try {

//             let res = await fetch('http://127.0.0.1:8000/premierPlayer/');
//             const premierPlayers = await res.json();
//             setpremierPlayers(premierPlayers);

//             // res = await fetch('http://127.0.0.1:8000/laligaPlayer/');
//             // const laligaPlayers = await res.json();
//             // setlaligaPlayers(laligaPlayers);

//             // res = await fetch('http://127.0.0.1:8000/bundesligaPlayer/')
//             // const bundesligaPlayers = await res.json();
//             // setbundesligaPlayers(bundesligaPlayers);

//             // res = await fetch('http://127.0.0.1:8000/serieAPlayer/')
//             // const serieAPlayers = await res.json();
//             // setserieAPlayers(serieAPlayers);

//             // res = await fetch('http://127.0.0.1:8000/defenderValue/')
//             // const ligue1Players = await res.json();
//             // setligue1Players(ligue1Players);
//         } catch (e) {
//             console.log(e);
//         } finally {
//             setLoading(false);
//         }
//     }
//     useEffect(() => {
//         loadValue();
//     }, []);
//     return { loading, premierPlayers };
// }

// const Value = () => {
//     const { loading, premierPlayers } = useValue();
//     // console.log(playerValues);
//     // console.log(playerValues[0].player_image);
//     return (
//         loading ? (
//             <Loader>
//                 <Helmet>
//                     <title>5 Ligue Player Stats</title>
//                 </Helmet>
//             </Loader>
//         ) : (
//             <Container>
//                 <Helmet>
//                     <title>5 Ligue Player Stats</title>
//                 </Helmet>
//                 <Content>
//                     {premierPlayers && premierPlayers.length > 0 && (
//                         <Item>
//                             <SectionTitle><LigueImage src="/assets/premierLeague.PNG" /> Premier League</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {premierPlayers.map(player => (
//                                     <ValueSection
//                                         key={player.specific_id}
//                                         ranking={player.rating}
//                                         name={player.name}
//                                         image={player.player_image}
//                                         team={player.team}
//                                         value={player.value}
//                                         team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                     {clubValues && clubValues.length > 0 && (
//                         <Item>
//                             <SectionTitle>Most Valuable Club</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {clubValues.map(club => (
//                                     <ValueSection
//                                         key={club.specific_id}
//                                         ranking={club.ranking}
//                                         name={club.name}
//                                         image={club.club_image}
//                                         Competition={club.Competition}
//                                         value={club.club_value}
//                                     // team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                     {fowardValues && fowardValues.length > 0 && (
//                         <Item>
//                             <SectionTitle>Most Valuable Forward</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {fowardValues.map(player => (
//                                     <ValueSection
//                                         key={player.specific_id}
//                                         ranking={player.ranking}
//                                         name={player.name}
//                                         image={player.player_image}
//                                         team={player.team}
//                                         value={player.value}
//                                         team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                     {midfielderValues && midfielderValues.length > 0 && (
//                         <Item>
//                             <SectionTitle>Most Valuable MidFielders</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {midfielderValues.map(player => (
//                                     <ValueSection
//                                         key={player.specific_id}
//                                         ranking={player.ranking}
//                                         name={player.name}
//                                         image={player.player_image}
//                                         team={player.team}
//                                         value={player.value}
//                                     // team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                     {defenderValues && defenderValues.length > 0 && (
//                         <Item>
//                             <SectionTitle>Most Valuable Defenders</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {defenderValues.map(player => (
//                                     <ValueSection
//                                         key={player.specific_id}
//                                         ranking={player.ranking}
//                                         name={player.name}
//                                         image={player.player_image}
//                                         team={player.team}
//                                         value={player.value}
//                                     // team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                     {goalkeeperValues && goalkeeperValues.length > 0 && (
//                         <Item>
//                             <SectionTitle>Most Valuable GoalKeepers</SectionTitle>
//                             <SectionHr></SectionHr>
//                             <ValueContent>
//                                 {goalkeeperValues.map(player => (
//                                     <ValueSection
//                                         key={player.specific_id}
//                                         ranking={player.ranking}
//                                         name={player.name}
//                                         image={player.player_image}
//                                         team={player.team}
//                                         value={player.value}
//                                     // team_image={player.team_image}
//                                     />
//                                 ))}
//                             </ValueContent>
//                         </Item>
//                     )}
//                 </Content>

//             </Container>

//         ));
// }

// export default Value;