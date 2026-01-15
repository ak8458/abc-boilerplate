# Decision Log

Track all major decisions made during the discovery and implementation phases.

---

## Purpose

This decision log captures key decisions made throughout the project. Each decision should document:
- What was decided
- Why it was decided
- Who made the decision
- When it was decided
- What alternatives were considered
- Any impacts or consequences

---

## Decision Summary

**Total Decisions:** ___  
**Open Decisions:** ___  
**Approved Decisions:** ___  
**Reversed Decisions:** ___

---

## Decision Register

| ID | Date | Decision | Status | Owner | Impact |
|----|------|----------|--------|-------|--------|
| DEC-001 | | | ☐ Proposed ☐ Approved ☐ Implemented | | ☐ High ☐ Med ☐ Low |
| DEC-002 | | | ☐ Proposed ☐ Approved ☐ Implemented | | ☐ High ☐ Med ☐ Low |
| DEC-003 | | | ☐ Proposed ☐ Approved ☐ Implemented | | ☐ High ☐ Med ☐ Low |
| DEC-004 | | | ☐ Proposed ☐ Approved ☐ Implemented | | ☐ High ☐ Med ☐ Low |
| DEC-005 | | | ☐ Proposed ☐ Approved ☐ Implemented | | ☐ High ☐ Med ☐ Low |

---

## Decision Detail Template

### DEC-001: [Decision Title]

**Decision ID:** DEC-001  
**Date Proposed:** ___________  
**Date Decided:** ___________  
**Date Implemented:** ___________

**Category:**  
☐ Technical Architecture  
☐ Tools & Technology  
☐ Process & Methodology  
☐ Scope  
☐ Design  
☐ Integration  
☐ Security  
☐ Other: ___________

**Status:**  
☐ Proposed - Under consideration  
☐ Approved - Decision made, pending implementation  
☐ Implemented - Decision in effect  
☐ Reversed - Decision changed
☐ Superseded by: DEC-___

---

### The Decision

**What was decided:**  
[Clear statement of the decision]

**Context:**  
[Why was this decision needed? What problem does it solve?]

**Scope:**  
[What does this decision affect? What is in/out of scope?]

---

### Options Considered

**Option 1:** [Chosen Option] ✓
- **Pros:**
  - 
  - 
- **Cons:**
  - 
  - 
- **Cost:** ___________
- **Timeline impact:** ___________
- **Risk:** ☐ Low ☐ Medium ☐ High

**Option 2:** [Alternative]
- **Pros:**
  - 
  - 
- **Cons:**
  - 
  - 
- **Cost:** ___________
- **Timeline impact:** ___________
- **Risk:** ☐ Low ☐ Medium ☐ High
- **Why not chosen:** ___________

**Option 3:** [Alternative]
- **Pros:**
  - 
  - 
- **Cons:**
  - 
  - 
- **Cost:** ___________
- **Timeline impact:** ___________
- **Risk:** ☐ Low ☐ Medium ☐ High
- **Why not chosen:** ___________

---

### Decision Details

**Decision Maker(s):**  
- Primary: ___________ (Title)
- Consulted: ___________
- Informed: ___________

**Rationale:**  
[Why was this option chosen over the alternatives?]

**Assumptions:**  
1. 
2. 
3. 

**Constraints:**  
1. 
2. 
3. 

**Dependencies:**  
- Requires: DEC-___, ___________
- Enables: DEC-___, ___________
- Blocks: ___________

---

### Impact Assessment

**Impact Level:** ☐ High ☐ Medium ☐ Low

**Areas Impacted:**  
☐ Timeline  
☐ Budget  
☐ Scope  
☐ Team  
☐ Technical Architecture  
☐ User Experience  
☐ Integration  
☐ Security  
☐ Compliance  

**Timeline Impact:**  
- ☐ Accelerates: ___ weeks
- ☐ Neutral: No impact
- ☐ Delays: ___ weeks

**Budget Impact:**  
- ☐ Cost savings: $___________
- ☐ Neutral: No impact
- ☐ Additional cost: $___________

**Risk Impact:**  
- New risks introduced: ___________
- Risks mitigated: ___________

**Change Management Impact:**  
- Training required: Yes/No
- Process changes: Yes/No
- Communication needed: ___________

---

### Implementation

**Implementation Plan:**  
1. 
2. 
3. 

**Timeline:**  
- Start date: ___________
- Completion date: ___________

**Success Criteria:**  
- How will we know this decision was successful?
- 
- 

**Rollback Plan:**  
- Can this decision be reversed? Yes/No
- If yes, how: ___________
- Rollback cost/effort: ___________

---

### Review & Updates

**Review History:**

| Date | Reviewer | Status | Comments |
|------|----------|--------|----------|
| | | | |
| | | | |

**Related Decisions:**
- Supersedes: DEC-___
- Related to: DEC-___, DEC-___
- Superseded by: DEC-___ (if reversed)

---

## Example Decisions (Pre-populated)

---

### DEC-001: Document Authoring Platform Selection

**Decision ID:** DEC-001  
**Date Decided:** ___________  
**Category:** Tools & Technology  
**Status:** ☐ Approved ☐ Implemented

### The Decision

**What was decided:**  
Select [Microsoft SharePoint / Google Drive / Adobe Author Bus (Xwalk)] as the document authoring platform for Edge Delivery Services.

**Context:**  
Edge Delivery Services uses document-based authoring. Content authors need a familiar, collaborative environment to create and edit content. The selected platform will be used daily by 10-15 content authors.

### Options Considered

**Option 1: Microsoft SharePoint** ☐
- **Pros:**
  - Already have Microsoft 365 licenses
  - IT team familiar with administration
  - Integrates with existing tools
  - OneDrive sync for offline work
- **Cons:**
  - Potentially slower than other options
  - Some complexity in folder permissions
- **Cost:** No additional cost
- **Risk:** Low - Familiar technology

**Option 2: Google Drive** ☐
- **Pros:**
  - Excellent real-time collaboration
  - Fast and responsive
  - Easy to use
  - Good for distributed teams
- **Cons:**
  - Requires Google Workspace licenses
  - Another platform to manage
  - IT security review needed
- **Cost:** $__ per user per month
- **Risk:** Low-Medium - New platform

**Option 3: Adobe Author Bus (Xwalk)** ☐
- **Pros:**
  - Native AEM integration
  - Purpose-built for Edge Delivery
  - Best preview experience
- **Cons:**
  - New tool for team
  - Requires training
  - Beta/early stage
- **Cost:** Included with AEM license
- **Risk:** Medium - New technology

### Decision Details

**Decision Maker(s):**  
- Primary: Customer Project Manager + Digital Experience Lead
- Consulted: Content Team Lead, IT Security, Adobe Technical Architect
- Informed: All content authors

**Rationale:**  
[To be filled in after decision is made]

**Impact Level:** ☐ High

**Implementation Plan:**
1. Set up chosen platform access for team
2. Configure folder structure
3. Set up GitHub sync
4. Train content authors
5. Pilot with careers site
6. Roll out to full team

---

### DEC-002: MVP Website Selection

**Decision ID:** DEC-002  
**Date Decided:** ___________  
**Category:** Scope  
**Status:** ☐ Approved

### The Decision

**What was decided:**  
Start with **www.careers.ab.bluecross.ca** (5 pages) as the MVP for Edge Delivery Services migration.

**Context:**  
Need to select which website to migrate first. Must prove value quickly while managing risk and learning curve.

### Options Considered

**Option 1: www.careers.ab.bluecross.ca (5 pages)** ✓
- **Pros:**
  - Smallest site (only 5 pages)
  - Complete site shows end-to-end process
  - Lower risk
  - Can complete in 1-2 sprints
  - Quick win for team morale
- **Cons:**
  - Lower visibility than main site
  - Less complex (may not surface all issues)
- **Timeline:** 2 weeks
- **Risk:** Low

**Option 2: www.ab.bluecross.ca homepage only**
- **Pros:**
  - High visibility
  - Immediate impact
- **Cons:**
  - Single page doesn't prove full workflow
  - High pressure (homepage)
  - Complex page
- **Timeline:** 1-2 weeks
- **Risk:** Medium-High

**Option 3: blog.ab.bluecross.ca (recent posts)**
- **Pros:**
  - Simple content structure
  - Repetitive pattern (good for blocks)
- **Cons:**
  - 300 total pages is large
  - Even subset is significant effort
- **Timeline:** 3-4 weeks for 20-30 posts
- **Risk:** Medium

### Decision Details

**Decision Maker(s):**  
- Primary: Customer Project Manager + Adobe Project Manager
- Consulted: Technical Architect, Content Team Lead
- Approved: Customer Senior Project Sponsor

**Rationale:**  
- Careers site offers complete, low-risk MVP
- 5 pages is perfect scope for learning
- Can build confidence before tackling main site
- Full site migration proves end-to-end value
- Aligns with SOW recommendation

**Impact Level:** ☐ High (affects timeline and approach for entire project)

**Success Criteria:**
- All 5 pages migrated and live
- PageSpeed score > 90
- Zero critical bugs
- Authors trained and confident
- Team has learned block development
- Ready to scale to main site

---

### DEC-003: Content Migration Approach (As-Is vs. Redesign)

**Decision ID:** DEC-003  
**Date Decided:** [Per SOW - Already Decided]  
**Category:** Scope  
**Status:** ☑ Approved

### The Decision

**What was decided:**  
Migrate content **as-is** (no redesign) during initial implementation.

**Context:**  
SOW Section 5 (Edge Delivery Assumptions) states: "No Redesign/Design Ready, Migration is as-is."

### Options Considered

**Option 1: As-Is Migration** ✓
- **Pros:**
  - Clear scope
  - Faster timeline
  - Lower cost
  - Focus on platform migration, not redesign
  - Can redesign later after migration
- **Cons:**
  - Missed opportunity to improve design
  - May need to migrate some poor-quality content
- **Timeline:** 12 weeks (per SOW)
- **Cost:** Per SOW budget

**Option 2: Redesign During Migration**
- **Pros:**
  - Opportunity to improve user experience
  - Fresh, modern look
  - Fix known design issues
- **Cons:**
  - Significant scope increase
  - Requires UX/design work
  - Delays timeline by 6-8+ weeks
  - Budget increase required
  - Higher risk
- **Why not chosen:** Out of scope per SOW

### Decision Details

**Decision Maker(s):**  
- Decided in SOW negotiation
- ABC Senior Leadership + Adobe

**Rationale:**  
- Focus on platform migration first
- Prove platform value
- Can redesign in Phase 2 after successful migration
- Risk mitigation - tackle one major change at a time

**Impact Level:** ☐ High

**Implementation:**  
- Take screenshots of current pages
- Replicate layout and design
- Match colors, fonts, spacing as closely as possible
- Preserve URL structure
- Preserve SEO elements

**Future Consideration:**  
- Phase 2 (post-migration): Consider redesign initiatives
- Use performance and analytics data to guide redesign priorities

---

### DEC-004: Number of Blocks to Develop

**Decision ID:** DEC-004  
**Date Decided:** [Per SOW - Already Decided]  
**Category:** Scope  
**Status:** ☑ Approved

### The Decision

**What was decided:**  
Develop **up to 12 blocks** for Edge Delivery Services implementation.

**Context:**  
SOW Section 5 specifies "Up-to 12 Blocks Implementation" as part of the deliverables.

### The Decision

**12 blocks selected based on:**
- Content patterns across all 4 websites
- Frequency of use
- Reusability
- MVP requirements

**Block List (to be finalized in Session 3.2):**
1. Header (global navigation)
2. Footer (global footer)
3. Hero (landing page banners)
4. Cards (content card grids)
5. Columns (multi-column layouts)
6. Form (contact/quote forms)
7. Accordion (expandable content)
8. Tabs (tabbed content)
9. Testimonials/Quote
10. Media (image/video displays)
11. CTA (call-to-action blocks)
12. Breadcrumbs (navigation)

**Rationale:**  
- 12 blocks sufficient for 780 pages across 4 sites
- Covers all major content patterns
- Includes global elements (header/footer)
- Balances scope with timeline

**If More Blocks Needed:**  
- Prioritize remaining pages
- Consider combining similar patterns
- Phase 2 for additional blocks
- Or use default content (non-block content)

---

### DEC-005: Asset Migration Phasing

**Decision ID:** DEC-005  
**Date Decided:** ___________  
**Category:** Scope & Timeline  
**Status:** ☐ Proposed

### The Decision

**What was decided:**  
Migrate 200K assets in 4 phases over 12 weeks:
- Phase 1 (2 weeks): Critical assets (~10K)
- Phase 2 (4 weeks): Active content (~80K)
- Phase 3 (4 weeks): Archive (~100K)
- Phase 4 (2 weeks): Cleanup & optimization

### Options Considered

**Option 1: Phased Migration** ✓
- **Pros:**
  - Early access to critical assets
  - Learn and adjust approach
  - Validate process
  - Manageable chunks
- **Cons:**
  - Longer overall timeline
  - Old system remains active longer
- **Timeline:** 12 weeks
- **Risk:** Low

**Option 2: Big Bang Migration**
- **Pros:**
  - All assets available immediately
  - Shorter calendar time
  - Clean cutover
- **Cons:**
  - High risk
  - No learning phase
  - Difficult rollback
  - Resource intensive
- **Timeline:** 2-3 weeks (intensive)
- **Risk:** High

**Rationale:**  
- Phased approach reduces risk
- Allows for quality validation
- Team can learn and adjust
- Critical assets available quickly
- Old system can remain read-only as backup

---

### DEC-006: Headless Pilot Project

**Decision ID:** DEC-006  
**Date Decided:** ___________  
**Category:** Scope  
**Status:** ☐ Proposed

### The Decision

**What was decided:**  
Pilot headless content delivery with **Product Information to Member Services Portal**.

**Context:**  
Need to validate headless approach before rolling out to all 4 portals (Member Services, OEA, OHP, GSO).

### Options Considered

**Option 1: Member Services Portal (Product Info)** ✓
- **Pros:**
  - High visibility and value
  - Clear use case
  - Active development team
  - Realistic content volume
- **Cons:**
  - Customer-facing (pressure)
- **Risk:** Low-Medium

**Option 2: All Portals at Once**
- **Pros:**
  - Consistent approach
  - All portals get benefit
- **Cons:**
  - High risk
  - Complex coordination
  - Difficult to validate
- **Why not chosen:** Too much risk

**Pilot Scope:**
- Content Fragment model: Product Information
- Content: 5-10 products
- Portal integration: One section of Member Services
- GraphQL API configuration
- Success metrics: API response time, content accuracy, portal team satisfaction

**Rollout Plan:**
- Pilot: Member Services (Phase 1)
- Expand: OEA (Phase 2)
- Full: OHP, GSO (Phase 3)

---

## Decision Categories

Use these categories when logging decisions:

- **Technical Architecture:** System design, technology choices, architecture patterns
- **Tools & Technology:** Tool selection, platform choices, software decisions
- **Process & Methodology:** How we work, agile processes, workflows
- **Scope:** What's in/out, MVP definition, phasing
- **Design:** UX/UI decisions, design patterns, accessibility
- **Integration:** How systems connect, API decisions, integration patterns
- **Security:** Security approaches, compliance, authentication
- **Resource:** Team structure, roles, responsibilities
- **Timeline:** Schedule decisions, milestone dates
- **Budget:** Cost decisions, prioritization based on budget

---

## Decision Review Process

**When to Log a Decision:**
- Affects scope, timeline, or budget
- Impacts technical architecture
- Requires stakeholder approval
- Involves trade-offs between options
- Sets precedent for future decisions
- Requires significant effort to reverse

**Decision Approval Levels:**

| Decision Impact | Approver |
|-----------------|----------|
| High (affects scope, budget, timeline) | Customer Senior Project Sponsor + Adobe Senior Sponsor |
| Medium (affects approach, quality) | Project Managers + Technical Leads |
| Low (implementation details) | Technical Leads |

**Review Frequency:**
- Weekly in project status meetings
- Document all decisions within 24 hours
- Review decision log monthly for patterns

---

## Open Decisions

Track decisions that need to be made:

| ID | Decision Needed | By When | Owner | Blocker For |
|----|----------------|---------|-------|-------------|
| | | | | |
| | | | | |

---

**Document Owner:** Project Manager  
**Last Updated:** ___________  
**Next Review:** ___________
