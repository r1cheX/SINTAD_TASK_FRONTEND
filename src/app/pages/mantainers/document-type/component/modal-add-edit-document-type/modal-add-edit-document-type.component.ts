import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDocumentType } from 'src/app/model/documentType.model';

@Component({
	selector: 'app-modal-add-edit-document-type',
	templateUrl: './modal-add-edit-document-type.component.html',
	styleUrls: ['./modal-add-edit-document-type.component.scss']
})
export class ModalAddEditDocumentTypeComponent implements OnInit {

	form = new FormGroup({
		id_tipo_documento: new FormControl({
			value: null,
			disabled: false,
		}),
		codigo: new FormControl({
			value: null,
			disabled: false,
		}, [Validators.required]),
		nombre: new FormControl({
			value: null,
			disabled: true,
		}, [Validators.required]),
		descripcion: new FormControl({
			value: null,
			disabled: true,
		}, [Validators.required]),
		estado: new FormControl({
			value: null,
			disabled: true,
		}, [Validators.required]),
	});

	constructor(
		public dialogRef: MatDialogRef<ModalAddEditDocumentTypeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogDocumentType
	) {
		console.log('debugging data que llega modal-->', data);

	 }

	ngOnInit(): void {
	}

	saveDocumentType() {

	}


	updateDocumentType() {

	}

}
