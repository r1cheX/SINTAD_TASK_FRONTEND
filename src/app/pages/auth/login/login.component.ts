import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { alertHelper } from 'src/app/helpers/alerts.helper';
import { User } from 'src/app/model/auth.model';
import { ApiResponse, ApiError } from 'src/app/model/response.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

	loading: boolean = false;
	loginForm: FormGroup

	constructor(
		private router: Router,
		private alert: alertHelper,
		private authService: AuthService,
	) {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void { }

	login() {
		if (!this.loginForm.valid) {
			this.alert.topCenter('Los datos ingresados no son validos', 'warning')
			return
		}

		this.loading = true;
		const { email, password } = this.loginForm.value;

		this.authService
			.login(email, password)
			.subscribe({
				next: (user: User) => {
					console.log('debugging -->', user);
					this.authService.setCookies(user);
					this.authService.setToken(user.token!)
					this.loading = false;
					this.router.navigate(['/main/dashboard']);
					this.alert.topCenter("Iniciado sesión correctamente", 'success');
				},
				error: (err: ApiError) => {
					this.loading = false;
					this.alert.error(err.status);
				}
			});

	}

}
