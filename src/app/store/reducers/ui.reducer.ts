import { Action, createReducer, on } from '@ngrx/store';
import { isSearchOpened, isSearchClosed } from '../actions';

export interface SearchUiState {
    isOpened: boolean;
}

export const SearchUiInitialState: SearchUiState = {
   isOpened: false,
}

const _searchUiReducer = createReducer(SearchUiInitialState,

    on( isSearchOpened, state => ({ ...state, isOpened: true })),

    on( isSearchClosed, state => ({ ...state, isOpened: false })),


);

export function SearchUiReducer(state: SearchUiState | undefined , action: Action) {
    return _searchUiReducer(state, action);
}