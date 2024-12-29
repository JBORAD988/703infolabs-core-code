import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  template: `
    <section class="tech-container">
      <h1 class="title">Technologies we work with</h1>

      <div class="tech-categories">
        <button *ngFor="let category of categories"
                class="category-btn"
                [class.active]="selectedCategory === category"
                (click)="selectCategory(category)">
          {{category}}
        </button>
      </div>

      <div class="tech-grid" [class.show]="showTechnologies">
        <div class="tech-card" *ngFor="let tech of getTechnologies()">
          <div class="tech-icon">
            <img [src]="tech.icon" [alt]="tech.name">
          </div>
          <h3>{{tech.name}}</h3>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .tech-container {
      padding: 6rem 9%;
      position: relative;

      @media (max-width: 768px) {
        padding: 4rem 5%;
      }
    }

    .title {
      @include gradient-text;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 10px;
    }

    .tech-categories {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;

      .category-btn {
        @include glass-effect;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 2rem;
        color: $text-light;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
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

        &:hover::before {
          left: 100%;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 150, 255, 0.3);
        }

        &.active {
          background: $accent-blue;
          color: white;
          box-shadow: 0 8px 25px rgba(0, 150, 255, 0.3);
        }
      }
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

      &.show {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .tech-card {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 150, 255, 0.4);

        .tech-icon img {
          transform: scale(1.1);
        }
      }
    }

    .tech-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    h3 {
      color: $text-light;
      font-size: 1.1rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .tech-categories {
        gap: 1rem;

        .category-btn {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }
      }
    }
  `]
})
export class TechnologiesComponent {
  categories: string[] = [
    'AI Technologies',
    'Mobile',
    'Front End',
    'Database',
    'Backend',
    'CMS',
    'Infra and DevOps'
  ];

  selectedCategory: string = 'Front End';
  showTechnologies: boolean = true;

  frontEndTech = [
    { name: 'Angular JS', icon: 'assets/angular.svg' },
    { name: 'React Js', icon: 'assets/react.svg' },
    { name: 'TypeScript', icon: 'assets/typescript.svg' },
    { name: 'Vue', icon: 'assets/vue.svg' },
    { name: 'WPF', icon: 'assets/wpf.svg' },
    { name: 'HTML5', icon: 'assets/html5.svg' }
  ];

  techMap: { [key: string]: { name: string; icon: string; }[] } = {
    'Front End': this.frontEndTech,
    'Mobile': [
      { name: 'React Native', icon: 'assets/react-native.svg' },
      { name: 'Flutter', icon: 'assets/flutter.svg' },
      { name: 'Ionic', icon: 'assets/ionic.svg' }
    ],
    'Backend': [
      { name: 'Node.js', icon: 'assets/nodejs.svg' },
      { name: 'Python', icon: 'assets/python.svg' },
      { name: 'Java', icon: 'assets/java.svg' }
    ],
    'Database': [
      { name: 'MongoDB', icon: 'assets/mongodb.svg' },
      { name: 'MySQL', icon: 'assets/mysql.svg' },
      { name: 'PostgreSQL', icon: 'assets/postgresql.svg' }
    ],
    'AI Technologies': [
      { name: 'TensorFlow', icon: 'assets/tensorflow.svg' },
      { name: 'PyTorch', icon: 'assets/pytorch.svg' },
      { name: 'Keras', icon: 'assets/keras.svg' }
    ],
  };

  selectCategory(category: string) {
    this.showTechnologies = false;
    setTimeout(() => {
      this.selectedCategory = category;
      this.showTechnologies = true;
    }, 300);
  }

  getTechnologies() {
    return this.techMap[this.selectedCategory] || [];
  }
}
