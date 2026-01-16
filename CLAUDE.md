# CLAUDE.md - AI Assistant Guide for qtron-homepage

## Project Overview

**Repository**: qtron-homepage
**Purpose**: Homepage/website project for Qtron
**Status**: New project - initial setup phase

This document provides comprehensive guidance for AI assistants working on this codebase.

---

## Repository Status

**Current State**: This is a newly initialized repository with no existing codebase yet.

**Initial Setup Required**:
- Project structure needs to be established
- Technology stack needs to be selected
- Development tooling needs to be configured
- Build and deployment pipelines need to be set up

---

## Recommended Project Structure

Since this is a homepage project, here are recommended structures based on common frameworks:

### Option 1: Next.js (Recommended for modern React projects)
```
qtron-homepage/
├── .github/              # GitHub Actions workflows
├── public/               # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/             # App directory (Next.js 13+)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/      # Reusable components
│   │   ├── ui/         # UI primitives
│   │   └── sections/   # Page sections
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── styles/         # Global styles
├── tests/              # Test files
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

### Option 2: Vite + React
```
qtron-homepage/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Option 3: Static Site (HTML/CSS/JS)
```
qtron-homepage/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
├── index.html
└── README.md
```

---

## Development Workflow

### Branch Strategy

- **Main Branch**: `main` or `master` (to be determined)
- **Feature Branches**: Use format `claude/claude-md-<session-id>-<description>`
- **Current Working Branch**: `claude/claude-md-mkh8mdd2s4e2oou5-ERCln`

### Git Workflow

1. **Always work on feature branches**
2. **Commit frequently** with clear, descriptive messages
3. **Push to origin** when changes are complete: `git push -u origin <branch-name>`
4. **Create pull requests** for review before merging to main

### Commit Message Conventions

Use conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add hero section to homepage`

---

## Technology Stack Recommendations

### Core Technologies (to be decided)
- **Framework**: Next.js 14+, Vite + React, or Vanilla JS
- **Language**: TypeScript (recommended) or JavaScript
- **Styling**: Tailwind CSS, CSS Modules, or Styled Components
- **Package Manager**: npm, yarn, or pnpm

### Development Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest + React Testing Library (for React projects)
- **Build Tool**: Framework-specific (Next.js, Vite, etc.)

---

## Coding Conventions

### General Guidelines

1. **File Naming**:
   - Components: PascalCase (`HeroSection.tsx`)
   - Utilities: camelCase (`formatDate.ts`)
   - Styles: kebab-case or match component name
   - Test files: `*.test.ts` or `*.spec.ts`

2. **Code Style**:
   - Use TypeScript for type safety
   - Prefer functional components over class components (React)
   - Use const for variables that don't change
   - Use meaningful variable and function names
   - Keep functions small and focused

3. **Component Structure** (React):
   ```tsx
   // 1. Imports
   import React from 'react';
   import { someUtil } from '@/lib/utils';

   // 2. Types/Interfaces
   interface ComponentProps {
     title: string;
     description?: string;
   }

   // 3. Component
   export function Component({ title, description }: ComponentProps) {
     // Component logic
     return (
       <div>
         <h1>{title}</h1>
         {description && <p>{description}</p>}
       </div>
     );
   }
   ```

4. **CSS/Styling**:
   - Mobile-first responsive design
   - Use CSS variables for theming
   - Follow BEM methodology if using vanilla CSS
   - Use utility classes if using Tailwind

### Accessibility Standards

- Use semantic HTML elements
- Include ARIA labels where appropriate
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA minimum)
- Add alt text to all images

### Performance Best Practices

- Optimize images (use WebP, lazy loading)
- Code splitting for large applications
- Minimize bundle size
- Use caching strategies
- Implement proper SEO meta tags

---

## Testing Strategy

### Unit Tests
- Test individual components and functions
- Aim for >80% code coverage on critical paths
- Use Jest and React Testing Library

### Integration Tests
- Test component interactions
- Test API integrations

### E2E Tests (Optional)
- Consider Playwright or Cypress for critical user flows

---

## Deployment Guidelines

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Lighthouse scores acceptable (Performance, Accessibility, SEO)
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags configured

### Deployment Platforms (to be decided)
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages (for static sites)
- AWS S3 + CloudFront

---

## AI Assistant Guidelines

### When Working on This Project

1. **Always Read Before Modifying**:
   - Never propose changes to code you haven't read
   - Understand existing patterns before adding new code

2. **Maintain Consistency**:
   - Follow the established code style
   - Match existing naming conventions
   - Use the same libraries and patterns as the codebase

3. **Keep It Simple**:
   - Don't over-engineer solutions
   - Avoid adding features beyond what's requested
   - Don't refactor code unless explicitly asked

4. **Security First**:
   - Validate user inputs
   - Avoid XSS, SQL injection, and other OWASP vulnerabilities
   - Don't commit secrets or API keys
   - Use environment variables for sensitive data

5. **Use Task Management**:
   - Use TodoWrite tool for complex tasks
   - Break down large tasks into smaller steps
   - Mark tasks as completed as you finish them

6. **Communication**:
   - Be concise and clear
   - Explain technical decisions when necessary
   - Ask questions if requirements are unclear

7. **Git Operations**:
   - Always work on the designated feature branch
   - Commit with clear, descriptive messages
   - Push using: `git push -u origin <branch-name>`
   - Only push to branches starting with 'claude/' and ending with matching session ID

8. **Testing**:
   - Run tests after making changes
   - Fix any breaking tests before committing
   - Add tests for new functionality

---

## Project-Specific Conventions

### Not Yet Established

Since this is a new project, conventions will be established as the codebase grows. Key decisions needed:

1. **Technology Stack**: What framework/library to use?
2. **Styling Approach**: Tailwind, CSS Modules, or something else?
3. **State Management**: Context API, Redux, Zustand, or none?
4. **API Integration**: REST, GraphQL, or none?
5. **Deployment Target**: Where will this be hosted?

These should be documented here once decided.

---

## Environment Setup

### Prerequisites (to be determined)
```bash
# Example for Node.js project
node >= 18.x
npm >= 9.x
```

### Installation Steps
```bash
# Once project is initialized
git clone <repository-url>
cd qtron-homepage
npm install
npm run dev
```

### Environment Variables
Create a `.env.local` file (never commit this):
```
# Example variables - adjust as needed
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=
```

---

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run test         # Run tests

# Git Operations
git status           # Check current status
git add .            # Stage all changes
git commit -m ""     # Commit with message
git push -u origin <branch>  # Push to remote
```

---

## Resources & Documentation

### Framework Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

### Styling
- [Tailwind CSS](https://tailwindcss.com/docs)
- [CSS-Tricks](https://css-tricks.com)

### Best Practices
- [Web.dev](https://web.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [React Best Practices](https://react.dev/learn)

---

## Troubleshooting

### Common Issues

**Build Failures**:
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache
- Check for TypeScript errors

**Git Issues**:
- If push fails with 403: Ensure branch name starts with 'claude/' and ends with session ID
- If merge conflicts: Carefully review and resolve conflicts

**Development Server Issues**:
- Check if port is already in use
- Verify environment variables are set
- Check for console errors

---

## Project Roadmap

### Phase 1: Initial Setup
- [ ] Choose technology stack
- [ ] Set up project structure
- [ ] Configure development tools
- [ ] Set up CI/CD pipeline

### Phase 2: Core Development
- [ ] Design homepage layout
- [ ] Implement responsive design
- [ ] Add content sections
- [ ] Optimize performance

### Phase 3: Polish & Deploy
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Production deployment

---

## Contact & Support

For questions or issues:
1. Check existing documentation
2. Review similar patterns in the codebase
3. Consult framework documentation
4. Create an issue in the repository

---

## Changelog

### 2026-01-16
- Initial CLAUDE.md created
- Project structure recommendations added
- Development workflows documented
- AI assistant guidelines established

---

**Last Updated**: 2026-01-16
**Version**: 1.0.0
**Maintainer**: AI Assistant (Claude)
