import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthGuard } from './services/interceptors/auth.guard';
import { Error404Component } from './pages/error404/error404.component';
import { AppDashboardComponent } from './pages/dashboard/dashboard.component';
import { ContributorTypeComponent } from './pages/mantainers/contributor-type/contributor-type.component';
import { DocumentTypeComponent } from './pages/mantainers/document-type/document-type.component';
import { EntityComponent } from './pages/mantainers/entity/entity.component';
import { MeilisearchComponent } from './pages/mantainers/component/meilisearch/meilisearch.component';

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
                canActivate: [AuthGuard],
                component: AppDashboardComponent
             
            },
            {
                path: 'entity',
                canActivate: [AuthGuard],
                component: EntityComponent,
            },
            {
                path: 'document-type',
                canActivate: [AuthGuard],
                component: DocumentTypeComponent,
            },
            {
                path: 'contributor-type',
                canActivate: [AuthGuard],
                component: ContributorTypeComponent,
            },
            {
                path: 'meilisearch',
                canActivate: [AuthGuard],
                component: MeilisearchComponent,
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
