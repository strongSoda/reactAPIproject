import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Title = styled.h1`
    margin-left: 40vw;
    font-family: 'Permanent Marker', cursive;
`

const P = styled.p`
    width: 60vw;
    margin-left: 20vw;
    background: #efcb6c;
    padding: 2em;
    border-radius: 2em;
`

class About extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Title>About Us</Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet quis purus sit amet maximus. Morbi sed vestibulum nibh. Integer scelerisque interdum mi, mattis posuere nulla rhoncus eu. Nullam sit amet dignissim dui. Pellentesque ipsum augue, pellentesque et molestie eget, blandit sed dui. Etiam sit amet nunc consectetur, dapibus erat eu, efficitur tortor. Curabitur condimentum dolor elit, et semper mauris bibendum ultrices. Maecenas quis orci porta, molestie libero a, faucibus mauris. Pellentesque ligula quam, porttitor vel venenatis a, eleifend aliquam ante. Vestibulum id velit id erat laoreet egestas eu et lectus. Fusce lacinia finibus lacinia. Donec ultrices nisi nunc, non gravida justo vulputate eget. Morbi velit ipsum, viverra eget mattis et, lobortis at augue.
                </P>
                <P>
                    Phasellus posuere consequat purus ut varius. Aliquam erat volutpat. Donec imperdiet dolor vitae tortor pulvinar efficitur. Quisque eu augue vel dolor sagittis porta. Sed interdum et neque eget mattis. Donec enim lacus, commodo a laoreet eget, pulvinar quis diam. Nulla posuere augue eget placerat mollis. Donec rhoncus, justo a tristique finibus, tortor ipsum tempus eros, nec rutrum lorem felis lobortis ipsum. Vivamus ligula orci, ullamcorper nec mi placerat, semper malesuada ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
                </P>
                <P>
                    Donec tincidunt a nunc eget scelerisque. Praesent eget laoreet orci, quis fermentum ex. Proin vitae libero non purus congue feugiat consectetur facilisis neque. Aenean at risus varius, maximus mi in, rhoncus lectus. Phasellus hendrerit mollis quam in lobortis. Vestibulum quis dignissim orci. Nullam auctor vestibulum nibh, non efficitur massa mollis vel.
                </P>
                <P>
                    Vestibulum imperdiet efficitur sapien elementum tincidunt. Fusce hendrerit, ex imperdiet dictum commodo, libero arcu tincidunt quam, nec posuere justo diam in justo. Aliquam non turpis tincidunt, gravida eros eget, posuere lacus. Donec consequat at mauris vitae sollicitudin. Morbi consequat lectus libero. Aenean tristique eu mi venenatis sollicitudin. Maecenas eu placerat arcu.
                </P>
                <P>
                    Fusce vitae euismod dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce scelerisque, ante molestie porttitor vestibulum, enim sem fringilla dui, ut accumsan metus quam sit amet tortor. Fusce quis turpis eget elit fermentum accumsan vitae vel eros. Suspendisse a nisi in magna tincidunt cursus consequat eget mauris. Donec sollicitudin mauris in ligula gravida tempus. Aenean ornare mauris non nisi fermentum, ut vestibulum diam venenatis. Praesent vitae blandit risus, at porta erat. Ut at dui ut odio dictum viverra. Proin commodo tincidunt mattis. Sed pharetra, nisl id feugiat dapibus, mauris elit elementum lacus, ac vulputate risus ligula vel justo. Mauris venenatis nibh et ante eleifend eleifend. Maecenas placerat magna sed viverra malesuada. Curabitur et tincidunt sem. Integer sit amet dolor lorem. Donec venenatis velit vitae finibus faucibus.
                </P>
            </div>
        );
    }
}

export default About;