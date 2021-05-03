import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
    font-size:12px;
`;

const Image_ = styled.img`
    height:50px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    margin-bottom: 5px;
    transition: opacity 0.1s linear;
`;
const Image = styled.div`
    background-image:url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    margin-bottom: 5px;
    transition: opacity 0.1s linear;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
        &:hover{
        ${Image_} {
            opacity: 0.3;
        }
    }
`;
const Name = styled.span`
    display: block;
    margin-bottom: 3px;
`;
const Team = styled.span`
    display:block;
    margin-top:2px;
    font-size:12px;
    opacity:0.8;
`;
const Ranking = styled.span`
    display:flex;
    font-size:15px;
    justify-content:space-between;
    align-items:center;
    margin-bottom:3px;
`;



const ValueSection = ({ ranking, player_image, name, value, team }) => (
    // <Link to={isMovie ? `/movie/${id}` : `/show/${id} `}>
    <Container>
        <ImageContainer>
            <Image_ src={player_image} />

            {/* <Image src={player_image} /> */}
            {/* <Image bgUrl={player_image ? { player_image } : require("../assets/NotFound.PNG").default} /> */}
            {/* <Image bgUrl={player_image} /> */}
            <div>
                <Ranking>{ranking} </Ranking>
                <Name>{name.length > 15 ? `${name.substring(0, 15)}...` : name}</Name>
                <Team>{team.length > 15 ? `${team.substring(0, 15)}...` : team}</Team>
            </div>

        </ImageContainer >

    </Container >
    // </Link >
);



ValueSection.propTypes = {
    ranking: PropTypes.number.isRequired,
    player_image: PropTypes.string,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default ValueSection;