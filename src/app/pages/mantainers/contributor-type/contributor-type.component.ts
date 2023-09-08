import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditContributorTypeComponent } from './component/modal-add-edit-contributor-type/modal-add-edit-contributor-type.component';
import { ModalDeleteContributorTypeComponent } from './component/modal-delete-contributor-type/modal-delete-contributor-type.component';
import { ContributorType } from 'src/app/model/contributorType.model';
import { MatTableDataSource } from '@angular/material/table';
import { ContributorTypeService } from '../../../services/mantainers/contributor-type.service';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { MatPaginator } from '@angular/material/paginator';


@Component({
    selector: 'app-contributor-type',
    templateUrl: './contributor-type.component.html',
})
export class ContributorTypeComponent {

    dataSource = new MatTableDataSource<ContributorType>();
    displayedColumns: string[] = ['nombre', 'estado', 'actions'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    loading: boolean = false;

    constructor(
        private dialog: MatDialog,
        private contributorService: ContributorTypeService,
        private alert: alertHelper,

    ) { }

    ngOnInit(): void {
        this.getContributorTypes();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openModalAddContributor() {
        const modal = this.dialog.open(ModalAddEditContributorTypeComponent, {
            width: '22rem',
            height: '16rem',
            data: {
                type : 'add',
                contributorType: [],
            },
            disableClose: true,
        });

        modal.afterClosed().subscribe((result) => {
            if (result) {
                this.getContributorTypes();
            }
        });
    }

    openModalEditContributor(contributorType: ContributorType) {
        const modal = this.dialog.open(ModalAddEditContributorTypeComponent, {
            width: '22rem',
            height: '16rem',
            data: {
                type: 'edit',
                contributorType,
            },
            disableClose: true,
        });

        modal.afterClosed().subscribe((result) => {
            if (result) {
                this.getContributorTypes();
            }
        });
    }

    openModalDeleteContributor(contributorType: ContributorType) {
        const modal = this.dialog.open(ModalDeleteContributorTypeComponent, {
            width: '24rem',
            height: '14rem',
            data: contributorType,
            disableClose: true,
        });

        modal.afterClosed().subscribe((result) => {
            if (result) {
                this.getContributorTypes();
            }
        });
    }


    getContributorTypes() {
        this.loading = true;
        this.contributorService
            .getContributorTypes()
            .subscribe({
                next: (contributorTypes: ContributorType[]) => {
                    this.loading = false;
                    this.dataSource.data = contributorTypes;
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });
    }
}
