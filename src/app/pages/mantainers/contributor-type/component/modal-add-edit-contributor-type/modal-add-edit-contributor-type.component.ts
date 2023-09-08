import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContributorType } from 'src/app/model/contributorType.model';
import { ContributorTypeService } from '../../../../../services/mantainers/contributor-type.service';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { ApiError, ApiResponse } from 'src/app/model/response.model';

@Component({
	selector: 'app-modal-add-edit-contributor-type',
	templateUrl: './modal-add-edit-contributor-type.component.html',
})
export class ModalAddEditContributorTypeComponent implements OnInit {

	form = new FormGroup({
		id: new FormControl(),
		nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
		estado: new FormControl(true, [Validators.required]),
	});

	loading: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<ModalAddEditContributorTypeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogContributorType,
		private alert: alertHelper,
		private contributorService: ContributorTypeService
	) {
		if (data.type === 'edit') {
			const contributor = data.contributorType

			this.form.patchValue({
				id: contributor.id,
				nombre: contributor.nombre,
				estado: contributor.estado
			})
		}
	}


	ngOnInit(): void { }



	saveContributorType() {
		this.loading = true;

		if (!this.form.valid) {
			this.loading = false;
			this.alert.topCenter(`El formulario es inválido`, 'warning');
			return
		}

		const form = this.form.value;

		this.contributorService
			.saveContributorType(form)
			.subscribe({
				next: (res: ApiResponse) => {
					this.loading = false;
					this.alert.topCenter(`Se guardó el tipo de contribuyente correctamente`, 'success');
					this.dialogRef.close(true);
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);
				}
			});
	}

	updateContributorType() {
		this.loading = true;

		if (!this.form.valid) {
			this.loading = false;
			this.alert.topCenter(`El formulario es inválido`, 'warning');
			return
		}

		const form = this.form.value;

		this.contributorService
			.updateContributorType(form.id, form)
			.subscribe({
				next: (res: ApiResponse) => {
					this.loading = false;
					this.alert.topCenter(`Se actualizó el tipo de contribuyente correctamente`, 'success');
					this.dialogRef.close(true);
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);
				}
			});
	}


}
