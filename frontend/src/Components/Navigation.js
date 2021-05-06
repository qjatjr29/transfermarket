import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0 10px;
    background-color:rgba(20,20,20,0.8);
    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const List = styled.ul`
    display:flex;
`;
const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
    transition:border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`;


export default withRouter(({ location: { pathname } }) => (
    <Header>

        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Home</SLink>
            </Item>
            <Item current={pathname === "/Value"}>
                <SLink to="/Value">Value</SLink>
            </Item>
            <Item current={pathname === "/premierClubStats"}>
                <SLink to="/premierCStats">Stats</SLink>
            </Item>
            <Item current={pathname === "/Search"}>
                <SLink to="/Search">Search</SLink>
            </Item>
            {/* <Item current={pathname === "/premierPStats"}>
                <SLink to="/premierPStats">premierPStats</SLink>
            </Item>
            <Item current={pathname === "/LaLigaPStats"}>
                <SLink to="/LaLigaPStats">premierPStats</SLink>
            </Item>
            <Item current={pathname === "/bundesLigaPStats"}>
                <SLink to="/bundesLigaPStats">bundesLigaPStats</SLink>
            </Item>
            <Item current={pathname === "/serieAPStats"}>
                <SLink to="/serieAPStats">serieAPStats</SLink>
            </Item>
            <Item current={pathname === "/Ligue1PStats"}>
                <SLink to="/Ligue1PStats">Ligue1PStats</SLink>
            </Item> */}
        </List>
    </Header>
));