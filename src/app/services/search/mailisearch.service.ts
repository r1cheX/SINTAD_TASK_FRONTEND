import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ResponseMeilisearch } from 'src/app/model/item-search.model';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MailisearchService {

	constructor(private http: HttpClient) { }


	getMailiSearchByQuery(query: string): Observable<any> {
		return this.http.get(`${environment.baseUrl_api}/meilisearch/search/${ query }`)
			.pipe(
				map<any, any>( resp => resp.hits )
			)
	}
}
