import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/dashboard/nav.service';
import { navItems } from 'src/app/model/layout.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
