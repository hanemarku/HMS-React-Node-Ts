import { Dispatch } from "redux";
import axios from 'axios';

interface FetchEntitiesAction {
    type: "FETCH_ENTITIES";
    payload: { id: number; name: string }[];
}


export const fetchEntities = () => (dispatch: Dispatch) => {
    fetch("http://localhost:3300/roles")
        .then((res) => res.json())
        .then((entities) => {
            dispatch<FetchEntitiesAction>({
                type: "FETCH_ENTITIES",
                payload: entities,
            });
        });
};

export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';


export const addItem = (item: Item) => ({
    type: ADD_ITEM,
    item
});

export const getItems = () => ({
    type: GET_ITEMS
});

export const updateItem = (item: Item) => ({
    type: UPDATE_ITEM,
    item
});

export const deleteItem = (id: number) => ({
    type: DELETE_ITEM,
    id
});

interface Item {
    id: number;
    name: string;
}