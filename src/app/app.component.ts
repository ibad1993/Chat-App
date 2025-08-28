import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>LocalBiz Commerce</h2>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#products" class="nav-link">Products</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li class="cart-icon">
            <span class="cart-count">{{cartItemCount}}</span>
            🛒
          </li>
        </ul>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>Welcome to LocalBiz Commerce</h1>
        <p>Discover amazing products from your local community</p>
        <button class="cta-button" (click)="scrollToSection('products')">Shop Now</button>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
      <div class="container">
        <h2>Our Products</h2>
        <div class="products-grid">
          <div class="product-card" *ngFor="let product of products">
            <div class="product-image">
              <img [src]="product.image" [alt]="product.name">
            </div>
            <div class="product-info">
              <h3>{{product.name}}</h3>
              <p class="product-description">{{product.description}}</p>
              <div class="product-price">${{product.price}}</div>
              <button class="add-to-cart-btn" (click)="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shopping Cart -->
    <div class="cart-sidebar" [class.open]="isCartOpen">
      <div class="cart-header">
        <h3>Shopping Cart</h3>
        <button class="close-cart" (click)="toggleCart()">×</button>
      </div>
      <div class="cart-items" *ngIf="cartItems.length > 0; else emptyCart">
        <div class="cart-item" *ngFor="let item of cartItems">
          <img [src]="item.image" [alt]="item.name">
          <div class="item-details">
            <h4>{{item.name}}</h4>
            <p>${{item.price}}</p>
            <div class="quantity-controls">
              <button (click)="decreaseQuantity(item)">-</button>
              <span>{{item.quantity}}</span>
              <button (click)="increaseQuantity(item)">+</button>
            </div>
          </div>
          <button class="remove-item" (click)="removeFromCart(item)">×</button>
        </div>
        <div class="cart-total">
          <strong>Total: ${{cartTotal}}</strong>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>
      <ng-template #emptyCart>
        <p class="empty-cart">Your cart is empty</p>
      </ng-template>
    </div>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>About LocalBiz Commerce</h2>
            <p>We're your local marketplace, connecting you with the best products and services in your community. Our mission is to support local businesses and provide you with quality goods.</p>
            <p>Every purchase supports local entrepreneurs and helps build a stronger community.</p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">🏪</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2>Contact Us</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@localbizcommerce.com</p>
            <p><strong>Address:</strong> 123 Main St, Your City, ST 12345</p>
            <p><strong>Hours:</strong> Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
          </div>
          <form class="contact-form" (submit)="submitContactForm($event)">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 LocalBiz Commerce. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Navigation */
    .navbar {
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 20px;
    }

    .nav-logo h2 {
      color: #2c3e50;
      font-size: 1.8rem;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: #3498db;
    }

    .cart-icon {
      position: relative;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #e74c3c;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: #333;
      margin: 3px 0;
      transition: 0.3s;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 120px 20px 80px;
      margin-top: 70px;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-button {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .cta-button:hover {
      background: #c0392b;
    }

    /* Products Section */
    .products {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .products h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #2c3e50;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-5px);
    }

    .product-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .product-info {
      padding: 1.5rem;
    }

    .product-info h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .product-description {
      color: #666;
      margin-bottom: 1rem;
    }

    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e74c3c;
      margin-bottom: 1rem;
    }

    .add-to-cart-btn {
      background: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;
      width: 100%;
    }

    .add-to-cart-btn:hover {
      background: #2980b9;
    }

    /* Shopping Cart */
    .cart-sidebar {
      position: fixed;
      top: 0;
      right: -400px;
      width: 400px;
      height: 100vh;
      background: white;
      box-shadow: -5px 0 15px rgba(0,0,0,0.1);
      transition: right 0.3s ease;
      z-index: 1001;
      overflow-y: auto;
    }

    .cart-sidebar.open {
      right: 0;
    }

    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #eee;
    }

    .close-cart {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .cart-items {
      padding: 1rem;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
    }

    .cart-item img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 5px;
    }

    .item-details h4 {
      margin-bottom: 0.5rem;
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .quantity-controls button {
      background: #f8f9fa;
      border: 1px solid #ddd;
      width: 25px;
      height: 25px;
      border-radius: 3px;
      cursor: pointer;
    }

    .remove-item {
      background: #e74c3c;
      color: white;
      border: none;
      width: 25px;
      height: 25px;
      border-radius: 3px;
      cursor: pointer;
      margin-left: auto;
    }

    .cart-total {
      text-align: center;
      padding: 1rem;
      font-size: 1.2rem;
      border-top: 1px solid #eee;
      margin-top: 1rem;
    }

    .checkout-btn {
      background: #27ae60;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-size: 1.1rem;
      margin-top: 1rem;
    }

    .empty-cart {
      text-align: center;
      color: #666;
      padding: 2rem;
    }

    /* About Section */
    .about {
      padding: 80px 0;
    }

    .about h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #2c3e50;
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .about-text p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .image-placeholder {
      background: #ecf0f1;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      border-radius: 10px;
    }

    /* Contact Section */
    .contact {
      padding: 80px 0;
      background: #f8f9fa;
    }

    .contact h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #2c3e50;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-info h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .contact-info p {
      margin-bottom: 0.5rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }

    .contact-form textarea {
      resize: vertical;
    }

    .submit-btn {
      background: #3498db;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;
    }

    .submit-btn:hover {
      background: #2980b9;
    }

    /* Footer */
    .footer {
      background: #2c3e50;
      color: white;
      text-align: center;
      padding: 2rem 0;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-menu {
        display: none;
      }

      .hero-content h1 {
        font-size: 2rem;
      }

      .about-content,
      .contact-content {
        grid-template-columns: 1fr;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .cart-sidebar {
        width: 100%;
        right: -100%;
      }
    }
  `]
})
export class AppComponent {
  title = 'local-business-commerce';
  
  products = [
    {
      id: 1,
      name: 'Local Honey',
      description: 'Pure, natural honey from local beekeepers',
      price: 12.99,
      image: 'https://via.placeholder.com/300x200/FFD700/000?text=Honey'
    },
    {
      id: 2,
      name: 'Handmade Soap',
      description: 'Artisan soap made with natural ingredients',
      price: 8.99,
      image: 'https://via.placeholder.com/300x200/87CEEB/000?text=Soap'
    },
    {
      id: 3,
      name: 'Fresh Bread',
      description: 'Daily baked bread from our local bakery',
      price: 5.99,
      image: 'https://via.placeholder.com/300x200/DEB887/000?text=Bread'
    },
    {
      id: 4,
      name: 'Organic Vegetables',
      description: 'Fresh vegetables from local farms',
      price: 15.99,
      image: 'https://via.placeholder.com/300x200/90EE90/000?text=Vegetables'
    },
    {
      id: 5,
      name: 'Artisan Coffee',
      description: 'Premium coffee beans from local roasters',
      price: 18.99,
      image: 'https://via.placeholder.com/300x200/8B4513/000?text=Coffee'
    },
    {
      id: 6,
      name: 'Handcrafted Jewelry',
      description: 'Unique jewelry pieces by local artisans',
      price: 45.99,
      image: 'https://via.placeholder.com/300x200/DDA0DD/000?text=Jewelry'
    }
  ];

  cartItems: any[] = [];
  isCartOpen = false;

  get cartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get cartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.isCartOpen = true;
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(item);
    }
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  submitContactForm(event: Event): void {
    event.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
  }
}

