import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow'
import $ from 'jquery'


class App extends Component {

    constructor(props) {

        super(props);
        this.state = {}
        // const movies = [
        //     {id: 0, poster_src: "https://images-na.ssl-images-amazon.com/images/I/81EzudL0k1L._SX342_.jpg",title: "Dhooom 3", overview: "bollywood movie thats pretty good"},
        //     {id: 1, poster_src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/D2-poster-ver2.jpg/220px-D2-poster-ver2.jpg", title: "Dhooom Avengers Edition", overview: "bollywood movie thats also pretty good"}
        //
        // ];
        //
        // var movieRows = [];
        //
        // movies.forEach((movie) => {
        //     console.log(movie.title);
        //
        //     const movieRow = <MovieRow movie={movie}/>;
        //     movieRows.push(movieRow)
        // });
        //
        // this.state = {rows: movieRows};

        this.performSearch();
    }

    performSearch() {
        console.log("performing search using movie db")

        const urlString = "";
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("successful")
            },
            error: (xhr, status, err) => {
                console.log("failed to fetch data")
            }

        console.log('initializer');

        const movies = [
            {id: 0, poster_src: "https://images-na.ssl-images-amazon.com/images/I/81EzudL0k1L._SX342_.jpg",title: "Dhooom 3", overview: "bollywood movie thats pretty good"},
            {id: 1, poster_src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/D2-poster-ver2.jpg/220px-D2-poster-ver2.jpg", title: "Dhooom Avengers Edition", overview: "bollywood movie thats also pretty good"}

        ];

        var movieRows = [];

        movies.forEach((movie) => {
            console.log(movie.title);
            const movieRow = <MovieRow movie={movie}/>;
            movieRows.push(movieRow)
        });

        })
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                <img src={logo} className="App-logo" alt="logo" width='50' />
                            </td>
                            <td width="8"/>
                            <td>
                                <h1> Movies DB Search</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input style={{
                    fontSize: 24,
                    display: 'block',
                    width:'99%',
                    paddingLeft: 16,
                    paddingTop: 8,
                    paddingBottom: 8
                }} placeholder='Enter search term'/>

                {this.state.rows}
            
            </div>
        );
    }
}

export default App;
