import { Component } from '@angular/core';

@Component({
  selector: 'app-code-globe',
  template: `
    <div class="code-globe-container">
      <div class="code-globe"></div>
    </div>
  `,
  styles: [`
    .code-globe-container {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .code-globe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, #0077c2, #001e3c);
      border-radius: 50%;
      animation: rotate 10s linear infinite;
      overflow: hidden;
    }

    .code-globe::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
      background-size: 50px 50px;
      transform: rotate(45deg);
      animation: rotate-code 5s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes rotate-code {
      0% { transform: rotate(45deg); }
      100% { transform: rotate(405deg); }
    }
  `]
})
export class CodeGlobComponent {

}
