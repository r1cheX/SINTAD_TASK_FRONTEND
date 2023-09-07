import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/model/auth.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent {

    username: String

    constructor(
        private authService: AuthService
    ) {
        this.username = authService.readCookie('username').toUpperCase()
    }
}
