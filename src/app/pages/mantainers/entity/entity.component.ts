import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditEntityComponent } from './component/modal-add-edit-entity/modal-add-edit-entity.component';
import { ModalDeleteEntityComponent } from './component/modal-delete-entity/modal-delete-entity.component';
import { Entity } from 'src/app/model/entity.model';
import { MatTableDataSource } from '@angular/material/table';
import { EntityService } from '../../../services/mantainers/entity.service';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { ApiError } from 'src/app/model/response.model';
import { MatPaginator } from '@angular/material/paginator';


@Component({
    selector: 'app-entity',
    templateUrl: './entity.component.html',
})
export class EntityComponent implements OnInit {

    displayedColumns: string[] = ['razon_social', 'tipo_doc', 'tipo_contribuyente', 'estado', 'actions'];
    dataSource =  new MatTableDataSource<Entity>(); 

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    loading: boolean = false;

    constructor(
        private dialog: MatDialog,
        private entityService: EntityService,
        private alert: alertHelper,
    ) { }

    ngOnInit(): void { 
        this.getEntities();
    }

    ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openModalEntity(type: 'add' | 'edit') {
        const modal = this.dialog.open(ModalAddEditEntityComponent, {
        	width: '22rem',
			height: '35rem',
            data: {
                type,
                documentType: [],
            },
            disableClose: true,
        });

        modal.afterClosed().subscribe((result) => {
            if (result) {
                this.getEntities();
            }
        });
    }

    openModalDeleteEntity(entity: Entity) {
        const modal = this.dialog.open(ModalDeleteEntityComponent, {
			width: '24rem',
			height: '13rem',
			data: entity,
			disableClose: true,
		});

		modal.afterClosed().subscribe((result) => {
			if (result) {
				this.getEntities();
			}
		});
    }

    getEntities() {
        this.loading = true;

        this.entityService
            .getEntities()
            .subscribe({
                next: (entities: Entity[]) => {
                    this.loading = false;
                    this.dataSource.data = entities;
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }

}
