import React from "react";

const DoneTodos = ({ deletion, todos }) => {
    return (
        <div className="list2">
            {todos
                .filter((item) => {
                    return item.status === true;
                })
                .map((item, index) => {
                    return (
                        <div className="itemChecked">
                            <input checked type="checkbox" className="check" />
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

export default DoneTodos;
