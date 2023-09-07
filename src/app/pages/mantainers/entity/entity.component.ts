import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditEntityComponent } from './component/modal-add-edit-entity/modal-add-edit-entity.component';
import { ModalDeleteEntityComponent } from './component/modal-delete-entity/modal-delete-entity.component';
import { Entity } from 'src/app/model/entity.model';

export interface productsData {
    id: number;
    imagePath: string;
    uname: string;
    position: string;
    productName: string;
    budget: number;
    priority: string;
}

const ELEMENT_DATA: productsData[] = [
    {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sunil Joshi',
        position: 'Web Designer',
        productName: 'Elite Admin',
        budget: 3.9,
        priority: 'low',
    },
    {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Andrew McDownland',
        position: 'Project Manager',
        productName: 'Real Homes Theme',
        budget: 24.5,
        priority: 'medium',
    },
    {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'Christopher Jamil',
        position: 'Project Manager',
        productName: 'MedicalPro Theme',
        budget: 12.8,
        priority: 'high',
    },
    {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'Nirav Joshi',
        position: 'Frontend Engineer',
        productName: 'Hosting Press HTML',
        budget: 2.4,
        priority: 'critical',
    },
];


@Component({
    selector: 'app-entity',
    templateUrl: './entity.component.html',
})
export class EntityComponent implements OnInit {

    displayedColumns: string[] = ['razon_social', 'tipo_doc', 'tipo_contribuyente', 'estado', 'actions'];
    dataSource = ELEMENT_DATA;

    constructor(
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void { 
        this.getEntities();
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

    }

}
