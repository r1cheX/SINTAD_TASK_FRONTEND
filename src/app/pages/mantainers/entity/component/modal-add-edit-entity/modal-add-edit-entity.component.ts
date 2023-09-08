import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { filterArray } from 'src/app/helpers/filter.helper';
import { ContributorType } from 'src/app/model/contributorType.model';
import { DocumentType } from 'src/app/model/documentType.model';
import { DialogEntity } from 'src/app/model/entity.model';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { ContributorTypeService } from 'src/app/services/mantainers/contributor-type.service';
import { DocumentTypeService } from 'src/app/services/mantainers/document-type.service';
import { EntityService } from 'src/app/services/mantainers/entity.service';

@Component({
    selector: 'app-modal-add-edit-entity',
    templateUrl: './modal-add-edit-entity.component.html',
})

export class ModalAddEditEntityComponent implements OnInit {

    form = new FormGroup({
        id: new FormControl(),
        nroDocumento: new FormControl({ value: '', disabled: true }, [Validators.required]),
        razonSocial: new FormControl('', [Validators.required, Validators.max(100)]),
        nombreComercial: new FormControl('', [Validators.max(100)]),
        idTipoDocumento: new FormControl(0, [Validators.required]),
        idTipoContribuyente: new FormControl(0, [Validators.required]),
        direccion: new FormControl(''),
        telefono: new FormControl(''),
        estado: new FormControl(true, [Validators.required]),
    });

    loading: boolean = false;

    listDocumentTypes: DocumentType[]
    dataDocumentTypes: DocumentType[]

    listContributorTypes: ContributorType[]
    dataContributorTypes: ContributorType[]

    constructor(
        public dialogRef: MatDialogRef<ModalAddEditEntityComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogEntity,
        private alert: alertHelper,
        private entityService: EntityService,
        private documentService: DocumentTypeService,
        private contributorService: ContributorTypeService
    ) {
        if (data.type === 'edit') {
            const entity = data.entity

            this.form.patchValue({
                id: entity.id,
                nroDocumento: entity.nroDocumento,
                razonSocial: entity.razonSocial,
                nombreComercial: entity.nombreComercial,
                idTipoDocumento: entity.idTipoDocumento,
                idTipoContribuyente: entity.idTipoContribuyente,
                direccion: entity.direccion,
                telefono: entity.telefono,
                estado: entity.estado,
            })

        } else {
            this.form.get('nroDocumento')?.enable();
        }

    }

    ngOnInit(): void {
        this.getDocumentTypes()
        this.getContributorTypes()
    }

    filterDocuments(search: string): void {
        if (search.length > 0) {
            const filterDocument = filterArray(this.dataDocumentTypes, search);
            this.listDocumentTypes = filterDocument;
        } else {
            this.listDocumentTypes = this.dataDocumentTypes;
        }
    }

    filterContributors(search: string): void {
        if (search.length > 0) {
            const filterContributor = filterArray(this.dataContributorTypes, search);
            this.listContributorTypes = filterContributor;
        } else {
            this.listContributorTypes = this.dataContributorTypes;
        }
    }

    getDocumentTypes() {
        this.loading = true;
        this.documentService
            .getDocumentTypes()
            .subscribe({
                next: (documentTypes: DocumentType[]) => {
                    this.loading = false;
                    this.listDocumentTypes = documentTypes
                    this.dataDocumentTypes = documentTypes
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
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
                    this.listContributorTypes = contributorTypes
                    this.dataContributorTypes = contributorTypes
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });
    }


    saveEntity() {
        this.loading = true;

        if (!this.form.valid) {
            this.loading = false;
            this.alert.topCenter(`El formulario es inválido`, 'warning');
            return
        }

        const form = this.form.value;
        form.nroDocumento = this.form.get('nroDocumento')?.value;

        this.entityService
            .saveEntity(form)
            .subscribe({
                next: (res: ApiResponse) => {
                    this.loading = false;
                    this.alert.topCenter(`Se guardó la entidad correctamente`, 'success');
                    this.dialogRef.close(true);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }


    updateEntity() {
        this.loading = true;

        if (!this.form.valid) {
            this.loading = false;
            this.alert.topCenter(`El formulario es inválido`, 'warning');
            return
        }

        const form = this.form.value;
        form.nroDocumento = this.form.get('nroDocumento')?.value;

        this.entityService
            .updateEntity(form.id, form)
            .subscribe({
                next: (res: ApiResponse) => {
                    this.loading = false;
                    this.alert.topCenter(`Se actualizó la entidad correctamente`, 'success');
                    this.dialogRef.close(true);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }


}
