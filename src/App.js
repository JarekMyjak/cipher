import './App.css';
import React from 'react'
import {
  HashRouter as Router,
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
      <Router basename="/cipher">
      <ButtonAppBar></ButtonAppBar>
      <Container maxWidth="sm">
        
          {/* <Route path='/' ><Redirect to='/cesar'></Redirect></Route> */}
          <Route path='/cesar'>
            
            <Cesar></Cesar>
          </Route>
          <Route path='/vigenere'>
            <Vigenere></Vigenere>
          </Route>
          <Route path='/playfair'>
            <Playfair></Playfair>
          </Route>
        
      </Container>
      </Router>
    </div>
  );
}

export default App;
