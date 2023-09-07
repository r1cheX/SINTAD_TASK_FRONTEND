import { NgModule } from '@angular/core';
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
        LoaderComponent
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
