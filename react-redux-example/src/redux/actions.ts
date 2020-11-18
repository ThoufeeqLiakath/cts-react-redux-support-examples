import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const deleteItem = (id: any) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = (item: any) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}