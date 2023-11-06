import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InterceptorService } from './services/interceptors/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { AppDashboardComponent } from './pages/dashboard/dashboard.component';
import { EntityComponent } from './pages/mantainers/entity/entity.component';
import { DocumentTypeComponent } from './pages/mantainers/document-type/document-type.component';
import { ContributorTypeComponent } from './pages/mantainers/contributor-type/contributor-type.component';
import { ModalAddEditContributorTypeComponent } from './pages/mantainers/contributor-type/component/modal-add-edit-contributor-type/modal-add-edit-contributor-type.component';
import { ModalAddEditDocumentTypeComponent } from './pages/mantainers/document-type/component/modal-add-edit-document-type/modal-add-edit-document-type.component';
import { ModalAddEditEntityComponent } from './pages/mantainers/entity/component/modal-add-edit-entity/modal-add-edit-entity.component';
import { ModalDeleteContributorTypeComponent } from './pages/mantainers/contributor-type/component/modal-delete-contributor-type/modal-delete-contributor-type.component';
import { ModalDeleteDocumentTypeComponent } from './pages/mantainers/document-type/component/modal-delete-document-type/modal-delete-document-type.component';
import { ModalDeleteEntityComponent } from './pages/mantainers/entity/component/modal-delete-entity/modal-delete-entity.component';
import { SearchSelectCustomComponent } from './pages/mantainers/component/search-select-custom/search-select-custom.component';
import { MeilisearchComponent } from './pages/mantainers/component/meilisearch/meilisearch.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        SidebarComponent,
        HeaderComponent,
        AppNavItemComponent,
        LoginComponent,
        RegisterComponent,
        Error404Component,
        LoaderComponent,
        AppDashboardComponent,
        EntityComponent,
        DocumentTypeComponent,
        ContributorTypeComponent,
        ModalAddEditContributorTypeComponent,
        ModalAddEditDocumentTypeComponent,
        ModalAddEditEntityComponent,
        ModalDeleteContributorTypeComponent,
        ModalDeleteDocumentTypeComponent,
        ModalDeleteEntityComponent,
        SearchSelectCustomComponent,
        MeilisearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TablerIconsModule.pick(TablerIcons),
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    exports: [TablerIconsModule],
    bootstrap: [AppComponent],
    providers: [
        CookieService,
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'en-GB'
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ]
})
export class AppModule { }
