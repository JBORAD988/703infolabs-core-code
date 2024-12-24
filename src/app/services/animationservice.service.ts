// scroll-animation.service.ts
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver;

  constructor(private ngZone: NgZone) {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              element.classList.add('active');

              // Handle skill bars
              if (element.classList.contains('skill-level')) {
                const width = element.getAttribute('data-level');
                (element as HTMLElement).style.setProperty('--target-width', `${width}%`);
              }
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
  }

  observeElement(element: Element) {
    this.observer.observe(element);
  }

  observeElements(elements: NodeListOf<Element>) {
    elements.forEach(element => this.observer.observe(element));
  }
}
