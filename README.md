# Local Business Commerce 🏪

A modern, responsive e-commerce website built with Angular 18 and TypeScript, designed specifically for local businesses to showcase and sell their products online.

![Local Business Commerce](https://via.placeholder.com/800x400/667eea/ffffff?text=Local+Business+Commerce)

## ✨ Features

- 🛒 **Shopping Cart System** - Full cart functionality with quantity controls
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI/UX** - Beautiful gradients, animations, and clean design
- 🚀 **Angular 18** - Latest version with standalone components
- 🔧 **TypeScript** - Full type safety and better development experience
- 📦 **Product Management** - Easy to add/edit products
- 💳 **Checkout Ready** - Shopping cart with total calculation
- 📞 **Contact Forms** - Customer inquiry system
- 🎯 **SEO Optimized** - Clean URLs and meta tags

## 🛍️ E-commerce Features

- **Product Grid** - Display products in responsive grid layout
- **Shopping Cart** - Slide-out cart with item management
- **Quantity Controls** - Add/remove items with quantity adjustment
- **Cart Total** - Real-time price calculation
- **Checkout Button** - Ready for payment integration
- **Product Images** - Placeholder system for product photos

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/local-business-commerce.git
   cd local-business-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   └── app.component.ts          # Main app component with e-commerce logic
├── assets/                       # Images and static files
├── index.html                    # Main HTML file
├── main.ts                       # Application entry point
├── styles.css                    # Global styles
└── test.ts                       # Test configuration
```

## 🎨 Customization

### Adding Products

Edit the `products` array in `app.component.ts`:

```typescript
products = [
  {
    id: 1,
    name: 'Your Product Name',
    description: 'Product description',
    price: 29.99,
    image: 'path/to/image.jpg'
  }
];
```

### Styling

- Modify colors in the CSS variables
- Update the color scheme in `styles.css`
- Customize the hero section gradient
- Adjust product card layouts

### Business Information

Update contact details in the template:
- Phone number
- Email address
- Business address
- Operating hours

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Build the project
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select the `dist` folder as source

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 🧪 Testing

```bash
npm test
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Technologies Used

- **Angular 18** - Frontend framework
- **TypeScript** - Programming language
- **CSS3** - Modern styling with Grid and Flexbox
- **HTML5** - Semantic markup
- **RxJS** - Reactive programming (Angular dependency)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/local-business-commerce/issues)
- **Email**: your.email@example.com
- **Website**: [Your Website](https://yoursite.com)

## 🙏 Acknowledgments

- Built with Angular 18
- Designed for local business success
- Community-driven development

---

**Made with ❤️ for local businesses**

*Support local commerce and build stronger communities!*
