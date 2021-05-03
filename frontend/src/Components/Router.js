import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Value from "Routes/Value";
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
                {/* <Route path="/clubValue" component={clubValue} /> */}
                {/* <Route path="/people" component={People} /> */}
                {/* <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/person/:id" component={peopleDetail} /> */}
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);