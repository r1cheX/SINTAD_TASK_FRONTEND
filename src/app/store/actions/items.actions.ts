import { createAction, props } from '@ngrx/store';

export const cargarItems = createAction('[Items] Cargar Items');

export const cargarItemsSuccess = createAction(
    '[Items] Cargar Items Success',
    // props<{ usuarios: Usuario[] }>()   
)
