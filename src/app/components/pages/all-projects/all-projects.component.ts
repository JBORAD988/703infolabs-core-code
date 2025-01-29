
import { Component, HostListener } from '@angular/core';

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
  isSliding?: boolean;
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
   <button *ngFor="let cat of categories"
           (click)="filterProjects(cat)"
           [class.active]="activeCategory === cat"
           class="filter-btn">
     {{cat}}
     <span class="category-count">{{getCategoryCount(cat)}}</span>
   </button>
 </div>

 <div class="projects-grid">
   <div class="project-card"
        *ngFor="let project of filteredProjects"
        (mouseenter)="project.isHovered = true"
        (mouseleave)="project.isHovered = false">

     <div class="project-image"
          (mouseenter)="startImageSlide(project)"
          (mouseleave)="stopImageSlide(project)">
       <img [src]="project.imageUrl"
            [alt]="project.title"
            [class.sliding]="project.isSliding">
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

 <button class="scroll-top"
         [class.visible]="showScrollTop"
         (click)="scrollToTop()">
   <i class="fas fa-arrow-up"></i>
 </button>
</section>
  `,
  styles: [`
   @import 'variables';

.all-projects-container {
  padding: 6rem 9%;
  position: relative;
  min-height: 100vh;
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
  gap: 1.5rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.filter-btn {
  @include glass-effect;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  color: $text-light;
  cursor: pointer;
  transition: all 0.3s ease;

  .category-count {
    background: rgba(0, 150, 255, 0.2);
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  &:hover, &.active {
    transform: translateY(-2px);
    background: rgba(0, 150, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 150, 255, 0.2);
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(45deg, transparent, rgba(0, 150, 255, 0.3), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 150, 255, 0.3);

    &::before {
      opacity: 1;
    }

    .image-overlay {
      opacity: 1;
      .project-actions {
        transform: translateY(0);
      }
    }
  }
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;

  img {
    width: 100%;
    height: 200%;
    object-fit: cover;
    transition: transform 10s ease-in-out;

    &.sliding {
      transform: translateY(-50%);
    }
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.4s ease;
    backdrop-filter: blur(5px);
  }

  .project-actions {
    display: flex;
    gap: 1rem;
    transform: translateY(20px);
    transition: all 0.4s ease;
  }
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &.demo {
    background: $accent-blue;
    color: white;
  }

  &.preview {
    border: 2px solid $accent-blue;
    color: white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 150, 255, 0.3);

    &::before {
      left: 100%;
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

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @include glass-effect;
  color: $text-light;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 150, 255, 0.3);
  }
}

@media (max-width: 768px) {
  .all-projects-container {
    padding: 4rem 5%;
  }

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
    'AI/ML',
    'Web Apps',
    'Content Management',
    'Mobile Apps',
    'Enterprise',
    'E-Commerce',
    'Data Analytics',
    'IoT & Data Visualization'

  ];

  activeCategory: string = 'All';
  showScrollTop: boolean = false;

  allProjects: DetailedProject[] = [
    {
      id: 1,
      title: 'ShopEase E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A comprehensive e-commerce solution offering a seamless shopping experience with secure authentication, real-time inventory tracking, and multiple product categories including electronics, fashion, and home appliances.',
      imageUrl: 'assets/Projects/ecommerce.png',
      technologies: [
        'Firebase',
        'TypeScript',
        'Bootstrap',
        'Swiper.js',
        'Angular',
        'Node.js',
        'MongoDB',
        'Redis'
      ],
      duration: '1 months',
      client: {
        name: 'Portfolio Project ',
        industry: 'Retail',
        location: 'India'
      },
      stats: {
        completion: '100%',
        satisfaction: '98%',
        team: '2 members'
      },
      highlights: [
        'Secure user authentication with Firebase',
        'Token-based authorization for protected routes',
        'Advanced shopping cart and wishlist management',
        'Multi-category product management',
        'Responsive design with Bootstrap integration',
        'Real-time inventory tracking',
        'Interactive product carousels using Swiper.js',
        'Custom 404 error handling',
        'Integrated payment solutions',
        'User account management',
        'Contact and support system'
      ],
      demoLink: 'assets/Projects/ecommerce.png',
      codeLink: 'https://github.com/JBORAD988/E-Commerce-webApp',
      isHovered: false
    },
    {
      "id": 2,
      "title": "Speech to Text Converter",
      "category": "Web Apps",
      "description": "A real-time speech-to-text converter that allows users to transcribe spoken words instantly with high accuracy. It offers recording controls, live preview, customizable settings, and export options for seamless transcription.",
      "imageUrl": "assets/Projects/voiceRecording.png",
      "technologies": [
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Node.js"
      ],
      "duration": "3 Days",
      "client": {
        "name": "Portfolio Project",
        "industry": "Automation",
        "location": "Global"
      },
      "stats": {
        "completion": "100%",
        "satisfaction": "100%",
        "team": "1 members"
      },
      "highlights": [
        "Real-time speech-to-text conversion",
        "High accuracy with advanced speech recognition",
        "Start, pause, and reset recording controls",
        "Live preview of transcriptions",
        "Multiple microphone support for better quality",
        "Customizable settings for improved accuracy",
        "Save and export transcriptions in various formats",
        "Secure processing without storing user data",
        "User-friendly and responsive design"
      ],
      "demoLink": "https://example.com/demo-speech-to-text",
      "codeLink": "https://github.com/JBORAD988/VoiceRecognition_in_Angular/tree/master",
      "isHovered": false
    },
    {
      "id": 3,
      "title": "IoT Device Live Data Visualization Platform",
      "category": "IoT & Data Visualization",
      "description": "A real-time IoT data visualization platform with a dynamic drag-and-drop interface, allowing users to create, customize, and share templates for monitoring live sensor data. Supports conditional programming, real-time updates, and advanced UI customization.",
      "imageUrl": "https://img.youtube.com/vi/fzvr-SXKNu4/0.jpg",

      "technologies": [
        "Angular",
        "TypeScript",
        "Syncfusion",
        "SCSS",
        "SignalR",
        ".Net"
      ],
      "duration": "8 months",
      "client": {
        "name": "Portfolio Project",
        "industry": "IoT & Automation",
        "location": "Global"
      },
      "stats": {
        "completion": "100%",
        "satisfaction": "97%",
        "team": "3 members"
      },
      "highlights": [
        "Real-time IoT data visualization with SignalR integration",
        "Customizable drag-and-drop interface for data tracking",
        "Conditional programming with dynamic color changes and alerts",
        "Model-based workflows for advanced data manipulation",
        "Template system with editing, sharing, and management features",
        "Background customization with images and gradients",
        "Admin tools for template creation and advanced UI design",
        "Supports live data binding for IoT device monitoring",
        "Built with Angular, Syncfusion, and TypeScript for a modern UI"
      ],
      "demoLink": "https://youtu.be/fzvr-SXKNu4",
      "codeLink": "https://github.com/example/iot-visualization",
      "isHovered": false
    },
    {
      "id": 4,
      "title": "Modern Blog App",
      "category": "Content Management",
      "description": "A fully responsive blog application built with Angular and Firebase, offering a seamless experience for creating, managing, and publishing blog posts. Features include real-time content updates, rich text editing, user authentication, and comment management.",
      "imageUrl": "assets/Projects/blog-app.png",
      "technologies": [
        "Angular",
        "Firebase",
        "TypeScript",
        "Bootstrap",
        "Quill Editor",
        "SCSS"
      ],
      "duration": "1 month",
      "client": {
        "name": "Portfolio Project",
        "industry": "Content & Publishing",
        "location": "Global"
      },
      "stats": {
        "completion": "100%",
        "satisfaction": "95%",
        "team": "1 member"
      },
      "highlights": [
        "User authentication with Firebase Authentication",
        "Rich text editor for creating and formatting blog posts",
        "Real-time data updates using Firebase Firestore",
        "SEO-friendly blog post structure",
        "Responsive UI for desktop and mobile",
        "Comment system with moderation controls",
        "Image upload support for blog content",
        "Admin dashboard for post management",
        "Secure and scalable backend with Firebase"
      ],
      "demoLink": "https://example.com/demo-blog-app",
      "codeLink": "https://github.com/example/blog-app",
      "isHovered": false
    }





  ];

  filteredProjects: DetailedProject[] = this.allProjects;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  filterProjects(category: string) {
    this.activeCategory = category;
    this.filteredProjects = category === 'All'
      ? this.allProjects
      : this.allProjects.filter(project => project.category === category);
  }

  getCategoryCount(category: string): number {
    return category === 'All'
      ? this.allProjects.length
      : this.allProjects.filter(p => p.category === category).length;
  }

  startImageSlide(project: DetailedProject) {
    project.isSliding = true;
  }

  stopImageSlide(project: DetailedProject) {
    project.isSliding = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }

