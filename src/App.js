import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App1 = ({ match }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  match.url = match.url + '/';
  console.log(match.url );
  return (
    <BrowserRouter>
      <Container maxWidth="xl" >
       
      <Navbar />
      <Switch>
          <Route path={match.url} exact component={() => <Redirect to={`${match.url}posts`} />} />
  
          <Route path={`${match.url}posts`} exact component={Home} />
          <Route path={`${match.url}posts/search`} exact component={Home} />
          <Route path={`${match.url}posts/:id`} component={PostDetails} />
          <Route path={`${match.url}auth`} exact component={()=> (!user ? <Auth /> : <Redirect to="/posts/" />  )} />
          </Switch>
    </Container>
    </BrowserRouter>
  )
};
  
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/dashboard" />} />
          <Route path="/home/" component={App1} />
          <Route path="/dashboard/" exact component={HomePage} />
        </Switch>
    </BrowserRouter>
  )
};


export default App;
