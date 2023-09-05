import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditDocumentTypeComponent } from './component/modal-add-edit-document-type/modal-add-edit-document-type.component';
import { ModalDeleteDocumentTypeComponent } from './component/modal-delete-document-type/modal-delete-document-type.component';

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
    selector: 'app-document-type',
    templateUrl: './document-type.component.html',
    styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent {

    displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'estado', 'actions'];
    dataSource = ELEMENT_DATA;

    constructor(
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getDocumentTypes();
    }

    modalDocumentType(type: 'add' | 'edit') {
        const modal = this.dialog.open(ModalAddEditDocumentTypeComponent, {
            width: '28rem',
            height: '45rem',
            data: {
                type,
                documentType: [],
            },
            disableClose: true,
        });

        modal.afterClosed().subscribe((result) => {
            if (result) {
                this.getDocumentTypes();
            }
        });

    }

    deleteDocumentType(documentType: DocumentType) {
        const modal = this.dialog.open(ModalDeleteDocumentTypeComponent, {
			width: '22rem',
			height: '11.5rem',
			data: documentType,
			disableClose: true,
		});

		modal.afterClosed().subscribe((result) => {
			if (result) {
				this.getDocumentTypes();
			}
		});
    }

    getDocumentTypes() {


    }

}
