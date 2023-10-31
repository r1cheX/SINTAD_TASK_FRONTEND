import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/dashboard/nav.service';
import { navItems } from 'src/app/model/layout.model';
import { fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MeilisearchComponent } from 'src/app/pages/mantainers/component/meilisearch/meilisearch.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;

  keyBoardEvent$ = fromEvent(document, 'keydown')

  constructor(
    public navService: NavService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.keyBoardEvent$.subscribe((event: any) => {
      if (event.ctrlKey && event.key === 'k') {
        this.openModalGlobalSearch();
      }
    });
  }

  openModalGlobalSearch() {
    const modal = this.dialog.open(MeilisearchComponent, {
      width: '50rem',
      height: '25.5rem',
      disableClose: false,
    });
  }
}
