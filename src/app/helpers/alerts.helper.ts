import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
// import { typeAlert } from '../model/main.model';
// import { LoginService } from '../service/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { typeAlert } from '../model/main.model';

@Injectable({
	providedIn: 'root',
})
export class alertHelper {
	constructor(
		private snackBar: MatSnackBar,
		private router: Router,
		// private loginService: LoginService
	) { }

	topCenter(msj: string, type: typeAlert = 'success', duration: number = 3000) {
		this.snackBar.open(msj, 'Cerrar', {
			horizontalPosition: 'center',
			verticalPosition: 'top',
			panelClass: [type],
			duration: duration,
		});
	}

	error(code: number = 500, error_http?: HttpErrorResponse) {
		let message: string = 'Ocurrió un error al intentar realizar la operación';

		switch (code) {
			case 401:
				message = 'Usuario no encontrado, por favor vuelva a iniciar sesión o regístrese';
				// this.loginService.destoryCookie();
				this.router.navigate(['/']);
				break;

			case 403:
				message = '¡No cuenta con los permisos para poder realizar esta operación';
				break;

			default:
				message = 'Ocurrió un error al intentar realizar la operación';
				break;
		}

		message = error_http?.error?.msj ?? message;
		this.topCenter(message, 'warning');
	}

	formInvalid = () => this.topCenter('¡Formulario inválido!','warning');
}
