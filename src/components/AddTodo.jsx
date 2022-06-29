import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoFailure, addTodoRequest, addTodoSucess } from "../Redux/action";


const AddTodo = () => {
    
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("");


    const addTodo = (payload) => {
        dispatch(addTodoRequest())
        axios
        .post("/todos",payload)
        .then((res)=> dispatch(addTodoSucess(res.data)))
        .catch((err) => dispatch(addTodoFailure(err)));
    };


    const handleAdd = () => {
        if(todo){
            const payload = {title: todo, status: false}
            addTodo(payload)
            setTodo("")
        }
    };


    return (
        <div>
            <h3 style={{marginLeft:"-10%"}}>AddTodo</h3>
            <input style={{height:"30px", width:"290px",marginLeft:"5%"}}
            value={todo}
             onChange = {(e) => setTodo(e.target.value)}
             placeholder="Add Todos Here..."
             />
            <button style={{padding:"7px 25px 10px 25px", fontSize:"18px",backgroundColor:"pink",color:"white",border:"none", marginLeft:"5px"}}
            onClick={handleAdd}>Add</button>
        </div>
    );     
};

export default AddTodo;