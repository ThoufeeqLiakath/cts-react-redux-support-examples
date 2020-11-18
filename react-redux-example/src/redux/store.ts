import { createStore } from "redux";
import reducer from "./reducer";
import { v1 as uuidv1 } from 'uuid';

export const initialState = {
    todoList: [
        {
            id: uuidv1(),
            item: "Meeting @ 10 AM"
        },
        {
            id: uuidv1(),
            item: "Dinner @ 9:30 PM"
        }
    ],
    todoItem: {}
}

const store = createStore(reducer, initialState);
export default store;