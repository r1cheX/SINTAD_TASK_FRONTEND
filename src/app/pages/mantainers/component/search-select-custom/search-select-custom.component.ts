import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-select-custom',
    templateUrl: './search-select-custom.component.html',
    styleUrls: ['./search-select-custom.component.scss']
})
export class SearchSelectCustomComponent implements OnInit {
    search: string = "";

    @Input()
    enableBanner: boolean = false;

    @Output()
    textSearch = new EventEmitter<string>()

    constructor() { }

    ngOnInit(): void {
    }


    seeker(e: string): void {
        this.textSearch.emit(e)
    }
}
