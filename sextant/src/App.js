import logo from './logo.svg';
import './App.css';
import React from 'react';

const ChildComponent1 = < div > < p > Child Component 1 < /p></div > ;
const ChildComponent2 = < div > < p > Child Component 2 < /p></div > ;

const App = () => {
    const exhibit = React.createElement(Exhibit, { heading: "My Exhibit" },
        ChildComponent1,
        ChildComponent2
    );
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        h1 > Welcome to Sextant < /h1> <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a>

        <
        /header> { exhibit } <
        /div>

    );
}

const Exhibit = ({ heading, children }) => {
    const exhibit = React.createElement('div', { className: 'exhibit' },
        React.createElement('h2', null, heading),
        children
    );
    return exhibit;
}

export default App;