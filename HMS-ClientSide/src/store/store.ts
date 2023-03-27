import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Item } from "./item";

interface ItemAction {
    type: string;
    item?: Item;
    id?: number;
}
const itemsReducer = (state: Item[] = [], action: ItemAction) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item!];
        case 'GET_ITEMS':
            return state;
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.item!.id ? action.item! : item
            );
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id!);
        default:
            return state;
    }
};

const store = createStore(combineReducers({ items: itemsReducer }));

export default store;
