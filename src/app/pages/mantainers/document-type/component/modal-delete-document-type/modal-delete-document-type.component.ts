import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { DocumentType } from 'src/app/model/documentType.model';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { DocumentTypeService } from 'src/app/services/mantainers/document-type.service';

@Component({
    selector: 'app-modal-delete-document-type',
    templateUrl: './modal-delete-document-type.component.html',
})
export class ModalDeleteDocumentTypeComponent implements OnInit {

    form = new FormGroup({
        id: new FormControl(),
    });

    loading: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<ModalDeleteDocumentTypeComponent>,
        @Inject(MAT_DIALOG_DATA) public document: DocumentType,
        private alert: alertHelper,
        private documentService: DocumentTypeService
    ) {
        this.form.patchValue({
            id: document.id,
        })
    }

    ngOnInit(): void { }

    deleteDocumentType() {
        this.loading = true;

        if (!this.form.valid) {
            this.loading = false;
            this.alert.topCenter(`El formulario es inválido`, 'warning');
            return
        }

        const form = this.form.value;

        this.documentService
            .deleteDocumentType(form.id)
            .subscribe({
                next: (res: ApiResponse) => {
                    this.loading = false;
                    this.alert.topCenter(`Se eliminó el tipo de documento correctamente`, 'success');
                    this.dialogRef.close(true);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }

}
