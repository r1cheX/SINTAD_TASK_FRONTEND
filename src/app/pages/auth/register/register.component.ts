import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { ApiError, ApiResponse } from 'src/app/model/response.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
	loading: boolean = false;
	registerForm: FormGroup

	constructor(
		private router: Router,
		private alert: alertHelper,
		private authService: AuthService,
	) {
		this.registerForm = new FormGroup({
			username: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
	}


	ngOnInit(): void { }

	register() {
		if (!this.registerForm.valid) {
			this.alert.topCenter('Los datos ingresados no son validos', 'warning')
			return;
		}

		this.loading = true;

		this.authService
			.register(this.registerForm.value)
			.subscribe({
				next: (res: ApiResponse) => {
					if (res.status == 'success') {
						this.alert.topCenter(res.message, 'success');
						this.router.navigate(['/']);
					} else {
						this.loading = false;
						this.alert.topCenter(res.message, 'warning');
					}
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);

					if (err.error.status === 'fail') {
						this.alert.topCenter(err.error.message, 'warning')
					}
				}
			});

	}
}