import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoFailure, getTodoRequest, getTodoSucess } from "../Redux/action";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoLists from "./TodoLists";

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const getTodos = () => {
        dispatch(getTodoRequest());
        axios
        .get("/todos")
        .then((res) => dispatch(getTodoSucess(res.data)))
        .catch((err) => dispatch(getTodoFailure(err)));
    };

    useEffect(() => {
        if(todos?.length ===0){
            getTodos();
        }    
    },[]);
  console.log(todos);
    return (
        <div style={{backgroundColor:"red",height:"100%",width:"40%",marginLeft:"30%"}}>
           <h1 style={{marginLeft:"-10%"}}>Todos</h1> 
           <AddTodo />
           <TodoLists todoLists={todos}/>
        </div>
    );     
};

export default Todos;