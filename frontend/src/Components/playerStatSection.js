import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
// const Container = styled.div`
//     font-size:12px;
// `;

// const Image_ = styled.img`
//     height:50px;
//     background-size: cover;
//     border-radius: 4px;
//     background-position: center center;
//     margin-bottom: 5px;
//     transition: opacity 0.1s linear;
// `;
// const Image = styled.div`
//     background-image:url(${props => props.bgUrl});
//     height: 180px;
//     background-size: cover;
//     border-radius: 4px;
//     background-position: center center;
//     margin-bottom: 5px;
//     transition: opacity 0.1s linear;
// `;
// const ImageContainer = styled.div`
//     margin-bottom: 5px;
//     position: relative;
//         &:hover{
//         ${Image_} {
//             opacity: 0.3;
//         }
//     }
// `;
// const Name = styled.span`
//     display: block;
//     margin-bottom: 3px;
// `;
// const Team = styled.span`
//     display:block;
//     margin-top:2px;
//     font-size:12px;
//     opacity:0.8;
// `;
// const Ranking = styled.span`
//     display:flex;
//     font-size:15px;
//     justify-content:space-between;
//     align-items:center;
//     margin-bottom:3px;
// `;
// const Value = styled.span`
//     display:block;
//     margin-top:2px;
//     font-size:13px;
// `;
const TR = styled.tr`
`;
const TD = styled.td``;


const PlayerStatSection = ({ ranking, name, age, position, games, goals, assists, SpG, Ps, MotM, Rating }) => (
    // <Link to={isMovie ? `/movie/${id}` : `/show/${id} `}>
    <>
        <TR>
            <TD>{ranking}</TD>
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
    </>
    // </Link >
);



PlayerStatSection.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    games: PropTypes.string.isRequired,
    goals: PropTypes.string.isRequired,
    assists: PropTypes.string.isRequired,
    SpG: PropTypes.string.isRequired,
    Ps: PropTypes.string.isRequired,
    MotM: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,

}

export default PlayerStatSection;