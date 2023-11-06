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

	loading: boolean = false;
	data: any = [];

	@ViewChild('input') inputElement: ElementRef;
	inputSubscription: Subscription;

	constructor(
		// private mailisearchService: MailisearchService,
		private store: Store<AppState>,
		private elementRef: ElementRef,
	) {
		this.store.dispatch( actions.isSearchOpened() )
	}

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		this.listenInputSearch();
	}

	ngOnDestroy(): void {
		this.store.dispatch( actions.isSearchClosed() )
		this.inputSubscription.unsubscribe();
	}

	listenInputSearch(): void {

		this.store.select('items').subscribe( ({ }) => {
			console.log('items', );
		})

		// this.inputSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
		// 	.pipe(
		// 		debounceTime(500),
		// 		map((event: any) => {
		// 			const value = event.target.value
		// 			if (!value) return [];
		// 			return this.mailisearchService.getMailiSearch(value)
		// 		}),
		// 		mergeAll(),
		// 		map((data: any) => data.hits)
		// 	)
		// 	.subscribe({
		// 		next: (data: any) => {
		// 			this.loading = false;
		// 			this.data = data;
		// 			console.log(data);
		// 		},
		// 		error: (err: any) => {
		// 			this.loading = false;
		// 			console.log(err);
		// 		}
		// 	});
	}
}