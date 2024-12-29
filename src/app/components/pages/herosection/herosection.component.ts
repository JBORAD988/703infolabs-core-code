
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herosection',
  template: `
    <section class="hero-container">
      <div class="content-wrapper">
        <div class="text-content">
          <h1 class="title">
            Turning Vision Into
            <span class="highlight">Digital Reality</span>
          </h1>

          <p class="subtitle">
            We craft innovative digital solutions that help businesses thrive in the modern technological landscape. Our expertise brings your ideas to life.
          </p>

          <div class="cta-buttons">
            <button class="primary-btn glow-effect">Start Project</button>
            <button class="secondary-btn glow-effect">Our Work</button>
          </div>

          <div class="tech-stack">
            <div class="tech-icons">
              <span *ngFor="let tech of technologies" class="tech-pill glow-effect">{{tech}}</span>
            </div>
          </div>
        </div>

        <!-- <div class="stats-container">
          <div class="stat-item glow-effect" *ngFor="let stat of stats">
            <h3>{{stat.value}}</h3>
            <p>{{stat.label}}</p>
          </div>
        </div> -->
      </div>

      <!-- Background Elements -->
      <div class="bg-elements">
        <div class="blur-circle-1"></div>
        <div class="blur-circle-2"></div>
        <div class="grid-overlay"></div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .hero-container {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      padding: 1% 15% 6rem 15%;
      overflow: hidden;


      @media (max-width: 768px) {
        padding: 4rem 5%;
      }

      * {
        cursor: default;
      }
    }

    .content-wrapper {
      position: relative;
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    .text-content {
      max-width: 800px;
    }

    // Typography
    .title {
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: $text-light;

      .highlight {
        @include gradient-text;
        font-weight: 700;
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-light;
      margin-bottom: 2rem;
      max-width: 600px;
      line-height: 1.6;
      opacity: 0.9;
    }

    // Buttons
    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;

      button {
        padding: 0.875rem 2rem;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
      }
    }

    .primary-btn {
      @include glass-effect;
      color: $text-light;
      border: none;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                   0 0 20px rgba(0, 150, 255, 0.4);
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: 0.5s;
      }

      &:hover::before {
        left: 100%;
      }
    }

    .secondary-btn {
      background: transparent;
      border: 1px solid $glass-border;
      color: $text-light;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
        border-color: $accent-blue;
        box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
      }
    }

    // Tech Stack
    .tech-stack {
      .tech-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .tech-pill {
        @include glass-effect;
        padding: 0.5rem 1rem;
        border-radius: 1.5rem;
        font-size: 0.875rem;
        color: $text-light;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                     0 0 15px rgba(0, 150, 255, 0.4);
          border-color: $accent-blue;
        }
      }
    }

    // Stats Section
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .stat-item {
      @include glass-effect;
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                   0 0 20px rgba(0, 150, 255, 0.3);

        h3 {
          transform: scale(1.05);
        }
      }

      h3 {
        @include gradient-text;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease;
      }

      p {
        color: $text-light;
        font-size: 1rem;
        opacity: 0.9;
      }
    }


    // Background Elements
    .bg-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .blur-circle-1 {
      position: absolute;
      top: -10%;
      right: -5%;
      width: 40vw;
      height: 40vw;
      background: radial-gradient(circle, $accent-blue 0%, transparent 70%);
      opacity: 0.15;
      filter: blur(60px);
      transition: all 0.5s ease;
    }

    .blur-circle-2 {
      position: absolute;
      bottom: -20%;
      left: -10%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, $gradient-start 0%, transparent 70%);
      opacity: 0.15;
      filter: blur(80px);
      transition: all 0.5s ease;
    }

    .grid-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.2;
    }

    // Glow Effect
    .glow-effect {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        border-radius: inherit;
        transition: all 0.3s ease;
        z-index: -1;
      }

      &:hover::after {
        opacity: 1;
        box-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
      }
    }

    // Responsive Styles
    @media (max-width: 480px) {
      .hero-container {
        padding: 3rem 3%;
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .cta-buttons {
        flex-direction: column;

        button {
          width: 100%;
        }
      }

      .tech-stack .tech-pill {
        font-size: 0.75rem;
      }

      .stat-item h3 {
        font-size: 2rem;
      }
    }
  `]
})
export class HerosectionComponent implements OnInit {
  technologies = [
    'Angular',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Cloud Native'
  ];

  stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' }
  ];

  ngOnInit() {
    // Initialize any required functionality
  }
}
