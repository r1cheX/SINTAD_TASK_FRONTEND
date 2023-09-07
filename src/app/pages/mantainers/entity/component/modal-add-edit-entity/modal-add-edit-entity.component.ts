import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEntity } from 'src/app/model/entity.model';

@Component({
    selector: 'app-modal-add-edit-entity',
    templateUrl: './modal-add-edit-entity.component.html',
})

export class ModalAddEditEntityComponent implements OnInit {

    form = new FormGroup({
        id_entidad: new FormControl({
            value: null,
            disabled: false,
        }),
        id_tipo_documento: new FormControl({
            value: null,
            disabled: false,
        }),
        nro_documento: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        razon_social: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        nombre_comercial: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        id_tipo_contribuyente: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        direccion: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        telefono: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
        estado: new FormControl({
            value: null,
            disabled: false,
        }, [Validators.required]),
    });

    constructor(
        public dialogRef: MatDialogRef<ModalAddEditEntityComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogEntity
    ) {
        console.log('debugging data que llega modal-->', data);

    }

    ngOnInit(): void {
    }

    saveEntity() {

    }


    updateEntity() {

    }


}
