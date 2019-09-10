import React from 'react';
import styled from 'styled-components';

const Sfooter = styled.footer`
    background: black;
    color: white;
    font-family: 'Permanent Marker', cursive;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 40vw;
`

class Footer extends React.Component {
    render() {
        return(
            <Sfooter>
                &copy; Copyright {new Date().getFullYear()}
            </Sfooter>
        );
    }
}

export default Footer;  