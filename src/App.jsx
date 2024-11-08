// src/App.jsx

import React, { useState } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([newTodo, ...todos]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <Header />
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <Footer />
        </div>
    );
}

export default App;
