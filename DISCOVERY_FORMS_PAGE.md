# Forms Page Discovery Questions - Alberta Blue Cross

**Page Analyzed:** https://www.ab.bluecross.ca/forms.php
**Date:** 2026-02-24
**Purpose:** Technical discovery for AEM Edge Delivery Services migration

---

## Technical Implementation Overview

The current forms page is a **client-side forms library** built with jQuery that presents 40+ downloadable PDF forms organized in collapsible accordion sections. The page implements a sophisticated multi-dimensional filtering system using HTML5 data attributes (`data-name`, `data-member`, `data-filter`, `data-topic`, `data-benefit`) with real-time search via regex pattern matching. Users can filter forms by member type (Personal/Group/Government), role (Member/Plan Administrator), topic category (Claims/Account/Applications), and benefit type (Dental/Health/Travel/Life/Optical), with all filters working in combination. The search bar performs case-insensitive substring matching across form names, dynamically showing/hiding result cards based on active filters. Each form is presented as a simple card with title, description, and direct PDF link—there are no web form submissions, only static document downloads from `/pdfs/` directory. Analytics tracking is implemented via Google Analytics (conversion tracking) and Tealium Tag Management (custom event tracking for clicks and banner interactions). The page features a dismissible info banner with localStorage persistence, responsive design with media query breakpoints, and includes basic accessibility features like skip links and semantic heading structure. All filtering and search logic executes client-side in the browser, making the page fast but dependent on JavaScript for core functionality.

---

## 1. Forms Governance & Content Management

**Q1.** Who is responsible for maintaining form content (adding, updating, retiring forms), and what is the typical update frequency (weekly, monthly, quarterly)?

**Q2.** What approval workflow or compliance review is required before publishing new or updated forms?

**Q3.** Where are PDF files currently stored, and should they migrate to AEM Assets or remain in an external DAM?

**Q4.** Are forms versioned for audit/compliance purposes? How are form updates communicated to members?

**Q5.** Do any forms require authentication to download, or should some be restricted based on member status?

**Q6.** Are there accessibility requirements for PDF documents (e.g., tagged PDFs for screen readers)?

---

## 2. Content Authoring Approach (AEM EDS)

**Q7.** Would a **spreadsheet-based approach** (Google Sheets or Excel) work for managing the forms library, where each row is a form with columns for title, description, PDF link, and filter tags?

**Q8.** What level of technical expertise do content authors have? Should the system be entirely code-free?

**Q9.** Should forms be grouped in accordion sections as they are now? If yes, should sections be manually authored or auto-generated from filter categories?

**Q10.** Are there additional metadata fields needed beyond current data (e.g., form number, effective date, expiration date, "New" badge)?

---

## 3. Search & Filter Behavior

**Q11.** Should search cover only form titles or also descriptions and form numbers? Should it support fuzzy matching (e.g., "dentist" matches "dental")?

**Q12.** Should the URL update to reflect active filters and search terms (e.g., `/forms?filter=dental&search=claim`) to enable bookmarking and sharing?

**Q13.** Should filter counts be visible (e.g., "Dental (12 forms)") to help users understand available options?

**Q14.** What should happen when filters yield no results—show a helpful message, suggest clearing filters, or display related forms?

**Q15.** Should there be additional filters like "Recently Updated," "Most Downloaded," or "Recommended for You"?

---

## 4. Analytics & Tracking

**Q16.** What specific events are currently tracked in Google Analytics and Tealium (form downloads, search queries, filter selections, banner interactions)?

**Q17.** Is the built-in AEM Edge Delivery **RUM (Real User Monitoring)** sufficient, or must Tealium and Google Analytics be retained for business continuity?

**Q18.** Should search queries, "no results" scenarios, and filter usage patterns be tracked to optimize the user experience?

**Q19.** Are there conversion funnels or downstream metrics that depend on form downloads (e.g., claim submission rates)?

---

## 5. User Experience & Accessibility

**Q20.** What WCAG compliance level is required (A, AA, or AAA), and how is accessibility currently tested?

**Q21.** Should screen readers announce result count updates when filters are applied (e.g., "Showing 8 of 40 forms")?

**Q22.** Should the mobile experience differ from desktop (e.g., filters in a bottom sheet/modal instead of sidebar)?

**Q23.** What are the target performance metrics for page load (LCP, FID, CLS), and what is the mobile vs. desktop traffic split?

**Q24.** Should the page work without JavaScript (graceful degradation with server-side filtering), or is client-side filtering acceptable?

---

## 6. Migration Strategy & Technical Requirements

**Q25.** How should 40+ forms be migrated—bulk import from a spreadsheet, manual entry, or extract from current CMS?

**Q26.** Should the URL change from `/forms.php` to `/forms`, and what is the redirect strategy for existing PDF links?

**Q27.** Should forms be SEO-indexable, or is this primarily a member-only resource? Should individual form pages be created?

**Q28.** What constitutes a successful migration—feature parity with current site, improved user experience, or both?

**Q29.** Who are the key stakeholders for UAT (user acceptance testing), and what is the rollback plan if critical issues arise?

---

## 7. Integrations & Third-Party Services

**Q30.** Must Tealium Tag Management and Cloudflare security features be retained, or can they be replaced with AEM solutions?

**Q31.** Should the forms page integrate with the member portal (personalized recommendations, download history, pre-filled forms)?

**Q32.** Is there a roadmap to replace PDF downloads with online web form submissions? If yes, which forms are highest priority?

---

## 8. Future Enhancements (Optional)

**Q33.** Should there be typeahead/autocomplete for search, or "Did you mean..." suggestions for misspellings?

**Q34.** Should personalization be implemented (show forms relevant to member's plan type, recent downloads, recommended forms)?

**Q35.** Are there plans for multi-language support (French, other languages)? If yes, should form metadata be translated or only PDFs?

---

## Prioritized Next Steps

1. **Schedule stakeholder sessions** to answer Q1-Q10 (governance, authoring approach)
2. **Define content model** based on Q7-Q10 (spreadsheet structure, metadata fields)
3. **Clarify analytics requirements** with Q16-Q19 (tracking continuity, RUM sufficiency)
4. **Validate UX decisions** with Q11-Q15, Q20-Q24 (filtering behavior, accessibility)
5. **Plan migration logistics** with Q25-Q29 (bulk import, URL strategy, testing)
6. **Document responses** in discovery templates (see `discovery-templates/week-3-edge-delivery/`)

---

## Related Documentation

- **MIGRATION_STRATEGY.md**: Overall 16-week migration timeline
- **SITEMAP_ANALYSIS.md**: Complete page inventory (~450 pages)
- **MIGRATION_TRACKING_TEMPLATE.md**: Progress tracking
- **Week 3 Edge Delivery Templates**: For documenting discovery responses

---

**Document Owner:** Solution Architect
**Status:** Ready for stakeholder review
**Last Updated:** 2026-02-24

---

## Next Steps

1. **Prioritize questions** by business impact and technical complexity
2. **Schedule discovery sessions** with stakeholders:
   - Content/Marketing team (forms authoring, workflow)
   - Compliance/Legal (forms governance, approval process)
   - Analytics team (tracking requirements)
   - IT/Security (integrations, performance, accessibility)
   - End users (member and plan administrator perspectives)
3. **Document responses** in a centralized discovery repository
4. **Create content model** based on requirements
5. **Prototype core functionality** using AEM EDS blocks
6. **Validate with stakeholders** before full implementation

---

## Related Documentation

- **MIGRATION_STRATEGY.md**: Overall 16-week migration plan
- **SITEMAP_ANALYSIS.md**: Complete page inventory
- **MIGRATION_TRACKING_TEMPLATE.md**: Progress tracking
- **week-3-edge-delivery templates**: For documenting discovery responses

---

**Document Owner:** Solution Architect
**Status:** Draft for stakeholder review
**Last Updated:** 2026-02-24
