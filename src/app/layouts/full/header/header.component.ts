import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  username: String
  email: String

  showFiller = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
  ) {
    this.username = authService.readCookie('username')
    this.email = authService.readCookie('email')
  }


  ngOnInit(): void { }

  logout() {
    this.authService.destoryCookies()
    this.router.navigate(['/'])
  }
}
