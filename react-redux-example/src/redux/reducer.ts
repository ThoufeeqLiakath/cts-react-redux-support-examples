import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";
import { initialState } from "./store";

export default function reducer(state = initialState, action: any) {
    switch(action.type){
        case GET_ITEMS:{
            return state;
        }
        case DELETE_ITEM:{
            return {
                ...state, todoList: state.todoList.filter(todoItem => todoItem.id!==action.payload)
            }
        }
        case ADD_ITEM:{
            return{
                ...state, todoList:[action.payload, ...state.todoList]
            }
        }
        default:{
            return state;
        }
    }
}