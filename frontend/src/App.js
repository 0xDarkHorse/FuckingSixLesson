import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js'
import TODOList from './components/TODO.js'
import ProjectList from './components/Project.js'
import axios from 'axios'
//import Footer from './components/Footer';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';

import {HashRouter, Route, Link, Switch} from 'react-router-dom'


const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена! Вали отсюда!</h1>
            <HashRouter>
                <Link to='/'>Главная</Link>
            </HashRouter>
        </div>
    )
}

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'projects': [],
           'todos': []
       }
   }

   componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/users/')
       .then(response => {
           const users = response.data.results
               this.setState(
               {
                   'users': users
               }
           )
       }).catch(error => console.log(error))

       axios.get('http://127.0.0.1:8000/api/projects/')
       .then(response => {
           const projects = response.data.results
               this.setState(
               {
                   'projects': projects
               }
           )
       }).catch(error => console.log(error))

       axios.get('http://127.0.0.1:8000/api/todos/')
       .then(response => {
           const todos = response.data.results
               this.setState(
               {
                   'todos': todos
               }
           )
       }).catch(error => console.log(error))
   }

   render () {
       return (
       <Fragment>

    <Header />
//    <Container>
    <Row noGutters >
    </Row>
    <Row className="mt-4" >
    </Row>
        <Row noGutters >
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={() => <ProjectList items={this.state.projects} />} />
                    <Route exact path='/todo' component={() => <TODOList items={this.state.todos} />} />
                    <Route exact path='/users' component={() => <UserList users={this.state.users} />} />
                    <Route component={NotFound404} />
                </Switch>
            </HashRouter>

        </Row>

    </Container>

    </Fragment>
       )
   }
}

export default App;
