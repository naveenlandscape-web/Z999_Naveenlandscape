# PotLife - Premium Plant Pots Showcase Website

A modern, responsive static website showcasing premium plant pots with an engaging hero section featuring an automatic image carousel.

## Features

### 🎨 **Design & Layout**
- **Navigation Bar**: Fixed, responsive navbar with smooth hover effects
- **Hero Section**: Full-screen background with automatic image carousel
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Modern Aesthetics**: Clean, minimalist design with green color theme

### 🖼️ **Image Carousel**
- **3 Rotating Images**: Automatically loops through plant pot images
- **5-Second Intervals**: Images change every 5 seconds
- **Interactive Dots**: Click dots to navigate to specific images
- **Pause on Hover**: Carousel pauses when hovering over images
- **Smooth Transitions**: CSS fade effects for seamless transitions
- **Keyboard Navigation**: Use arrow keys (→ ←) to manually navigate

### 📱 **Pages**
1. **index.html** - Home page with hero section and navigation
2. **products.html** - Showcase of 6 product cards
3. **about.html** - Company information and mission

### ✨ **Interactive Elements**
- Smooth scrolling navigation
- Button hover effects with animations
- Card hover effects on product pages
- Mobile menu toggle
- Animated hero text with staggered timing

## File Structure

```
NaveenLandscape/
├── index.html          # Home page with hero carousel
├── products.html       # Products listing page
├── about.html          # About page
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **CSS3**: Custom animations and effects
- **JavaScript**: Carousel logic and interactive features

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Navigate**: Use the navigation bar to move between pages
3. **View Carousel**: The hero section automatically rotates through 3 images
4. **Manual Navigation**: 
   - Click the dots at the bottom of the carousel to jump to a specific image
   - Use arrow keys to navigate (when on home page)
   - Hover over the carousel to pause automatic rotation

## Customization

### Change Hero Images
Edit `index.html` and replace the `src` attributes in the carousel images:
```html
<img id="hero-image-1" src="YOUR_IMAGE_URL" alt="Plant Pot 1">
<img id="hero-image-2" src="YOUR_IMAGE_URL" alt="Plant Pot 2">
<img id="hero-image-3" src="YOUR_IMAGE_URL" alt="Plant Pot 3">
```

### Adjust Carousel Speed
Edit `script.js` and change the `autoplayDelay` value:
```javascript
this.autoplayDelay = 5000; // 5 seconds (modify as needed)
```

### Change Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #16a34a;
    --secondary-color: #22c55e;
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Navigation Bar
- Fixed positioning with semi-transparent background
- Active link indicators with underline animation
- Mobile hamburger menu toggle
- Smooth shadow effect on scroll

### Hero Section
- Full viewport height
- Automatic image carousel with fade effects
- Dark overlay for text readability
- Animated text elements with staggered appearance
- Two CTA buttons: "Explore Products" and "Learn More"
- Interactive carousel dots with visual feedback

### Products Page
- Grid layout (3 columns on desktop, 1-2 on mobile)
- Product cards with hover effects
- Price display and "Add to Cart" buttons
- Image previews

### About Page
- Company story and mission
- Three core values with icons
- Benefits list with checkmarks
- Call-to-action section

## JavaScript Functions

- `ImageCarousel`: Main class handling carousel logic
- `initMobileMenu()`: Mobile navigation setup
- `initSmoothScroll()`: Smooth scroll for anchor links
- `animateHeroText()`: Hero text animation timing
- Keyboard navigation for carousel

## Performance Notes

- Images are loaded from Unsplash CDN
- Smooth CSS transitions for optimal performance
- Minimal JavaScript for fast execution
- Mobile-optimized viewport settings

## Future Enhancement Ideas

- Add a shopping cart functionality
- Implement a contact form
- Add product filtering/sorting
- Create a testimonials section
- Add image lazy loading
- Implement a blog section
- Add social media links

## License

This project is open source and available for personal and commercial use.

## Support

For any questions or issues, please refer to the comments in the code or modify the styles and scripts as needed.

---

Created with ❤️ for plant lovers everywhere!
"# Z999_Naveenlandscape" 
