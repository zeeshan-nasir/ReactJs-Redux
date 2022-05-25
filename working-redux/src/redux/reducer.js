import { SET_DATA } from "./action";

const init = {
    todos: [],
};

export const reducer = (state = init, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, todos: [...state.todos, ...action.payload] };
        default:
            return state;
    }
};
