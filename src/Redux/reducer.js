import * as types from "./actionTypes";

const initialState = {
    // data: {
        todos: [],
        isLoading: false,
        isError: false,
    // },    
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case types.GET_TODO_REQUEST:
            return {
                ...state,  
                isLoading: true,
                isError:false,
            };

            case types.GET_TODO_SUCESS:
            return {...state, 
                // data: {
                    // ...state.data,
                    todos: payload,
                    isLoading: false,
                    isError: false,
                // },     
            };

            case types.GET_TODO_FAILURE:
            return {...state,
                // data:{...state.data, isLoading: false, isError:payload}
                isLoading: false,
                isError:true,
            };
        
            



            case types.ADD_TODO_REQUEST:
                return{...state, 
                    //data: {...state.data, isLoading:true, isError: false}
                    isLoading:true,
                     isError: false,
                };

                case types.ADD_TODO_SUCESS:
                    let newTodos = [...state.todos, payload]
                return{...state,
                     //data: {...state.data, isLoading: false}
                     todos: newTodos,
                     isLoading: false,
                     isError: false,
                    };

                case types.ADD_TODO_FAILURE:
                    return{...state,
                        //data: {...state.data, isLoading:false, isError: true}
                        isLoading:false, 
                        isError: true,
                    };




                    case types.TOGGLE_TODO_REQUEST:
                return{...state, 
                    //data: {...state.data, isLoading:true, isError: false}
                    isLoading:true,
                     isError: false,
                };

                case types.TOGGLE_TODO_SUCESS:
                    let newToggledTodos = state.todos.map((item) => item.id === payload.id ? payload : item);
                return{...state,
                     //data: {...state.data, isLoading: false}
                     todos: newToggledTodos,
                     isLoading: false,
                     isError: false,
                    };

                case types.TOGGLE_TODO_FAILURE:
                    return{...state,
                        //data: {...state.data, isLoading:false, isError: true}
                        isLoading:false, 
                        isError: true,
                    };




                    case types.REMOVE_TODO_REQUEST:
                        return{...state, 
                            //data: {...state.data, isLoading:true, isError: false}
                            isLoading:true,
                             isError: false,
                        };
        
                        case types.REMOVE_TODO_SUCESS:
                            const leftTodos = state.todos.filter((item) => item.id !== payload );
                        return{...state,
                             //data: {...state.data, isLoading: false}
                             todos: leftTodos,
                             isLoading: false,
                             isError: false,
                            };
        
                        case types.REMOVE_TODO_FAILURE:
                            return{...state,
                                //data: {...state.data, isLoading:false, isError: true}
                                isLoading:false, 
                                isError: true,
                            };
        default:
            return state;    
    }
};
export  {reducer};