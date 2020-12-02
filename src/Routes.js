import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';
import EditTodo from './components/EditTodo/EditTodo';
import {history} from './helpers/history';


const Routes = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddTodo}/>
                <Route exact path="/list" component={TodoList}/>
                <Route exact path="/edit" component={EditTodo}/>
            </Switch>
        </BrowserRouter>
        
    );
};

export default Routes;