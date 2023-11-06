import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, debounceTime, fromEvent, map, mergeAll, tap } from 'rxjs';
import { MailisearchService } from 'src/app/services/search/mailisearch.service';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from 'src/app/store/actions';

@Component({
	selector: 'app-meilisearch',
	templateUrl: './meilisearch.component.html',
	styleUrls: ['./meilisearch.component.scss']
})
export class MeilisearchComponent implements OnInit, OnDestroy, AfterViewInit {

	// loading: boolean = false;
	error: any;
	data: any = [];

	@ViewChild('input') inputElement: ElementRef;

	inputSubscription: Subscription;
	itemSubscription: Subscription;

	constructor(
		private store: Store<AppState>,
	) {
		this.store.dispatch( actions.isSearchOpened( ))
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.itemSubscription = this.store.select('items').subscribe(({ items, loading, error }) => {
			this.data = items;
			this.error = error;
		})

		this.listenInputSearch();
	}

	ngOnDestroy(): void {
		this.store.dispatch( actions.isSearchClosed() )
		this.inputSubscription.unsubscribe();
		this.itemSubscription.unsubscribe();
	}

	listenInputSearch(): void {
		const inputObservable$ = fromEvent(this.inputElement.nativeElement, 'keyup')

		this.inputSubscription = inputObservable$
			.pipe(
				map((event: any) => event.target.value),
			)
			.subscribe((query) => {
				if (!query) return;
				this.store.dispatch( actions.cargarItems({ query }) )
			});
	}
}