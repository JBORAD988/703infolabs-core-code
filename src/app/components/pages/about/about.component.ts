import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/animationservice.service';

@Component({
  selector: 'app-about',
  template: `
     <section class="about-container">
      <h1 class="title animate slide-down">About Us</h1>
      <p class="subtitle animate slide-down">Crafting Digital Excellence</p>

      <div class="content-wrapper">
        <div class="about-card main-card animate fade-in">
          <h2>Who We Are</h2>
          <p>We are a passionate team of developers, designers, and digital innovators dedicated to transforming ideas into powerful digital solutions. With expertise in cutting-edge technologies and a commitment to excellence, we help businesses thrive in the digital age.</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card animate slide-up"
               *ngFor="let stat of stats; let i = index"
               [style.animation-delay]="i * 0.1 + 's'">
            <h3>{{stat.value}}</h3>
            <p>{{stat.label}}</p>
          </div>
        </div>

        <!-- Core Values -->
        <div class="values-grid">
          <div class="value-card animate slide-in"
               *ngFor="let value of coreValues; let i = index"
               [style.animation-delay]="i * 0.15 + 's'">
            <div class="value-icon">{{value.icon}}</div>
            <h3>{{value.title}}</h3>
            <p>{{value.description}}</p>
          </div>
        </div>

        <!-- Team Section -->
        <!-- <div class="team-section animate fade-in">
          <h2>Our Expertise</h2>
          <div class="expertise-grid">
            <div class="expertise-card animate slide-right"
                 *ngFor="let skill of expertise; let i = index"
                 [style.animation-delay]="i * 0.1 + 's'">
              <div class="skill-name">{{skill.name}}</div>
              <div class="skill-level" [attr.data-level]="skill.level"></div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  `,
  styles: [`
        @import 'variables';


    .about-container {
      min-height: 100vh;
      padding: 6rem 9%;

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

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .main-card {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;
      color: $text-light;

      h2 {
        @include gradient-text;
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      p {
        line-height: 1.7;
        font-size: 1.1rem;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;

      .stat-card {
        @include glass-effect;
        padding: 1.5rem;
        border-radius: 1rem;
        text-align: center;
        color: $text-light;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        h3 {
          @include gradient-text;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1.1rem;
          opacity: 0.9;
        }
      }
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .value-card {
        @include glass-effect;
        padding: 2rem;
        border-radius: 1rem;
        color: $text-light;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          @include gradient-text;
        }

        h3 {
          color: $accent-blue;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        p {
          opacity: 0.9;
          line-height: 1.6;
        }
      }
    }

    .team-section {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;
      color: $text-light;

      h2 {
        @include gradient-text;
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
    }

    .expertise-grid {
      display: grid;
      gap: 1.5rem;

      .expertise-card {
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 0.5rem;
        position: relative;

        .skill-name {
          margin-bottom: 0.5rem;
        }

        .skill-level {
          height: 4px;
          background: linear-gradient(to right, $gradient-start, $gradient-end);
          border-radius: 2px;
          transition: width 1s ease-in-out;
        }
      }
    }

    // Glow Effects
.main-card {
  &:hover {
    box-shadow: 0 8px 32px rgba(0, 150, 255, 0.3),
                0 0 20px rgba(0, 150, 255, 0.2);
  }
}

.stat-card {
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 150, 255, 0.3),
                0 0 20px rgba(0, 150, 255, 0.2);

    h3 {
      text-shadow: 0 0 15px rgba(0, 150, 255, 0.5);
    }

    &::after {
      opacity: 1;
    }
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
}

.value-card {
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 150, 255, 0.3),
                0 0 20px rgba(0, 150, 255, 0.2);

    .value-icon {
      transform: scale(1.1);
      text-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
    }

    h3 {
      color: rgba(0, 150, 255, 0.9);
      text-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
    }

    &::after {
      opacity: 1;
    }
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

  .value-icon {
    transition: all 0.3s ease;
  }
}

.expertise-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 150, 255, 0.2),
                0 0 15px rgba(0, 150, 255, 0.1);
    transform: translateX(5px);

    .skill-name {
      color: rgba(0, 150, 255, 0.9);
    }

    .skill-level {
      box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
    }
  }
}

.skill-level {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::after {
    transform: translateX(100%);
  }
}

// Title and Subtitle Glow
.title, .subtitle {
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 20px rgba(0, 150, 255, 0.4);
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

    // Skill Level Animation
    .skill-level {
      width: 0 !important;
      transition: width 1s ease-in-out;

      &.active {
        width: var(--width) !important;
      }
    }

    // media queries

    @media (max-width: 480px) {
      .about-container {
        padding: 3rem 3%;
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }

  `]
})
export class AboutComponent implements OnInit, AfterViewInit  {


  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initializeAnimations();
    }

    private initializeAnimations() {
      const animatedElements = this.elementRef.nativeElement.querySelectorAll('.animate');
      this.scrollAnimationService.observeElements(animatedElements);

      const skillBars = this.elementRef.nativeElement.querySelectorAll('.skill-level');
      this.scrollAnimationService.observeElements(skillBars);
    }

  stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' }
  ];

  coreValues = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working closely with clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'Committed to delivering high-quality code and exceptional user experiences.'
    },
    {
      icon: '🔄',
      title: 'Agility',
      description: 'Adapting quickly to changes and maintaining flexibility in our approach.'
    }
  ];

  expertise = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Mobile Development', level: 85 },
    { name: 'Cloud Services', level: 88 },
    { name: 'DevOps', level: 82 },
    { name: 'UI/UX Design', level: 87 }
  ];
}
