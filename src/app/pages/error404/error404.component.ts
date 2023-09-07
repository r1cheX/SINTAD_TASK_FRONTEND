import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
})
export class Error404Component implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void { }

  gologin() {
    this.router.navigate(['/'])
  }

}
