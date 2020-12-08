import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import ButtonAppBar from './components/ButtonAppBar'
import { Cesar } from './components/Cesar';
import { Vigenere } from './components/Vigenere'
import { Playfair } from './components/Playfair'

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Container maxWidth="sm">
        <p>test</p>
        <Router>
          {/* <Route path='/' ><Redirect to='/cesar'></Redirect></Route> */}
          <Route path='../cesar'>
            
            <Cesar></Cesar>
          </Route>
          <Route path='./vigenere'>
            <Vigenere></Vigenere>
          </Route>
          <Route path='/cipher/playfair'>
            <Playfair></Playfair>
          </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;
