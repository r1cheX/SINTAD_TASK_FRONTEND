import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
	@Input()
	width: string = '2rem';
	@Input()
	height: string = '2rem';

	constructor() { }

	ngOnInit(): void {
		const container: HTMLElement = document.getElementById('wrapper-loader-modal')!;
		container.style.width = this.width;
		container.style.height = this.height;
	}
}
