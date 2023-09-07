import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddEditDocumentTypeComponent } from './component/modal-add-edit-document-type/modal-add-edit-document-type.component';
import { ModalDeleteDocumentTypeComponent } from './component/modal-delete-document-type/modal-delete-document-type.component';
import { DocumentType } from 'src/app/model/documentType.model';
import { MatTableDataSource } from '@angular/material/table';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { DocumentTypeService } from 'src/app/services/mantainers/document-type.service';
import { ApiError } from 'src/app/model/response.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-document-type',
    templateUrl: './document-type.component.html',
})
export class DocumentTypeComponent {

    displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'estado', 'actions'];
    dataSource = new MatTableDataSource<DocumentType>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    loading: boolean = false;

    constructor(
        private dialog: MatDialog,
        private documentervice: DocumentTypeService,
        private alert: alertHelper,
    ) { }

    ngOnInit(): void {
        this.getDocumentTypes();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openModalDocument(type: 'add' | 'edit') {
        const modal = this.dialog.open(ModalAddEditDocumentTypeComponent, {
            width: '22rem',
            height: '25.5rem',
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

    openModalDeleteDocument(documentType: DocumentType) {
        const modal = this.dialog.open(ModalDeleteDocumentTypeComponent, {
            width: '24rem',
            height: '14rem',
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
        this.loading = true;
        this.documentervice
            .getDocumentTypes()
            .subscribe({
                next: (documentTypes: DocumentType[]) => {
                    console.log('debugging res-->', documentTypes);
                    this.loading = false;
                    this.dataSource.data = documentTypes;
                    console.log('debugging datasoruce-->', this.dataSource);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }

}
