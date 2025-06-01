# System Patterns

## Architecture Overview
Gulf Builders is built using the Astro framework with TypeScript and Tailwind CSS. The architecture follows Astro's file-based routing system and component-based structure to create a highly performant website with minimal client-side JavaScript.

## Key Technical Decisions

### Framework Selection
- **Astro**: Chosen for its exceptional performance through static site generation and partial hydration capabilities
- **TypeScript**: Implemented for type safety and improved developer experience
- **Tailwind CSS**: Selected for utility-first styling that ensures consistency and responsiveness

### Performance Optimization
- Static site generation for fast initial page loads
- Minimal client-side JavaScript using Astro's partial hydration
- Image optimization for gallery and portfolio sections
- Efficient asset loading with appropriate caching strategies

### Component Architecture
- **Layout Components**: Base templates that define the overall structure
- **UI Components**: Reusable interface elements (buttons, cards, forms)
- **Feature Components**: Complex functional units (project galleries, service listings)
- **Page Components**: Full page templates that assemble various components

## Directory Structure
```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── common/    # Shared UI elements
│   │   ├── layout/    # Layout components
│   │   └── features/  # Feature-specific components
│   ├── content/       # Content collections
│   │   ├── projects/  # Project data
│   │   ├── services/  # Services information
│   │   └── team/      # Team member profiles
│   ├── layouts/       # Page layout templates
│   ├── pages/         # Page routes
│   └── styles/        # Global styles
└── styles/            # Root-level styles (e.g., Tailwind)
```

## Design Patterns

### Component Composition
Components are designed to be composable, with clear props interfaces and minimal internal state. This approach facilitates reuse and maintains separation of concerns.

```typescript
// Example component pattern
interface CardProps {
  title: string;
  description: string;
  image?: ImageMetadata;
  link?: string;
}

const Card: FC<CardProps> = ({ title, description, image, link }) => {
  // Component implementation
};
```

### Content Management
Structured content using Astro's content collections for type-safe, manageable content:

```typescript
// Example content schema
export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  completionDate: z.date(),
  category: z.enum(["residential", "commercial", "industrial"]),
  images: z.array(z.string()),
  features: z.array(z.string()),
  client: z.string().optional(),
});
```

### Responsive Design Strategy
- Mobile-first approach using Tailwind breakpoints
- Consistent spacing system using Tailwind's spacing scale
- Component-level responsiveness rather than page-level overrides

### State Management
- Minimal client-side state using Astro's partial hydration when necessary
- Form state handled with client-side validation and server actions
- Navigation state for mobile menus using minimal JavaScript

## Integration Points
- Contact form submissions to email service
- Image hosting and optimization
- Analytics integration for visitor tracking
- Potential CMS integration for content management 