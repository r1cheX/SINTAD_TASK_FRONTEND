import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/dashboard/nav.service';
import { navItems } from 'src/app/model/layout.model';
import { Subscription, fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeilisearchComponent } from 'src/app/pages/mantainers/component/meilisearch/meilisearch.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
	navItems = navItems;
	isSearchOpened: boolean = false;
	uiSubscription: Subscription;

	keyBoardEvent$ = fromEvent(document, 'keydown')

	constructor(
		public navService: NavService,
		private dialog: MatDialog,
		private store: Store<AppState>
	) {

		this.uiSubscription = this.store.select('searchUi').subscribe(( { isOpened }) => {
			console.log('debugging isopen-->', isOpened);
			this.isSearchOpened = isOpened;
		});

	 }

	ngOnInit(): void {
		this.keyBoardEvent$
		.subscribe((event: any) => {
			if (this.isSearchOpened) return;

			if (event.ctrlKey && event.key === 'k') {
				this.openModalGlobalSearch();
			}
		});
	}

	ngOnDestroy(): void {
		this.uiSubscription.unsubscribe();
	}

	openModalGlobalSearch() {
		const modal = this.dialog.open(MeilisearchComponent, {
			width: '50rem',
			height: '25.5rem',
			disableClose: false,
		});
	}
}
