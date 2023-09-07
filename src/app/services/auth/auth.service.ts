import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cookie, User } from '../../model/auth.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AES, enc } from 'crypto-ts';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private cookies: CookieService) { }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/auth/login`, { email, password });
    }

    register(user: User): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/auth/register`, user);
    }

    setCookies(user: User) {
        this.cookies.set(
            'username',
            this.hashData(user.username),
            undefined,
            '/'
        );

        this.cookies.set(
            'email',
            this.hashData(user.email),
            undefined,
            '/'
        );
    }

    readCookie(param: Cookie) {
        let cookie = this.cookies.get(param);
        return this.decryptData(cookie);
    }

    getToken = (key: string) => localStorage.getItem(key);

    setToken(token: string) {
        localStorage.setItem(`TOKEN_API`, token);
    }

    hashData = (data: string) =>
        AES.encrypt(data, environment.secret_key).toString();

    decryptData(data: string) {
        let byte = AES.decrypt(data, environment.secret_key);
        return byte.toString(enc.Utf8);
    }

    destoryCookies() {
        localStorage.clear();

        var cookies = document.cookie.split('; ');
        for (var c = 0; c < cookies.length; c++) {
            var d = window.location.hostname.split('.');
            while (d.length > 0) {
                var cookieBase =
                    encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
                    '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
                    d.join('.') +
                    ' ;path=';
                var p = location.pathname.split('/');
                document.cookie = cookieBase + '/';
                while (p.length > 0) {
                    document.cookie = cookieBase + p.join('/');
                    p.pop();
                }
                d.shift();
            }
        }
    }



}
