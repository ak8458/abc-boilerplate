# Consolidated Session Guide
## Quick Reference for Week 3 & Week 4 Discovery Sessions

This guide provides streamlined templates for the remaining discovery sessions. Each follows a consistent structure while addressing session-specific objectives.

---

## Session Template Structure

All session templates include:
1. **Session Header**: Duration, date, facilitator, objectives
2. **Attendees**: Required participants from ABC and Adobe
3. **Pre-Session Prep**: Materials and preparation needed
4. **Agenda**: Time-boxed discussion topics with capture areas
5. **Outputs**: Action items, decisions, deliverables
6. **Next Steps**: Connection to follow-on sessions

---

# Week 3: Edge Delivery Services

## Session 3.1: Edge Delivery Architecture & Best Practices

**Duration:** 3 hours | **Facilitator:** Technical Architect

### Key Objectives
- Introduce Edge Delivery Services architecture
- Select document authoring platform
- Set up GitHub repository approach
- Define development standards and processes
- Review agile methodology
- Establish performance and accessibility targets

### Critical Questions

**Architecture & Approach:**
- Document authoring tool preference: Adobe Author Bus / SharePoint / Google Drive?
- GitHub: Public repo or private/enterprise?
- Existing GitHub experience level?
- CI/CD pipeline expectations?
- Local development environment setup?

**Development Standards:**
- JavaScript framework comfort level (vanilla JS, modern ES6+)?
- CSS methodology (BEM, utility-first, etc.)?
- Code review process?
- Testing approach (manual, automated)?
- Browser support requirements?

**Performance Targets:**
- PageSpeed Insights target: 90+ (desktop), 90+ (mobile)
- Core Web Vitals targets: LCP, FID, CLS
- Accessibility compliance: WCAG 2.1 Level AA
- SEO requirements: Match or exceed current scores

**Agile Process:**
- Sprint duration: 1-week or 2-week sprints?
- Story point sizing approach?
- Definition of Done?
- Sprint ceremonies: planning, daily standups, review, retro?
- Backlog grooming frequency?

### Key Deliverables
- [ ] Solution design and architecture document
- [ ] Development standards document
- [ ] GitHub repository created
- [ ] Document authoring platform selected
- [ ] Sprint 0 backlog initialized

---

## Session 3.2: Template & Block Requirements Workshop

**Duration:** 4 hours | **Facilitator:** Technical Lead

### Key Objectives
- Review all 4 website designs and components
- Define single template requirements
- Identify and spec all 12 blocks
- Prioritize block development order
- Map blocks to pages for migration planning

### Block Discovery Process

For each block, capture:
1. **Block Name**: Descriptive, lowercase-hyphen format
2. **Purpose**: What it does
3. **Content Model**: Author inputs (rows/columns structure)
4. **Variations**: Different configurations
5. **Used On**: Which pages/sites
6. **Priority**: Must-have for MVP vs. later
7. **Complexity**: Low/Medium/High
8. **Dependencies**: Other blocks or features needed

### Example Block Documentation

**Block: Hero**
- **Purpose**: Large banner with headline, text, CTA, background image
- **Content Model**:
  ```
  | Hero |
  |------|
  | ![Background Image](image.jpg) |
  | Headline text |
  | Supporting text paragraph |
  | [CTA Text](link-url) |
  | Background: light/dark/image |
  ```
- **Variations**: Centered, left-aligned, video background, carousel
- **Used On**: Homepage, product landing pages (all 4 sites)
- **Priority**: P0 (required for MVP)
- **Complexity**: Medium (responsive images, video support)
- **Dependencies**: None

### Block Inventory Template

| # | Block Name | Purpose | Priority | Complexity | Sites | MVP? |
|---|------------|---------|----------|------------|-------|------|
| 1 | Header | Global navigation | P0 | High | All | Yes |
| 2 | Footer | Global footer | P0 | Medium | All | Yes |
| 3 | Hero | Landing page banner | P0 | Medium | All | Yes |
| 4 | Cards | Content cards grid | P0 | Low | All | Yes |
| 5 | Columns | Multi-column layout | P0 | Low | All | Yes |
| 6 | Accordion | Expandable content | P1 | Low | Main, Blog | Yes |
| 7 | Tabs | Tabbed content | P1 | Medium | Main, Community | No |
| 8 | Form | Contact/quote forms | P0 | High | All | Yes |
| 9 | Testimonials | Customer quotes | P1 | Low | Main, Community | No |
| 10 | Media | Images/video embeds | P0 | Medium | All | Yes |
| 11 | CTA | Call-to-action block | P0 | Low | All | Yes |
| 12 | Breadcrumbs | Navigation aid | P1 | Low | All | No |

### Template Requirements

**Single Template Structure:**
```html
<!DOCTYPE html>
<html>
<head>
  <!-- metadata, SEO, OG tags -->
</head>
<body>
  <header class="header"></header>
  <main>
    <!-- blocks/sections here -->
  </main>
  <footer class="footer"></footer>
</body>
</html>
```

**Template Features:**
- [ ] Responsive design (mobile-first)
- [ ] Semantic HTML5
- [ ] Accessibility (ARIA labels, focus management)
- [ ] SEO optimization (structured data, meta tags)
- [ ] Performance optimization (lazy loading, async)
- [ ] Analytics integration (Tealium)

### Key Deliverables
- [ ] Block requirements specification (all 12 blocks)
- [ ] Template design documentation
- [ ] Component prioritization matrix
- [ ] Content model documentation per block
- [ ] Responsive design requirements

---

## Session 3.3: Content Authoring & Workflow

**Duration:** 2 hours | **Facilitator:** Solution Analyst

### Key Objectives
- Define content authoring process in document-based system
- Review preview and publish workflows
- Understand content versioning needs
- Define content governance

### Content Author Experience

**Creating a Page:**
1. Author opens document (Word/Google Doc/SharePoint)
2. Uses content blocks in table format
3. Previews in browser
4. Submits for approval (if required)
5. Publishes to production
6. Monitors live site

**Key Questions:**
- Current author comfort with Word/Google Docs?
- HTML/Markdown knowledge level?
- Willingness to learn table-based authoring?
- Image handling preferences?
- Link management approach?

**Content Blocks (Authoring Format):**

Example: Cards block authoring
```
| Cards |
|-------|
| ![Image 1](image1.jpg) |
| ## Card Title 1 |
| Card description text |
| [Learn More](link1) |
| --- |
| ![Image 2](image2.jpg) |
| ## Card Title 2 |
| Card description text |
| [Learn More](link2) |
```

### Workflow Definition

**Content Creation Workflow:**
```
Draft → Review → Approve → Publish → Monitor
  ↓       ↓        ↓         ↓         ↓
Save   Comment  Approve   Push to  Analytics
Draft   Request  Via       Prod     Tracking
        Changes  Email/
                 Workflow
```

**Workflow Requirements:**
- Who can create content: Content authors, marketing team
- Who must approve: Marketing manager, brand manager (for sensitive content)
- Approval SLA: 2 business days
- Emergency publish process: Direct publish for authorized users
- Rollback capability: Git history allows rollback

**Preview Environments:**
- [ ] Local preview (author's machine)
- [ ] Shared dev preview (before production)
- [ ] Production preview (preview on prod domain)
- [ ] Mobile preview
- [ ] Responsive device testing

### Key Deliverables
- [ ] Authoring guide requirements
- [ ] Workflow documentation
- [ ] Content governance framework
- [ ] Preview strategy
- [ ] Training plan outline

---

## Session 3.4: Migration Strategy & Prioritization

**Duration:** 3 hours | **Facilitator:** Solution Analyst + Technical Architect

### Key Objectives
- Audit all 780 pages across 4 sites
- Define MVP scope (single user journey)
- Prioritize page migration order
- Plan content conversion approach
- Define testing and validation

### Website Inventory

**Site 1: www.ab.bluecross.ca (400 pages)**
- Homepage: P0
- Product pages (Individual, Family, Senior, Employer): P0
- About us: P1
- News/blog: P2
- Resources: P1
- Contact: P0
- Total for MVP: ___ pages

**Site 2: blog.ab.bluecross.ca (300 pages)**
- Recent posts (last 6 months): P0
- Popular posts: P0
- Category pages: P1
- Archive: P2
- Total for MVP: ___ pages

**Site 3: www.careers.ab.bluecross.ca (5 pages)**
- All pages: P0 (only 5 pages)
- Recommended MVP site due to small size

**Site 4: www.community.ab.bluecross.ca (75 pages)**
- Homepage: P0
- Key program pages: P0
- Event pages: P1
- Archive: P2
- Total for MVP: ___ pages

### MVP Definition

**Recommendation: Start with Careers Site (5 pages)**
- Smallest site, easiest to prove value
- Complete site migration shows end-to-end process
- Low risk, high learning value
- Can complete in 1-2 sprints

**MVP Scope:**
- Careers homepage
- Current openings page
- Benefits page
- Culture page
- Apply/contact page

**MVP Success Criteria:**
- All 5 pages migrated and live
- PageSpeed score > 90
- Accessibility compliant
- All blocks functional
- Authors trained
- SEO preserved

### Migration Phases

**Phase 1: MVP (Careers - 5 pages) - Sprint 1-2**
- Build blocks: Header, Footer, Hero, Cards, Columns, Form
- Migrate 5 pages
- Test thoroughly
- Go live
- Duration: 2 weeks

**Phase 2: Main Site Core (www - 50 pages) - Sprint 3-6**
- Add blocks: Accordion, Tabs, Media, CTA
- Migrate homepage + top 50 pages
- Product landing pages
- Duration: 4 weeks

**Phase 3: Main Site Complete (www - 350 pages) - Sprint 7-10**
- Complete main site migration
- Handle edge cases
- Duration: 4 weeks

**Phase 4: Blog & Community (375 pages) - Sprint 11-12**
- Migrate blog and community sites
- Bulk page creation
- Duration: 2 weeks

### Content Conversion Strategy

**Automated Conversion:**
- Use page-import skill for initial conversion
- Scrape existing pages
- Map to blocks automatically where possible
- Generate structured HTML for authoring

**Manual Conversion:**
- Complex layouts
- Custom components not mappable to blocks
- SEO-critical pages requiring extra attention

**Quality Assurance:**
- Visual comparison (before/after)
- Functional testing (forms, links, etc.)
- Performance testing
- Accessibility testing
- SEO validation
- UAT by content owners

### URL Strategy

**URL Preservation:**
- Keep existing URL structure: Yes (for SEO)
- Set up redirects: Only if URLs must change
- Redirect approach: Edge Delivery redirects in metadata

**Sitemap:**
- Generate new sitemap.xml automatically
- Submit to search engines post-migration

### Key Deliverables
- [ ] Adoption roadmap and migration plan
- [ ] MVP scope definition (5-page careers site)
- [ ] Migration backlog with priorities
- [ ] Content conversion strategy
- [ ] Testing and validation plan
- [ ] URL mapping and redirect plan

---

# Week 4: Headless & Integration

## Session 4.1: Headless Use Cases & Content Strategy

**Duration:** 3 hours | **Facilitator:** Technical Architect

### Key Objectives
- Identify all headless content use cases
- Define API consumption scenarios
- Review omnichannel content delivery
- Select pilot project

### Headless Content Consumers

**1. Member Services Portal (ECA & Mobile App)**
- **Content Needed**: Plan information, FAQs, help content, notifications
- **Update Frequency**: Weekly or as needed
- **Consumption**: GraphQL API
- **Personalization**: Member type, plan type
- **Priority**: High

**2. Online Enrollment & Administration (OEA)**
- **Content Needed**: Product descriptions, terms & conditions, help text
- **Update Frequency**: Quarterly (or product changes)
- **Consumption**: REST or GraphQL API
- **Personalization**: Employer type, plan selection
- **Priority**: High

**3. Online Health Providers (OHP)**
- **Content Needed**: Provider resources, policy information, forms
- **Update Frequency**: Monthly
- **Consumption**: GraphQL API
- **Personalization**: Provider type
- **Priority**: Medium

**4. Group Sales Online (GSO)**
- **Content Needed**: Product information, sales resources, quotes
- **Update Frequency**: Weekly
- **Consumption**: GraphQL API
- **Personalization**: Group size, industry
- **Priority**: Medium

**5. Email Campaigns (Marketo)**
- **Content Needed**: Campaign content snippets, product updates
- **Update Frequency**: Per campaign
- **Consumption**: API integration
- **Priority**: Future phase

### Content Fragment Use Cases

**Use Case 1: Product Information**
- **Content**: Plan details, pricing, features, eligibility
- **Consumed By**: All portals, website
- **Update Frequency**: Quarterly
- **Content Model**: Product fragment

**Use Case 2: FAQ Content**
- **Content**: Question/answer pairs
- **Consumed By**: Website, portals, mobile app
- **Update Frequency**: As needed
- **Content Model**: FAQ fragment

**Use Case 3: Policy/Legal Content**
- **Content**: Terms, conditions, policies
- **Consumed By**: All channels
- **Update Frequency**: As policies change
- **Content Model**: Legal document fragment

### Pilot Project Selection

**Recommendation: Product Information for Member Services Portal**
- High value, high visibility
- Clear API consumption pattern
- Realistic content volume
- Manageable complexity

**Pilot Scope:**
- Create Product content fragment model
- Migrate 5-10 products
- Build GraphQL queries
- Integrate with Member Services portal (one area)
- Measure success

### Key Deliverables
- [ ] Headless content audit
- [ ] Headless readiness strategy
- [ ] Pilot project definition
- [ ] API requirements
- [ ] Content reuse strategy

---

## Session 4.2: Content Models & Taxonomy Workshop

**Duration:** 3 hours | **Facilitator:** Technical Architect + Solution Analyst

### Key Objectives
- Define 3 content fragment models
- Establish taxonomy and metadata
- Review multilingual needs
- Define content relationships

### Content Fragment Model Template

**For Each Model, Define:**
1. **Model Name**: Descriptive name
2. **Purpose**: What content it represents
3. **Used By**: Which channels/applications
4. **Fields**: All attributes with type, validation, required
5. **References**: Links to other fragments or assets
6. **Variations**: Language or channel variations
7. **Workflow**: Approval needed?

### Content Model 1: Product Information

**Purpose:** Structured product data for all channels

**Fields:**

| Field Name | Type | Required | Validation | Description |
|------------|------|----------|------------|-------------|
| product-id | Text | Yes | Unique | Internal product ID |
| product-name | Text | Yes | Max 100 chars | Display name |
| product-type | Dropdown | Yes | Individual/Family/Senior/Employer | Category |
| short-description | Textarea | Yes | Max 250 chars | Brief summary |
| long-description | Rich Text | Yes | Max 2000 words | Full description |
| key-features | Multi-text | Yes | | List of features |
| pricing-summary | Text | No | | Pricing overview |
| eligibility | Rich Text | Yes | | Who can enroll |
| coverage-details | Rich Text | Yes | | What's covered |
| exclusions | Rich Text | No | | What's not covered |
| product-image | Asset Ref | Yes | | Main product image |
| documents | Asset Refs | No | | Brochures, forms |
| effective-date | Date | Yes | | When available |
| expiration-date | Date | No | | When discontinued |
| target-audience | Tags | Yes | | Audience segments |

**GraphQL Query Example:**
```graphql
query getProduct($productId: String!) {
  productByPath(path: $productId) {
    productName
    productType
    shortDescription
    longDescription
    keyFeatures
    productImage {
      _path
      _authorUrl
    }
  }
}
```

### Content Model 2: FAQ

**Purpose:** Question and answer content reusable across channels

**Fields:**

| Field Name | Type | Required | Validation | Description |
|------------|------|----------|------------|-------------|
| question | Text | Yes | Max 200 chars | The question |
| answer | Rich Text | Yes | Max 1000 words | The answer |
| category | Dropdown | Yes | Products/Claims/Account/etc. | FAQ category |
| keywords | Tags | Yes | | Search keywords |
| related-products | Fragment Refs | No | | Related products |
| last-reviewed | Date | Yes | | Content review date |
| author | Text | No | | Content owner |
| display-order | Number | No | | Sort order |

### Content Model 3: Policy/Legal Document

**Purpose:** Legal and policy content with version control

**Fields:**

| Field Name | Type | Required | Validation | Description |
|------------|------|----------|------------|-------------|
| document-title | Text | Yes | Max 200 chars | Document name |
| document-type | Dropdown | Yes | Policy/Terms/Privacy/etc. | Document category |
| version | Text | Yes | Semver format | Version number |
| effective-date | Date | Yes | | When this version active |
| document-body | Rich Text | Yes | | Full document content |
| summary | Textarea | No | Max 500 chars | Executive summary |
| applies-to | Multi-select | Yes | | Which products/audiences |
| approval-date | Date | Yes | | When approved |
| approved-by | Text | Yes | | Approver name |
| pdf-version | Asset Ref | No | | PDF download |

### Taxonomy for Headless Content

**Content Categories:**
- Products (Individual, Family, Senior, Employer, Dental, Extended Health)
- Content Types (FAQ, Policy, Product Info, Help, Notification)
- Audience (Member, Provider, Employer, Broker, General)
- Channel (Web, Portal, Mobile, Email)
- Status (Draft, Review, Approved, Published, Archived)

### Key Deliverables
- [ ] Content fragment model specifications (3 models)
- [ ] Headless content strategy document
- [ ] Taxonomy documentation
- [ ] GraphQL schema
- [ ] Sample queries and mutations

---

## Session 4.3: Integration Architecture Workshop

**Duration:** 4 hours | **Facilitator:** Technical Architect + Integration Lead

### Key Objectives
- Review all required integrations
- Define integration patterns
- Establish API security
- Plan SSO integration
- Document all data flows

### Integration Inventory

| System | Type | Purpose | Direction | Protocol | Auth | Priority |
|--------|------|---------|-----------|----------|------|----------|
| Azure AD | Identity | SSO, user provisioning | Bidirectional | SAML 2.0 | OAuth 2.0 | P0 |
| Tealium iQX | Analytics | Tag management, tracking | Outbound | JavaScript | API Key | P0 |
| Marketo | Marketing | Forms, tracking, campaigns | Bidirectional | REST API | OAuth 2.0 | P1 |
| Conductor | SEO | SEO monitoring, recommendations | Inbound | REST API | API Key | P1 |
| Seismic | Sales | Asset distribution | Outbound | Asset Selector API | OAuth 2.0 | P0 |
| Member Services | Portal | Content delivery | Outbound | GraphQL | JWT | P0 |
| OEA | Portal | Content delivery | Outbound | GraphQL | JWT | P0 |
| OHP | Portal | Content delivery | Outbound | GraphQL | JWT | P1 |
| GSO | Portal | Content delivery | Outbound | GraphQL | JWT | P1 |
| ALM | Workflow | Project tracking (current) | Manual | | | P2 |
| JIRA | Workflow | Project tracking (future) | Manual | | | P2 |

### SSO Integration (Azure AD)

**Requirements:**
- SAML 2.0 integration between Azure AD and Adobe IMS
- Federated ID for all ABC users
- Automatic user provisioning
- Group-based access control
- Session management

**User Flow:**
```
User → ABC Azure AD → SAML assertion → Adobe IMS → AEM/Content Hub
```

**Configuration Needs:**
- Azure AD app registration
- SAML certificate exchange
- Attribute mapping
- Group sync rules
- User de-provisioning workflow

### Portal Integrations (Headless API)

**Architecture:**
```
AEM Content Fragments → GraphQL API → API Gateway → Portal Applications
                                            ↓
                                         CDN Cache
                                            ↓
                                    Authentication (JWT)
```

**API Requirements:**
- GraphQL endpoints for each content model
- RESTful fallback if needed
- JWT authentication per portal
- Rate limiting: ___ requests/minute
- Response caching: ___ minutes
- API versioning strategy

**Sample Integration Flow:**
```
1. Portal requests JWT token (client credentials)
2. Portal calls GraphQL API with JWT
3. AEM validates JWT
4. AEM returns content fragments
5. Portal caches response
6. Portal renders content
```

### Tealium Integration

**Implementation:**
- Tealium iQ tag container loaded on all pages
- Data layer specification
- Events to track: page view, click, form submit, download, video play
- Custom dimensions: user type, product viewed, etc.

**Data Layer Structure:**
```javascript
window.digitalData = {
  page: {
    pageInfo: {
      pageName: "Homepage",
      pageType: "landing",
      language: "en"
    }
  },
  user: {
    profile: {
      profileInfo: {
        userType: "member",
        plan Type: "family"
      }
    }
  },
  event: []
};
```

### Marketo Integration (Future)

**Use Cases:**
- Embed Marketo forms on AEM pages
- Track form submissions
- Sync content to Marketo for email campaigns
- Personalization based on Marketo segments

**Integration Approach:**
- Marketo Forms 2.0 JavaScript API
- Form embed codes in AEM
- Marketo Munchkin tracking
- REST API for content sync

### Seismic Integration (Content Hub)

**Requirements:**
- Asset Selector component for Seismic
- Single sign-on from Seismic to Content Hub
- Metadata sync between systems
- Asset update notifications

**Consulting Support:** Adobe to provide guidance (per SOW)

### Key Deliverables
- [ ] Integration architecture diagram
- [ ] API specification documentation
- [ ] Security and authentication framework
- [ ] Data flow diagrams
- [ ] Integration priority matrix
- [ ] SSO configuration guide

---

## Session 4.4: Security, Infrastructure & DevOps

**Duration:** 3 hours | **Facilitator:** Technical Architect

### Key Objectives
- Review security and compliance requirements
- Define infrastructure sizing
- Establish DevOps processes
- Plan monitoring and support

### Security Requirements

**Application Security:**
- [ ] HTTPS/TLS 1.2+ required
- [ ] CSP (Content Security Policy) headers
- [ ] CORS configuration
- [ ] XSS protection
- [ ] CSRF protection
- [ ] Input validation
- [ ] SQL injection prevention (not applicable for AEM Cloud)

**Authentication & Authorization:**
- SSO via Azure AD (SAML 2.0)
- Role-based access control (RBAC)
- Multi-factor authentication (MFA)
- Session timeout: ___ minutes
- Password policy: Azure AD enforced

**Data Security:**
- Data at rest encryption: AES-256
- Data in transit encryption: TLS 1.2+
- PII handling: Minimize in DAM
- Data residency: Canada (required)
- Backup encryption: Yes

**Compliance:**
- PIPEDA compliance
- Accessibility: WCAG 2.1 Level AA
- Privacy policy and cookie consent
- Regular security scanning
- Penetration testing: Annually

### Infrastructure Sizing

**AEM Assets (DAM):**
- Asset count: 200,000 (initial), growth ___ %/year
- Storage: 2-3 TB (initial), growth ___ GB/year
- Users: Power (___)  + Collaborators (___) + Light Users (___)
- Concurrent users (peak): ___
- Recommended tier: Standard

**Edge Delivery Services:**
- Page views/month: ___
- Peak traffic: ___
- Geographic distribution: Canada primary, global secondary
- CDN: Fastly (included with Edge Delivery)

**Content Fragments (Headless):**
- Fragment count: ___ (initial)
- API calls/day: ___
- Response time SLA: < 200ms (p95)
- Availability SLA: 99.9%

### DevOps & CI/CD

**Code Repository:**
- Platform: GitHub
- Repository type: Public repo preferred (per SOW)
- Branching strategy: 
  - `main` branch = production
  - `staging` branch = pre-production
  - Feature branches for development

**CI/CD Pipeline:**
```
Code Commit → GitHub Actions → Linting/Tests → Preview Deploy → Approval → Production Deploy
```

**Automated Checks:**
- Code linting (ESLint)
- CSS validation (StyleLint)
- Accessibility checks (Lighthouse CI)
- Performance checks (PageSpeed)
- Broken link checks
- Unit tests (if applicable)

**Deployment Process:**
- Preview deploy on every PR
- Manual approval before production
- Blue-green deployment
- Automatic rollback on errors

**Monitoring & Alerting:**
- Uptime monitoring: ___
- Performance monitoring: Lighthouse CI, RUM
- Error logging: AEM Cloud logs
- Alert channels: Email, Slack
- On-call rotation: ___

### Backup & Disaster Recovery

**AEM Assets:**
- Automated backups: Daily
- Backup retention: 30 days
- Recovery time objective (RTO): 4 hours
- Recovery point objective (RPO): 24 hours

**Edge Delivery:**
- Content versioned in Git
- CDN caching provides resilience
- Rollback via Git revert

### Key Deliverables
- [ ] Infrastructure requirements document
- [ ] Security and compliance framework
- [ ] DevOps process documentation
- [ ] CI/CD pipeline specification
- [ ] Monitoring and alerting plan
- [ ] Disaster recovery plan

---

## Session 4.5: Workflows, Permissions & Governance

**Duration:** 2 hours | **Facilitator:** Solution Analyst + DAM Strategist

### Key Objectives
- Define user groups and ACLs for all systems
- Configure workflow requirements (up to 3)
- Establish governance processes
- Define content lifecycle

### User Groups & Permissions

**AEM Assets (DAM):**
- Administrator: DAM admin, IT
- Power User: Brand manager, marketing lead
- Collaborator: Content team, marketing team, creative team
- Light User: External agencies, sales team
- Approver: Brand manager, legal, marketing director

**Edge Delivery (Content Authoring):**
- Admin: Project manager, technical lead
- Author: Content team
- Reviewer: Marketing manager
- Publisher: Authorized authors
- Developer: Technical team

**Headless (Content Fragments):**
- Fragment Author: Content strategist
- Fragment Approver: Product owner, legal
- API Consumer: Portal developers (read-only API access)

### Workflow 1: DAM Asset Approval

**Trigger:** New asset uploaded by Collaborator
**Steps:**
1. Asset uploaded to folder
2. Metadata auto-applied (smart tags)
3. Submitted for review
4. Brand manager reviews
5. If approved → Published to Content Hub
6. If rejected → Returned to author with comments
7. Notification sent

**Approvers:** Brand Manager (primary), Marketing Director (secondary)
**SLA:** 2 business days
**Escalation:** After 3 days, escalate to Marketing Director

### Workflow 2: Content Fragment Approval (Headless)

**Trigger:** Content fragment created or updated
**Steps:**
1. Fragment authored
2. Submit for review
3. Product owner reviews for accuracy
4. Legal reviews (if policy/terms)
5. If approved → Published (available via API)
6. If rejected → Returned with comments
7. Notification sent

**Approvers:** Product Owner + Legal (for legal content)
**SLA:** 3 business days
**Escalation:** To Senior Product Owner

### Workflow 3: Page Publishing (Edge Delivery)

**Trigger:** Page ready for production
**Steps:**
1. Author creates/edits page in document
2. Author previews locally
3. Author pushes to GitHub (creates PR)
4. Automated checks run (linting, performance)
5. Reviewer approves PR
6. Merge to main branch
7. Auto-deploy to production
8. Analytics tracking confirms

**Approvers:** Marketing Manager or Content Lead
**SLA:** 1 business day (normal), Immediate (urgent)
**Escalation:** Direct publish for authorized users in emergencies

### Content Governance

**Governance Principles:**
- Content quality standards enforced
- Brand compliance required
- Accessibility compliance required
- SEO best practices followed
- Legal review for sensitive content
- Regular content audits

**Content Lifecycle:**
- Create → Review → Publish → Maintain → Archive → Delete
- Review frequency: Annually or on product change
- Archive after: 2 years of no use
- Permanent delete after: 7 years (per policy)

### Key Deliverables
- [ ] User roles and permissions matrix (all systems)
- [ ] Workflow specifications (3 workflows)
- [ ] Governance framework document
- [ ] Content lifecycle policy

---

## Session 4.6: Training, Change Management & Adoption

**Duration:** 2 hours | **Facilitator:** Solution Analyst + Project Manager

### Key Objectives
- Assess training needs
- Define change management approach
- Plan adoption strategy
- Define success metrics

### Training Needs Assessment

**Audience 1: Content Authors (10-15 people)**
- **Current Skills:** WordPress, basic HTML
- **New Skills Needed:** Document-based authoring, table blocks, GitHub basics
- **Training Format:** Hands-on workshop, authoring guide, video tutorials
- **Duration:** 4 hours initial + ongoing support
- **Success Metric:** Authors can create/edit pages independently

**Audience 2: Developers (5-8 people)**
- **Current Skills:** HTML/CSS/JavaScript, WordPress
- **New Skills Needed:** Edge Delivery block development, modern JS, GitHub Actions
- **Training Format:** Technical deep-dive, code walkthroughs, pair programming
- **Duration:** 8 hours + deskside coaching
- **Success Metric:** Team can build and modify blocks independently

**Audience 3: DAM Users (20-30 people)**
- **Current Skills:** File sharing, basic metadata
- **New Skills Needed:** Content Hub search, asset sharing, metadata tagging
- **Training Format:** Live demo, quick start guide, self-service videos
- **Duration:** 1 hour demo + reference materials
- **Success Metric:** 80% active users within 1 month

**Audience 4: DAM Administrators (2-3 people)**
- **Current Skills:** IT administration
- **New Skills Needed:** AEM Assets admin, Content Hub config, workflow management
- **Training Format:** Admin training course, Adobe documentation
- **Duration:** 16 hours
- **Success Metric:** Can manage system independently

### Change Management Approach

**Change Readiness:**
- Current state: Manual processes, developer dependency
- Future state: Self-service, document-based authoring
- Change magnitude: High (new paradigm)
- Team readiness: ___

**Communication Plan:**
- **Pre-Launch (4 weeks before):**
  - Announce project and timeline
  - Share vision and benefits
  - Address concerns
  - Invite to training

- **During Training (2 weeks before):**
  - Hands-on training sessions
  - Provide authoring guides
  - Set up support channels
  - Create FAQ

- **At Launch:**
  - Go-live announcement
  - Support available (hypercare)
  - Quick wins highlighted
  - Feedback channels open

- **Post-Launch (ongoing):**
  - Weekly tips and tricks
  - Monthly user group meetings
  - Continuous improvement
  - Success stories shared

**Change Champions:**
- Identify 2-3 champions per team
- Early access and training
- Champions support peers
- Gather feedback

### Adoption Strategy

**Adoption Phases:**

**Phase 1: Pilot (Week 1-2)**
- Small group of early adopters
- Careers site migration
- Close support and feedback
- Iterate based on learning

**Phase 2: Expand (Week 3-6)**
- Broader content team
- Main site migration
- Regular office hours
- Build confidence

**Phase 3: Scale (Week 7+)**
- All content authors
- All sites
- Self-service support
- Champions lead

**Support Model:**

**Hypercare (First 2 weeks):**
- Daily standup for issues
- Slack channel monitored constantly
- Deskside coaching available
- Adobe consultant on-call

**Standard Support (Week 3+):**
- Slack channel (response within 4 hours)
- Weekly office hours
- Monthly training refreshers
- Adobe consultant available (20 hours allocated per SOW)

**Ongoing Support:**
- Internal knowledge base
- Peer-to-peer support
- Quarterly training sessions
- Adobe support portal for platform issues

### Adoption Success Metrics

| Metric | Target | Timeline | Measurement |
|--------|--------|----------|-------------|
| Authors trained | 100% | Month 1 | Training attendance |
| Active authors | 80% | Month 2 | System usage logs |
| Pages published | 50% of target | Month 3 | Migration tracker |
| User satisfaction | 4/5 | Month 3 | Survey |
| Support tickets | < 5/week | Month 3 | Ticket system |
| Content velocity | 2x improvement | Month 6 | Time to publish metric |

### Key Deliverables
- [ ] Change management and enablement plan
- [ ] Training plan (all audiences)
- [ ] User documentation requirements
- [ ] Adoption metrics framework
- [ ] Support model definition

---

# Synthesis

## Session 4.7: Discovery Readout & Planning Workshop

**Duration:** 3 hours | **Facilitator:** Adobe Project Manager

### Key Objectives
- Review all discovery findings
- Validate requirements and assumptions
- Finalize project scope and timeline
- Identify risks and mitigation
- Define Sprint 0 activities
- Obtain stakeholder alignment and approval

### Discovery Summary

**Business Objectives (from Session 1.2):**
1. [Summary of top 3 objectives]
2. 
3. 

**Current State Challenges (from Sessions 1.3, 2.1, 3.4):**
1. [Top pain points]
2. 
3. 

**Proposed Solution (all sessions):**
- **DAM:** AEM Assets + Content Hub for ___K assets
- **Edge Delivery:** Migrate 780 pages across 4 sites, build 12 blocks
- **Headless:** 3 content models, GraphQL APIs for 4 portals

### Requirements Validation

**Functional Requirements:**
- Total requirements captured: ___
- P0 (must-have): ___
- P1 (should-have): ___
- P2 (nice-to-have): ___
- Out of scope: ___

**In Scope / Out of Scope Confirmation:**

| Item | In Scope | Out Scope | Notes |
|------|----------|-----------|-------|
| 4 websites (780 pages) | ✓ | | |
| 12 blocks | ✓ | | |
| 200K asset migration | ✓ | | |
| 3 content fragment models | ✓ | | |
| SSO (Azure AD) | ✓ | | |
| Tealium integration | ✓ | | |
| Marketo integration | | ✓ | Future phase |
| Redesign | | ✓ | Migration as-is |
| Additional websites | | ✓ | Future |

**Assumptions Validation:**
Review all assumptions from SOW and confirm still valid:
- [ ] 200K assets, 2-3 TB
- [ ] Current state is WordPress
- [ ] Team available for full discovery
- [ ] No redesign (migration as-is)
- [ ] Canadian data residency
- [ ] Access provided to all systems
- [ ] Other assumptions: ___

**Dependencies Confirmed:**
- [ ] AEM Cloud Service provisioned
- [ ] Azure AD access for SSO config
- [ ] GitHub repository created
- [ ] Document authoring platform selected
- [ ] Network access for Adobe team
- [ ] All integrations accessible
- [ ] Other: ___

### Project Scope Finalization

**Deliverables Confirmed:**

**DAM Workstream:**
- ✓ AEM Assets environment deployed
- ✓ Content Hub provisioned and configured
- ✓ Folder structure and metadata schema
- ✓ 200K assets migrated
- ✓ 10 users set up with product profiles
- ✓ Solution design and DAM strategy documents

**Edge Delivery Workstream:**
- ✓ 1 template
- ✓ 12 blocks
- ✓ 780 pages migrated across 4 sites
- ✓ MVP deployment (careers site)
- ✓ Authoring guide
- ✓ Customer runbook

**Headless Workstream:**
- ✓ 3 content fragment models
- ✓ 3 workflows
- ✓ GraphQL APIs configured
- ✓ Pilot integration (Member Services)
- ✓ Headless content strategy document
- ✓ Implementation plan

**Timeline Confirmation:**

| Phase | Duration | Start | End | Milestones |
|-------|----------|-------|-----|------------|
| Discovery | 4 weeks | [Done] | [Done] | Discovery complete |
| Sprint 0 | 1 week | | | Setup, backlog |
| Design & Build | 4-8 weeks | | | Blocks, MVP |
| Migration | 4-8 weeks | | | All sites |
| UAT & Go-Live | 2 weeks | | | Production launch |
| **TOTAL** | ~12-16 weeks | | | |

**Estimated Go-Live Date:** ___________

### Risks & Mitigation

Review comprehensive risk register:

| Risk | Impact | Prob | Mitigation | Owner | Status |
|------|--------|------|------------|-------|--------|
| [Key risks from all sessions] | | | | | |

**Top 5 Risks to Monitor:**
1. 
2. 
3. 
4. 
5. 

### Sprint 0 Definition

**Sprint 0 Goals:**
- Set up all development environments
- Configure AEM Cloud Service
- Provision Content Hub
- Set up GitHub repository
- Configure SSO (Azure AD)
- Create initial folder structure in DAM
- Set up user accounts
- Finalize sprint backlog
- Complete team onboarding

**Sprint 0 Backlog:**
- [ ] [List of setup tasks]
- [ ] 
- [ ] 

**Sprint 0 Duration:** 1 week  
**Sprint 0 Start Date:** ___________

### Stakeholder Alignment

**Key Decisions for Approval:**

| Decision | Recommendation | Status | Approver |
|----------|----------------|--------|----------|
| Document authoring platform | [Selection] | ☐ Approved | |
| MVP site | Careers (5 pages) | ☐ Approved | |
| Migration phases | [Per plan] | ☐ Approved | |
| Timeline | 12-16 weeks | ☐ Approved | |
| Go-live date | [Date] | ☐ Approved | |

**Approval to Proceed:**
- [ ] Scope approved
- [ ] Timeline approved
- [ ] Budget confirmed
- [ ] Resources committed
- [ ] Risks accepted
- [ ] Next steps clear

### Next Steps

**Immediate Actions (This Week):**
1. 
2. 
3. 

**Sprint 0 (Next Week):**
1. 
2. 
3. 

**First Sprint (Week After):**
1. Begin block development
2. Start MVP migration (careers site)
3. Begin asset migration Phase 1
4. First daily standup

### Key Deliverables from Discovery

✓ All session templates completed  
✓ Discovery summary report  
✓ Updated project plan and schedule  
✓ Risk and issue register  
✓ Sprint 0 backlog  
✓ All SOW deliverables for discovery phase  
✓ Stakeholder sign-off  

---

**End of Consolidated Session Guide**

---

## Usage Notes

This consolidated guide provides streamlined templates for the remaining discovery sessions (Week 3-4). Each section can be expanded into a full-length template following the pattern of Week 1-2 templates if more detail is needed.

**Key Points:**
- All critical questions are captured
- Capture areas provided for all key information
- Deliverables clearly defined
- Links to other sessions maintained
- Practical and ready to use

**Customization:**
- Add ABC-specific context
- Expand sections based on complexity
- Add worksheets as needed
- Integrate with project management tools

---

**Document Version:** 1.0  
**Last Updated:** January 15, 2026  
**Status:** Ready for Use
