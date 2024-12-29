// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact-container">
      <div class="contact-header">
        <h1 class="title">Get in Touch</h1>
        <p class="subtitle">Let's discuss your next project</p>
      </div>

      <div class="contact-wrapper">
        <!-- Contact Information -->
        <div class="contact-info">
          <h2>Contact Information</h2>

          <div class="info-items">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email Us</h3>
                <p>info&#64;codebouncers.com</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 234 567 890</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Visit Us</h3>
                <p>123 Tech Street, Digital City</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-github"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" formControlName="firstName"
                       [class.error]="isFieldInvalid('firstName')">
                <div class="error-message" *ngIf="isFieldInvalid('firstName')">
                  Please enter your first name
                </div>
              </div>

              <div class="form-group">
                <label>Last Name</label>
                <input type="text" formControlName="lastName"
                       [class.error]="isFieldInvalid('lastName')">
                <div class="error-message" *ngIf="isFieldInvalid('lastName')">
                  Please enter your last name
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="email" formControlName="email"
                     [class.error]="isFieldInvalid('email')">
              <div class="error-message" *ngIf="isFieldInvalid('email')">
                Please enter a valid email address
              </div>
            </div>

            <div class="form-group">
              <label>Subject</label>
              <input type="text" formControlName="subject"
                     [class.error]="isFieldInvalid('subject')">
              <div class="error-message" *ngIf="isFieldInvalid('subject')">
                Please enter a subject
              </div>
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea rows="5" formControlName="message"
                        [class.error]="isFieldInvalid('message')"></textarea>
              <div class="error-message" *ngIf="isFieldInvalid('message')">
                Please enter your message
              </div>
            </div>

            <button type="submit" class="submit-btn"
                    [disabled]="contactForm.invalid || isSubmitting">
              <span *ngIf="!isSubmitting">Send Message</span>
              <span *ngIf="isSubmitting">Sending...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';

    .contact-container {
      padding: 6rem 9%;
      min-height: 100vh;

      @media (max-width: 768px) {
        padding: 4rem 5%;
      }
    }

    .contact-header {
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

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;

      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;
      height: fit-content;

      h2 {
        @include gradient-text;
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
    }

    .info-items {
      margin-bottom: 2rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      i {
        font-size: 1.5rem;
        color: $accent-blue;
      }

      h3 {
        color: $text-light;
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
      }

      p {
        color: $text-light;
        opacity: 0.8;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      .social-link {
        @include glass-effect;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-light;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-3px);
          color: $accent-blue;
          box-shadow: 0 10px 20px rgba(0, 150, 255, 0.2);
        }
      }
    }

    .contact-form {
      @include glass-effect;
      padding: 2rem;
      border-radius: 1rem;

      form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        color: $text-light;
        font-size: 0.9rem;
      }

      input, textarea {
        @include glass-effect;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.8rem 1rem;
        color: $text-light;
        border-radius: 0.5rem;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: $accent-blue;
          box-shadow: 0 0 15px rgba(0, 150, 255, 0.2);
        }

        &.error {
          border-color: #ff4444;
        }
      }

      textarea {
        resize: vertical;
      }

      .error-message {
        color: #ff4444;
        font-size: 0.8rem;
      }
    }

    .submit-btn {
      @include glass-effect;
      padding: 1rem 2rem;
      border: none;
      border-radius: 2rem;
      color: $text-light;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
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

      &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 150, 255, 0.2);

        &::before {
          left: 100%;
        }
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field!.invalid && (field!.dirty || field!.touched);
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        // Add your form submission logic here
        console.log(this.contactForm.value);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        alert('Message sent successfully!');
        this.contactForm.reset();
      } catch (error) {
        alert('Failed to send message. Please try again.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
