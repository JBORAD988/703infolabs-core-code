import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about-container">
      <h1 class="title">About Us</h1>
      <p class="subtitle">Crafting Digital Excellence</p>

      <div class="content-wrapper">
        <!-- Company Overview -->
        <div class="about-card main-card">
          <h2>Who We Are</h2>
          <p>We are a passionate team of developers, designers, and digital innovators dedicated to transforming ideas into powerful digital solutions. With expertise in cutting-edge technologies and a commitment to excellence, we help businesses thrive in the digital age.</p>
        </div>

        <!-- Stats Section -->
        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of stats">
            <h3>{{stat.value}}</h3>
            <p>{{stat.label}}</p>
          </div>
        </div>

        <!-- Core Values -->
        <div class="values-grid">
          <div class="value-card" *ngFor="let value of coreValues">
            <div class="value-icon">{{value.icon}}</div>
            <h3>{{value.title}}</h3>
            <p>{{value.description}}</p>
          </div>
        </div>

        <!-- Team Section -->
        <div class="team-section">
          <h2>Our Expertise</h2>
          <div class="expertise-grid">
            <div class="expertise-card" *ngFor="let skill of expertise">
              <div class="skill-name">{{skill.name}}</div>
              <div class="skill-level" [style.width]="skill.level + '%'"></div>
            </div>
          </div>
        </div>
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
          font-size: 2.5rem;
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
export class AboutComponent {
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
