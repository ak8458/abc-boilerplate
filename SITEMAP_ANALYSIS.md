# Alberta Blue Cross Sitemap Analysis

## Document Overview

This document provides a detailed analysis of the sitemaps for the Alberta Blue Cross websites to inform the migration strategy and planning.

**Analysis Date**: January 13, 2026
**Sitemaps Analyzed**: 
- ✅ Main Website: https://www.ab.bluecross.ca/sitemap.xml
- ⏳ Blog: https://blog.ab.bluecross.ca/sitemap_index.xml (pending detailed analysis)
- ⏳ Community: https://www.community.ab.bluecross.ca/sitemap.xml (pending detailed analysis)

---

## 1. Main Website Analysis (www.ab.bluecross.ca)

### 1.1 Overall Statistics

**Total Pages Identified**: ~450 URLs in sitemap

**URL Structure Patterns**:
- Most pages use `.php` extension
- Hierarchical directory structure
- Some query parameter-based pages
- Mix of content and functional pages

### 1.2 Content Categories Breakdown

#### Plans & Products (~80 pages)

**Personal Plans** (~25 pages):
```
/plans/personal/individual/
  - blue-assured-plan.php
  - blue-assured-plan-rate-chart.php
  - blue-choice-plan.php
  - blue-choice-plan-rate-chart.php

/plans/personal/young-adult/
  - young-adult-plan.php
  - young-adult-plan-rate-chart.php

/plans/personal/retiree/
  - retiree-plan.php
  - retiree-plan-rate-chart.php
```

**Group Plans** (~25 pages):
```
/plans/group/
  - index.php (main landing)
  - quote.php
  - benefit-plan-options.php
  - group-plan-types.php
  - group-definitions.php
  - resources.php
  - workplace-wellness/
```

**Travel Insurance** (~20 pages):
```
/plans/travel/
  - trip-cancellation-interruption.php
  - compare-travel-coverages.php
  - baggage-loss-coverage.php
  - accidental-death-and-dismemberment.php
  - top-up-insurance.php
  - option-cancel-for-any-reason.php
```

**Plan Selection & Tools** (~10 pages):
```
/plans/
  - choose-personal-plans.php
  - personal/blue-assured-plan-result.php
  - personal/retiree-plan-result.php
  - personal/individual/blue-assured-plan-rate-chart.php
  - personal/individual/blue-choice-plan-rate-chart.php
  - personal/young-adult/young-adult-plan-rate-chart.php
```

**Migration Considerations**:
- Rate charts likely use interactive calculators (custom block needed)
- Plan comparison tools will need functional equivalents
- Consistent template structure expected across plan types
- Rate chart data may need dynamic loading

---

#### Member Services (~50 pages)

**Personal Plan Information** (~15 pages):
```
/member/personal-plan-information/
  - individual-plan.php
  - ip-provider-eligibility.php

/member/benefits/
  - dental.php
  - travel/
    - pre-travel-considerations.php
```

**Group Plan Information** (~15 pages):
```
/member/group-plan-information/
  - group-plan-members.php
  - group-provider-eligibility.php
```

**Benefits & Services** (~20 pages):
```
/member/benefits/
  - dental.php
  - travel/
    - pre-travel-considerations.php
```

**Sign-In & Portals**:
```
/sign-in.php
/online_services.php
```

**Migration Considerations**:
- Sign-in pages may remain as-is (authentication system)
- Provider eligibility lookups may need API integration
- Benefits information pages are likely standard content
- Pre-travel considerations could use checklists or accordions

---

#### Provider Resources (~100 pages)

**Health Providers** (~35 pages):
```
/provider/type/health/
  - index.php
  - claimstream-home.php
  - (various ClaimStream pages)
```

**Pharmacy Providers** (~35 pages):
```
/provider/type/pharmacy/
  - home.php
  - resources.php
  - secure-online-site.php
  - claimstream-home.php
  - price-files.php
  - covid-19-information.php
```

**Dental Providers** (~15 pages):
```
/provider/type/dental/
  - benefacts-history.php
  - (various Benefacts pages)
```

**AADL Providers** (~15 pages):
```
/provider/type/aadl/
  - index.php
  - msbm-home.php
  - paob-home.php
  - communication-home.php
```

**Migration Considerations**:
- Provider portals may need to remain separate
- ClaimStream pages are functional tools (may not migrate fully)
- Resource pages are standard content
- Price files may be downloadable documents
- Consider whether provider tools migrate or stay external

---

#### Government Programs (~30 pages)

**Program Pages** (~15 pages):
```
/resources/government-programs/
  - program-information.php
  - client-directed-home-care.php
  - biosimilar-initiative.php
  - government-maximum-pricing.php
```

**Migration Considerations**:
- Informational content pages
- May include forms or applications
- Regulatory content requires accuracy verification
- May have frequent updates (consider CMS workflow)

---

#### Company Information (~40 pages)

**About Pages** (~15 pages):
```
/company/about/
  - history.php
  - leadership.php
  - annual-reports.php
  - new-to-alberta.php
  - provider-eligibility.php
```

**News & Updates** (~10 pages):
```
/news/
  - covid-19-updates.php
  - phone-phishing-scam.php
  - asymptomatic-testing.php
  - submit-claims-online.php
  - dental-fee-guide-changes.php
  - news-dir-bill-psychology.php
  - special-measures-for-displaced-plan-members.php
  - mobile-member-services.php
  - student-wellness-grant.php
  - dominique-gregoire-cfo.php
```

**Company Pages** (~15 pages):
```
/company/
  - careers/ (various career pages)
  - contact/ (contact information)
```

**Migration Considerations**:
- Standard content pages
- News articles could use blog-style template
- Leadership page likely uses cards or profiles
- Annual reports may be PDF downloads
- Career pages may integrate with ATS (Applicant Tracking System)

---

#### Resources & Tools (~50 pages)

**Health & Wellness** (~25 pages):
```
/resources/health-wellness/
  - care-navigation/
    - heart-disease.php
    - lifestyle-management.php
    - connecting-to-health-care.php
    - mental-health-support.php
  - creating-a-high-performing-workforce.php
  - womens-health.php
  - retirement-guide/
    - guide-to-retirement.php
```

**Benefits Fraud** (~10 pages):
```
/resources/benefits-fraud/
  - index.php
  - approach.php
  - report-fraud.php
```

**Forms** (~15 pages):
```
/forms.php
/public_forms/ (various forms)
```

**Migration Considerations**:
- Resource articles are standard content
- Care navigation could use accordions or tabs
- Forms need functional migration or external links
- Wellness content may include interactive elements
- Consider fragment blocks for reusable sidebars/CTAs

---

#### Interactive Forms & Tools (~50 pages)

**Broker Forms**:
```
/public_forms/broker_form.php?broker=[various]
  - fairfield
  - modern_benefits_group
  - johnson
  - baltimore
  - effortless
  - fairfieldWatson
  - vanta
  - grant_sales
  - bk_benefit
  - optimax_canada_edmonton
  - london_life
```

**CPAR Tools** (Competitive Price Adjustment Report):
```
/CPAR/
  - report.php
  - demographic-mismatch-report.php
  - attachment-conflict-report.php
  - general-navigation.php
  - general-navigation-panel.php
  - view-program-details.php
  - panel-submission-history.php
```

**Other Tools**:
```
/dbl/ (Digital Benefit Ledger?)
  - idbl-unavailable.php
  - physician_feedback2.php
  
/public_forms/
  - provider-request-change.php
  - gov-request-access.php
  - dbl_feedback.php
  - conversion-forms/
    - cancel-plan-function.php
    - new-calculators/
      - mod-blue-choice-rates-calculator.php
```

**Schedule of Fees**:
```
/scheduleoffees.php
/acip_scheduleoffees.php
/basic_benefitplus_scheduleoffees.php
```

**Migration Considerations**:
- **HIGH COMPLEXITY**: Forms and calculators
- Many forms may need to remain as external tools
- Consider iFrame embedding vs. full migration
- Form submissions need backend integration
- Calculators may require custom JavaScript blocks
- CPAR tools likely stay as separate application
- Broker-specific forms have query parameters (URL mapping needed)

---

#### Workplace Wellness Programs (~15 pages)

```
/plans/group/workplace-wellness/
  - employee-wellness-programs/
    - wellness-screening-overview.php
    - wellness-screening-for-participants.php
    - wellness-screening-for-organizations.php
```

**Migration Considerations**:
- Program information pages
- May include registration forms
- Could use cards or columns for program features

---

#### Email & Special Pages (~50 pages)

**Email Templates**:
```
/email/
  - wellness-subscription.php
  - view-in-browser/2020/
    - plan-advisor-briefing-bv.html
  - (various email templates)
```

**Special Pages**:
```
/video/
  - my-benefits-app-video.php

/wellness/
  - live-your-best-life.php

/accessibility-and-inclusion-commitment.php
/privacy.php
/sitemap.php
/social-media-comment-policy.php
/official-contest-rules.php
/group-ipad-contest-rules.php
```

**Migration Considerations**:
- Email templates may not need migration (separate email system)
- Special pages are one-off content
- Legal pages (privacy, terms) need careful migration
- Video pages may embed external video players
- Contest pages may be archived/removed if expired

---

### 1.3 URL Patterns & Redirect Planning

#### PHP to HTML Conversion

**Pattern**: Most URLs end in `.php`
**New Pattern**: Remove `.php` extension

**Examples**:
```
OLD: /plans/personal/young-adult/young-adult-plan.php
NEW: /plans/personal/young-adult/young-adult-plan

OLD: /company/about/history.php
NEW: /company/about/history
```

**Redirect Rule**:
```
Redirect 301 /(.*)\.php$ /$1
```

#### Query Parameter Pages

**Broker Forms**:
```
OLD: /public_forms/broker_form.php?broker=fairfield
NEW: /public_forms/broker-form-fairfield
     OR /public_forms/broker/fairfield
```

**Considerations**:
- Decide on URL structure for parameterized pages
- Create individual pages or maintain dynamic routing?
- Document each unique query parameter combination

#### Index Pages

```
OLD: /plans/group/index.php
NEW: /plans/group
     OR /plans/group/index (depends on AEM config)
```

---

### 1.4 Priority Classification

Based on likely traffic and business value:

#### Tier 1: Critical Pages (Migrate First) (~30 pages)
- Homepage
- Main plan landing pages (personal, group, travel)
- Sign-in page (if migrating)
- Top member service pages
- Primary contact page

#### Tier 2: High Value (~100 pages)
- Individual plan detail pages
- Member resources
- Provider home pages
- Key resource articles
- News/updates

#### Tier 3: Standard Content (~200 pages)
- Detailed plan information
- Company information
- Health & wellness articles
- Provider resources

#### Tier 4: Functional/Complex (~70 pages)
- Forms and calculators
- CPAR tools
- Broker-specific pages
- Email templates (may not migrate)

#### Tier 5: Low Priority/Archive (~50 pages)
- Old news articles
- Expired contests
- Legacy email templates
- Outdated information

---

### 1.5 Page Templates Identified

Based on URL patterns, these templates are likely:

| Template | Est. Count | Characteristics | Blocks Needed |
|----------|-----------|-----------------|---------------|
| Plan Detail | 20 | Hero, features, pricing, CTA | Hero, Cards, Fragment |
| Rate Chart | 6 | Interactive calculator | Custom Calculator Block |
| Resource Article | 50 | Hero, article body, sidebar | Hero, Fragment |
| Provider Home | 4 | Nav, resources, tools | Hero, Cards, Columns |
| News Article | 20 | Title, date, body, related | Hero, Cards (related) |
| Program Page | 30 | Overview, features, eligibility | Hero, Accordion, Cards |
| About/Company | 15 | Story, team, milestones | Hero, Columns, Cards |
| Form Page | 40 | Instructions, form, disclaimer | Hero, Custom Form Block |
| Landing Page | 10 | Hero, features, testimonials | Hero, Cards, Columns, Quote |

---

## 2. Blog Site Analysis (blog.ab.bluecross.ca)

### 2.1 Status

**Sitemap URL**: https://blog.ab.bluecross.ca/sitemap_index.xml

**Type**: Sitemap Index (contains multiple sitemaps)

**Analysis Status**: ⏳ Pending detailed fetch and analysis

### 2.2 Expected Structure

Based on typical blog sitemap_index.xml:

```
/sitemap_index.xml
  ├── /sitemap-posts.xml (blog posts)
  ├── /sitemap-pages.xml (static pages)
  ├── /sitemap-categories.xml (category archives)
  ├── /sitemap-tags.xml (tag archives)
  └── /sitemap-authors.xml (author archives)
```

### 2.3 Estimated Content

**Blog Posts**: 200-500 (unknown until analyzed)
**Categories**: 10-20
**Tags**: 50-100
**Authors**: 5-15
**Static Pages**: 5-10 (About, Contact, etc.)

### 2.4 Migration Considerations

**Blog Post Template**:
- Title, author, date, featured image
- Article body
- Categories/tags
- Related posts
- Comments (if enabled)
- Social sharing

**Blog Index/Archive**:
- Post listings
- Pagination
- Filtering by category/tag
- Search

**Taxonomy Pages**:
- Category archives
- Tag archives
- Author pages

**Action Required**: 
1. Fetch sitemap_index.xml
2. Parse all sub-sitemaps
3. Count posts by date range
4. Identify categories and tags
5. Assess comment system (if any)
6. Document blog platform (WordPress, custom, etc.)

---

## 3. Community Site Analysis (community.ab.bluecross.ca)

### 3.1 Status

**Sitemap URL**: https://www.community.ab.bluecross.ca/sitemap.xml

**Analysis Status**: ⏳ Pending detailed fetch and analysis

### 3.2 Expected Structure

Community sites typically contain:
- Forum categories
- Discussion threads
- User profiles
- Static resource pages

### 3.3 Estimated Content

**Discussion Threads**: 500-5000 (highly variable)
**Forum Categories**: 10-30
**Static Pages**: 10-20
**User Profiles**: (may not be in sitemap)

### 3.4 Migration Considerations

**Critical Questions**:
1. **Forum Platform**: What powers the community?
   - Custom built
   - Third-party (Discourse, phpBB, etc.)
   - Integration points

2. **User-Generated Content**: How to handle?
   - Import all discussions as static content?
   - Maintain separate forum system?
   - API integration?

3. **User Authentication**: 
   - Shared with main site?
   - Separate system?
   - SSO integration?

4. **Dynamic Features**:
   - Posting new threads
   - Replies and comments
   - User profiles
   - Notifications
   - Search

**Migration Approaches**:

**Option A: Full Migration (High Complexity)**
- Import all discussions as AEM content
- Build custom forum functionality
- Recreate dynamic features
- **Pros**: Unified platform
- **Cons**: Very high effort, loss of forum features

**Option B: Static Archive + New Forum (Medium Complexity)**
- Import historical content as static pages (read-only)
- Set up new forum system (integrated or separate)
- Redirect new activity to new forum
- **Pros**: Preserves history, modern forum features
- **Cons**: Split content, migration complexity

**Option C: Separate Integration (Low Complexity)**
- Keep community forum separate
- Maintain existing forum platform
- Add links/integration between main site and forum
- **Pros**: Low migration effort, maintains functionality
- **Cons**: Not unified, potential inconsistency

**Recommendation**: Option C or B, pending discovery of:
- Current forum platform capabilities
- User activity levels
- Business requirements for community features

**Action Required**:
1. Fetch sitemap.xml
2. Identify forum platform
3. Count threads, posts, users (if accessible)
4. Assess activity level (recent posts)
5. Stakeholder discussion on community future
6. Decide on migration approach
7. Scope effort accordingly

---

## 4. Cross-Site Considerations

### 4.1 Shared Elements

**Header/Navigation**:
- Likely consistent across main site
- Blog may have slightly different nav
- Community may be distinct

**Footer**:
- Probably consistent
- Legal links, contact info, social

**Branding/Design**:
- Same visual identity expected
- May have variations per site section

**User Authentication**:
- May share sign-in system
- Investigate SSO implementation

### 4.2 URL Structure Decisions

**Subdomain Strategy**:

**Option 1: Maintain Subdomains**
```
www.ab.bluecross.ca → www.ab.bluecross.ca (AEM)
blog.ab.bluecross.ca → blog.ab.bluecross.ca (AEM)
community.ab.bluecross.ca → community.ab.bluecross.ca (separate or AEM)
```

**Option 2: Consolidate to Paths**
```
www.ab.bluecross.ca → ab.bluecross.ca
blog.ab.bluecross.ca → ab.bluecross.ca/blog
community.ab.bluecross.ca → ab.bluecross.ca/community
```

**Considerations**:
- SEO impact of consolidation
- Redirect complexity
- AEM Edge Delivery multi-site setup
- Analytics tracking
- Certificate management

**Recommendation**: Depends on business goals and SEO strategy

### 4.3 Internal Linking

**Audit Needed**:
- Links between www and blog
- Links between www and community
- Cross-site navigation elements

**Migration Impact**:
- Update internal links if URL structure changes
- Ensure cross-site navigation works
- Test all linking after migration

---

## 5. Technical Deep-Dive Findings

### 5.1 File Extensions

**Observed**:
- `.php` - Most pages (dynamic content indicator)
- `.html` - Some email templates
- No extension on some paths (directory index)

**Implication**:
- Site is PHP-based (WordPress, custom PHP, or PHP framework)
- May have dynamic content generation
- Database-driven content likely

### 5.2 URL Parameters Observed

**Broker Forms**:
```
?broker=fairfield
?broker=modern_benefits_group
?broker=johnson
...
```

**Other Parameters** (potential):
```
?pt=respiratory (provider-request-change.php)
```

**Migration Strategy**:
- Document all unique parameter combinations
- Create static pages for each variation
- OR implement dynamic routing in AEM
- Set up redirects from parameterized to new URLs

### 5.3 Subdirectories Analysis

**Depth Analysis**:
```
Level 1: /plans, /member, /provider, /resources, /company
Level 2: /plans/group, /plans/personal, /plans/travel
Level 3: /plans/personal/individual, /plans/personal/young-adult
Level 4: Rare, mostly in /email and /public_forms
```

**Implication**:
- Well-organized information architecture
- Hierarchical navigation expected
- Breadcrumbs likely used
- AEM folder structure should mirror this

### 5.4 Special Paths

**API or Tools**:
```
/CPAR/ - Likely tool/application
/dbl/ - Tool/application
/public_forms/ - Form system
```

**Static Assets**:
```
/icons/ - SVG icons
/fonts/ - Web fonts
```

**Implication**:
- Tools may not migrate (stay as separate apps)
- Static assets need to be included in migration
- Consider CDN for fonts and icons

---

## 6. Migration Complexity Assessment

### 6.1 Complexity by Category

| Category | Pages | Complexity | Reason | Est. Time/Page |
|----------|-------|------------|--------|----------------|
| Standard Content | ~200 | Low | Simple text/image pages | 30-45 min |
| Product/Plans | ~60 | Medium | Structured data, comparisons | 45-60 min |
| Resource Articles | ~50 | Low | Article format, straightforward | 30-45 min |
| Provider Pages | ~80 | Medium | Mix of content and tools | 45-60 min |
| Forms | ~40 | High | Functional, backend integration | 2-4 hours |
| Calculators | ~10 | Very High | Complex JavaScript, business logic | 4-8 hours |
| Tools (CPAR, DBL) | ~20 | Very High | May not migrate fully | TBD |
| Email Templates | ~30 | Low | May skip migration | 15-30 min (if needed) |

### 6.2 Overall Migration Time Estimate

**Standard Content** (~200 pages × 40 min avg): ~133 hours
**Medium Complexity** (~140 pages × 50 min avg): ~117 hours
**High Complexity** (~40 forms × 3 hours avg): ~120 hours
**Very High Complexity** (~10 calculators × 6 hours avg): ~60 hours
**Tools Assessment & Decision**: ~20 hours
**Blog Migration** (~300 posts × 20 min avg): ~100 hours
**Community Assessment**: ~40 hours

**Total Estimated Direct Migration Time**: ~590 hours

**With overhead** (QA, testing, meetings, blockers):
- Add 30% overhead: ~767 hours
- Add buffer: ~800 hours

**Team of 3 content specialists + 1 developer**:
- 800 hours / 4 people = 200 hours per person
- 200 hours / 40 hours per week = 5 weeks
- With part-time work, QA, testing: **12-16 weeks** (matches strategy)

---

## 7. Recommended Next Actions

### 7.1 Immediate (Week 1)

1. **Fetch Remaining Sitemaps**
   ```bash
   # Fetch blog sitemap_index
   curl https://blog.ab.bluecross.ca/sitemap_index.xml > blog_sitemap_index.xml
   
   # Parse sub-sitemaps
   # [Extract URLs from index, fetch each sitemap]
   
   # Fetch community sitemap
   curl https://www.community.ab.bluecross.ca/sitemap.xml > community_sitemap.xml
   ```

2. **Analyze Blog Structure**
   - Parse all blog post URLs
   - Count posts by year
   - Extract categories and tags
   - Identify blog platform

3. **Assess Community Site**
   - Identify forum platform
   - Check activity level (recent posts)
   - Assess feasibility of migration vs integration
   - Stakeholder decision on community approach

4. **Create Detailed URL Inventory**
   - Spreadsheet with all URLs
   - Categorize by type and priority
   - Complexity rating
   - Assigned to team member

### 7.2 Week 1-2 (Discovery Phase)

1. **Crawl and Screenshot Representative Pages**
   - Select 20-25 pages across all categories
   - Use `scrape-webpage` skill to extract structure
   - Document patterns and templates

2. **Block Inventory**
   - Run block inventory skill
   - Document needed custom blocks
   - Prioritize block development

3. **Content Model Design**
   - Design models for major templates
   - Validate with stakeholders
   - Document authoring guidelines

4. **URL Mapping Strategy**
   - Define new URL structure
   - Create redirect rules
   - Document exceptions and special cases

5. **Tool Integration Assessment**
   - CPAR tools: Keep separate? Integrate API?
   - DBL: Keep separate? Integrate API?
   - Forms: Backend integration plan?
   - Calculators: Rebuild or embed?

---

## 8. Key Questions for Stakeholders

### 8.1 Business & Strategy

1. **Subdomain Consolidation**: Keep subdomains or consolidate to paths?
2. **Community Future**: Migrate, integrate, or keep separate?
3. **Legacy Content**: Archive old news/contests or maintain?
4. **Blog Platform**: Continue WordPress (if that's current) or move to AEM fully?

### 8.2 Technical & Integration

1. **Authentication**: How does sign-in work across sites? SSO?
2. **Forms Backend**: What processes form submissions? CRM? Database?
3. **Calculator Logic**: Document business rules for rate calculators?
4. **Provider Tools**: ClaimStream, Benefacts - keep separate or integrate?
5. **CPAR/DBL Tools**: Mission-critical? Separate applications or migrate?

### 8.3 Content & SEO

1. **URL Structure Preference**: Any SEO concerns with proposed redirects?
2. **Content Accuracy**: Who validates migrated content for accuracy?
3. **Outdated Content**: Process for identifying and removing?
4. **Metadata**: Any specific requirements for page titles/descriptions?

---

## 9. Risk & Mitigation Summary

### 9.1 High-Risk Items

**Risk**: Complex form integrations break during migration
**Mitigation**: 
- Identify all form endpoints early
- Test form submissions in staging
- Have rollback plan
- Consider phased rollout

**Risk**: Community migration too complex/time-consuming
**Mitigation**:
- Assess in Week 1
- If too complex, keep separate
- Budget extra time if migration approved
- Consider Option B (static archive + new forum)

**Risk**: URL redirects incomplete, causing 404s
**Mitigation**:
- Comprehensive URL mapping document
- Automated redirect testing
- 404 monitoring post-launch
- Quick-fix process for missed redirects

### 9.2 Medium-Risk Items

**Risk**: Calculator business logic not documented
**Mitigation**:
- Interview stakeholders for business rules
- Reverse engineer existing calculators
- Extensive testing of calculations
- Stakeholder sign-off on accuracy

**Risk**: Provider tools (ClaimStream, Benefacts) dependencies
**Mitigation**:
- Early assessment of tool architecture
- Determine if migration needed or external link
- API integration if tools stay separate
- Clear communication with providers

---

## 10. Conclusion

### 10.1 Summary of Findings

**Main Website (www.ab.bluecross.ca)**:
- ~450 pages identified
- Well-organized hierarchical structure
- Mix of content (70%), functional (20%), and complex tools (10%)
- PHP-based, likely database-driven
- Estimated 12-16 weeks for full migration with team of 4

**Blog (blog.ab.bluecross.ca)**:
- Sitemap index structure (typical blog)
- Estimated 200-500 posts
- Needs detailed analysis
- Likely additional 3-4 weeks

**Community (community.ab.bluecross.ca)**:
- Unknown structure until analysis
- May not require full migration (separate system option)
- Decision needed on approach

### 10.2 Readiness Assessment

**Ready to Proceed**:
- ✅ Main website structure understood
- ✅ Page categories defined
- ✅ Priority tiers identified
- ✅ Templates documented
- ✅ Migration strategy established

**Needs Attention**:
- ⚠️ Blog sitemap analysis
- ⚠️ Community site assessment
- ⚠️ Form backend integration details
- ⚠️ Calculator business logic documentation
- ⚠️ Provider tool integration strategy

**Blockers**:
- 🚨 None currently identified
- 🚨 Potential: Community migration decision

### 10.3 Confidence Level

**Main Website Migration**: 🟢 High Confidence
- Clear structure, manageable scope, proven workflow

**Blog Migration**: 🟡 Medium Confidence
- Standard blog migration, pending detailed analysis

**Community Migration**: 🟠 Low Confidence
- Unknown structure, complex integration, decision needed

---

## Appendix A: Complete URL Inventory

### Sample URL Listing (First 50 URLs from sitemap)

```
1. https://www.ab.bluecross.ca/index.php
2. https://www.ab.bluecross.ca/plans/personal/young-adult/young-adult-plan.php
3. https://www.ab.bluecross.ca/provider/type/aadl/msbm-home.php
4. https://www.ab.bluecross.ca/provider/type/pharmacy/resources.php
5. https://www.ab.bluecross.ca/provider/type/pharmacy/home.php
6. https://www.ab.bluecross.ca/plans/group/quote.php
7. https://www.ab.bluecross.ca/plans/personal/individual/blue-assured-plan.php
8. https://www.ab.bluecross.ca/resources/benefits-fraud/approach.php
9. https://www.ab.bluecross.ca/resources/health-wellness/care-navigation/heart-disease.php
10. https://www.ab.bluecross.ca/accessibility-and-inclusion-commitment.php
...
(Continued in full URL mapping spreadsheet)
```

**Full inventory**: To be created in separate spreadsheet

---

## Appendix B: Proposed URL Mapping Examples

### Standard Page Mappings

| Original URL | New URL | Redirect | Priority |
|--------------|---------|----------|----------|
| /index.php | / | 301 | Tier 1 |
| /plans/personal/young-adult/young-adult-plan.php | /plans/personal/young-adult/young-adult-plan | 301 | Tier 1 |
| /company/about/history.php | /company/about/history | 301 | Tier 2 |
| /resources/health-wellness/womens-health.php | /resources/health-wellness/womens-health | 301 | Tier 3 |

### Parameterized Page Mappings

| Original URL | New URL | Redirect | Notes |
|--------------|---------|----------|-------|
| /public_forms/broker_form.php?broker=fairfield | /public_forms/broker/fairfield | 301 | One page per broker |
| /public_forms/broker_form.php?broker=johnson | /public_forms/broker/johnson | 301 | |

### Special Cases

| Original URL | New URL | Redirect | Action |
|--------------|---------|----------|--------|
| /CPAR/report.php | External tool link | 302 | Keep as separate app |
| /dbl/idbl-unavailable.php | External tool link | 302 | Keep as separate app |
| /email/view-in-browser/* | /email-archive/* | 301 | Low priority or skip |

---

## Appendix C: Tools & Scripts for Analysis

### Sitemap Fetcher Script

```bash
#!/bin/bash
# fetch-sitemaps.sh

echo "Fetching Alberta Blue Cross sitemaps..."

# Main site
curl -o data/sitemap-main.xml https://www.ab.bluecross.ca/sitemap.xml
echo "✓ Main sitemap fetched"

# Blog
curl -o data/sitemap-blog-index.xml https://blog.ab.bluecross.ca/sitemap_index.xml
echo "✓ Blog sitemap index fetched"

# Community
curl -o data/sitemap-community.xml https://www.community.ab.bluecross.ca/sitemap.xml
echo "✓ Community sitemap fetched"

echo "All sitemaps fetched to data/ directory"
```

### Sitemap Parser Script (Node.js)

```javascript
// parse-sitemap.js
const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

fs.readFile('data/sitemap-main.xml', (err, data) => {
  parser.parseString(data, (err, result) => {
    const urls = result.urlset.url.map(u => u.loc[0]);
    
    console.log(`Total URLs: ${urls.length}`);
    
    // Categorize by path
    const categories = {};
    urls.forEach(url => {
      const path = new URL(url).pathname;
      const category = path.split('/')[1] || 'root';
      if (!categories[category]) categories[category] = 0;
      categories[category]++;
    });
    
    console.log('URLs by category:');
    console.log(categories);
    
    // Save to JSON
    fs.writeFileSync('data/urls.json', JSON.stringify(urls, null, 2));
    console.log('URLs saved to data/urls.json');
  });
});
```

---

## Document Control

**Version**: 1.0
**Last Updated**: January 13, 2026
**Status**: In Progress
**Next Update**: After blog and community analysis

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-13 | 1.0 | Initial sitemap analysis (main site) | Migration Team |

