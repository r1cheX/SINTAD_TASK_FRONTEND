import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContributorType } from 'src/app/model/contributorType.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContributorTypeService {

    constructor(private http: HttpClient) { }


    getContributorTypes(): Observable<any> {
        return this.http.get(`${environment.baseUrl_api}/tipoContribuyente`);
    }

    saveContributorType(data: ContributorType): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/tipoContribuyente`, data);
    }

    updateContributorType(id: number, data: ContributorType): Observable<any> {
        return this.http.put(`${environment.baseUrl_api}/tipoContribuyente/` + id, data);
    }

    deleteContributorType(id: number): Observable<any> {
        return this.http.delete(`${environment.baseUrl_api}/tipoContribuyente/` + id);
    }


}
