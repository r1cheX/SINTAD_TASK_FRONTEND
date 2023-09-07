import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthGuard } from './services/interceptors/auth.guard';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'main',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./pages/pages.module').then((m) => m.PagesModule),
            },
            {
                path: 'mantainers',
                loadChildren: () =>
                    import('./pages/mantainers/mantainers.module').then(
                        (m) => m.MantainersModule
                    ),
            },
        ],
    },
    {
		path: '**',
		component: Error404Component
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
