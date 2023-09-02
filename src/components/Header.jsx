// rrfc
// rafce

import React from 'react';
import Welcome from './Welcome';

const Header = () => {
    const greetings = () => {
        let d = new Date();
        let hours = d.getHours();

        if (hours > 4 && hours < 12) {
            return <p>Good Morning!</p>
        } else if (hours >= 12 && hours <= 18) {
            return <p>Good  Afternoon!</p>
        } else if (hours >= 18 && hours < 24) {
            return  <p>Good Evening!</p>
        } else {
            return <p>Good Day!</p>
        };
    };

    return (
        <h1>{greetings()} <Welcome message="This is react JS."/></h1>
    );
};

export default Header;