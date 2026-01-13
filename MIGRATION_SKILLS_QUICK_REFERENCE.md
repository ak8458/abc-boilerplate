# Migration Skills Quick Reference Guide

## Overview

This guide provides quick commands and workflows for using the migration skills in the `.skills` directory for the Alberta Blue Cross website migration.

---

## Skill Discovery

### List All Available Skills

```bash
./.agents/discover-skills
```

**When to use**: At the start of a new session or when you need to see all available skills.

---

## Page Import Workflow (Primary Workflow)

The `page-import` skill is your main orchestrator. It automatically invokes other skills as needed.

### Single Page Migration Command

**Using AI/Cursor**: Simply say:
```
"Import this page: [URL]"
```

**Manual Workflow**: Read the skill and follow the 5 steps:
```bash
# Step 1: Read the page-import skill
cat .skills/page-import/SKILL.md

# Follow the workflow steps outlined in the skill
```

### Page Import Workflow Steps

The page-import skill follows these steps automatically:

#### Step 1: Scrape Webpage
**Skill**: `scrape-webpage`
- Extracts content, metadata, images
- Saves to `./import-work/[domain]/[page-path]/`

**Manual Check**:
```bash
# Verify scrape output
ls -la ./import-work/[domain]/[page-path]/
# Should see: metadata.json, screenshot.png, cleaned.html, images/
```

#### Step 2: Identify Page Structure
**Skill**: `identify-page-structure`
- Identifies section boundaries
- Documents content sequences
- Completes block inventory (if not done)

#### Step 3: Analyze Authoring Approach
**Skill**: `authoring-analysis`
- Maps content to blocks or default content
- Validates block selections
- Determines section styling

#### Step 4: Generate HTML
**Skill**: `generate-import-html`
- Creates structured HTML file
- Copies images to correct location
- Adds metadata block

**Check Output**:
```bash
# Find the generated HTML file
# Location will be in metadata.json under "documentPath"
```

#### Step 5: Preview & Verify
**Skill**: `preview-import`
- Tests in local AEM dev server
- Compares with original
- Validates rendering

**Preview Command**:
```bash
# Make sure dev server is running
aem up

# Then open in browser:
# http://localhost:3000/[page-path]
```

---

## Block Operations

### Block Inventory

**Purpose**: Survey available blocks before starting migration

**Command**:
```bash
# List local blocks
ls -d blocks/*/

# Search Block Collection for common blocks
node .skills/block-collection-and-party/scripts/search-block-collection-github.js hero
node .skills/block-collection-and-party/scripts/search-block-collection-github.js cards
node .skills/block-collection-and-party/scripts/search-block-collection-github.js columns
```

**When to use**: 
- Phase 1 (Discovery)
- Before starting any migration batch
- When you need to know what blocks are available

### Search Block Collection

**Purpose**: Find reference implementations for blocks

**Command**:
```bash
node .skills/block-collection-and-party/scripts/search-block-collection-github.js [block-name]

# Examples:
node .skills/block-collection-and-party/scripts/search-block-collection-github.js accordion
node .skills/block-collection-and-party/scripts/search-block-collection-github.js tabs
node .skills/block-collection-and-party/scripts/search-block-collection-github.js carousel
```

**Output**: Shows if block exists in Block Collection with live example URLs

**Block Collection URL Pattern**:
```
https://main--aem-block-collection--adobe.aem.live/block-collection/[block-name]
```

### Building Custom Blocks

**When needed**: 
- Block doesn't exist in local project or Block Collection
- Need custom functionality (e.g., rate calculator, provider search)

**Skill**: `content-driven-development` → `building-blocks`

**AI Command**:
```
"Build a new [block-name] block for [purpose]"
```

**Process** (follows Content-Driven Development):
1. Design content model
2. Create test content
3. Implement block code
4. Test and validate

---

## Content Modeling

### When to Use Content Modeling Skill

**Triggers**:
- Creating new custom blocks
- Changing structure of existing blocks
- Content model isn't author-friendly
- Unsure how authors should structure content

**Skill**: `content-modeling`

**AI Command**:
```
"Design content model for [block/feature description]"
```

**Key Principle**: Author experience over developer convenience

---

## Testing & Quality Assurance

### Testing Blocks

**Skill**: `testing-blocks`

**When to use**:
- After implementing or modifying blocks
- Before raising a PR
- During Phase 5 (Testing & Launch)

**Test Types**:
1. **Functional Testing**: Does it work?
2. **Cross-Browser Testing**: Chrome, Firefox, Safari, Edge
3. **Accessibility Testing**: Keyboard, screen reader, WCAG compliance
4. **Performance Testing**: Lighthouse, Core Web Vitals

**Lint Check**:
```bash
npm run lint
```

**Auto-fix Lint Issues**:
```bash
npm run lint:fix
```

### Preview Local Changes

**Start Dev Server**:
```bash
aem up

# Or with HTML folder (for temporary local HTML files)
aem up --html-folder drafts
```

**View Pages**:
```
http://localhost:3000/[page-path]
```

**Check Console for Errors**:
- Open browser DevTools (F12)
- Look for JavaScript errors
- Check network tab for failed requests

---

## Common Workflows

### Workflow 1: Migrate a Single Page

```
1. Say: "Import this page: [URL]"
2. AI will invoke page-import skill
3. Wait for completion (5 steps)
4. Preview at http://localhost:3000/[path]
5. Verify quality gates
6. Mark as complete in tracking doc
```

### Workflow 2: Batch Migration (Daily Routine)

**Morning (4-5 pages)**:
```
For each page:
  1. "Import this page: [URL]"
  2. Wait for completion
  3. Move to next page
```

**Afternoon (QA)**:
```
For each migrated page:
  1. Open in browser
  2. Check all quality gates:
     ✓ Content accuracy
     ✓ Visual fidelity
     ✓ Functionality
     ✓ Performance
     ✓ Accessibility
     ✓ SEO
  3. Document issues
  4. Update tracking spreadsheet
```

### Workflow 3: First Time Setup (Phase 1)

```
1. Run block inventory:
   - List local blocks: ls -d blocks/*/
   - Search Block Collection for common blocks
   - Document findings

2. Select 10-15 representative pages across categories

3. For each representative page:
   - Scrape (using scrape-webpage skill)
   - Analyze structure
   - Identify patterns

4. Design content models for major page types

5. Ready for Pilot Phase (Week 3)
```

### Workflow 4: Custom Block Development

```
1. Identify need for custom block
2. "Design content model for [block purpose]"
3. Create test content in CMS or local HTML
4. "Build a new [block-name] block"
5. Test with test content
6. Run linting
7. Document in block inventory
8. Use in migrations
```

---

## File Structure for Migration

### Import Working Directory

```
./import-work/
  └── www.ab.bluecross.ca/
      └── plans/
          └── personal/
              └── young-adult/
                  ├── metadata.json
                  ├── screenshot.png
                  ├── cleaned.html
                  └── images/
                      ├── hero-image.jpg
                      └── ...
```

### Generated Content Files

Content files are generated in the appropriate location based on `documentPath` from metadata.json.

**Example**:
```
# If documentPath is "/plans/personal/young-adult"
# Generated file would be at:
./plans/personal/young-adult.html
./plans/personal/young-adult/
    └── images/
        └── [image files]
```

---

## Quality Gate Checklist

Use this for every migrated page:

### ✓ Content Accuracy
- [ ] All text content migrated
- [ ] No truncation or missing sections
- [ ] Images present and accessible
- [ ] Links functional
- [ ] Metadata preserved (title, description)

### ✓ Visual Fidelity
- [ ] Layout matches original
- [ ] Styling appears correct
- [ ] Responsive behavior works (mobile, tablet, desktop)
- [ ] No rendering errors
- [ ] Whitespace appropriate

### ✓ Functionality
- [ ] Interactive elements work
- [ ] Forms submit properly
- [ ] JavaScript functions correctly
- [ ] No console errors
- [ ] Navigation works

### ✓ Performance
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] FID < 100ms (First Input Delay)
- [ ] CLS < 0.1 (Cumulative Layout Shift)
- [ ] Images optimized
- [ ] Lighthouse score > 90

### ✓ Accessibility
- [ ] Keyboard navigable (Tab, Enter, Space work)
- [ ] Screen reader friendly (use NVDA/JAWS to test)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text present on images
- [ ] Color contrast sufficient (4.5:1 for text)
- [ ] Form labels associated

### ✓ SEO
- [ ] Title tag set correctly
- [ ] Meta description present
- [ ] Canonical URL correct
- [ ] Structured data intact (if present on original)
- [ ] Robots directives appropriate
- [ ] Mobile-friendly

---

## Troubleshooting

### Issue: Page won't render in local preview

**Check**:
```bash
# 1. Is dev server running?
ps aux | grep aem

# 2. Is the file in the right location?
ls -la [expected-path].html

# 3. Check console errors in browser DevTools

# 4. Restart dev server
aem up
```

### Issue: Images not showing

**Check**:
```bash
# 1. Are images in correct folder?
ls -la [page-path]/images/

# 2. Check HTML references
# Image paths should be relative: ./images/[filename]

# 3. Check browser DevTools Network tab
# Look for 404 errors on images
```

### Issue: Block not rendering correctly

**Check**:
```bash
# 1. Does block exist?
ls -la blocks/[block-name]/

# 2. Check block table structure in HTML
# Table must have correct structure for AEM

# 3. Check console for decoration errors

# 4. Verify block CSS and JS loaded
# Check Network tab in DevTools
```

### Issue: Linting errors

**Fix**:
```bash
# Run auto-fix
npm run lint:fix

# If still errors, check output for specifics
npm run lint

# Common issues:
# - Missing semicolons
# - Incorrect indentation
# - Unused variables
```

### Issue: Performance too slow

**Optimize**:
```bash
# 1. Check image sizes
# Large images should be resized/compressed

# 2. Check for blocking scripts
# Review JavaScript loading

# 3. Run Lighthouse in DevTools
# Gives specific recommendations

# 4. Check for large CSS/JS files
# May need code splitting
```

---

## Key Commands Reference

### AEM Dev Server
```bash
aem up                          # Start dev server
aem up --html-folder drafts     # Use drafts folder
```

### Linting
```bash
npm run lint                    # Check for linting errors
npm run lint:fix                # Auto-fix linting errors
```

### Block Operations
```bash
ls -d blocks/*/                 # List local blocks
```

### File Operations
```bash
# Check migration output
ls -la ./import-work/[domain]/[path]/

# View HTML file
cat [page-path].html

# View metadata
cat ./import-work/[domain]/[path]/metadata.json
```

### Testing
```bash
# Open in browser
open http://localhost:3000/[page-path]

# Check for broken links (if tool installed)
# [Install link checker tool as needed]
```

---

## Browser Testing Checklist

### Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Viewport Testing
- [ ] 1920x1080 (Desktop)
- [ ] 1366x768 (Laptop)
- [ ] 768x1024 (Tablet)
- [ ] 375x667 (Mobile)

### Testing Actions
For each viewport/browser:
1. Load page
2. Scroll through entire page
3. Click all interactive elements
4. Fill and submit any forms
5. Check navigation
6. Take screenshot if issues found

---

## Performance Testing

### Lighthouse (Chrome DevTools)

```
1. Open page in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
5. Choose device (Mobile/Desktop)
6. Click "Analyze page load"
7. Review results
8. Target scores: 90+ in all categories
```

### Core Web Vitals

**What to measure**:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

**How to measure**:
- Run Lighthouse (includes CWV)
- Use Chrome DevTools Performance tab
- Check real user metrics in production

---

## Accessibility Testing

### Keyboard Navigation
```
Test with keyboard only:
- Tab: Move forward through interactive elements
- Shift+Tab: Move backward
- Enter/Space: Activate buttons/links
- Arrow keys: Navigate within components
- Esc: Close modals/dialogs

All functionality should be accessible via keyboard
```

### Screen Reader Testing

**Windows**: Use NVDA (free)
**Mac**: Use VoiceOver (built-in, Cmd+F5)

**Basic Test**:
1. Turn on screen reader
2. Navigate page with Tab
3. Verify all content is announced
4. Check that images have alt text
5. Verify form labels are read
6. Test heading navigation

### Color Contrast

**Tool**: axe DevTools (Chrome extension)

```
1. Install axe DevTools
2. Open DevTools
3. Go to "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Review "Contrast" issues
6. Fix any violations
```

---

## URL Redirect Planning

### Creating URL Mapping

```
For each page:
1. Original URL: https://www.ab.bluecross.ca/old/path
2. New URL: /new/path
3. Redirect type: 301 (permanent)
4. Status: Pending/Implemented/Tested

Document in spreadsheet or URL_MAPPING.csv
```

### Redirect Testing

```bash
# Test redirect (manual)
curl -I https://www.ab.bluecross.ca/old/path

# Should return:
# HTTP/1.1 301 Moved Permanently
# Location: /new/path

# Or use redirect checker tool:
# [Install redirect checker as needed]
```

---

## Daily Workflow Summary

### Morning Routine
```
1. Update tracking document with today's plan
2. Check for blockers from yesterday
3. Select pages from current batch
4. Begin migrations (target: 4-5 pages)
5. Document issues as they arise
```

### Afternoon Routine
```
1. QA all morning's migrated pages
2. Run quality gate checklist for each
3. Cross-browser spot checks
4. Document issues in tracking doc
5. Update progress metrics
6. Prepare tomorrow's page list
```

### End of Day
```
1. Update tracking document:
   - Pages completed
   - Issues found
   - Blockers identified
2. Commit any code changes
3. Push updates to shared repository
4. Brief summary to team (if applicable)
```

---

## Resources & Links

### Documentation
- [Migration Strategy](./MIGRATION_STRATEGY.md)
- [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md)
- [Block Collection](https://www.aem.live/developer/block-collection)
- [AEM Docs](https://www.aem.live/docs/)

### Skills Location
```
.skills/
├── page-import/
├── scrape-webpage/
├── identify-page-structure/
├── page-decomposition/
├── authoring-analysis/
├── generate-import-html/
├── preview-import/
├── block-inventory/
├── content-modeling/
├── building-blocks/
├── testing-blocks/
├── content-driven-development/
└── block-collection-and-party/
```

### Key Scripts
```
.agents/discover-skills                                     # List all skills
.skills/block-collection-and-party/scripts/search-block-collection-github.js  # Search blocks
.skills/content-driven-development/scripts/find-block-content.js              # Find block usage
```

---

## Quick Tips

### Speed Up Migration
- Run page imports in parallel (if team size allows)
- Create templates for common page types
- Reuse content models across similar pages
- Batch similar pages together

### Ensure Quality
- Don't skip quality gates
- Test as you go, not all at end
- Get SME review on critical pages
- Use automated tools where possible

### Stay Organized
- Update tracking doc daily
- Use consistent naming conventions
- Document decisions and rationale
- Keep communication clear

### When Stuck
1. Check this guide
2. Read the relevant skill's SKILL.md
3. Search AEM documentation
4. Ask team member
5. Document the solution for next time

---

## Common Patterns

### Page with Hero + Cards + CTA

**Structure**:
```
Section 1: Hero block
Section 2: Default content (intro paragraph)
Section 3: Cards block
Section 4: Default content (CTA)
```

### Form Page

**Structure**:
```
Section 1: Hero (or simple heading)
Section 2: Form block (custom)
Section 3: Default content (disclaimer/fine print)
```

### Resource/Article Page

**Structure**:
```
Section 1: Hero (title, date, author)
Section 2: Default content (article body)
Section 3: Fragment block (related resources)
```

### Landing Page

**Structure**:
```
Section 1: Hero block
Section 2: Columns block (features/benefits)
Section 3: Cards block (options/products)
Section 4: Quote block (testimonial)
Section 5: Default content (CTA)
```

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-13 | 1.0 | Initial quick reference guide | Migration Team |
