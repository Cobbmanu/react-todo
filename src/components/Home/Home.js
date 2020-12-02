import React from 'react';
import { Link } from 'react-router-dom';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';

const Home = () => {
    return (
        <div>
            {/* <Link to="/add">Add</Link>
            <br></br>
            <Link to="/list">List</Link> */}
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;