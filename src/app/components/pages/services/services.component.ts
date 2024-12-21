import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="services-container">
      <h1 class="title">Our Services</h1>
      <p class="subtitle">Building exceptional digital solutions for your needs</p>

      <div class="services-grid">
        <div class="service-card" *ngFor="let service of services">
          <div class="service-icon">{{service.icon}}</div>
          <h3 class="service-title">{{service.title}}</h3>
          <p class="service-description">{{service.description}}</p>
          <div class="service-features">
            <ul>
              <li *ngFor="let feature of service.features">{{feature}}</li>
            </ul>
          </div>
          <div class="technologies">
            <span *ngFor="let tech of service.technologies">{{tech}}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .services-container {
      min-height: 100vh;
      padding: 6rem 9%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 768px) {
        padding: 4rem 5%;
      }
    }

    .title {
      @include gradient-text;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .subtitle {
      color: $text-light;
      font-size: 1.2rem;
      margin-bottom: 3rem;
      text-align: center;
      opacity: 0.9;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
    }

    .service-card {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;
      color: $text-light;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px 0 $glass-shadow;
      }
    }

    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      @include gradient-text;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: $accent-blue;
    }

    .service-description {
      line-height: 1.6;
      opacity: 0.9;
    }

    .service-features {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
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

    .technologies {
      margin-top: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      span {
        background: rgba(0, 150, 255, 0.15);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        border: 1px solid rgba(0, 150, 255, 0.2);
      }
    }

    @media (max-width: 480px) {
      .services-container {
        padding: 3rem 3%;
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .service-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.',
      features: [
        'Responsive and mobile-first design',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Performance optimization'
      ],
      technologies: ['Angular', 'React', 'Node.js', 'TypeScript']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile solutions.',
      features: [
        'iOS and Android development',
        'Cross-platform applications',
        'Real-time features',
        'Offline capabilities'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: '⚡',
      title: 'Backend Development',
      description: 'Scalable and secure backend solutions.',
      features: [
        'RESTful API development',
        'Database design',
        'Cloud deployment',
        'Performance optimization'
      ],
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: '🛠️',
      title: 'DevOps Services',
      description: 'Streamline your development and deployment process.',
      features: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Cloud infrastructure',
        'Monitoring and logging'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins']
    },
    {
      icon: '🔒',
      title: 'Security Solutions',
      description: 'Protect your applications and data.',
      features: [
        'Security audits',
        'Authentication systems',
        'Data encryption',
        'Vulnerability testing'
      ],
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Firebase Auth']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights.',
      features: [
        'Data visualization',
        'Real-time analytics',
        'Custom dashboards',
        'Performance metrics'
      ],
      technologies: ['D3.js', 'Python', 'Tableau', 'Power BI']
    }
  ];
}
