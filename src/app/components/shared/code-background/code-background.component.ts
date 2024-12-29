import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  template: `
    <div class="background-wrapper">
      <div class="code-container">
        <div class="code-line" *ngFor="let line of codeLines; let i = index"
             [style.animation-delay]="i * 0.5 + 's'">
          {{line}}
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  `,
  styles: [`
    .background-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #0f172a;
      z-index: -1;
      overflow: hidden;
    }

    .code-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .code-line {
      position: absolute;
      font-family: monospace;
      color: rgba(0, 150, 255, 0.15);
      white-space: pre;
      font-size: 14px;
      animation: codeDrift 15s linear infinite;
      opacity: 0;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle at center,
        rgba(15, 23, 42, 0.7) 0%,
        rgba(15, 23, 42, 0.85) 50%,
        rgba(15, 23, 42, 0.95) 100%
      );
    }

    @keyframes codeDrift {
      0% {
        transform: translateX(-100%) translateY(-50%);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateX(100vw) translateY(50%);
        opacity: 0;
      }
    }
  `]
})
export class AnimatedBackgroundComponent {
  codeLines = [
    'const api = async () => { await fetch("/data") }',
    'function render() { requestAnimationFrame(render) }',
    'class App extends Component { render() {} }',
    'const [state, setState] = useState(null)',
    'export default function Home() {',
    'npm install @angular/core',
    'git commit -m "Initial commit"',
    'docker-compose up -d',
    'SELECT * FROM users WHERE id = 1',
    'terraform apply -auto-approve'
  ];

  constructor() {
    // Randomly position code lines
    setTimeout(() => {
      const codeElements = document.querySelectorAll('.code-line');
      codeElements.forEach((el: any) => {
        el.style.top = `${Math.random() * 100}%`;
        el.style.left = `${Math.random() * 100}%`;
      });
    }, 0);
  }
}
