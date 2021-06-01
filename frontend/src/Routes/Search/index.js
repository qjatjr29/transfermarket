// import SearchContainer from "./SearchContainer";

// export default SearchContainer;
import React, { useEffect, useState } from "react"
import {
    SearchPlayerStats,
    SearchClubStats,
    SearchPlayerValue,
    SearchClubValue,

} from '../../Api/api';
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Link } from "react-router-dom"
import Section from "Components/Section";
import SearchValueSection from "Components/SearchValueSection";
import StatSearch from "Components/SearchStatSection";
import TestValue from "Components/SearchValue";
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    z-index:1;
    /* height:100%; */
`;
const Item = styled.div`
    margin-bottom:30px;
`;
const Container = styled.div`
    width:100%;
    padding:30px;
`;
const SectionTitle = styled.span`
    margin-top:20px;
    font-size:23px;
    font-weight:600;
`;
const Form = styled.form`
    margin-bottom:20px;
    width:100%;
`;

const Input = styled.input`
    all :unset;
    font-size:28px;
    width:100%;
`;
const Table = styled.table`
    width:100%;
    border-spacing:50px;
    border-collapse: separate;
`;
const useSearch = () => {
    const [loading, setLoading] = useState(true);
    const [SplayerValue, setSplayerValue] = useState([]);
    const [SclubValue, setSclubValue] = useState([]);
    const [SplayerStat, setSplayerStat] = useState([]);
    const [SclubStat, setSclubStat] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    const LoadSearch = async () => {
        setLoading(true);
        try {
            const SplayerValue = await SearchPlayerValue(searchTerm);
            const SclubValue = await SearchClubValue(searchTerm);
            const SplayerStat = await SearchPlayerStats(searchTerm);
            const SclubStat = await SearchClubStats(searchTerm);

            // console.log(SplayerValue.data);
            setSplayerValue(SplayerValue.data);
            setSclubValue(SclubValue.data);
            setSplayerStat(SplayerStat.data);
            setSclubStat(SclubStat.data);

        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    const updateTerm = (event) => {
        const { target: { value } } = event;
        console.log(value);
        setSearchTerm(value);
    }
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        if (searchTerm !== "") {
            LoadSearch();
        }

    }

    useEffect(() => {
        LoadSearch();
    }, [])
    return { loading, SplayerValue, SclubValue, SplayerStat, SclubStat, updateTerm, handleSubmit };
}

const SearhResult = () => {
    const { loading, SplayerValue, SclubValue, SplayerStat, SclubStat, searchTerm, updateTerm, handleSubmit } = useSearch();
    return (
        <Container>
            <Helmet> <title>Search</title></Helmet>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Players or Clubs..." value={searchTerm} onChange={updateTerm}></Input>
            </Form>
            {loading ? <Loader /> :
                <>

                    <Content>
                        {SplayerStat && SplayerStat.length > 0 && (
                            <Item>
                                <SectionTitle>Plyer Statistics</SectionTitle>
                                <Table>
                                    <tboby>
                                        <tr>
                                            <td>League</td>
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
                                        {SplayerStat.map(player => (
                                            <StatSearch
                                                _type="player"
                                                League={player.League}
                                                key={player.specific_id}
                                                name={player.name}
                                                age={player.age}
                                                position={player.position}
                                                games={player.Games}
                                                goals={player.Goals}
                                                assists={player.Assists}
                                                SpG={player.SpG}
                                                Ps={player.PS}
                                                MotM={player.MotM}
                                                Rating={player.Rating}
                                            />
                                        ))}
                                    </tboby>
                                </Table>
                            </Item>
                        )}
                        {SclubStat && SclubStat.length > 0 && (
                            <Item>
                                <SectionTitle>Club Statistics</SectionTitle>
                                <Table>

                                    <tboby>
                                        <tr>
                                            <td>League</td>
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
                                        {SclubStat.map(club => (
                                            <StatSearch
                                                _type="club"
                                                League={club.League}
                                                key={club.specific_id}
                                                name={club.name}
                                                ranking={club.ranking}
                                                play={club.play}
                                                win={club.win}
                                                draw={club.draw}
                                                lose={club.lose}
                                                gf={club.gf}
                                                gd={club.gd}
                                                ga={club.ga}
                                                pts={club.pts}
                                                state={club.state}
                                            />
                                        ))}
                                    </tboby>
                                </Table>
                            </Item>
                        )}
                    </Content>
                    {SplayerValue && SplayerValue.length > 0 && (
                        <Item>
                            <SectionTitle>Player Values</SectionTitle>
                            <Table>
                                <tboby>
                                    <tr>
                                        <td>Type</td>
                                        <td>Ranking</td>
                                        <td>Name</td>
                                        <td>position</td>
                                        <td>Value</td>
                                    </tr>
                                    {SplayerValue.map(player => (
                                        <TestValue
                                            key={player.specific_id}
                                            ranking={player.ranking}
                                            name={player.name}
                                            image={player.player_image}
                                            value={player.value}
                                            position={player.position}
                                            _type={player._position}
                                            type="player"
                                        />
                                    ))}
                                </tboby>
                            </Table>
                        </Item>

                        // grid - image  있는 버전
                        // <>
                        //     <SectionTitle>ClubValue</SectionTitle>
                        //     <Section >
                        //         {SplayerValue.map(player => (
                        //             <SearchValueSection
                        //                 key={player.specific_id}
                        //                 ranking={player.ranking}
                        //                 name={player.name}
                        //                 image={player.player_image}
                        //                 value={player.value}
                        //                 position={player.position}
                        //                 _type={player._position}
                        //             />
                        //         ))}
                        //     </Section>
                        // </>
                    )}

                    {SclubValue && SclubValue.length > 0 && (
                        <Item>
                            <SectionTitle>Club Values</SectionTitle>
                            <Table>
                                <tboby>
                                    <tr>
                                        <td>Ranking</td>
                                        <td>Name</td>
                                        <td>League</td>
                                        <td>Value</td>
                                    </tr>
                                    {SclubValue.map(club => (
                                        <TestValue
                                            key={club.specific_id}
                                            ranking={club.ranking}
                                            name={club.name}
                                            image={club.club_image}
                                            value={club.value}
                                            Competition={club.Competition}
                                            type="club"
                                        />
                                    ))}
                                </tboby>
                            </Table>
                        </Item>


                        // <>
                        //     <SectionTitle>ClubValue</SectionTitle>
                        //     <Section >
                        //         {SclubValue.map(club => (
                        //             <SearchValueSection
                        //                 key={club.specific_id}
                        //                 ranking={club.ranking}
                        //                 name={club.name}
                        //                 image={club.club_image}
                        //                 value={club.value}
                        //                 Competition={club.Competition}
                        //             />
                        //         ))}
                        //     </Section>
                        // </>
                    )}
                </>}
        </Container>
    );
}

export default SearhResult;