import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LI = styled.li`
    list-style: none;
    display: inline;
    margin-left: 2em;
`
const UL = styled.ul`
    background: black;
    padding: 2em;
    margin: 0;
`

const Slink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: 'Permanent Marker', cursive;

    &:hover {
        color: #efcb6c;
    }
`

class Navbar extends React.Component{
    render() {
        return(
            <UL>
                <LI><Slink to='/'>Home</Slink></LI>
                <LI><Slink to='/about'>About</Slink></LI>
            </UL>
        );
    }
}

export default Navbar;

