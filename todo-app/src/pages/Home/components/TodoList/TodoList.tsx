import React from 'react';
import { Todo } from '../../../../interfaces/ToDo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodoListProps {
    todos: Todo[];
    toggleCompletion: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleCompletion, deleteTodo }) => {
    return (
        <ul className={styles.todoListContainer}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleCompletion={toggleCompletion}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
