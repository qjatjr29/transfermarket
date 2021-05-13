import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import PlayerStatSection from "Components/playerStatSection";

const Container = styled.div`
    padding:0 20px;

`;

const Form = styled.form`
    margin-bottom:20px;
    width:100%;
`;

const Input = styled.input`
    all :unset;
    font-size:28px;
    width:100%;
`;



const SearchPresenter = ({ ClubResults, PlayerResults, loading, error, searchTerm, handleSubmit, updateTerm }) =>
    <Container>
        <Helmet><title>Search </title></Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Clubs or Players..." value={searchTerm} onChange={updateTerm}></Input>
        </Form>
        {/* {loading ? <Loader /> : <>
            {ClubResults && ClubResults.length > 0 && (
                <Section title="Movie Results">
                    {ClubResults.map(movie => (
                        <PlayerStatSection
                        // key={movie.id}
                        // id={movie.id}
                        // title={movie.original_title}
                        // imageUrl={movie.poster_path}
                        // rating={movie.vote_average}
                        // year={movie.release_date && movie.release_date.substring(0, 4)}
                        // isMovie={true}

                        />))}
                </Section>)}
            {PlayerResults && PlayerResults.length > 0 && (
                <Section title="TV Results">
                    {tvResults.map(show => (
                        <Poster
                        // key={show.id}
                        // id={show.id}
                        // title={show.original_name}
                        // imageUrl={show.poster_path}
                        // rating={show.vote_average}
                        // year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        // isMovie={false}
                        />
                        // <span key={show.id}>{show.name}</span>
                    ))}
                </Section>)}
        </>} */}
        {/* {error && <Message color="#e74c3c" text={error} />}
        {ClubResults && PlayerResults && ClubResults.length === 0 && PlayerResults.length === 0 && (
            <Message text={`Nothing found for : ${searchTerm}`} color="#95a5a6" />)} */}
    </Container>

SearchPresenter.propTypes = {
    // movieResults: PropTypes.array,
    // tvResults: PropTypes.array,
    // peopleResults: PropTypes.array,
    // loading: PropTypes.bool.isRequired,
    // error: PropTypes.string,
    // searchTerm: PropTypes.string,
    // handleSubmit: PropTypes.func.isRequired,
    // updateTerm: PropTypes.func.isRequired
}


export default SearchPresenter;