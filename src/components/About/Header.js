import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 60vw;
    height: 60vh;
    margin-left: 20vw;
    margin-top: 2vh;
`

class Header extends React.Component {
    render() {
        return(
            <Img src="https://www.wallpaperflare.com/static/815/850/356/naruto-shippuuden-uzumaki-naruto-namikaze-minato-crying-wallpaper.jpg" alt="header"/>
        );
    }
}

export default Header;