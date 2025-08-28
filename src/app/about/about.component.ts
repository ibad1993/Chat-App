import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-header">
        <h1 class="about-title">About This Project</h1>
        <p class="about-subtitle">Learn more about our Angular application and the technologies used</p>
      </div>

      <div class="about-content">
        <div class="about-section">
          <h2>Project Overview</h2>
          <p>
            This is a modern web application built with Angular 18 and TypeScript. 
            It demonstrates best practices in Angular development including standalone components, 
            lazy loading, and modern routing patterns.
          </p>
        </div>

        <div class="about-section">
          <h2>Technologies Used</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h3>Angular 18</h3>
              <p>Latest version with standalone components and improved performance</p>
            </div>
            <div class="tech-item">
              <h3>TypeScript</h3>
              <p>Type-safe JavaScript for better development experience</p>
            </div>
            <div class="tech-item">
              <h3>CSS3</h3>
              <p>Modern styling with gradients, animations, and responsive design</p>
            </div>
            <div class="tech-item">
              <h3>RxJS</h3>
              <p>Reactive programming library for handling asynchronous operations</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Features</h2>
          <ul class="features-list">
            <li>Standalone components for better tree-shaking</li>
            <li>Lazy-loaded routes for improved performance</li>
            <li>Responsive design that works on all devices</li>
            <li>Modern UI with smooth animations</li>
            <li>TypeScript for type safety</li>
            <li>CSS Grid and Flexbox for layouts</li>
          </ul>
        </div>

        <div class="about-section">
          <h2>Getting Started</h2>
          <p>
            To run this project locally, make sure you have Node.js installed, then run:
          </p>
          <div class="code-block">
            <code>npm install</code><br>
            <code>ng serve</code>
          </div>
          <p>The application will be available at <code>http://localhost:4200</code></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .about-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 15px;
    }

    .about-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .about-subtitle {
      font-size: 1.1rem;
      color: #7f8c8d;
      max-width: 500px;
      margin: 0 auto;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .about-section {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .about-section h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      border-bottom: 2px solid #667eea;
      padding-bottom: 0.5rem;
    }

    .about-section p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .tech-item {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid #667eea;
    }

    .tech-item h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .tech-item p {
      color: #7f8c8d;
      font-size: 0.9rem;
      margin: 0;
    }

    .features-list {
      list-style: none;
      padding: 0;
    }

    .features-list li {
      padding: 0.5rem 0;
      color: #555;
      position: relative;
      padding-left: 1.5rem;
    }

    .features-list li:before {
      content: "✓";
      color: #27ae60;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    .code-block {
      background: #2c3e50;
      color: #ecf0f1;
      padding: 1rem;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      margin: 1rem 0;
      overflow-x: auto;
    }

    .code-block code {
      display: block;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .about-title {
        font-size: 2rem;
      }
      
      .tech-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}

