import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { Entity } from 'src/app/model/entity.model';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { EntityService } from 'src/app/services/mantainers/entity.service';

@Component({
    selector: 'app-modal-delete-entity',
    templateUrl: './modal-delete-entity.component.html',
})
export class ModalDeleteEntityComponent implements OnInit {

    form = new FormGroup({
        id: new FormControl(),
    });

    loading: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<ModalDeleteEntityComponent>,
        @Inject(MAT_DIALOG_DATA) public entity: Entity,
        private alert: alertHelper,
        private entityService: EntityService
    ) {
        this.form.patchValue({
            id: entity.id,
        })

    }

    ngOnInit(): void { }

    deleteEntity() {
        this.loading = true;

        if (!this.form.valid) {
            this.loading = false;
            this.alert.topCenter(`El formulario es inválido`, 'warning');
            return
        }

        const form = this.form.value;

        this.entityService
            .deleteEntity(form.id)
            .subscribe({
                next: (res: ApiResponse) => {
                    this.loading = false;
                    this.alert.topCenter(`Se eliminó la entidad correctamente`, 'success');
                    this.dialogRef.close(true);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }

}