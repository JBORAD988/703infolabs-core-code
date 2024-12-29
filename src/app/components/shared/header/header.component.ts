import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav class="nav_main">
      <div class="company_name">codebouncers</div>

      <div class="nav_items">
        <div
          *ngFor="let item of navItems"
          class="item"
          (click)="handleNavigation(item.path)"
        >
          {{item.name}}
        </div>
      </div>
    </nav>
  `,
  styles: [`

@import 'variables';

    .nav_main {
      @include glass-effect;
      position: fixed;
      bottom: 2%;
      left: 9%;
      right: 9%;
      border-radius: 3rem;
      z-index: 9999;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(12px);
      color: rgb(226, 226, 226);
     background: rgba(255, 255, 255, 0.06) !important;
    }

    .company_name {
      font-size: 1.5rem;
      font-weight: 600;
      background: linear-gradient(45deg, #4FD1C5, #63B3ED);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav_items {
      display: flex;
      gap: 2.5rem;
      align-items: center;
    }

    .item {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 0;
      font-weight: 500;
      font-size: 1rem;
    }

    .item:hover {
      color: rgba(0, 150, 255, 0.8);

      // color: #4FD1C5;
    }

    .item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(0, 150, 255, 0.8);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .item:hover::after {
      transform: scaleX(1);
    }

    @media (max-width: 768px) {
      .nav_main {
        padding: 0.75rem 1rem;
      }

      .company_name {
        font-size: 1.25rem;
      }

      .nav_items {
        gap: 1rem;
      }

      .item {
        font-size: 0.875rem;
        padding: 0.25rem 0;
      }

      .item::after {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .nav_main {
        padding: 0.5rem 0.75rem;
      }

      .company_name {
        font-size: 1rem;
      }

      .nav_items {
        gap: 0.75rem;
      }

      .item {
        font-size: 0.75rem;
      }
    }
  `]
})
export class HeaderComponent {
  constructor(private router:Router) { }
  navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/all-projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  handleNavigation(path: string): void {
    this.router.navigate([path]);

  }
}
