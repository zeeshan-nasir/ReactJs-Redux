import React, { useState } from "react";
import AllTodos from "./AllTodos";
import DoneTodos from "./DoneTodos";
import "./todo.css";
import AddTodo from "./AddTodo";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState(false);

    // For data addition

    const addItem = (data) => {
        setTodos([...todos, data]);
        // console.log(todos);
    };

    // For List deletion

    const deletion = (position) => {
        todos.splice(position, 1);
        setTodos([...todos]);
    };

    // For checked feature

    const checkFunc = (item) => {
        item.status = !item.status;
        // console.log(todos);
        setTodos([...todos]);
    };

    return (
        <div className="todo">
            <h1>Todo List</h1>
            <AddTodo addItem={addItem} todos={todos} />
            <div className="list">
                <AllTodos
                    checkFunc={checkFunc}
                    todos={todos}
                    deletion={deletion}
                />
                <div className="compT">
                    <button
                        className="btn2"
                        onClick={() => {
                            setDoneTodos(!doneTodos);
                        }}
                    >
                        Show Completed To-Dos
                    </button>
                    {doneTodos ? (
                        <DoneTodos deletion={deletion} todos={todos} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
