
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects-container">
      <div class="section-header">
        <h1 class="title">Featured Projects</h1>
        <p class="subtitle">Innovative Solutions We've Crafted</p>
      </div>

      <div class="projects-grid">
        <div class="project-card"
             *ngFor="let project of projects"
             (mouseenter)="project.isHovered = true"
             (mouseleave)="project.isHovered = false"
             [class.hovered]="project.isHovered">
          <div class="card-content">
            <div class="project-category">{{project.category}}</div>
            <h3 class="project-title">{{project.title}}</h3>
            <p class="project-description">{{project.description}}</p>

            <div class="tech-stack">
              <span *ngFor="let tech of project.technologies">{{tech}}</span>
            </div>

            <div class="project-preview">
            <div class="stats">
              <div class="stat">
                <span class="value">{{project.stats.completion}}</span>
                <span class="label">Completion</span>
              </div>
              <div class="stat">
                <span class="value">{{project.stats.satisfaction}}</span>
                <span class="label">Client Satisfaction</span>
              </div>
            </div>
          </div>

            <div class="project-links">
              <a href="#" class="project-link demo">Live Demo</a>
              <!-- <a href="#" class="project-link code">View Code</a> -->
            </div>
          </div>


        </div>
      </div>

      <div class="view-all">
        <button class="view-all-btn" [routerLink]="['all-projects']">View All Projects</button>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .projects-container {
      min-height: 100vh;
      padding: 6rem 9%;
      position: relative;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 4rem 5%;
      }
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .title {
      @include gradient-text;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      color: $text-light;
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .project-card {
      @include glass-effect;
      border-radius: 1.5rem;
      overflow: hidden;
      position: relative;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      min-height: 400px;

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

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 150, 255, 0.3);

        &::before {
          left: 100%;
        }

        .project-links {
          transform: translateY(0);
          opacity: 1;
        }

        .project-preview {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .card-content {
      padding: 2rem;
      position: relative;
      z-index: 2;
    }

    .project-category {
      font-size: 0.9rem;
      color: $accent-blue;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .project-title {
      font-size: 1.8rem;
      color: $text-light;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .project-description {
      color: $text-light;
      opacity: 0.9;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;

      span {
        background: rgba(0, 150, 255, 0.15);
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        color: $text-light;
        border: 1px solid rgba(0, 150, 255, 0.2);
        transition: all 0.3s ease;

        &:hover {
          background: rgba(0, 150, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 150, 255, 0.2);
        }
      }
    }

    .project-links {
      display: flex;
      gap: 1rem;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s ease;
      justify-content: center;


    }

    .project-link {
      padding: 0.75rem 1.5rem;
      border-radius: 2rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &.demo {
        background: $accent-blue;
        color: white;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 150, 255, 0.3);
        }
      }

      &.code {
        border: 1px solid $accent-blue;
        color: $text-light;

        &:hover {
          background: rgba(0, 150, 255, 0.1);
          transform: translateY(-2px);
        }
      }
    }

    .project-preview {
      background: transparent;
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }

    .stats {
      display: flex;
      justify-content: space-around;
      color: $text-light;
      text-align: center;

      .stat {
        .value {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          @include gradient-text;
        }

        .label {
          font-size: 0.875rem;
          opacity: 0.8;
        }
      }
    }

    .view-all {
      text-align: center;
      margin-top: 4rem;

      .view-all-btn {
        @include glass-effect;
        color: $text-light;
        padding: 1rem 3rem;
        border: none;
        border-radius: 2rem;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;

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

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 150, 255, 0.3);

          &::before {
            left: 100%;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-card {
        min-height: 350px;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      category: 'Web Application',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and advanced analytics.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Redis'],
      stats: {
        completion: '100%',
        satisfaction: '98%'
      },
      isHovered: false
    },
    {
      category: 'Mobile App',
      title: 'HealthTech Solution',
      description: 'Telemedicine platform with real-time consultations and health monitoring capabilities.',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      stats: {
        completion: '100%',
        satisfaction: '95%'
      },
      isHovered: false
    },
    {
      category: 'Enterprise Solution',
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform with AI-powered insights and predictions.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
      stats: {
        completion: '100%',
        satisfaction: '97%'
      },
      isHovered: false
    }
  ];

  ngOnInit() {
  }
}
