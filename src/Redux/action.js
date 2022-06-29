import * as type from "./actionTypes";

const getTodoRequest = () => {
    return {
        type: type.GET_TODO_REQUEST,
    };
};

const getTodoSucess = (payload) => {
    return {
        type: type.GET_TODO_SUCESS, payload,
    };
};

const getTodoFailure = (error) => {
    return {
        type: type.GET_TODO_FAILURE, payload: error,
    };
};



const addTodoRequest = () => {
    return {
        type: type.ADD_TODO_REQUEST,
    };
};

const addTodoSucess = (payload) => {
    return {
        type: type.ADD_TODO_SUCESS, payload,
    };
};

const addTodoFailure = (error) => {
    return {
        type: type.ADD_TODO_FAILURE, payload: error,
    };
};



const toggleTodoRequest = () => {
    return {
        type: type.TOGGLE_TODO_REQUEST,
    };
};

const toggleTodoSucess = (payload) => {
    return {
        type: type.TOGGLE_TODO_SUCESS, payload,
    };
};

const toggleTodoFailure = (error) => {
    return {
        type: type.TOGGLE_TODO_FAILURE, payload: error,
    };
};



const removeTodoRequest = () => {
    return {
        type: type.REMOVE_TODO_REQUEST,
    };
};

const removeTodoSucess = (payload) => {
    return {
        type: type.REMOVE_TODO_SUCESS, payload,
    };
};

const removeTodoFailure = (error) => {
    return {
        type: type.REMOVE_TODO_FAILURE, payload: error,
    };
};


export {getTodoRequest,
     getTodoSucess, 
     getTodoFailure,
     addTodoRequest,
     addTodoSucess, 
     addTodoFailure,
     toggleTodoRequest, 
     toggleTodoSucess,
    toggleTodoFailure,
    removeTodoRequest,
    removeTodoSucess,
    removeTodoFailure, 
}

