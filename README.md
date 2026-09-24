# GrowthPulse - SaaS Analytics Landing Page

A modern, high-converting B2B SaaS landing page designed for analytics and marketing platforms. Features an interactive ROI calculator, bento-grid layout, glassmorphism UI, and smooth scroll animations. Built with zero dependencies using vanilla HTML5, CSS3, and JavaScript.

<img width="1349" height="4629" alt="image" src="https://github.com/user-attachments/assets/d96bfbcb-9c4b-4f4a-8688-a0be9a242052" />

## ✨ Key Features

- **🧮 Interactive ROI Calculator:** Real-time revenue projection tool with animated number transitions and custom easing logic.
- ** Glassmorphism & Bento Grid:** Modern UI patterns including frosted-glass dashboard visuals and responsive masonry-style feature layouts.
- **⚡ Zero Dependencies:** No React, Vue, Tailwind, or build tools required. Pure semantic HTML5, custom CSS variables, and ES6+ JavaScript.
- **👁️ Scroll Animations:** Elements gracefully fade in using the native `IntersectionObserver` API for buttery-smooth 60fps performance.
- ** Fully Responsive:** Mobile-first design that adapts seamlessly from 4K monitors down to mobile devices.
- **🔧 Highly Customizable:** All colors, spacing, and shadows are controlled via CSS custom properties at the top of `style.css`.

## 🛠️ Tech Stack

| Technology            | Usage                                                                 |
| :-------------------- | :-------------------------------------------------------------------- |
| **HTML5**             | Semantic structure, accessibility, and SEO-friendly markup            |
| **CSS3**              | Custom properties, Flexbox/Grid, backdrop-filter, keyframe animations |
| **JavaScript (ES6+)** | DOM manipulation, Intersection Observer, event listeners, math logic  |
| **Phosphor Icons**    | Lightweight, consistent SVG icon library                              |
| **Plus Jakarta Sans** | Modern geometric sans-serif typeface for clean readability            |

## ⚡ Getting Started

This project has **no build step**. You can run it immediately without installing Node.js, npm, or any package managers.

### Clone the Repository

```bash
git clone https://github.com/AmiARMiess/growth-pulse.git
cd growth-pulse
```

## 🎨 Customize Your Brand

All theme colors, spacing, and shadows are managed via CSS custom properties at the top of style.css. Simply update these values to match your brand identity instantly:

```css
:root {
  --primary: #4f46e5; /* Main brand color */
  --secondary: #0ea5e9; /* Accent blue */
  --accent: #8b5cf6; /* Purple gradient stop */
  --dark: #0f172a; /* Primary text color */
  --gray-100: #f1f5f9; /* Background tints */
}
```

No build tools or preprocessors are required. Changes take effect immediately when you refresh the page.

## 🧮 Update ROI Calculator Logic

The calculator formula is located in the calculateROI() function inside script.js. Adjust the multipliers and variables to match your actual business metrics:

```javascript
function calculateROI() {
  const adSpend = parseInt(adSpendSlider.value);
  const convRate = parseFloat(convRateSlider.value);
  const aov = parseInt(aovSlider.value);

  // Simplified model for demo purposes
  const estimatedClicks = Math.round(adSpend / 2.5);
  const conversions = Math.round(estimatedClicks * (convRate / 100));
  const currentRevenue = conversions * aov;

  // Change this multiplier to match your real-world optimization rate
  const projectedRevenue = Math.round(currentRevenue * 1.7);

  // ... rest of calculation logic
}
```

> 💡 **Tip:** The number animation uses `requestAnimationFrame` with cubic easing. If you change the output format (e.g., adding decimals), also update the `formatCurrency()` helper function to prevent display glitches.

## 📂 Project Structure

```text
growth-pulse/
├── index.html      # Main markup, semantic sections, and content
├── style.css       # Global styles, CSS variables, animations, responsive queries
├── script.js       # ROI calculator logic, scroll observer, navbar interactions
└── README.md       # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

> Built with ❤️ for the SaaS community
