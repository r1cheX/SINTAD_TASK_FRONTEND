import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { DialogDocumentType } from 'src/app/model/documentType.model';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { DocumentTypeService } from 'src/app/services/mantainers/document-type.service';

@Component({
	selector: 'app-modal-add-edit-document-type',
	templateUrl: './modal-add-edit-document-type.component.html',
})
export class ModalAddEditDocumentTypeComponent implements OnInit {

	form = new FormGroup({
		id: new FormControl(),
		codigo: new FormControl('', [Validators.required, Validators.max(20)]),
		nombre: new FormControl('', [Validators.required, Validators.maxLength(100)]),
		descripcion: new FormControl('', [Validators.maxLength(200)]),
		estado: new FormControl(true, [Validators.required]),
	});

	loading: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<ModalAddEditDocumentTypeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogDocumentType,
		private alert: alertHelper,
        private documentService: DocumentTypeService
	) {
		if (data.type === 'edit') {

			const document = data.documentType

			this.form.patchValue({
				id: document.id,
				codigo: document.codigo,
				nombre: document.nombre,
				descripcion: document.descripcion,
				estado: document.estado
			})
		}

	 }

	ngOnInit(): void {}

	saveDocumentType() {
		this.loading = true;

		if (!this.form.valid) {
			this.loading = false;
			this.alert.topCenter(`El formulario es inválido`, 'warning');
			return
		}

		const form = this.form.value;

		this.documentService
			.saveDocumentType(form)
			.subscribe({
				next: (res: ApiResponse) => {
					this.loading = false;
					this.alert.topCenter(`Se guardó el tipo de documento correctamente`, 'success');
					this.dialogRef.close(true);
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);
				}
			});
	}

	updateDocumentType() {
		this.loading = true;

		if (!this.form.valid) {
			this.loading = false;
			this.alert.topCenter(`El formulario es inválido`, 'warning');
			return
		}

		const form = this.form.value;

		this.documentService
			.updateDocumentType(form.id, form)
			.subscribe({
				next: (res: ApiResponse) => {
					this.loading = false;
					this.alert.topCenter(`Se actualizó el tipo de documento correctamente`, 'success');
					this.dialogRef.close(true);
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);
				}
			});

	}

}
