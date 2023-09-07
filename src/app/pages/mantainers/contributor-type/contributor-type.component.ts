import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditContributorTypeComponent } from './component/modal-add-edit-contributor-type/modal-add-edit-contributor-type.component';
import { ModalDeleteContributorTypeComponent } from './component/modal-delete-contributor-type/modal-delete-contributor-type.component';
import { ContributorType } from 'src/app/model/contributorType.model';

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
    selector: 'app-contributor-type',
    templateUrl: './contributor-type.component.html',
})
export class ContributorTypeComponent {

    displayedColumns: string[] = ['nombre', 'estado', 'actions'];
    dataSource = ELEMENT_DATA;

    constructor(
        private dialog: MatDialog,

    ) { }

    ngOnInit(): void { }

    openModalContributor(type: 'add' | 'edit') {
        const modal = this.dialog.open(ModalAddEditContributorTypeComponent, {
            width: '22rem',
            height: '16rem',
            data: {
                type,
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



    }
}
