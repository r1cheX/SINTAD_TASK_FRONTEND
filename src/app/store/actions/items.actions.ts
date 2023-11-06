import { createAction, props } from '@ngrx/store';
import { ItemSearch } from 'src/app/model/item-search.model';

export const cargarItems = createAction(
    '[Items] Cargar Items',
    props<{ query: string }>()
);

export const cargarItemsSuccess = createAction(
    '[Items] Cargar Items Success',
    props<{ items: ItemSearch[] }>()
)

export const cargarItemsError = createAction(
    '[Items] Cargar Items Error',
    props<{ payload: any }>()
)
