import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import { Navi } from './components/Navi';
import ButtonAppBar from './components/ButtonAppBar'
import NaviDrawer from './components/NaviDrawer';
import { Cesar } from './components/Cesar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <NaviDrawer></NaviDrawer>

      <Container maxWidth="sm">
        <Router>

          <Route path='/cesar'>
            <Cesar></Cesar>
          </Route>
          
        </Router>
      </Container>
    </div>
  );
}

export default App;
