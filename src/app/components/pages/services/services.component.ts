import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/animationservice.service';

@Component({
  selector: 'app-services',
  template: `
    <section class="services-container">
      <h1 class="title animate slide-down">Our Services</h1>
      <p class="subtitle animate slide-down">Building exceptional digital solutions for your needs</p>

      <div class="services-grid">
        <div class="service-card" *ngFor="let service of services">
          <i class="service-icon" [ngClass]="service.icon"  [style.color]="service.color || 'white'"></i>

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


    .service-card {
  @include glass-effect;
  padding: 2rem;
  border-radius: 1rem;
  color: $text-light;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 150, 255, 0.4),
                0 0 20px rgba(0, 150, 255, 0.4);

    &::before {
      // Shine effect
      left: 100%;
    }

    .service-icon {
      // transform: scale(1.1);
      text-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
    }

    .service-title {
      color: rgba(0, 150, 255, 0.9);
      text-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
    }

    .technologies span {
      border-color: $accent-blue;
      box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
    }
  }

  &::before {
    // Shine effect
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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-radius: inherit;
    transition: opacity 0.3s ease;
    background: radial-gradient(
      circle at center,
      rgba(0, 150, 255, 0.1) 0%,
      transparent 70%
    );
  }

  .service-icon{
    transition: all 0.3s ease;
  }
}


  // Animation Base Class
  .animate {
      opacity: 0;
      visibility: hidden;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .animate.active {
      opacity: 1;
      visibility: visible;
    }

    // Slide Down Animation
    .slide-down {
      transform: translateY(-50px);

      &.active {
        transform: translateY(0);
      }
    }

    // Slide Up Animation
    .slide-up {
      transform: translateY(50px);

      &.active {
        transform: translateY(0);
      }
    }

    // Slide In Animation
    .slide-in {
      transform: translateX(-50px);

      &.active {
        transform: translateX(0);
      }
    }

    // Slide Right Animation
    .slide-right {
      transform: translateX(-30px);

      &.active {
        transform: translateX(0);
      }
    }

    // Fade In Animation
    .fade-in {
      opacity: 0;

      &.active {
        opacity: 1;
      }
    }


.service-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  @include gradient-text;
  transition: all 0.3s ease;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: $accent-blue;
  transition: all 0.3s ease;
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
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(5px);
      }

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
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      background: rgba(0, 150, 255, 0.2);
      box-shadow: 0 5px 15px rgba(0, 150, 255, 0.3);
    }
  }
}

// Enhanced title and subtitle hover effects
.title, .subtitle {
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 20px rgba(0, 150, 255, 0.4);
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
export class ServicesComponent implements OnInit , AfterViewInit {

  constructor( private scrollAnimationService : ScrollAnimationService , private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
this.initializeAnimations();
  }

  private initializeAnimations() {
    const animatedElements = this.elementRef.nativeElement.querySelectorAll('.animate');
    this.scrollAnimationService.observeElements(animatedElements);
  }

  services = [
    {
      icon: 'fa-solid fa-laptop',
      color:'',
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
      icon: 'fa-solid fa-mobile',
      color:'',
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
      icon: 'fa-solid fa-server',
      color:'',
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
      icon: 'fa-solid fa-toolbox',
      color:'',
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
      icon: 'fa-solid fa-lock',
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
      icon: 'fa-solid fa-chart-simple',      color:'',
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
