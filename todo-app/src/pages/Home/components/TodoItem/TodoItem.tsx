import React from 'react';
import styles from './TodoItem.module.scss';
import { Todo } from '../../../../interfaces/ToDo';

interface TodoItemProps {
    todo: Todo;
    toggleCompletion: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompletion, deleteTodo }) => {
    return (
        <li className={styles.todoItem}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
                className={styles.checkbox}
            />
            <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
                {todo.text}
            </span>
            <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
