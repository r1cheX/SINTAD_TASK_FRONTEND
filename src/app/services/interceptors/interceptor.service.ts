import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenizeReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken('TOKEN_API')}`,
                contentType: 'false'
            }
        });

        return next.handle(tokenizeReq);
    }
}
