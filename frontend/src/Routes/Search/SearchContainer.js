import React from "react";
import SearchPresenter from "./SearchPresenter";
import axios from "axios"

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default class extends React.Component {
    state = {
        ClubResults: null, // 검색한 클럽
        PlayerResults: null, // 검색한 선수
        searchTerm: "", // 사용자가 단어를 가지고 검색
        loading: false,
        error: null
    }
    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }
    // 검색 내용 바뀔때
    updateTerm = (event) => {
        const { target: { value } } = event;
        console.log(value);
        this.setState({
            searchTerm: value
        })
    }
    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            axios
                .post("/api/searchTerm", { text: searchTerm })
                .then(res => this._renderText());

            // let res = await fetch('http://127.0.0.1:8000/playerValue/');
            // const PlayerResults = await res.json();
            // let res = await fetch('http://127.0.0.1:8000/clubValue/');
            // const ClubResults = await res.json();

            // const { data: { results: ClubResults } } = await MovieApi.search(searchTerm);
            // const { data: { results: PlayerResults } } = await tvApi.search(searchTerm);

            // this.setState({
            //     ClubResults,
            //     PlayerResults,
            // })
        } catch {
            this.setState({ error: "Can't find results" });
        } finally {
            this.setState({ loading: false });
        }
    };
    _renderText = () => {
        axios
            .get("/api/searchTerm")
            .then(res => this.setState({}))
    }

    render() {
        const { ClubResults, PlayerResults, searchTerm, loading, error } = this.state;
        return <SearchPresenter
            ClubResults={ClubResults}
            PlayerResults={PlayerResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm} />
    }
}