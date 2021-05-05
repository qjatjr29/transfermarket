import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Value from "Routes/Value";
import clubStats from "Routes/ClubStats"
import PremierPlayerStat from "Routes/playerStats/premierLeague"
import LiLigaPlayerStat from "Routes/playerStats/LaLiga"
import BundesPlayerStat from "Routes/playerStats/bundesLiga"
import SerieAPlayerStat from "Routes/playerStats/serieA"
import Ligue1PlayerStat from "Routes/playerStats/Ligue1"
// import clubValue from "Routes/ClubValue";
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
                {/* <Route path="/clubStats" component={clubStats} /> */}
                <Route path="/premierPStats" component={PremierPlayerStat} />
                <Route path="/LaLigaPStats" component={LiLigaPlayerStat} />
                <Route path="/bundesLigaPStats" component={BundesPlayerStat} />
                <Route path="/serieAPStats" component={SerieAPlayerStat} />
                <Route path="/Ligue1PStats" component={Ligue1PlayerStat} />
                {/* <Route path="/people" component={People} /> */}
                {/* <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/person/:id" component={peopleDetail} /> */}
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);