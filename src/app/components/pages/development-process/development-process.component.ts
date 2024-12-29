import { Component } from '@angular/core';

@Component({
  selector: 'app-development-process',
  template: `
    <section class="process-container">
      <h1 class="title">We Simplify Software Development Process</h1>

      <div class="process-flow">
        <div class="process-step" *ngFor="let step of developmentSteps; let i = index">
          <div class="step-icon">
            <i [class]="step.icon"></i>
          </div>

          <div class="step-connector" *ngIf="i < developmentSteps.length - 1">
            <div class="dots"></div>
          </div>

          <div class="step-content">
            <h3>{{step.title}}</h3>
            <p>{{step.description}}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .process-container {
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
      margin-bottom: 4rem;
     padding-bottom: 2%;
    }

    .process-flow {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .process-step {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      min-width: 250px;
    }

    .step-icon {
      @include glass-effect;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      font-size: 2rem;
      color: $accent-blue;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 150, 255, 0.3);
      }

      i {
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: scale(1.1);
      }
    }

    .step-connector {
      position: absolute;
      top: 40px;
      right: -50%;
      width: 100%;
      height: 2px;
      z-index: -1;

      .dots {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, $accent-blue 50%, transparent 50%);
        background-size: 15px 1px;
        background-repeat: repeat-x;
        opacity: 0.3;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }


    .step-content {
    @include glass-effect;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    min-height: 200px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, $gradient-start, $gradient-end);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 150, 255, 0.3);

      &::before {
        opacity: 1;
      }

      h3 {
        background: linear-gradient(45deg, $gradient-start, $gradient-end);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    h3 {
      color: $accent-blue;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
      position: relative;
      padding-bottom: 1rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 2px;
        background: $accent-blue;
        opacity: 0.3;
      }
    }

    p {
      color: $text-light;
      opacity: 0.9;
      line-height: 1.6;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      padding: 0.5rem 0;
    }
  }


  `]
})
export class DevelopmentProcessComponent {
  developmentSteps = [
    {
      title: 'Discover',
      icon: 'fas fa-search',
      description: 'We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.'
    },
    {
      title: 'Design',
      icon: 'fas fa-pencil-ruler',
      description: 'Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.'
    },
    {
      title: 'Build',
      icon: 'fas fa-code',
      description: 'Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.'
    },
    {
      title: 'Deliver',
      icon: 'fas fa-rocket',
      description: 'We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.'
    }
  ];
}
