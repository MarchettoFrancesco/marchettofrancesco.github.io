# Francesco Marchetto - Personal Portfolio Website

## Overview

This is a modern personal portfolio website built for Francesco Marchetto, an AI Engineer and Researcher. The application showcases his education, research experience, and professional accomplishments through an elegant, interactive interface with sophisticated animations and design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development Server**: Custom Vite integration for hot module replacement

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Key Components

#### UI and Design System
- **Component Library**: Comprehensive set of reusable UI components (buttons, forms, dialogs, etc.)
- **Theme System**: Light/dark mode support with CSS custom properties
- **Animation System**: Custom animations including floating elements, particle effects, and smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

#### Interactive Features
- **Animated Background**: Custom particle animation system
- **Splash Cursor**: Interactive cursor effects
- **Theme Toggle**: Dynamic light/dark mode switching
- **Glass Morphism Effects**: Modern glassmorphism UI elements

## Data Flow

1. **Static Content**: Portfolio information is currently hardcoded in React components
2. **Theme Management**: Theme state persisted in localStorage with system preference detection
3. **API Communication**: Prepared structure for future API endpoints using TanStack Query
4. **Database Operations**: Storage interface abstraction with in-memory fallback for development

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript
- Vite for development and building
- Express.js for server-side functionality

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Database and State Management
- Drizzle ORM for type-safe database operations
- Neon Database for serverless PostgreSQL
- TanStack Query for data fetching and caching
- Zod for runtime type validation

### Development Tools
- TypeScript for type safety
- ESBuild for production builds
- PostCSS with Autoprefixer for CSS processing

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: ESBuild bundles the Express server to `dist/index.js`
- **Assets**: Static assets are served from the built frontend
- **GitHub Pages**: Static frontend-only deployment with SPA routing support

### Environment Configuration
- **Development**: Uses `tsx` for hot reloading TypeScript server
- **Production**: Compiled JavaScript with Node.js runtime
- **GitHub Pages**: Static client-side only deployment
- **Database**: Environment variable-based configuration for database URL

### Scripts
- `dev`: Development mode with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema synchronization

### GitHub Pages Deployment
- **Workflow**: `.github/workflows/deploy.yml` handles automatic deployment
- **Build Script**: `build-github-pages.sh` for manual local builds
- **SPA Support**: 404.html fallback for client-side routing
- **Jekyll Bypass**: .nojekyll file prevents GitHub Pages Jekyll processing
- **Documentation**: Complete deployment guide in `DEPLOYMENT.md`

## Current Implementation Status

The application currently serves as a static portfolio website with:
- Complete UI component system ready for dynamic content
- Database schema defined but using in-memory storage for development
- API routing structure prepared for future backend endpoints
- Sophisticated animation and interaction systems fully implemented
- Full responsive design with dark/light theme support

The architecture is designed to easily scale from a static portfolio to a dynamic application with user authentication, content management, and database integration as needed.