import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
    items: reducers.ItemSearchState,
    searchUi: reducers.SearchUiState,
}


export const appReducers: ActionReducerMap<AppState> = {
    items: reducers.itemsReducer,
    searchUi: reducers.SearchUiReducer
}