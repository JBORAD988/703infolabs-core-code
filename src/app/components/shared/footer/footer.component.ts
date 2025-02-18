
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer-container">
      <div class="code-animation">
        <pre *ngFor="let block of codeBlocks" [style.animation-delay]="block.delay">
          <code>{{block.code}}</code>
        </pre>
      </div>

      <div class="footer-content">
        <div class="footer-top">
          <div class="company-info">
            <h2 class="company-name">CodeBouncers</h2>
            <p class="company-desc">Transforming ideas into digital reality</p>
            <div class="social-links">
              <a href="#" class="social-link" *ngFor="let social of socials">
                <i [class]="social.icon"></i>
                <span class="tooltip">{{social.name}}</span>
              </a>
            </div>
          </div>

          <div class="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li *ngFor="let link of quickLinks">
                <a [href]="link.url">{{link.name}}</a>
              </li>
            </ul>
          </div>

          <div class="services">
            <h3>Our Services</h3>
            <ul>
              <li *ngFor="let service of services">
                <a [href]="service.url">{{service.name}}</a>
              </li>
            </ul>
          </div>

          <div class="contact-info">
            <h3>Get In Touch</h3>
            <div class="contact-form">
              <input type="email" placeholder="Enter your email" class="email-input">
              <button class="submit-btn">Subscribe</button>
            </div>
            <div class="contact-details">
              <!-- <p><i class="fas fa-phone"></i> +1 234 567 890</p> -->
              <p><i class="fas fa-envelope"></i> info&#64;codebouncers.com</p>
              <p><i class="fas fa-map-marker-alt"></i> Iskon, Ahmedabad</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            © {{currentYear}} CodeBouncers. All rights reserved.
          </div>
          <!-- <div class="tech-stack">
            <span *ngFor="let tech of technologies" class="tech-pill">
              {{tech}}
            </span>
          </div> -->
        </div>
      </div>
    </footer>
  `,
  styles: [`
    @import 'variables';

    .footer-container {
      position: relative;
      min-height: 500px;
      overflow: hidden;
      padding: 4rem 0 0;
    }

    .code-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.4;

      pre {
        position: absolute;
        font-family: 'Fira Code', monospace;
        color: $accent-blue;
        font-size: 14px;
        white-space: pre;
        transform: translateX(-50%);
        animation: codeSlide 15s linear infinite;

        &:nth-child(odd) {
          top: 0;
        }

        &:nth-child(even) {
          bottom: 0;
        }
      }
    }

    @keyframes codeSlide {
      0% {
        transform: translateX(-50%) translateY(-50%);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateX(100%) translateY(50%);
        opacity: 0;
      }
    }

    .footer-content {
      position: relative;
      z-index: 2;
      @include glass-effect;
      margin: 0 0%;
      border-radius: 2rem 2rem 0 0;
      padding: 4rem 3rem 7rem;
    }

    .footer-top {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 2fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .company-info {
      .company-name {
        @include gradient-text;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .company-desc {
        color: $text-light;
        margin-bottom: 2rem;
      }
    }

    .social-links {
      display: flex;
      gap: 1.5rem;

      .social-link {
        width: 40px;
        height: 40px;
        @include glass-effect;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-light;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          transform: translateY(-5px);
          color: $accent-blue;

          .tooltip {
            opacity: 1;
            transform: translateY(-10px);
          }
        }

        .tooltip {
          position: absolute;
          top: -30px;
          background: $accent-blue;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          opacity: 0;
          transform: translateY(0);
          transition: all 0.3s ease;
        }
      }
    }

    .quick-links, .services {
      h3 {
        color: $accent-blue;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 0.8rem;

          a {
            color: $text-light;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;

            &:before {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 0;
              height: 2px;
              background: $accent-blue;
              transition: width 0.3s ease;
            }

            &:hover {
              color: $accent-blue;

              &:before {
                width: 100%;
              }
            }
          }
        }
      }
    }

    .contact-info {
      h3 {
        color: $accent-blue;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
      }

      .contact-form {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;

        .email-input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border-radius: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: $text-light;

          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }

        .submit-btn {
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          background: $accent-blue;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 150, 255, 0.3);
          }
        }
      }

      .contact-details {
        p {
          color: $text-light;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;

          i {
            color: $accent-blue;
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .copyright {
      color: $text-light;
      opacity: 0.8;
    }

    .tech-stack {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      .tech-pill {
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        background: rgba(0, 150, 255, 0.15);
        color: $text-light;
        font-size: 0.875rem;
        border: 1px solid rgba(0, 150, 255, 0.2);
      }
    }

    @media (max-width: 1200px) {
      .footer-top {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        margin: 0;
        border-radius: 0;
        padding: 3rem 1.5rem 1.5rem;
      }

      .footer-top {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  codeBlocks = [
    {
      code: `function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}`,
      delay: '0s'
    },
    {
      code: `const api = {
  baseURL: 'https://api.example.com',
  endpoints: {
    users: '/users',
    posts: '/posts'
  }
}`,
      delay: '5s'
    },
    {
      code: `class DataService {
  constructor() {
    this.data = [];
  }

  async fetchData() {
    const response = await fetch(url);
    return response.json();
  }
}`,
      delay: '10s'
    }
  ];

  socials = [
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ];

  quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ];

  services = [
    { name: 'Web Development', url: '/services#web' },
    { name: 'Mobile Apps', url: '/services#mobile' },
    { name: 'Cloud Solutions', url: '/services#cloud' },
    { name: 'UI/UX Design', url: '/services#design' }
  ];

  technologies = [
    'Angular',
    'React',
    'Node.js',
    'Python',
    'AWS'
  ];

  ngOnInit() {
    // Add more code blocks dynamically if needed
    setInterval(() => {
      this.updateCodeBlocks();
    }, 5000);
  }

  private updateCodeBlocks() {
    // Add dynamic code update logic here
  }
}

