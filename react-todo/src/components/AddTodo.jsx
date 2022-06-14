import { useState } from "react";

const AddTodo = ({ addItem, todos }) => {
    const [text, setText] = useState("");

    return (
        <div className="lower">
            <input
                onChange={(e) => {
                    setText(e.target.value);
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        if (text.length !== 0) {
                            let filtered = todos.filter(
                                (e) => e.title === text
                            );

                            if (filtered.length === 0) {
                                const data = {
                                    title: text,
                                    status: false,
                                };
                                addItem(data);
                            }
                        }
                    }
                }}
                className="input"
                type="text"
                placeholder="Write Something"
            />
            <button
                onClick={() => {
                    if (text.length !== 0) {
                        let filtered = todos.filter((e) => e.title === text);

                        if (filtered.length === 0) {
                            const data = {
                                title: text,
                                status: false,
                            };
                            addItem(data);
                        }
                    }
                }}
                className="btn1"
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
