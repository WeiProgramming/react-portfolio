import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Container} from 'react-bootstrap';

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import CardItem from './components/Card/Card';


const App = () => {
    return (
        <div className="app">
            {/*<Nav/>*/}
            <Landing/>
            <Container>
                <CardItem/>
            </Container>
        </div>
    )
}

render( <App/>, document.getElementById('root'));