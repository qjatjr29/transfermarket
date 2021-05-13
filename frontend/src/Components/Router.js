import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Value from "Routes/Value";
import premierClubStats from "Routes/ClubStats/premierLeague"
import laLigaClubStats from "Routes/ClubStats/LaLiga"
import bundesLigaClubStats from "Routes/ClubStats/bundesLiga"
import serieAClubStats from "Routes/ClubStats/serieA"
import ligue1ClubStats from "Routes/ClubStats/Ligue1"
import PremierPlayerStat from "Routes/playerStats/premierLeague"
import LiLigaPlayerStat from "Routes/playerStats/LaLiga"
import BundesPlayerStat from "Routes/playerStats/bundesLiga"
import SerieAPlayerStat from "Routes/playerStats/serieA"
import Ligue1PlayerStat from "Routes/playerStats/Ligue1"
// import clubValue from "Routes/ClubValue";
import Search from "Routes/Search"
import Navigation from "Components/Navigation";
// import Detail from "Routes/Detail";
// import People from "Routes/People";
// import peopleDetail from "Routes/peopleDetail";




export default () => (
    <Router>
        <>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Value" exact component={Value} />
                <Route path="/premierCStats" component={premierClubStats} />
                <Route path="/laLigaCStats" component={laLigaClubStats} />
                <Route path="/bundesLigaCStats" component={bundesLigaClubStats} />
                <Route path="/serieACStats" component={serieAClubStats} />
                <Route path="/ligue1CStats" component={ligue1ClubStats} />
                <Route path="/premierPStats" component={PremierPlayerStat} />
                <Route path="/LaLigaPStats" component={LiLigaPlayerStat} />
                <Route path="/bundesLigaPStats" component={BundesPlayerStat} />
                <Route path="/serieAPStats" component={SerieAPlayerStat} />
                <Route path="/Ligue1PStats" component={Ligue1PlayerStat} />
                <Route path="/Search" component={Search} />
                {/* <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/person/:id" component={peopleDetail} /> */}
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);