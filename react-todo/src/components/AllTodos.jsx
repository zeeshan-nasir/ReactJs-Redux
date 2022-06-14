import React from "react";

const AllTodos = ({ checkFunc, deletion, todos }) => {
    return (
        <div className="allT">
            {todos.map((item, index) => {
                return (
                    <div
                        className={
                            item.status === true ? "itemChecked" : "item"
                        }
                    >
                        <input
                            onChange={() => {
                                checkFunc(item);
                            }}
                            type="checkbox"
                            className="check"
                        />
                        {item.title}
                        <button
                            className="btn3"
                            onClick={() => {
                                deletion(index);
                            }}
                        >
                            ⁃
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default AllTodos;
