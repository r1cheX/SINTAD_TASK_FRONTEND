import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/model/entity.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EntityService {

    constructor(private http: HttpClient) { }

    getEntities(): Observable<any> {
        return this.http.get(`${environment.baseUrl_api}/entidad`);
    }

    saveEntity(data: any): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/entidad`, data);
    }

    updateEntity(id: number, data: any): Observable<any> {
        return this.http.put(`${environment.baseUrl_api}/entidad/` + id, data);
    }

    deleteEntity(id: number): Observable<any> {
        return this.http.delete(`${environment.baseUrl_api}/entidad/` + id);
    }
}
