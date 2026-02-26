# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Adobe Experience Manager (AEM) Edge Delivery Services project for migrating Alberta Blue Cross websites (~500+ pages) to AEM Edge Delivery. The project uses a content-driven development methodology with a custom skills-based workflow system.

## Essential Commands

### Development
```bash
# Install dependencies
npm i

# Start local development server (opens browser at http://localhost:3000)
aem up

# Linting
npm run lint           # Run both JS and CSS linting
npm run lint:js        # ESLint only
npm run lint:css       # Stylelint only
npm run lint:fix       # Auto-fix linting issues
```

## Architecture Overview

### Core Structure

```
blocks/          # UI components (cards, columns, footer, header, hero, fragment)
scripts/
  ├── aem.js     # Core AEM library with decoration, block loading, and RUM functions
  └── scripts.js # Main entry point defining page lifecycle (loadEager/loadLazy/loadDelayed)
styles/          # Global styles and fonts
.skills/         # Custom development workflow skills (MANDATORY to use)
.agents/         # Helper scripts for skill discovery
discovery-templates/  # Migration discovery documentation
```

### Page Lifecycle (scripts/scripts.js)

The main page load sequence follows three phases:

1. **loadEager()**: Runs immediately for LCP (Largest Contentful Paint)
   - Decorates main content (buttons, icons, sections, blocks)
   - Builds auto-blocks (hero, fragments)
   - Loads first section for fast paint

2. **loadLazy()**: Runs after LCP
   - Loads header and footer
   - Loads remaining sections
   - Handles hash navigation

3. **loadDelayed()**: Runs 3 seconds after page load
   - Defers non-critical functionality
   - Imports delayed.js for analytics, etc.

### Block Architecture

Each block in `blocks/` follows this pattern:
```
blocks/[block-name]/
  ├── [block-name].js   # Decoration logic (exported default function)
  └── [block-name].css  # Block-specific styles
```

Blocks are automatically discovered and loaded by the AEM framework based on content authoring.

## Skills System (CRITICAL)

**YOU ARE REQUIRED TO USE THE SKILLS IN .skills/ FOR ALL DEVELOPMENT WORK.**

### Discovering Skills

Before starting any work, run:
```bash
./.agents/discover-skills
```

This shows all available skills without loading everything into context.

### Using Skills

1. Identify the appropriate skill from the list
2. Read the full SKILL.md file from `.skills/[skill-name]/SKILL.md`
3. Announce: "Using Skill: [Skill Name]"
4. Follow the skill's instructions exactly as written

### Key Skills

- **content-driven-development**: MANDATORY for all development involving blocks, core scripts, or functionality. Orchestrates other skills throughout the workflow.
- **building-blocks**: For creating or modifying blocks
- **content-modeling**: For designing content structures
- **testing-blocks**: For comprehensive block testing
- **block-collection-and-party**: For finding reference implementations
- Migration skills: authoring-analysis, block-inventory, page-decomposition, generate-import-html, etc.

### Content-Driven Development (CDD)

**NEVER start writing or modifying code without first identifying or creating test content.**

CDD principles:
- Author needs come before developer needs
- Create/identify test content before coding
- Test content doubles as PR validation and documentation
- Use real content to reveal edge cases

Apply CDD to:
- Creating/modifying blocks
- Changes to core decoration functionality
- Bug fixes requiring validation
- Any code affecting author experience

## Code Standards

### ESLint Configuration
- Extends Airbnb base style guide
- Requires `.js` extensions in imports
- Unix linebreaks enforced
- Parameter property reassignment allowed (`no-param-reassign: [2, { props: false }]`)

### Security Rules (Cursor .cursor/rules/)
This codebase follows a **security-first** mindset with comprehensive security rules covering:
- Input validation and sanitization
- Output encoding
- Injection prevention (SQL, XSS, etc.)
- Authentication and authorization
- API security
- Data protection
- Dependency management
- Error handling without information disclosure

All security violations must include clear explanations of which rule was triggered.

## Development Workflow

1. **Discover skills** with `./.agents/discover-skills`
2. **Select appropriate skill(s)** based on task requirements
3. **Read AGENTS.md** for detailed skill usage instructions
4. **Follow content-driven development**:
   - Identify/create test content first
   - Design content model (if needed)
   - Implement code against real content
   - Test with actual author workflows
5. **Lint before committing**: `npm run lint:fix`

## Migration Context

This project is migrating three Alberta Blue Cross websites:
- Main: https://www.ab.bluecross.ca/ (~300+ pages)
- Blog: https://blog.ab.bluecross.ca/
- Community: https://www.community.ab.bluecross.ca/

Key migration documents:
- MIGRATION_README.md: Documentation hub and project overview
- MIGRATION_STRATEGY.md: 16-week timeline and methodology
- MIGRATION_TRACKING_TEMPLATE.md: Progress tracking
- SITEMAP_ANALYSIS.md: Complete page inventory (~450 pages analyzed)
- MIGRATION_SKILLS_QUICK_REFERENCE.md: Hands-on migration guide

## AEM Edge Delivery Specifics

### Content Authoring
- Content is authored in Google Docs or Microsoft SharePoint
- Content is transformed into semantic HTML at build time
- Blocks are identified by CSS classes and automatically decorated

### Auto-blocking (scripts/scripts.js)
The framework automatically creates certain blocks:
- **Hero block**: Auto-created when h1 precedes a picture element
- **Fragment block**: Auto-created for links to `/fragments/*`

### Decoration Functions (scripts/aem.js)
Core functions available from aem.js:
- `decorateButtons()`, `decorateIcons()`, `decorateSections()`, `decorateBlocks()`
- `loadHeader()`, `loadFooter()`, `loadSection()`, `loadSections()`
- `buildBlock()`: Programmatically create blocks
- `loadCSS()`: Load stylesheets
- RUM (Real User Monitoring) via `sampleRUM()`

### Block Decoration Pattern
Each block's JS file exports a default function that:
1. Receives the block element as first parameter
2. Manipulates the DOM to create the final structure
3. Returns nothing (modifies in place)

```javascript
export default function decorate(block) {
  // Transform block DOM here
}
```

## Important Notes

- Read AGENTS.md before starting development work
- The skills system is not optional—it encodes project best practices
- Test content must exist before code implementation begins
- Security rules in .cursor/rules/ must be followed for all code changes
- AEM CLI (`aem up`) is required for local development with live reload
