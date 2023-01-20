import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const ChildComponent1 = < div > < p > Child Component 1 < /p></div > ;
const ChildComponent2 = < div > < p > Child Component 2 < /p></div > ;

const IpAddress = ({ ipType }) => {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        let url = 'https://api.ipify.org?format=json';
        if (ipType === 'ipv6') {
            url = 'https://api6.ipify.org?format=json';
        }
        fetch(url)
            .then(res => res.json())
            .then(data => setIpAddress(data.ip))
            .catch(err => console.log(err));
    }, []);

    return ( <
        div >
        <
        h2 > Your IP Address: < /h2> <
        p > { ipAddress } < /p> < /
        div >
    );
}

const App = () => {
    const exhibit1 = React.createElement(Exhibit, { heading: "IPv4 Address" },
        React.createElement(IpAddress, { ipType: "ipv4" })
    );
    const exhibit2 = React.createElement(Exhibit, { heading: "IPv6 Address" },
        React.createElement(IpAddress, { ipType: "ipv6" })
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
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > { exhibit1 } { exhibit2 } <
        /div>
    );
};


const Exhibit = ({ heading, children }) => {
    const exhibit = React.createElement('div', { className: 'exhibit' },
        React.createElement('h2', null, heading),
        children
    );
    return exhibit;
}

export default App;