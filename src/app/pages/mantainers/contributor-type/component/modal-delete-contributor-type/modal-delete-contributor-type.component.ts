import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { ContributorType } from 'src/app/model/contributorType.model';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { ContributorTypeService } from 'src/app/services/mantainers/contributor-type.service';

@Component({
    selector: 'app-modal-delete-contributor-type',
    templateUrl: './modal-delete-contributor-type.component.html',
})
export class ModalDeleteContributorTypeComponent implements OnInit {

    form = new FormGroup({
        id: new FormControl(),
    });

    loading: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<ModalDeleteContributorTypeComponent>,
        @Inject(MAT_DIALOG_DATA) public contributor: ContributorType,
        private alert: alertHelper,
        private contributorService: ContributorTypeService
    ) {
        this.form.patchValue({
            id: contributor.id,
        })

    }

    ngOnInit(): void { }

    deleteContributorType() {
        this.loading = true;

        if (!this.form.valid) {
            this.loading = false;
            this.alert.topCenter(`El formulario es inválido`, 'warning');
            return
        }

        const form = this.form.value;

        this.contributorService
            .deleteContributorType(form.id)
            .subscribe({
                next: (res: ApiResponse) => {
                    this.loading = false;
                    this.alert.topCenter(`Se eliminó el tipo de contribuyente correctamente`, 'success');
                    this.dialogRef.close(true);
                },
                error: (err: ApiError) => {
                    this.loading = false;
                    this.alert.error(err.status);
                }
            });

    }

}
