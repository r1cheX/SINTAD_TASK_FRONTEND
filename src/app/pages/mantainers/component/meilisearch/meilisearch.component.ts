import { Component, OnInit } from '@angular/core';
import { MailisearchService } from 'src/app/services/search/mailisearch.service';

@Component({
  selector: 'app-meilisearch',
  templateUrl: './meilisearch.component.html',
  styleUrls: ['./meilisearch.component.scss']
})
export class MeilisearchComponent implements OnInit {

  loading: boolean = false;
  data: any = [];
  
    constructor(
      private mailisearchService: MailisearchService,
    ) { }
  
    ngOnInit(): void {
      this.getSearchByQuery('xddd');
    }


    getSearchByQuery(query: string) {
      this.loading = true;
      this.mailisearchService.getMailiSearch(query).subscribe({
        next: (data: any) => {
          this.loading = false;
          this.data = data;
          console.log(data);
        },
        error: (err: any) => {
          this.loading = false;
          console.log(err);
        }
      })
    }
}