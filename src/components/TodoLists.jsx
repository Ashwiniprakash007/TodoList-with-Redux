import React from "react";
import { Link } from "react-router-dom";

const TodoLists = ({todoLists}) => {
    return (
       <div >
        {todoLists ?.map((item) => {
          return (
            <div key={item.id} style={{backgroundColor:"black",fontSize:"24px", marginTop:"20px",width:"300px",textAlign:"center",marginLeft:"21%"}}>
                <Link to={`/todo/${item.id}`}>
                <div>{item.title}</div>
                </Link>
            
            </div>
          );
        })}
       </div>
    );
};
export default TodoLists;