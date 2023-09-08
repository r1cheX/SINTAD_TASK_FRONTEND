import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
	@Input()
	width: string = 'rem';
	@Input()
	height: string = 'rem';

	constructor() { }

	ngOnInit(): void {
		const container: HTMLElement = document.getElementById('wrapper-loader-modal')!;
		container.style.width = this.width;
		container.style.height = this.height;
	}
}
