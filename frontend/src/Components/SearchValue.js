import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TR = styled.tr`
`;
const TD = styled.td``;


const TestValue = ({ ranking, image, _position, name, value, team, Competition, position, _type, type }) => (
    <>
        {type == "player" && (
            <TR>
                {_type && _type == 'all' && <TD>전체</TD>}
                {_type && _type == 'forward' && <TD>공격수</TD>}
                {_type && _type == 'midfielder' && <TD>미드필더</TD>}
                {_type && _type == 'defender' && <TD>수비수</TD>}
                {_type && _type == 'goalkeeper' && <TD>골키퍼</TD>}
                <TD>{ranking}</TD>
                <TD>{name}</TD>
                <TD>{position}</TD>
                <TD>{value}</TD>
            </TR >
        )}
        {type == "club" && (
            <TR>
                <TD>{ranking}</TD>
                <TD>{name}</TD>
                <TD>{Competition}</TD>
                <TD>{value}</TD>
            </TR >
        )}
    </>

);

TestValue.propTypes = {
    ranking: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    Competition: PropTypes.string.isRequired,
    _type: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    _position: PropTypes.string.isRequired,
}

export default TestValue;