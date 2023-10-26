import React, { useState } from 'react';

const TodoList = () => {

    const [todoInput, settodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        settodoInput(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter" && todoInput.trim() !== '') {
            setTodos([...todos, todoInput]);
            settodoInput('');
        }
    };

    return (
        <>
            <h1 className='text-center'>todos</h1>
            <div className="note">
                <ul>
                    <li><input type="text" onChange={handleInputChange} onKeyUp={handleInputKeyPress} value={todoInput} placeholder="What needs to be done?"></input></li>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList;