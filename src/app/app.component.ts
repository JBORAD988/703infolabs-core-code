import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <button class="scroll-top"
         [class.visible]="showScrollTop"
         (click)="scrollToTop()">
   <i class="fas fa-arrow-up"></i>
 </button>
    `,
  styles: [`
    @import 'variables';

  .scroll-top {
  z-index: 9999;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @include glass-effect;
  color: $text-light;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 150, 255, 0.3);
  }
}
`],
})
export class AppComponent {
  title = '703infolabs';

  showScrollTop: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
