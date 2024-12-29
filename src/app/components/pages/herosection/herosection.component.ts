
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herosection',
  template: `
  <div class="code-animation">
  <pre *ngFor="let block of codeBlocks" [style.animation-delay]="block.delay">
    <code>{{block.code}}</code>
  </pre>
</div>
    <section class="hero-container">
      <div class="content-wrapper">
        <div class="text-content">
        <h1 class="title">
  Turning Vision Into
  <span class="highlight">Digital Reality</span>
</h1>

<p class="subtitle">
  We are a full-service digital solutions provider, specializing in web app development, backend systems, UI/UX design, and AI-driven innovations.
  Our expertise in AI integration ensures your ideas become powerful and future-ready solutions.
</p>

          <div class="cta-buttons">
            <button class="primary-btn glow-effect">Explore Our Projects</button>
            <button class="secondary-btn glow-effect">Get in Touch</button>
          </div>

          <div class="tech-stack">
            <div class="tech-icons">
              <span *ngFor="let tech of technologies" class="tech-pill glow-effect">{{tech}}</span>
            </div>
          </div>
        </div>

        <!-- <div class="stats-container">
          <div class="stat-item glow-effect" *ngFor="let stat of stats">
            <h3>{{stat.value}}</h3>
            <p>{{stat.label}}</p>
          </div>
        </div> -->
      </div>

      <!-- Background Elements -->
      <div class="bg-elements">
        <div class="blur-circle-1"></div>
        <div class="blur-circle-2"></div>
        <div class="grid-overlay"></div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .hero-container {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      padding: 1% 5% 6rem 5%;
      overflow: hidden;
      isolation: isolate;


      @media (max-width: 768px) {
        padding: 4rem 5%;
      }

      * {
        cursor: default;
      }
    }

    .content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  isolation: isolate;
}

    .text-content {
      max-width: 800px;
    }

    // Typography
    .title {
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: $text-light;

      .highlight {
        @include gradient-text;
        font-weight: 700;
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .subtitle {
      font-size: 1.25rem;
      color: $text-light;
      margin-bottom: 2rem;
      max-width: 600px;
      line-height: 1.6;
      opacity: 0.9;
    }

    // Buttons
    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;

      button {
        padding: 0.875rem 2rem;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
      }
    }

    .primary-btn {
      @include glass-effect;
      color: $text-light;
      border: none;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                   0 0 20px rgba(0, 150, 255, 0.4);
      }

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
    }

    .secondary-btn {
      background: transparent;
      border: 1px solid $glass-border;
      color: $text-light;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
        border-color: $accent-blue;
        box-shadow: 0 0 15px rgba(0, 150, 255, 0.3);
      }
    }

    // Tech Stack
    .tech-stack {
      .tech-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .tech-pill {
        @include glass-effect;
        padding: 0.5rem 1rem;
        border-radius: 1.5rem;
        font-size: 0.875rem;
        color: $text-light;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                     0 0 15px rgba(0, 150, 255, 0.4);
          border-color: $accent-blue;
        }
      }
    }





//animation
.code-animation {
  position: fixed; // Changed from absolute to fixed
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.code-animation pre {
  position: absolute;
  font-family: 'Fira Code', monospace;
  color: $accent-blue;
  font-size: 14px;
  white-space: pre;
  opacity: 0;
  transform: translateX(-50%);
  animation: codeSlide 15s linear infinite;
  pointer-events: none;

  &:nth-child(odd) {
    top: 20%;
  }

  &:nth-child(even) {
    bottom: 20%;
  }
}

@keyframes codeSlide {
  0% {
    transform: translateX(400%) translateY(-50%);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(100%) translateY(50%);
    opacity: 0;
  }
}


    // Stats Section
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .stat-item {
      @include glass-effect;
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 150, 255, 0.4),
                   0 0 20px rgba(0, 150, 255, 0.3);

        h3 {
          transform: scale(1.05);
        }
      }

      h3 {
        @include gradient-text;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease;
      }

      p {
        color: $text-light;
        font-size: 1rem;
        opacity: 0.9;
      }
    }


    // Background Elements
    .bg-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    .blur-circle-1 {
      position: absolute;
      top: -10%;
      right: -5%;
      width: 40vw;
      height: 40vw;
      background: radial-gradient(circle, $accent-blue 0%, transparent 70%);
      opacity: 0.15;
      filter: blur(60px);
      transition: all 0.5s ease;
    }

    .blur-circle-2 {
      position: absolute;
      bottom: -20%;
      left: -10%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, $gradient-start 0%, transparent 70%);
      opacity: 0.15;
      filter: blur(80px);
      transition: all 0.5s ease;
    }

    .grid-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.2;
    }

    // Glow Effect
    .glow-effect {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        border-radius: inherit;
        transition: all 0.3s ease;
        z-index: -1;
      }

      &:hover::after {
        opacity: 1;
        box-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
      }
    }

    // Responsive Styles
    @media (max-width: 480px) {
      .hero-container {
        padding: 3rem 3%;
      }

      .title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .cta-buttons {
        flex-direction: column;

        button {
          width: 100%;
        }
      }

      .tech-stack .tech-pill {
        font-size: 0.75rem;
      }

      .stat-item h3 {
        font-size: 2rem;
      }
    }
  `]
})
export class HerosectionComponent implements OnInit {
  technologies = [
    'AI/ML',
    'Angular',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Cloud Native',
    'Flutter',
    'Django'

  ];

  stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' }
  ];

  readonly codeBlocks = [
    {
      code: `function calculatePrimeNumbers(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  }`,
      delay: '0s',
    },
    {
      code: `const apiConfig = {
    baseURL: 'https://api.example.com',
    endpoints: {
      users: '/v1/users',
      posts: '/v1/posts',
      comments: '/v1/comments',
    },
    fetchWithAuth: async function (endpoint, token) {
      const response = await fetch(this.baseURL + endpoint, {
        headers: {
          Authorization: \`Bearer \${token}\`,
        },
      });
      return response.json();
    },
  };`,
      delay: '5s',
    },
    {
      code: `class AIModel {
    constructor(name, parameters) {
      this.name = name;
      this.parameters = parameters;
    }

    async train(dataSet) {
      console.log(\`Training \${this.name} model with \${dataSet.length} samples...\`);
      // Simulating a training delay
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    predict(input) {
      console.log(\`Predicting output for input: \${JSON.stringify(input)}\`);
      return input.map(value => value * Math.random());
    }
  }`,
      delay: '10s',
    },
    {
      code: `void main() {
    runApp(MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Demo'),
        ),
        body: Center(
          child: Text('Hello, Flutter!'),
        ),
      ),
    ));
  }`,
      delay: '15s',
    },
    {
      code: `const express = require('express');
  const app = express();
  app.use(express.json());

  app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running' });
  });

  app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.status(201).json({ message: 'Data saved', data });
  });

  app.listen(3000, () => console.log('Server is listening on port 3000'));`,
      delay: '20s',
    },
    {
      code: `public class ProductService {
    private readonly List<Product> _products;

    public ProductService() {
      _products = new List<Product> {
        new Product { Id = 1, Name = "Laptop", Price = 999.99M },
        new Product { Id = 2, Name = "Smartphone", Price = 799.99M }
      };
    }

    public IEnumerable<Product> GetAllProducts() {
      return _products;
    }

    public Product GetProductById(int id) {
      return _products.FirstOrDefault(p => p.Id == id);
    }
  }`,
      delay: '25s',
    },
  ];

  ngOnInit() {
  }
}
