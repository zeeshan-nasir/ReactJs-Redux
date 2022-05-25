export const SET_DATA = "SET_DATA";

export const setData = (data) => {
    return {
        type: SET_DATA,
        payload: data,
    };
};

export const fetchData = () => async (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            dispatch(setData(json));
        });
};
