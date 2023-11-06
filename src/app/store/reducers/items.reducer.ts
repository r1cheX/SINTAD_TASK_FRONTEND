import { Action, createReducer, on } from '@ngrx/store';
import { ItemSearch } from 'src/app/model/item-search.model';
import { cargarItems, cargarItemsError, cargarItemsSuccess } from '../actions';

export interface ItemSearchState {
    items: ItemSearch[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const itemsInitialState: ItemSearchState = {
    items: [],
    loaded: false,
    loading: false,
    error: null
}

const _itemsReducer = createReducer(itemsInitialState,

    on( cargarItems, state => ({ ...state, loading: true })),

    on( cargarItemsSuccess, ( state, { items }) => ({
        ...state,
        loading: false,
        loaded: true,
        items: [...items]
    })),
  
    on( cargarItemsError, ( state, { payload }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))

);

export function itemsReducer(state: ItemSearchState | undefined , action: Action) {
    return _itemsReducer(state, action);
}