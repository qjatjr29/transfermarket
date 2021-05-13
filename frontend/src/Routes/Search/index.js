// import SearchContainer from "./SearchContainer";

// export default SearchContainer;
import React, { useEffect, useState } from "react"
import { AllValueList, ForwardValueList, MidfielderValueList, DefenderValueList, GoalkeeperValueList } from '../../Api/api';
import styled from "styled-components";

const Container = styled.div`
    padding:20px;
    
`;
const useValue = () => {
    const [loading, setLoading] = useState(true);
    const [all, setAll] = useState([]);
    const [forward, setForward] = useState([]);
    const [midfielder, setMidfielder] = useState([]);
    const [defender, setDefender] = useState([]);
    const [goalkeeper, setGoalkeeper] = useState([]);
    const LoadList = async () => {
        setLoading(true);
        try {
            const all = await AllValueList();
            const forward = await ForwardValueList();
            const midfielder = await MidfielderValueList();
            const defender = await DefenderValueList();
            const goalkeeper = await GoalkeeperValueList();
            console.log(forward);
            setForward(forward);
            setAll(all);
            setMidfielder(midfielder);
            setDefender(defender);
            setGoalkeeper(goalkeeper);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        LoadList();
    }, [])
    return { loading, forward };
}

const Forward = () => {
    const { loading, forward } = useValue();
    console.log(forward);
    return (<Container></Container>)
}

export default Forward;