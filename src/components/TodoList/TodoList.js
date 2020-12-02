import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/TodoContext';

const TodoList = () => {
    //7)вытаскиваем из компонента Todolist
    const {
        todos, 
        getTodosData, 
        changeStatus, 
        deleteTask,
        editTodo
    } = useContext(todoContext);//сюда импортируем actions

    useEffect(() => {//hook 
        getTodosData()//9)вызываем
    }, [])
    return (
        <ul>
            {todos.map(item => (//8)перебираем
                <li key={item.id} className={item.status ? "completed" : ''}>
                    <input
                        type="checkbox" 
                        checked={item.status}
                        onChange={() => changeStatus(item.id)}
                    />
                    {item.task}
                        <button onClick={ () => deleteTask(item.id)}>Delete</button>
                    <Link to="/edit">
                        <button onClick= { () => editTodo(item.id)}>Edit</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;