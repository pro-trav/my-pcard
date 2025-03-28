import { Component, OnInit } from '@angular/core';
import { InternalRoute } from '@uiowa/uiowa-header';
import { childRoutes } from './management.module';

@Component({
  selector: 'app-management-home',
  template: `
    <div class="container h-100 d-flex flex-column pt-2">
      <ul class="nav nav-tabs mb-2">
        <li *ngFor="let navItem of navItems" class="nav-item">
          <a
            class="nav-link"
            [routerLink]="navItem.route"
            routerLinkActive="active"
          >
            {{ navItem.text }}
          </a>
        </li>
      </ul>
      <div class="d-flex flex-column flex-fill overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
  standalone: false,
})
export class HomeComponent implements OnInit {
  navItems: InternalRoute[] = [];

  ngOnInit(): void {
    this.navItems = childRoutes
      .filter((x) => x.data)
      .map((x) => new InternalRoute(x.data!['title'], x.path));
  }
}
