# Smart AI v2 Frontend

A modern, performant React application built with TypeScript, Vite, and cutting-edge UI libraries. Features an advanced minimalist design system following atomic design principles.

## 🚀 Features

- **Modern Stack**: React 18, TypeScript, Vite
- **Styling**: Styled-components with comprehensive theme system
- **Animations**: Framer Motion for smooth interactions
- **UI Components**: Radix UI primitives for accessibility
- **Design System**: Atomic design pattern with design tokens
- **Developer Experience**: ESLint, Prettier, hot reload
- **Performance**: Optimized bundle splitting and lazy loading

## 🏗️ Project Structure

```
src/
├── components/          # Atomic design components
│   ├── atoms/          # Basic building blocks (Button, Input, etc.)
│   ├── molecules/      # Simple groups (SearchBox, etc.)
│   ├── organisms/      # Complex sections (Header, Sidebar, etc.)
│   └── templates/      # Page layouts
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── stores/             # State management
├── services/           # API and external services
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── styles/             # Design system
│   ├── tokens/         # Design tokens (colors, typography, etc.)
│   ├── themes/         # Light/dark themes
│   └── globals/        # Global styles
└── assets/             # Static assets
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **Design Tokens**: Colors, typography, spacing, shadows
- **Theme System**: Light and dark modes with semantic color mapping
- **Component Library**: Consistent, accessible components
- **Responsive Design**: Mobile-first approach with flexible layouts

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🧪 Development

### Code Quality

The project includes:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Strict mode** for catching potential issues

### Theme Development

The theme system supports:
- Light and dark modes
- Semantic color tokens
- Component-specific styling
- Responsive breakpoints

### Adding Components

Follow the atomic design pattern:
1. Create atoms for basic elements
2. Combine atoms into molecules
3. Group molecules into organisms
4. Use organisms in templates
5. Implement templates in pages

## 📦 Build

```bash
npm run build
```

Builds the app for production with:
- Code splitting for optimal loading
- Tree shaking for smaller bundles
- Asset optimization
- Source maps for debugging

## 🔧 Configuration

### Vite Configuration
- Path aliases for clean imports
- Plugin configuration for React and TypeScript
- Build optimizations and chunk splitting

### TypeScript Configuration
- Strict type checking
- Path mapping for absolute imports
- Modern ES features support

## 🎯 Performance

The application is optimized for:
- Fast initial load times
- Smooth animations and interactions
- Efficient re-renders
- Minimal bundle size
- Progressive loading

## 📱 Responsive Design

Built with mobile-first approach:
- Flexible grid system
- Responsive typography
- Touch-friendly interactions
- Optimized for all screen sizes

## 🌙 Theme System

Supports both light and dark themes with:
- Automatic system preference detection
- Manual theme switching
- Persistent theme selection
- Smooth theme transitions

## 🚀 Production Deployment

1. Build the application:
```bash
npm run build
```

2. The `dist/` folder contains the production-ready files
3. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## 📄 License

This project is private and proprietary.