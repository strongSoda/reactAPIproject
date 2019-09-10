import React from 'react';
import styled from 'styled-components';

const LI = styled.li`
    list-style: none;
    width: 60vw;
    margin-left: 18vw;
    background: #efcb6c;
    padding: 2em;
    margin-bottom: 2em;
`
const Title = styled.h1`
    margin-left: 40vw;
    font-family: 'Permanent Marker', cursive;
`

const Loading = styled.h1`
    height: 80vh;
    padding-left: 40vw;
    padding-top: 30vh;
`

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            film: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then(res => res.json())
        .then( result => this.setState({
            film : result,
            isLoading: false
        },
        (error) => {
            console.log(error)
        }
        ))
    }

    render() {
        const films = this.state.film;
        // console.log(films);
        if(!this.state.isLoading) {
            return(
                <ul>
                    <Title>Studio Ghibli Movies</Title>
                    {films.map(film => (
                        <LI key={film.id}>
                            <b>{film.title}</b> <small>{film.release_date}</small><br></br>
                            <div><small><b>Producer:</b> {film.producer} <b>Director:</b> {film.director}</small></div><br></br>
                            <article>{film.description}</article>
                        </LI>
                    ))}
                </ul>
            );
        } else {
            return(
            <Loading>loading...</Loading>
            );
        }
    }
}

export default Body;