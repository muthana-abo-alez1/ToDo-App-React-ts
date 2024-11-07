import React, { useEffect, useState } from 'react';
import { Todo } from '../../../../interfaces/ToDo';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.scss';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const updateLocalStorage = (todos: Todo[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const addTodo = () => {
        if (newTodo.trim()) {
            const newTask: Todo = { id: Date.now(), text: newTodo, completed: false };
            const updatedTodos = [newTask,...todos];
            setTodos(updatedTodos);
            setNewTodo('');
            updateLocalStorage(updatedTodos);
        }
    };

    const toggleCompletion = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        updateLocalStorage(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        updateLocalStorage(updatedTodos);
    };


    return (
        <div className={styles.todoAppContainer}>
            <h1>To-Do App</h1>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task"
                />
                <button onClick={addTodo}>Add To-Do</button>
            </div>
            <TodoList
                todos={todos}
                toggleCompletion={toggleCompletion}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;
