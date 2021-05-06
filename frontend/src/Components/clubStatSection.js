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


const ClubStatSection = ({ ranking, name, play, win, draw, lose, gf, ga, gd, pts, state }) => (
    // <Link to={isMovie ? `/movie/${id}` : `/show/${id} `}>
    <>
        <TR>
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
    </>
    // </Link >
);



ClubStatSection.propTypes = {
    ranking: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    play: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    win: PropTypes.string.isRequired,
    draw: PropTypes.string.isRequired,
    lose: PropTypes.string.isRequired,
    gf: PropTypes.string.isRequired,
    ga: PropTypes.string.isRequired,
    gd: PropTypes.string.isRequired,
    pts: PropTypes.string.isRequired,

}

export default ClubStatSection;