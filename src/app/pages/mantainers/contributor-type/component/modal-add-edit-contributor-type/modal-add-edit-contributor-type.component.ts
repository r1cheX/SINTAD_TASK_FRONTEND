import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContributorType } from 'src/app/model/contributorType.model';

@Component({
    selector: 'app-modal-add-edit-contributor-type',
    templateUrl: './modal-add-edit-contributor-type.component.html',
})
export class ModalAddEditContributorTypeComponent implements OnInit {

    form = new FormGroup({
		id_tipo_contribuyente: new FormControl({
			value: null,
			disabled: false,
		}),
		nombre: new FormControl({
			value: null,
			disabled: false,
		}, [Validators.required]),
		estado: new FormControl({
			value: null,
			disabled: false,
		}, [Validators.required]),
	});

    constructor(
        public dialogRef: MatDialogRef<ModalAddEditContributorTypeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogContributorType
    ) {
		console.log('debugging data que llega modal-->', data);

    }


    ngOnInit(): void { }

    saveContributorType() {

    }

    updateContributorType() {

    }


}
