import React, {useContext, useState} from 'react';
import { todoContext } from '../../context/TodoContext';


const AddTodo = () => {
    const [inpValue, setInpValue]= useState('')
    const {addTask} = useContext(todoContext)
    
    
    function handleClick () {
        let newObj = {
            task: inpValue,
            status: false
        }
        addTask(newObj)
        setInpValue('')//очищаем input
    }
    return (
        <div>
            <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type ="text" />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTodo;