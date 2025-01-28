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
          <i *ngIf="!tech.url" class="fa-brands" [ngClass]="tech.icon"  [style.color]="tech.color || 'white'"></i>
          <img *ngIf="tech.url" [src]="tech.icon" [alt]="tech.name">
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
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(150px, 0.2fr));
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
        .tech-icon i {
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

      i{
        font-size: 4.5rem;
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
    // 'CMS',
    // 'Infra and DevOps'
  ];

  selectedCategory: string = 'Front End';
  showTechnologies: boolean = true;


  techMap: { [key: string]: { name: string; icon: string; url: boolean; color: string }[] } = {
    'Front End': [
      { name: 'Angular', icon: 'fa-angular', url: false, color: '#DD0031' },
      { name: 'React Js', icon: 'fa-react', url: false, color: '#61DAFB' },
      { name: 'Vue', icon: 'fa-vuejs', url: false, color: '#42B883' },
    { name: 'HTML5', icon: 'fa-html5', url: false, color: '#E34F26' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000', url: true ,color: ''  }
    ],
    'Mobile': [
      { name: 'React Native', icon: 'fa-react', url: false, color: '#61DAFB' },
      { name: 'Flutter', icon: 'fa-flutter', url: false, color: '#74C0FC' },
      { name: 'android', icon: 'fa-android', url: false, color: '#63E6BE' },
    ],
    'Backend': [
      { name: 'Node.js', icon: 'assets/icons8-nodejs.svg', url: true, color: '' },
      { name: 'Python', icon: 'assets/icons8-python.svg', url: true, color: '' },
      { name: 'Java', icon: 'assets/icons8-java.svg', url: true, color: '' },
      {name:'Rust', icon:'assets/rust.svg', url: true, color: ''},
    ],
    'Database': [
      { name: 'MongoDB', icon: 'assets/icons8-mongodb.svg', url: true, color: '' },
      {name:'Firebase', icon:'assets/google_firebase.webp', url: true, color: ''},
      { name: 'MySQL', icon: 'assets/icons8-mysql.svg', url: true, color: '' },
      { name: 'PostgreSQL', icon: 'assets/icons8-postgresql.svg', url: true, color: '' }

    ],
    'AI Technologies': [
      { name: 'TensorFlow', icon: 'assets/icons8-tensorflow.svg', url: true, color: '' },
      { name: 'OpenAI', icon: 'assets/icons8-chatgpt.svg', url: true, color: '#EE4C2C' },
      { name: 'Codex', icon: 'fa-codepen', url: false, color: '#EE4C2C' },
      { name: 'Vertex AI', icon: 'assets/Vertex_AI_Logo.png', url: true, color: '' },
      { name: 'Cloud Vision', icon: 'assets/cloud-vision.png', url: true, color: '' },
      { name: 'OpenCV', icon: 'assets/openCv.png', url: true, color: '' },
      { name: 'IBM Watson', icon: 'assets/ibm.gif', url: true, color: '' },
      { name: 'Cloud Natural Language', icon: 'assets/cnl.svg', url: true, color: '' },
      { name: 'Cognitive Services', icon: 'assets/cognative-services.png', url: true, color: '' },
      { name: 'Bot Framework', icon: 'assets/bot-framework-default.png', url: true, color: '' },
      { name: 'Mistral', icon: 'assets/mistral-ai-icon.webp', url: true, color: '' },
      { name: 'LLama', icon: 'assets/meta.png', url: true, color: '' },
      { name: 'Gemini', icon: 'assets/Google_Gemini_logo.png', url: true, color: '' },
      { name: 'Anthropic', icon: 'assets/Anthropic-Circle-Logo.webp', url: true, color: '' },
      { name: 'N8N', icon: 'assets/n8n.png', url: true, color: '' },
      { name: 'Keras', icon: 'assets/keras.png', url: true, color: '' },
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
