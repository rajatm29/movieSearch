import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App" >

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

                <input placeholder='Enter search term'></input>


            </div>
        );
    }
}

export default App;

