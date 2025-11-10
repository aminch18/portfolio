# Amin Chouaibi El Azaar - Senior Backend Engineer Portfolio

> Modern, multilingual portfolio showcasing 6+ years of backend engineering expertise in distributed systems, microservices, and cloud platforms.

**Live Site**: [https://aminch18.github.io/portfolio](https://aminch18.github.io/portfolio)

## 👨‍💻 About

Senior Software Engineer at **Gartner Digital Markets** specializing in:
- **.NET/C#** backend development
- **AWS & Azure** cloud architectures
- **Apache Kafka** event-driven systems
- **Microservices** and distributed systems
- **CQRS, DDD**, and clean architecture patterns

📍 **Location**: Barcelona, Spain  
💼 **Experience**: 6+ years in software engineering  
🎓 **Education**: Computer Engineering (UOC), Crossplatform Development (Escola Pia)

## 🌟 Key Features

- **🌍 Multilingual Support**: Full i18n implementation with English, Spanish, and Catalan
- **🎨 Dual Theme**: Professional light/dark mode with smooth transitions
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **🚀 Performance**: Static site generation with Next.js for optimal SEO
- **♿ Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **🎯 SEO Optimized**: Complete metadata, structured data, and sitemap
- **🔒 Type Safe**: 100% TypeScript for reliability
- **🎨 Modern UI**: Glassmorphism effects and smooth animations

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling

### Features & Libraries
- **next-intl** - Internationalization (i18n)
- **Lucide React** - Modern icon system
- **Canvas API** - Interactive particle animations

### Deployment & CI/CD
- **GitHub Pages** - Static hosting
- **GitHub Actions** - Automated deployment pipeline

## 📊 SEO Optimization

- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ XML sitemap for search engines
- ✅ robots.txt for crawler guidance
- ✅ Semantic HTML5 markup
- ✅ Alt tags for all images
- ✅ Fast loading times (<3s)
- ✅ Mobile-first responsive design

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles and theme variables
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── portfolio/          # Portfolio section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FloatingNavigation.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── CompanyCard.tsx
│   │   │   ├── RoleCard.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── FooterCTA.tsx
│   │   ├── ui/                 # Shared UI components
│   │   │   ├── AnimatedBackground.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   └── TimelinePortfolioFixed.tsx
│   ├── data/
│   │   └── profileData.ts      # Portfolio content data
│   └── hooks/                  # Custom React hooks
│       ├── usePortfolioVisibility.ts
│       ├── useNavigationState.ts
│       └── useCompanyExpansion.ts
├── public/
│   └── .nojekyll              # GitHub Pages configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Design System

### Color Palette (Light Theme)
- **Background**: `#f8f9fa` → `#e9ecef` (Soft gradient)
- **Surface**: `#ffffff` (White cards)
- **Primary Text**: `#1f2937` (Dark gray)
- **Accent**: `#6b8e23` (Olive green)
- **Borders**: `#dee2e6` (Light gray)

### Color Palette (Dark Theme)
- **Background**: `#0f172a` → `#1e293b` (Dark gradient)
- **Surface**: `rgba(30, 41, 59, 0.6)` (Translucent)
- **Primary Text**: `#e2e8f0` (Light gray)
- **Accent**: `#818cf8` (Indigo)
- **Borders**: `#334155` (Dark borders)
### Typography
- **Primary Font**: Nunito (Sans-serif)
- **Heading Font**: Montserrat (Sans-serif)
- **Code Font**: Recursive (Monospace)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aminch18/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Process
1. Push changes to the `main` branch
2. GitHub Actions workflow automatically triggers
3. Site is built and deployed to GitHub Pages
4. Live at: **https://aminch18.github.io/portfolio/**

### Manual Deployment
To deploy manually:
```bash
npm run build
# The 'out' folder contains the static export
```

## 📱 Sections

### 1. Hero Section
- Profile photo with animated border
- Professional title and location
- Contact information
- Download CV button
- Animated particle background

### 2. Professional Journey
- Interactive timeline with company cards
- Expandable role cards with achievements
- Technology stacks for each role
- Click to expand for full details
- Timeline dots connecting experiences

### 3. Education
- Academic background
- Institution logos and details
- Degree and period information

### 4. Featured Projects
- Expandable project cards
- Status badges (Completed, In Progress, Planned)
- Technology stack tags
- Key highlights and achievements
- GitHub and external links
- Long descriptions with full details

### 5. Footer CTA
- Call-to-action section
- Contact buttons
- Professional closing

## ✨ Key Features Explained

### Particle Animation System
- Canvas-based particle network with 80 particles
- Dynamic connecting lines between nearby particles (within 150px)
- Particles bounce off screen edges
- Smooth animations using requestAnimationFrame
- Adapts to theme colors automatically

### Theme System
- Light and dark theme support
- Persisted in localStorage
- Smooth transitions between themes
- CSS variables for consistent theming
- Compact theme switcher button that moves with navigation

### Responsive Navigation
- Floating navigation bar
- Moves from top to bottom on scroll
- Active section highlighting
- Smooth scroll to sections
- Compact design for mobile

### Expandable Cards
- Company and role cards expand on click
- Smooth height transitions
- Technology tags and achievements
- Timeline visualization
- Hover effects and visual feedback

## 🎯 Professional Summary

**Amin Chouaibi El Azaar** is a Senior Backend Engineer with 6+ years of experience building scalable systems and distributed platforms. Currently working at Gartner Digital Markets, specializing in:

- **.NET & C#** development
- **Event-driven architectures** with Kafka
- **Cloud platforms** (AWS & Azure)
- **Data pipelines** and real-time processing
- **Microservices** architecture
- **DevOps** practices and CI/CD

## 📈 Experience Highlights

- **Gartner Digital Markets** (2022-Present): Reviews Platform team processing 1M+ reviews monthly
- **Plain Concepts** (2019-2022): Lidl Plus App backend serving 60M+ users across Europe
- **Pasiona Consulting** (2018-2019): Full-stack development with React and .NET

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## � Contact

- **Email**: amin@example.com
- **LinkedIn**: [Amin Chouaibi El Azaar](https://linkedin.com/in/yourprofile)
- **GitHub**: [@aminch18](https://github.com/aminch18)
- **Location**: Madrid, Spain

---

**Live Site**: [https://aminch18.github.io/portfolio/](https://aminch18.github.io/portfolio/)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: achouaibiudg@gmail.com
- **Phone**: +34 635 069 015
- **Location**: Canet de Mar, Barcelona
- **LinkedIn**: [amin-chouaibi-el-azaar](https://linkedin.com/in/amin-chouaibi-el-azaar-223942160)
- **GitHub**: [aminch18](https://github.com/aminch18)

---

Built with ❤️ using Next.js and TailwindCSS