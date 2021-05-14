import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TR = styled.tr`
`;
const TD = styled.td``;


const StatSearch = ({ _type, League, name, age, position, games, goals, assists, SpG, Ps, MotM, Rating, ranking, state, play, win, draw, lose, gf, gd, ga, pts }) => (
    <>
        {_type == "player" && (
            <TR>
                {League && League == 'premier' && <TD>Premier League</TD>}
                {League && League == 'laliga' && <TD>LaLiga</TD>}
                {League && League == 'bundesliga' && <TD>BundesLiga</TD>}
                {League && League == 'seriea' && <TD>SerieA</TD>}
                {League && League == 'ligue1' && <TD>Ligue1</TD>}
                <TD>{name}</TD>
                <TD>{age}</TD>
                <TD>{position}</TD>
                <TD>{games}</TD>
                <TD>{goals}</TD>
                <TD>{assists}</TD>
                <TD>{SpG}</TD>
                <TD>{Ps}</TD>
                <TD>{MotM}</TD>
                <TD>{Rating}</TD>
            </TR >
        )}
        {_type == "club" && (
            <TR>
                {League && League == 'premier' && <TD>Premier League</TD>}
                {League && League == 'laliga' && <TD>LaLiga</TD>}
                {League && League == 'bundesliga' && <TD>BundesLiga</TD>}
                {League && League == 'seriea' && <TD>SerieA</TD>}
                {League && League == 'ligue1' && <TD>Ligue1</TD>}
                <TD>{ranking}</TD>
                <TD>{name}</TD>
                <TD>{play}</TD>
                <TD>{win}</TD>
                <TD>{draw}</TD>
                <TD>{lose}</TD>
                <TD>{gf}</TD>
                <TD>{ga}</TD>
                <TD>{gd}</TD>
                <TD>{pts}</TD>
                <TD>{state}</TD>
            </TR >
        )}
    </>

);



StatSearch.propTypes = {
    name: PropTypes.string.isRequired,
    League: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    games: PropTypes.string.isRequired,
    goals: PropTypes.string.isRequired,
    assists: PropTypes.string.isRequired,
    SpG: PropTypes.string.isRequired,
    Ps: PropTypes.string.isRequired,
    MotM: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,
    ranking: PropTypes.string.isRequired,
    play: PropTypes.string.isRequired,
    win: PropTypes.string.isRequired,
    draw: PropTypes.string.isRequired,
    lose: PropTypes.string.isRequired,
    gf: PropTypes.string.isRequired,
    gd: PropTypes.string.isRequired,
    ga: PropTypes.string.isRequired,
    pts: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,


}

export default StatSearch;