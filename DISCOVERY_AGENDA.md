# Discovery Phase Agenda
## Alberta Blue Cross - AEM Implementation Project

**Project Scope:** Adobe Experience Manager Assets Ultimate Starter, Edge Delivery Services, and Headless Content Foundation

**Estimated Duration:** 4 weeks (as per SOW Section 5)

**Document Version:** 1.0
**Date:** January 15, 2026

---

## Executive Summary

This discovery agenda outlines the approach for conducting a comprehensive discovery phase across three integrated workstreams:
1. **Digital Asset Management (DAM)** - AEM Assets and Content Hub
2. **Edge Delivery Services** - Website migration and content delivery
3. **Headless Content Foundation** - API-driven content delivery

The discovery sessions are designed to gather requirements, understand current state, define future state architecture, and establish a foundation for successful implementation.

---

## Project Scope Overview

### Web Properties in Scope
- **blog.ab.bluecross.ca** - 300 pages
- **www.ab.bluecross.ca** - 400 pages (Enterprise Public Website - EPW)
- **www.careers.ab.bluecross.ca** - 5 pages
- **www.community.ab.bluecross.ca** - 75 pages
- **Total: ~780 pages**

### Key Deliverables
- 1 Template
- Up to 12 Blocks Implementation
- 3 Content Fragment Models
- 3 Workflows
- Content Hub Setup
- SSO Integration (Azure AD)
- Migration strategy for ~200K assets under 2-3 TB

---

## Discovery Session Structure

### Week 1: Foundation & Current State Assessment

#### Session 1.1: Project Kickoff & Alignment (2 hours)
**Objectives:**
- Project team introductions
- Review project charter and success criteria
- Align on discovery approach and timeline
- Establish communication protocols
- Review and confirm stakeholder availability

**Key Stakeholders Required:**
- **ABC Side:**
  - Customer Senior Project Sponsor (Executive Level)
  - Customer Project Manager
  - Digital Experience Team Lead
  - IT Leadership
  - Change Management Lead
- **Adobe Side:**
  - Adobe Project Manager
  - Adobe Senior Project Sponsor
  - Technical Architect
  - DAM Strategist
  - Solution Analyst

**Deliverables:**
- Project Kickoff Deck
- Confirmed discovery schedule
- Communication plan (Slack workspace setup)

---

#### Session 1.2: Business Goals & Use Cases Workshop (3 hours)
**Objectives:**
- Understand ABC's digital strategy and business objectives
- Review current pain points and challenges
- Define success metrics and KPIs
- Understand customer experience goals
- Review business model and organizational structure

**Key Stakeholders Required:**
- **ABC Side:**
  - Customer Senior Project Sponsor
  - Digital Experience Team Lead
  - Content Team Lead
  - Marketing Director
  - Customer Experience Manager
  - Business Analysts
- **Adobe Side:**
  - Adobe Project Manager
  - Solution Analyst
  - DAM Strategist

**Topics to Cover:**
- Current content management workflow and challenges
- Digital asset sharing and collaboration requirements
- Personalization and customer experience expectations
- Omnichannel content delivery needs
- Compliance and audit requirements (not-for-profit organization)

**Deliverables:**
- Business requirements document (draft)
- Use case documentation
- Success criteria definition

---

#### Session 1.3: Current State Technical Assessment (4 hours)
**Objectives:**
- Review existing WordPress implementation
- Understand current content structure and taxonomy
- Assess existing integrations
- Review current hosting and infrastructure
- Understand development processes and tools

**Key Stakeholders Required:**
- **ABC Side:**
  - Lead Front-End Developer
  - Lead Back-End Developer
  - Infrastructure/DevOps Lead
  - IT Security Lead
  - Current WordPress Administrator
  - Database Administrator (if applicable)
- **Adobe Side:**
  - Technical Architect
  - Technical Lead
  - Solution Analyst

**Topics to Cover:**
- WordPress plugins, themes, and customizations
- Content types and data models
- Current file storage and asset management approach
- Integration architecture (Tealium, Marketo, Conductor, etc.)
- Development workflow and version control
- Performance and scalability challenges
- Security and access control implementation

**Deliverables:**
- Current state architecture documentation
- Technical assessment report
- Integration inventory

---

### Week 2: Digital Asset Management Discovery

#### Session 2.1: DAM Strategy & Governance Workshop (3 hours)
**Objectives:**
- Define asset taxonomy and metadata requirements
- Establish folder structure and organization
- Define user roles and permissions model
- Determine asset lifecycle management
- Establish governance processes

**Key Stakeholders Required:**
- **ABC Side:**
  - DAM Owner/Administrator
  - Content Team Lead
  - Marketing Team Lead
  - Brand Manager
  - Legal/Compliance Representative
  - Creative Team Lead
  - Digital Experience Team Lead
- **Adobe Side:**
  - DAM Strategist
  - Solution Analyst
  - Project Manager

**Topics to Cover:**
- Asset types and formats in use
- Current asset volume and growth projections (~200K assets, 2-3 TB)
- Asset categorization and tagging requirements
- Metadata schema requirements
- Asset approval workflows
- Brand governance and guidelines
- Rights management and licensing
- Asset retention and archival policies

**Deliverables:**
- DAM Strategy document (draft)
- Folder structure proposal
- Metadata schema definition
- User roles and permissions matrix

---

#### Session 2.2: Content Hub & User Experience Requirements (2 hours)
**Objectives:**
- Define Content Hub user personas
- Understand asset discovery and search requirements
- Determine sharing and collaboration needs
- Review approval workflow requirements
- Understand integration needs with other tools

**Key Stakeholders Required:**
- **ABC Side:**
  - Content Hub Power Users (2-3)
  - Marketing Team Members
  - Sales Enablement Team (Seismic users)
  - External Partners/Agencies (if applicable)
  - Content Team Lead
- **Adobe Side:**
  - DAM Strategist
  - Solution Analyst

**Topics to Cover:**
- User personas: Power User, Collaborator, Light User
- Asset discovery and search requirements
- Search facets and filters needed
- Sharing mechanisms (link sharing, collections)
- Integration with Seismic (Sales Enablement Tool)
- Notification requirements
- Reports and analytics needs
- Training and adoption requirements

**Deliverables:**
- User persona documentation
- Content Hub configuration requirements
- Search facets definition

---

#### Session 2.3: Asset Migration & Ingestion Strategy (2 hours)
**Objectives:**
- Audit existing digital assets
- Define migration approach and priorities
- Establish data quality standards
- Plan for asset transformation and optimization

**Key Stakeholders Required:**
- **ABC Side:**
  - Current File Share Administrator
  - Content Team Lead
  - Marketing Team Lead
  - IT Infrastructure Lead
- **Adobe Side:**
  - DAM Strategist
  - Technical Architect
  - Solution Analyst

**Topics to Cover:**
- Current asset storage locations and volumes
- Asset formats and versions
- Asset quality and resolution requirements
- Duplicate detection and consolidation
- Metadata mapping and enrichment
- Smart Tags and AI capabilities
- Rendition requirements
- Migration timeline and approach

**Deliverables:**
- Asset migration strategy document
- Data quality standards
- Migration plan with phases

---

### Week 3: Edge Delivery Services Discovery

#### Session 3.1: Edge Delivery Architecture & Best Practices (3 hours)
**Objectives:**
- Review Edge Delivery Services architecture
- Understand document-based authoring approach
- Define content-first methodology
- Review ecosystem tools (SharePoint/Google Docs, GitHub)
- Establish development standards

**Key Stakeholders Required:**
- **ABC Side:**
  - Lead Front-End Developer
  - Lead Back-End Developer
  - Content Team Lead
  - DevOps Lead
  - IT Security Lead
- **Adobe Side:**
  - Technical Architect
  - Technical Lead
  - Scrum Master

**Topics to Cover:**
- Document repository selection (Adobe Author Bus, SharePoint, Google Drive)
- GitHub repository setup and access
- Code review processes
- Agile methodology and sprint planning
- Backlog grooming and story writing
- CI/CD pipeline requirements
- Performance targets (PageSpeed Insights)
- Accessibility requirements (WCAG compliance)
- SEO requirements

**Deliverables:**
- Solution design and architecture document (draft)
- Development standards and processes
- Toolset recommendations

---

#### Session 3.2: Template & Block Requirements Workshop (4 hours)
**Objectives:**
- Review website designs and components
- Define template requirements
- Identify and prioritize block requirements
- Review existing blocks and customization needs
- Define component library structure

**Key Stakeholders Required:**
- **ABC Side:**
  - UX/UI Designer
  - Front-End Developers (2-3)
  - Content Team Lead
  - Brand Manager
  - Digital Experience Team Lead
- **Adobe Side:**
  - Technical Architect
  - Technical Lead
  - Solution Analyst

**Topics to Cover:**
- Review of all 4 web properties (blog, main site, careers, community)
- Common design patterns and components
- Header and footer requirements
- Hero block variations
- Card layouts and column structures
- Form requirements
- Navigation patterns
- Responsive design requirements
- Animation and interactivity needs
- Performance optimization requirements

**Deliverables:**
- Block requirements specification
- Template design documentation
- Component prioritization matrix
- Information architecture review

---

#### Session 3.3: Content Authoring & Workflow (2 hours)
**Objectives:**
- Define content authoring processes
- Review preview and approval workflows
- Understand content localization needs (if any)
- Define content QA processes

**Key Stakeholders Required:**
- **ABC Side:**
  - Content Authors (3-4)
  - Content Team Lead
  - Content Approvers/Editors
  - Marketing Manager
- **Adobe Side:**
  - Solution Analyst
  - Technical Lead

**Topics to Cover:**
- Current WordPress content authoring experience
- Content creation workflow and approval process
- Multi-language requirements (if any)
- Content versioning and rollback needs
- Preview environments (mobile, tablet, desktop)
- Content publishing schedules
- Emergency content updates process
- Content governance and compliance

**Deliverables:**
- Authoring guide requirements
- Workflow documentation
- Content governance framework

---

#### Session 3.4: Migration Strategy & Prioritization (3 hours)
**Objectives:**
- Review all 780 pages across 4 properties
- Define migration phases and priorities
- Establish content conversion approach
- Define success criteria for migration

**Key Stakeholders Required:**
- **ABC Side:**
  - Customer Project Manager
  - Content Team Lead
  - Front-End Developers
  - SEO Specialist
  - Business Owner for each web property
- **Adobe Side:**
  - Technical Architect
  - Solution Analyst
  - Project Manager

**Topics to Cover:**
- MVP definition (single user journey)
- Page prioritization criteria
- Content audit and cleanup
- URL strategy and redirects
- SEO preservation strategy
- Content migration automation opportunities
- Testing and validation approach
- Go-live strategy per property

**Deliverables:**
- Adoption roadmap and migration plan
- MVP scope definition
- Migration backlog with priorities

---

### Week 4: Headless Content Foundation & Integration Discovery

#### Session 4.1: Headless Use Cases & Content Strategy (3 hours)
**Objectives:**
- Identify headless content use cases
- Define API consumption scenarios
- Review omnichannel content delivery requirements
- Establish pilot project scope

**Key Stakeholders Required:**
- **ABC Side:**
  - Mobile App Development Team Lead
  - Portal Development Team Lead (Member Services, OEA, OHP, GSO)
  - API/Integration Lead
  - Content Team Lead
  - Customer Experience Manager
- **Adobe Side:**
  - Technical Architect
  - Solution Analyst
  - Technical Lead

**Topics to Cover:**
- Customer service portal integration needs (Member Services ECA & Mobile App)
- Online Enrollment & Administration (OEA) content needs
- Online Health Providers (OHP) content requirements
- Group Sales Online (GSO) content needs
- Content reuse across channels
- Personalization requirements per channel
- Content Fragment vs. Experience Fragment use cases
- GraphQL query requirements

**Deliverables:**
- Headless content audit
- Headless readiness strategy project plan
- Pilot project definition
- Business and technical requirements document

---

#### Session 4.2: Content Models & Taxonomy Workshop (3 hours)
**Objectives:**
- Define content fragment models (up to 3)
- Establish taxonomy and metadata structure
- Review multilingual requirements
- Define content relationships and references

**Key Stakeholders Required:**
- **ABC Side:**
  - Content Strategist
  - Content Team Lead
  - Information Architect
  - API Development Lead
  - Portal Developers
- **Adobe Side:**
  - Technical Architect
  - Solution Analyst
  - DAM Strategist

**Topics to Cover:**
- Content types requiring headless delivery
- Content model attributes and validation rules
- Taxonomy and tagging for headless content
- Metadata requirements
- Content relationships and nesting
- Multilingual content structure
- Content variation requirements
- Asset references within content fragments

**Deliverables:**
- Content fragment model specifications
- Headless content strategy document
- Taxonomy documentation

---

#### Session 4.3: Integration Architecture Workshop (4 hours)
**Objectives:**
- Review all required integrations
- Define integration patterns and approaches
- Establish API security and authentication
- Review data flow and synchronization requirements

**Key Stakeholders Required:**
- **ABC Side:**
  - Enterprise Architect
  - API/Integration Lead
  - IT Security Lead
  - Azure AD Administrator
  - Tealium Administrator
  - Marketo Administrator
  - ALM/JIRA Administrator
  - Infrastructure Lead
- **Adobe Side:**
  - Technical Architect
  - Technical Lead

**Topics to Cover:**
- **SSO Integration:**
  - Azure AD/IMS integration
  - SAML 2.0 configuration
  - Federated ID setup
  - User provisioning and de-provisioning
  
- **Marketing & Analytics:**
  - Tealium iQX tag management integration
  - Marketo integration (future)
  - Conductor SEO integration
  
- **Sales Enablement:**
  - Seismic integration with Content Hub
  - Asset selector configuration
  
- **Workflow Tools:**
  - ALM (current) integration approach
  - JIRA (future) integration planning
  
- **Customer Portals:**
  - Member Services (ECA & Mobile App) content delivery
  - OEA, OHP, GSO portal integrations
  
- **API Strategy:**
  - RESTful vs GraphQL APIs
  - Caching strategy and CDN configuration
  - Persisted queries
  - API versioning
  - Rate limiting and throttling
  - Error handling

**Deliverables:**
- Integration architecture diagram
- API specification documentation
- Security and authentication framework
- Integration priority matrix

---

#### Session 4.4: Security, Infrastructure & DevOps (3 hours)
**Objectives:**
- Review security requirements and compliance
- Define infrastructure sizing and architecture
- Establish DevOps processes and CI/CD pipeline
- Review monitoring and support requirements

**Key Stakeholders Required:**
- **ABC Side:**
  - IT Security Lead
  - Compliance Officer
  - Infrastructure/Cloud Lead
  - DevOps Lead
  - Network Security Team
  - Database Administrator
- **Adobe Side:**
  - Technical Architect
  - Technical Lead
  - Project Manager

**Topics to Cover:**
- AEM as a Cloud Service provisioning
- Infrastructure sizing for 200K assets, 2-3 TB
- Canadian data residency requirements
- Network security and firewall rules
- Penetration testing requirements
- SMTP notification configuration
- SSL/TLS requirements
- Backup and disaster recovery
- Monitoring and alerting
- Incident management
- Performance SLAs

**Deliverables:**
- Infrastructure requirements document
- Security and compliance framework
- DevOps process documentation
- Deployment architecture

---

#### Session 4.5: Workflows, Permissions & Governance (2 hours)
**Objectives:**
- Define user roles and permissions across all systems
- Configure workflow requirements (up to 3)
- Establish governance and approval processes
- Define content lifecycle management

**Key Stakeholders Required:**
- **ABC Side:**
  - Content Team Lead
  - IT Security Lead
  - Compliance Officer
  - User Admin Lead
  - Business Process Owners
- **Adobe Side:**
  - Solution Analyst
  - DAM Strategist
  - Technical Architect

**Topics to Cover:**
- User groups and ACLs for DAM
- User groups for headless content
- Content Hub roles (Power User, Collaborator, Light User)
- Adobe IMS user group setup
- Admin Console configuration
- Asset approval workflows
- Content fragment approval workflows
- Publishing workflows
- Permission inheritance
- Delegation and escalation processes

**Deliverables:**
- User roles and permissions matrix
- Workflow specifications
- Governance framework document

---

#### Session 4.6: Training, Change Management & Adoption (2 hours)
**Objectives:**
- Assess training needs across user groups
- Define change management approach
- Plan adoption strategy
- Define success metrics

**Key Stakeholders Required:**
- **ABC Side:**
  - Change Management Lead
  - Training Coordinator
  - Content Team Lead
  - HR Representative (if applicable)
  - Business Unit Representatives
- **Adobe Side:**
  - Project Manager
  - Solution Analyst
  - Scrum Master

**Topics to Cover:**
- User personas and training needs
- Author training requirements
- Developer enablement needs
- Administrator training
- End-user documentation requirements
- Change communication plan
- Adoption metrics and KPIs
- Support model during transition
- Deskside coaching needs (20 hours allocated)

**Deliverables:**
- Change management and enablement plan
- Training plan
- User documentation requirements
- Adoption metrics framework

---

### Week 4: Synthesis & Planning

#### Session 4.7: Discovery Readout & Planning Workshop (3 hours)
**Objectives:**
- Review all discovery findings
- Validate requirements and assumptions
- Finalize project scope and timeline
- Identify risks and mitigation strategies
- Define sprint 0 activities

**Key Stakeholders Required:**
- **ABC Side:**
  - Customer Senior Project Sponsor
  - Customer Project Manager
  - All Technical Leads
  - Business Stakeholders
- **Adobe Side:**
  - Adobe Senior Project Sponsor
  - Adobe Project Manager
  - Technical Architect
  - All Adobe Leads

**Topics to Cover:**
- Discovery findings summary
- Scope validation and adjustments
- Timeline and resource allocation
- Budget impact (if scope changes)
- Risk register review
- Dependencies and assumptions
- Success criteria confirmation
- Next steps and sprint planning

**Deliverables:**
- Discovery summary report
- Updated project plan and schedule
- Risk and issue register
- Sprint 0 backlog

---

## Key Stakeholder Roster by Role

### ABC (Customer) Team

#### Executive & Leadership
- **Customer Senior Project Sponsor** - Executive escalation, budget approval, strategic decisions
- **Digital Experience Team Lead** - Overall digital strategy and vision
- **IT Leadership** - Infrastructure and technology decisions
- **Marketing Director** - Marketing strategy and brand governance

#### Project Management & Coordination
- **Customer Project Manager** - Day-to-day project coordination, resource management
- **Change Management Lead** - Adoption, training, organizational change
- **Customer Project Owner** - Business requirements, stakeholder interface

#### Content & Creative
- **Content Team Lead** - Content strategy, authoring processes
- **Content Authors (3-4)** - Day-to-day content creation
- **Content Approvers/Editors** - Content governance and approval
- **Brand Manager** - Brand guidelines and consistency
- **Creative Team Lead** - Asset creation and design standards
- **UX/UI Designer** - User experience and interface design

#### Technical Team
- **Lead Front-End Developer** - Client-side development and Edge Delivery
- **Lead Back-End Developer** - Server-side integrations and APIs
- **Infrastructure/DevOps Lead** - Cloud infrastructure and deployments
- **IT Security Lead** - Security requirements and compliance
- **Enterprise Architect** - Overall architecture and standards
- **API/Integration Lead** - Integration strategy and implementation
- **Database Administrator** - Data management and migrations
- **Azure AD Administrator** - Identity and access management
- **Network Security Team** - Network and firewall configurations

#### Business Users & Subject Matter Experts
- **DAM Owner/Administrator** - Digital asset management processes
- **SEO Specialist** - Search engine optimization requirements
- **Customer Experience Manager** - Customer journey and experience
- **Mobile App Development Team Lead** - Mobile channel requirements
- **Portal Development Team Lead** - Portal integration needs
- **Content Strategist** - Content modeling and taxonomy
- **Information Architect** - Site structure and navigation
- **Business Analysts** - Requirements gathering and validation
- **Compliance Officer** - Regulatory and compliance requirements
- **Legal Representative** - Legal and rights management

#### Integration Specialists
- **Tealium Administrator** - Tag management
- **Marketo Administrator** - Marketing automation
- **ALM/JIRA Administrator** - Workflow management tools
- **Seismic Administrator** - Sales enablement tool
- **WordPress Administrator** - Current CMS knowledge

#### Business Domain Representatives
- **Business Owner - Main Website** (www.ab.bluecross.ca)
- **Business Owner - Blog** (blog.ab.bluecross.ca)
- **Business Owner - Careers** (www.careers.ab.bluecross.ca)
- **Business Owner - Community** (www.community.ab.bluecross.ca)

### Adobe Team

#### Leadership & Management
- **Adobe Senior Project Sponsor** - Escalation point, strategic oversight
- **Adobe Project Manager** - Project governance, schedule, budget
- **Scrum Master** - Agile process, sprint management

#### Technical Team
- **Technical Architect** - Solution design, technical governance
- **Technical Lead** - Technical implementation, domain expertise
- **DAM Strategist** - DAM strategy, metadata, taxonomy
- **Solution Analyst** - Requirements analysis, story writing
- **AEM QA** - Quality assurance and testing

---

## Pre-Discovery Preparation Checklist

### ABC Team Preparation
- [ ] Identify and confirm availability of all key stakeholders
- [ ] Grant access to existing systems and documentation
- [ ] Prepare current WordPress admin access for demo
- [ ] Gather existing documentation (architecture diagrams, process flows)
- [ ] Compile asset inventory and storage locations
- [ ] Export sample content from WordPress
- [ ] Prepare integration documentation for existing systems
- [ ] Set up Slack workspace and invite team members
- [ ] Identify workspace location for on-site sessions (if applicable)
- [ ] Prepare network access for Adobe team (VPN, guest WiFi)

### Adobe Team Preparation
- [ ] Review RFP and SOW thoroughly
- [ ] Prepare discovery templates and worksheets
- [ ] Set up collaboration tools (Miro, Confluence, etc.)
- [ ] Prepare AEM demo environment
- [ ] Prepare Edge Delivery examples
- [ ] Prepare Content Hub demo
- [ ] Create GitHub repository structure
- [ ] Prepare best practice documentation
- [ ] Review ABC's public websites and properties
- [ ] Prepare discovery presentation materials

---

## Discovery Outputs & Deliverables

### Documentation
1. **Project Charter & Kickoff Deck**
2. **Business Requirements Document**
3. **Technical Requirements Document**
4. **Current State Architecture Documentation**
5. **Future State Architecture Documentation**
6. **DAM Strategy Document**
7. **Headless Content Strategy Document**
8. **Solution Design Document**
9. **Migration Strategy Document**
10. **Integration Architecture Documentation**
11. **API Specification Documentation**
12. **Security and Compliance Framework**
13. **User Roles and Permissions Matrix**
14. **Workflow Specifications**
15. **Content Model Specifications**
16. **Metadata Schema and Taxonomy**
17. **Block Requirements Specification**
18. **Template Design Documentation**
19. **Adoption Roadmap and Migration Plan**
20. **Change Management and Enablement Plan**
21. **Training Plan**
22. **Project Plan and Schedule**
23. **Risk and Issue Register**
24. **Assumptions and Dependencies Log**
25. **Discovery Summary Report**

### Technical Artifacts
1. **Folder Structure (AEM Assets)**
2. **Content Fragment Models (up to 3)**
3. **Workflow Configurations (up to 3)**
4. **Search Facets Configuration**
5. **Block Specifications (up to 12)**
6. **Template Definition (1)**
7. **Component Library Structure**
8. **Sprint 0 Backlog**
9. **User Stories for Pilot**
10. **Test Cases and QA Plan**

---

## Communication & Collaboration Tools

### Primary Communication Channels
- **Slack** - Daily communication, quick questions, updates
  - ABC to join Adobe Slack Workspace
  - Dedicated project channel
- **Email** - Formal communications, document sharing
- **Scheduled Meetings** - Discovery sessions, checkpoints, reviews

### Collaboration Tools
- **Document Repository** - To be selected (Adobe Author Bus, SharePoint, or Google Drive)
- **GitHub** - Code repository (public repo preferred)
- **Project Management** - To be determined (JIRA future, ALM current)
- **Video Conferencing** - For remote sessions
- **Whiteboarding** - For collaborative design sessions (Miro, Mural, etc.)

---

## Success Criteria for Discovery Phase

### Completeness
- [ ] All stakeholder interviews conducted
- [ ] All required workshops completed
- [ ] Current state fully documented
- [ ] Future state architecture defined and approved
- [ ] All technical requirements captured
- [ ] All business requirements validated
- [ ] Integration points identified and documented

### Clarity
- [ ] Scope clearly defined and agreed upon
- [ ] Assumptions documented and validated
- [ ] Dependencies identified and mitigated
- [ ] Risks assessed with mitigation strategies
- [ ] Acceptance criteria defined for each milestone

### Alignment
- [ ] Business and technical teams aligned
- [ ] Adobe and ABC teams aligned on approach
- [ ] Stakeholders aligned on priorities
- [ ] Timeline and resource commitments confirmed
- [ ] Budget validated (or change request submitted)

### Readiness
- [ ] Sprint 0 backlog prepared
- [ ] User stories written and prioritized
- [ ] Technical infrastructure requirements defined
- [ ] Team access and tools provisioned
- [ ] Training and enablement plan approved

---

## Risk Considerations & Mitigation

### Common Discovery Risks

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| Stakeholder availability | High | Medium | Confirm schedules early, provide alternatives, record sessions |
| Scope creep during discovery | High | High | Clear scope boundaries, change request process |
| Technical access delays | Medium | Medium | Request access before discovery begins |
| Integration complexity underestimated | High | Medium | Deep dive on integration architecture early |
| Legacy data quality issues | Medium | High | Conduct early asset audit, plan for cleanup |
| Misalignment on priorities | High | Low | Regular checkpoints with sponsors |
| Resource constraints (ABC team) | Medium | Medium | Prioritize sessions, provide recordings |
| Network/security restrictions | Low | Medium | Plan for workarounds, engage IT security early |

---

## Post-Discovery Activities

### Immediate Next Steps (Sprint 0)
1. Finalize all discovery documentation
2. Set up development environments
3. Configure AEM Cloud Service instances
4. Provision Content Hub
5. Set up GitHub repository
6. Configure Azure AD/SSO
7. Set up user accounts and permissions
8. Finalize sprint backlog
9. Conduct Sprint 0 planning
10. Begin block development

### Week 5-8: Design & Build
- Block development (up to 12 blocks)
- Template creation
- Content Fragment model implementation
- Workflow configuration
- Integration development
- MVP site build

### Week 9-12: Migration & Testing
- Content migration
- UAT preparation and execution
- Performance testing
- Security testing
- Go-live readiness activities

---

## Questions for ABC Team

Before finalizing the discovery approach, I need clarity on the following:

### 1. Team Availability & Logistics
- **Q1:** Will discovery sessions be conducted on-site at ABC, remote, or hybrid?
- **Q2:** What are the typical availability windows for executives and key stakeholders? (To avoid scheduling conflicts)
- **Q3:** Are there any known vacation periods or blackout dates during the discovery phase?
- **Q4:** How many team members can realistically dedicate time to discovery sessions (part-time vs. full-time)?

### 2. Current State Details
- **Q5:** Do you currently have a centralized digital asset library, or are assets distributed across multiple locations/systems?
- **Q6:** What is the approximate current volume of digital assets? (To validate the 200K/2-3TB estimate)
- **Q7:** Are there any existing integrations with the current WordPress site that must be maintained?
- **Q8:** Do you have existing documentation (architecture diagrams, process flows, integration specs) that can be shared upfront?

### 3. Priorities & Scope
- **Q9:** Which web property would you prefer as the MVP for Edge Delivery? (Recommendation: Start with the smallest - careers site with 5 pages?)
- **Q10:** Are there specific high-priority content types or pages that must be migrated first?
- **Q11:** What is your priority order: DAM, Edge Delivery, or Headless? Or should they progress in parallel?
- **Q12:** Are multilingual capabilities required now or in the future?

### 4. Integration Priorities
- **Q13:** Which integrations are "must-have" for go-live vs. "nice-to-have" for future phases?
- **Q14:** Is the Marketo integration immediate or future phase?
- **Q15:** Which customer portals (Member Services, OEA, OHP, GSO) have the highest priority for headless content delivery?

### 5. Organizational Readiness
- **Q16:** Do content authors have experience with document-based authoring (Word, Google Docs) or only WYSIWYG editors?
- **Q17:** Does your development team have experience with JavaScript/React (for block development)?
- **Q18:** Is there existing agile/scrum maturity or will this be a new way of working?
- **Q19:** What is the comfort level with using GitHub for version control?

### 6. Governance & Security
- **Q20:** Are there specific compliance requirements (PIPEDA, HIPAA, other healthcare regulations)?
- **Q21:** What is the approval process for content publishing? (Single approver, multi-stage, conditional?)
- **Q22:** Do you have existing brand guidelines and asset usage policies documented?
- **Q23:** Are there any IP or licensing concerns with existing digital assets?

### 7. Success Metrics
- **Q24:** What are your target performance metrics? (PageSpeed score, load time, etc.)
- **Q25:** What are your adoption success criteria for Content Hub?
- **Q26:** How will you measure ROI of the new WCM/DAM solution?

### 8. Technical Environment
- **Q27:** Do you have an existing Azure subscription for AEM Cloud Service, or does this need to be set up?
- **Q28:** What is your preferred document authoring tool? (Adobe Author Bus, Microsoft SharePoint, or Google Drive)
- **Q29:** Do you have GitHub Enterprise, or will you use public GitHub?
- **Q30:** What is your current CI/CD toolset, if any?

---

## Appendices

### Appendix A: Reference Documents
- SOW - Statement of Work
- RFP - Request for Proposal
- Master Services Agreement (MSA)
- Target State Integration List
- Functional Requirements
- Non-Functional Requirements

### Appendix B: Discovery Session Templates
- Interview templates
- Workshop agendas
- Requirements gathering forms
- Technical assessment checklists

### Appendix C: Acronyms & Definitions
- **ABC** - Alberta Blue Cross
- **AEM** - Adobe Experience Manager
- **DAM** - Digital Asset Management
- **WCM** - Web Content Management
- **EPW** - Enterprise Public Website
- **SSO** - Single Sign-On
- **UAT** - User Acceptance Testing
- **MVP** - Minimum Viable Product
- **ECA** - Employee Claim Access (Member Services portal)
- **OEA** - Online Enrollment & Administration
- **OHP** - Online Health Providers
- **GSO** - Group Sales Online
- **SAML** - Security Assertion Markup Language
- **IMS** - Identity Management System
- **ALM** - Application Lifecycle Management
- **OOTB** - Out of the Box
- **CDN** - Content Delivery Network
- **PoC** - Proof of Concept

### Appendix D: Contact Information
- Adobe Project Manager: [To be assigned]
- ABC Project Manager: [To be confirmed]
- Escalation Contacts: [To be confirmed]

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 15, 2026 | Lead Technical Architect | Initial discovery agenda creation |

---

## Approval

This discovery agenda requires review and approval from:

- [ ] ABC Customer Senior Project Sponsor
- [ ] ABC Customer Project Manager
- [ ] Adobe Senior Project Sponsor
- [ ] Adobe Project Manager
- [ ] Adobe Technical Architect

**Expected Approval Date:** [To be determined]

**Discovery Phase Start Date:** [To be confirmed based on 4-week lead time per SOW Section 9.8]

---

*End of Discovery Agenda*
