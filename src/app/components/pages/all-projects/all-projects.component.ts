
import { Component } from '@angular/core';

interface DetailedProject {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  duration: string;
  client: {
    name: string;
    industry: string;
    location: string;
  };
  stats: {
    completion: string;
    satisfaction: string;
    team: string;
  };
  highlights: string[];
  demoLink?: string;
  codeLink?: string;
  isHovered: boolean;
}

@Component({
  selector: 'app-all-projects',
  template: `
    <section class="all-projects-container">
      <div class="section-header">
        <h1 class="title">Our Portfolio</h1>
        <p class="subtitle">Explore Our Complete Work Collection</p>
      </div>

      <div class="filters">
        <button
          *ngFor="let cat of categories"
          (click)="filterProjects(cat)"
          [class.active]="activeCategory === cat"
          class="filter-btn">
          {{cat}}
        </button>
      </div>

      <div class="projects-grid">
        <div class="project-card"
             *ngFor="let project of filteredProjects"
             (mouseenter)="project.isHovered = true"
             (mouseleave)="project.isHovered = false">

          <div class="project-image">
            <img [src]="project.imageUrl" [alt]="project.title">
            <div class="image-overlay">
              <div class="project-actions">
                <a [href]="project.demoLink" target="_blank" class="action-btn demo">Live Demo</a>
              </div>
            </div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <span class="project-category">{{project.category}}</span>
              <span class="project-duration">{{project.duration}}</span>
            </div>

            <h3 class="project-title">{{project.title}}</h3>
            <p class="project-description">{{project.description}}</p>

            <div class="client-info">
              <h4>Client</h4>
              <div class="client-details">
                <p>{{project.client.name}}</p>
                <p>{{project.client.industry}} | {{project.client.location}}</p>
              </div>
            </div>

            <div class="project-highlights">
              <ul>
                <li *ngFor="let highlight of project.highlights">{{highlight}}</li>
              </ul>
            </div>

            <div class="tech-stack">
              <span *ngFor="let tech of project.technologies">{{tech}}</span>
            </div>

            <div class="project-stats">
              <div class="stat">
                <span class="value">{{project.stats.completion}}</span>
                <span class="label">Completion</span>
              </div>
              <div class="stat">
                <span class="value">{{project.stats.satisfaction}}</span>
                <span class="label">Satisfaction</span>
              </div>
              <div class="stat">
                <span class="value">{{project.stats.team}}</span>
                <span class="label">Team Size</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .all-projects-container {
      min-height: 100vh;
      padding: 6rem 9%;
      position: relative;

      @media (max-width: 768px) {
        padding: 4rem 5%;
      }
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;

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
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;

      .filter-btn {
        @include glass-effect;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 2rem;
        color: $text-light;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover, &.active {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 150, 255, 0.2);
          background: rgba(0, 150, 255, 0.2);
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 2rem;
    }

    .project-card {
      @include glass-effect;
      border-radius: 1rem;
      overflow: hidden;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 150, 255, 0.3);

        .image-overlay {
          opacity: 1;
        }
      }
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: all 0.3s ease;
      }

      .project-actions {
        display: flex;
        gap: 1rem;

        .action-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          text-decoration: none;
          transition: all 0.3s ease;

          &.demo {
            background: $accent-blue;
            color: white;
          }

          &.code {
            border: 1px solid $accent-blue;
            color: white;
          }

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 150, 255, 0.3);
          }
        }
      }
    }

    .project-content {
      padding: 2rem;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .project-category {
        color: $accent-blue;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .project-duration {
        color: $text-light;
        opacity: 0.8;
      }
    }

    .project-title {
      font-size: 1.8rem;
      color: $text-light;
      margin-bottom: 1rem;
    }

    .project-description {
      color: $text-light;
      opacity: 0.9;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .client-info {
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: rgba(0, 150, 255, 0.1);
      border-radius: 0.5rem;

      h4 {
        color: $accent-blue;
        margin-bottom: 0.5rem;
      }

      .client-details {
        color: $text-light;
        opacity: 0.9;
      }
    }

    .project-highlights {
      margin-bottom: 1.5rem;

      ul {
        list-style: none;
        padding: 0;

        li {
          color: $text-light;
          opacity: 0.9;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;

          &:before {
            content: '→';
            position: absolute;
            left: 0;
            color: $accent-blue;
          }
        }
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;

      span {
        background: rgba(0, 150, 255, 0.15);
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        color: $text-light;
        border: 1px solid rgba(0, 150, 255, 0.2);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 150, 255, 0.2);
        }
      }
    }

    .project-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      .stat {
        .value {
          @include gradient-text;
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .label {
          color: $text-light;
          font-size: 0.875rem;
          opacity: 0.8;
        }
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-image {
        height: 200px;
      }

      .project-stats {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class AllProjectsComponent {
  categories: string[] = [
    'All',
    'Web Apps',
    'Mobile Apps',
    'Enterprise',
    'E-Commerce',
    'Data Analytics'
  ];

  activeCategory: string = 'All';

  allProjects: DetailedProject[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A comprehensive e-commerce solution with real-time inventory tracking and advanced analytics.',
      imageUrl: 'assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Redis'],
      duration: '6 months',
      client: {
        name: 'TechRetail Inc.',
        industry: 'Retail',
        location: 'New York, USA'
      },
      stats: {
        completion: '100%',
        satisfaction: '98%',
        team: '6 members'
      },
      highlights: [
        'Real-time inventory management',
        'Advanced analytics dashboard',
        'Multi-vendor support',
        'Integrated payment solutions'
      ],
      demoLink: 'https://demo.example.com',
      isHovered: false
    },
    // Add more projects...
  ];

  filteredProjects: DetailedProject[] = this.allProjects;

  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects = category === 'All'
      ? this.allProjects
      : this.allProjects.filter(project => project.category === category);
  }
}
