import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MailisearchService {

	constructor(private http: HttpClient) { }


	getMailiSearch(query: string): Observable<any> {
		return this.http.get(`${environment.baseUrl_api}/meilisearch/search`,
			{
				params: { query }
			});

	}
}
