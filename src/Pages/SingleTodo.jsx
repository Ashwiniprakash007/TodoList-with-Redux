import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { removeTodoFailure, removeTodoRequest, removeTodoSucess, toggleTodoFailure, toggleTodoRequest, toggleTodoSucess } from "../Redux/action";

const SingleTodo = () => {

    const todos = useSelector((state) => state.todos);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const [currentTodo, SetCurrentTodo] = useState({})
   
    
    const toggleStatus = (id, newStatus) => {
       dispatch(toggleTodoRequest()); 
       axios
       .patch(`/todos/${id}` , {status : newStatus})
       .then((res) => dispatch(toggleTodoSucess(res.data)))
       .catch((err) => dispatch(toggleTodoFailure(err)))
    };
    
    
    const removeTodo = (id) => {
        dispatch(removeTodoRequest());
        axios
        .delete(`/todos/${id}`)
        .then((res) => {
            dispatch(removeTodoSucess(id));
            navigate("/");
        })
        .catch((err) => dispatch(removeTodoFailure(err)));
    };


    useEffect(() => {
        let currentTodo = todos.find((item) => item.id === Number(id));
        currentTodo && SetCurrentTodo(currentTodo);
    }, [todos, id]);
    console.log(todos);


    return (
        <div>
            <h3>
                {currentTodo?.title} {currentTodo?.status ? "True" : "False"}
            </h3>
            <button 
            onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)} >
                Toggle
            </button>
            <button onClick={()=> removeTodo(currentTodo.id)}>Remove</button>

            <Link to={`/todo/${currentTodo.id}/edit`}>
            <button>Edit</button>
            </Link>
        </div>
    );
};
export default SingleTodo;