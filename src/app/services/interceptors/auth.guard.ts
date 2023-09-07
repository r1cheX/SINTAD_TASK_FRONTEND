import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { alertHelper } from '../../helpers/alerts.helper';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private alert: alertHelper,
		private authService: AuthService,
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		const user = this.authService.readCookie('username')
		const email = this.authService.readCookie('email')

		if (!user && !email) {
			this.alert.topCenter(
				'No cuenta con los permisos necesarios para realizar esta acción!',
				'warning'
			);

			this.authService.destoryCookies();
			this.router.navigate(['/']);
			return false;
		}

		return true;
	}

}
