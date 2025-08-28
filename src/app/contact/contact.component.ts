import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="contact-header">
        <h1 class="contact-title">Contact Us</h1>
        <p class="contact-subtitle">Get in touch with us for any questions or feedback</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@myangularapp.com</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Angular Street<br>TypeScript City, TS 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send Message</h2>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="contactData.name" 
                required
                class="form-control"
                placeholder="Your name">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="contactData.email" 
                required
                class="form-control"
                placeholder="your.email@example.com">
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                [(ngModel)]="contactData.subject" 
                required
                class="form-control"
                placeholder="Message subject">
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="contactData.message" 
                required
                rows="5"
                class="form-control"
                placeholder="Your message here..."></textarea>
            </div>

            <button type="submit" class="submit-btn" [disabled]="!contactForm.form.valid">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 15px;
    }

    .contact-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .contact-subtitle {
      font-size: 1.1rem;
      color: #7f8c8d;
      max-width: 500px;
      margin: 0 auto;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .contact-info, .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .contact-info h2, .contact-form h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      border-bottom: 2px solid #667eea;
      padding-bottom: 0.5rem;
    }

    .contact-info p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 10px;
    }

    .method-icon {
      font-size: 2rem;
      width: 50px;
      text-align: center;
    }

    .contact-method h3 {
      color: #2c3e50;
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }

    .contact-method p {
      color: #7f8c8d;
      margin: 0;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 600;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-control::placeholder {
      color: #adb5bd;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 100px;
    }

    .submit-btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-title {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.contactData.name && this.contactData.email && this.contactData.subject && this.contactData.message) {
      console.log('Contact form submitted:', this.contactData);
      alert('Thank you for your message! We\'ll get back to you soon.');
      
      // Reset form
      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
