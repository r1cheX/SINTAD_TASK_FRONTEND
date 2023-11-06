import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MailisearchService } from "src/app/services/search/mailisearch.service";
import * as actions from '../actions';
import { catchError, debounceTime, map, mergeMap, of, tap } from "rxjs";


@Injectable()
export class ItemsSearchEffects {

    constructor(
        private action$: Actions,
        private mailisearchService: MailisearchService,
    ) {}


    cargarItems$ = createEffect(
        () => this.action$.pipe(
            ofType( actions.cargarItems ),
            debounceTime(500),
            mergeMap(
                ( action ) => this.mailisearchService.getMailiSearchByQuery( action.query )
                    .pipe(
                        map( items =>  actions.cargarItemsSuccess({ items })),
                        catchError( err => of( actions.cargarItemsError({ payload: err }) ) )
                    )
            )
        )
    )

}