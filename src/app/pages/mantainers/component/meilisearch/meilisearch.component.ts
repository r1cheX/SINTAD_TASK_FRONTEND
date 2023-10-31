import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, debounceTime, fromEvent, map, mergeAll, tap } from 'rxjs';
import { MailisearchService } from 'src/app/services/search/mailisearch.service';

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
		private mailisearchService: MailisearchService,
		private elementRef: ElementRef,
	) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.listenInputSearch();
	}

	ngOnDestroy(): void {
		this.inputSubscription.unsubscribe();
	}

	listenInputSearch(): void {

		console.log('debugging value-->', fromEvent(this.inputElement.nativeElement, 'keyup'));

		this.inputSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
			.pipe(
				tap(() => console.log('debugging llego-->',)),
				debounceTime(500),
				map((event: any) => {
					const value = event.target.value
					console.log('debugging value-->', value);
					return this.mailisearchService.getMailiSearch(value)
				}),
				mergeAll(),
				map((data: any) => data.hits)
			)
			.subscribe({
				next: (data: any) => {
					this.loading = false;
					this.data = data;
					console.log(data);
				},
				error: (err: any) => {
					this.loading = false;
					console.log(err);
				}
			});
	}
}