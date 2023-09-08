import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DocumentTypeService {

    constructor(private http: HttpClient) { }

    getDocumentTypes(): Observable<any> {
        return this.http.get(`${environment.baseUrl_api}/tipoDocumento`);
    }

    saveDocumentType(data: any): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/tipoDocumento`, data);
    }

    updateDocumentType(id: number, data: any): Observable<any> {
        return this.http.put(`${environment.baseUrl_api}/tipoDocumento/` + id, data);
    }

    deleteDocumentType(id: number): Observable<any> {
        return this.http.delete(`${environment.baseUrl_api}/tipoDocumento/` + id);
    }


}
