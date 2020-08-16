import React from 'react';
import logo from './logo.svg';

import { ThemeProvider, createMuiTheme, CssBaseline, Card, CardContent } from '@material-ui/core'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import Edit from './pages/edit'
import List from './pages/list'

const theme = createMuiTheme({
  palette: {
    background: {
      paper:'#222',
      default: '#000',
    },
    text: {
      primary: '#fff',
    },
    common: {
        black: "#fff",
        white: "#000",
    }
  },
  typography: {
    fontFamily: [
      'Varela Round',
      'sans-serif'
    ].join(',')
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <List {...props} key={1}/>}>
            </Route>
            <Route exact path="/edit/:noteName" render={(props) => <Edit {...props} key={2}/>}>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
