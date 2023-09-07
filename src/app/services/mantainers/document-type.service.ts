import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentType } from 'src/app/model/documentType.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentTypeService {

    constructor(private http: HttpClient) { }

    getDocumentTypes(): Observable<any> {
        return this.http.get(`${environment.baseUrl_api}/tipoDocumento`);
    }

    saveDocumentType(data: DocumentType): Observable<any> {
        return this.http.post(`${environment.baseUrl_api}/tipoDocumento`, data);
    }

    updateDocumentType(id: number, data: DocumentType): Observable<any> {
        return this.http.put(`${environment.baseUrl_api}/tipoDocumento/` + id, data);
    }

    deleteDocumentType(id: number): Observable<any> {
        return this.http.delete(`${environment.baseUrl_api}/tipoDocumento/` + id);
    }


}
