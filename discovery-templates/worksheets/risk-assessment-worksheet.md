# Risk Assessment Worksheet

Track and manage project risks throughout discovery and implementation.

---

## Risk Register

| Risk ID | Risk Description | Category | Impact | Probability | Score | Mitigation Strategy | Owner | Status |
|---------|------------------|----------|--------|-------------|-------|---------------------|-------|--------|
| R-001 | | | | | | | | |
| R-002 | | | | | | | | |
| R-003 | | | | | | | | |
| R-004 | | | | | | | | |
| R-005 | | | | | | | | |

---

## Risk Scoring Matrix

### Impact Scale
- **Critical (5):** Project failure, cannot achieve objectives
- **High (4):** Major delays, significant budget overrun, key features at risk
- **Medium (3):** Minor delays, some budget impact, workarounds needed
- **Low (2):** Minimal impact, easily managed
- **Negligible (1):** No significant impact

### Probability Scale
- **Very High (5):** 80-100% chance of occurring
- **High (4):** 60-80% chance
- **Medium (3):** 40-60% chance
- **Low (2):** 20-40% chance
- **Very Low (1):** 0-20% chance

### Risk Score
**Risk Score = Impact × Probability**

| Score Range | Risk Level | Action Required |
|-------------|------------|-----------------|
| 20-25 | Extreme | Immediate escalation and mitigation |
| 15-19 | High | Active mitigation plan required |
| 10-14 | Medium | Monitor and prepare mitigation |
| 5-9 | Low | Monitor periodically |
| 1-4 | Minimal | Document only |

---

## Detailed Risk Templates

### Risk R-001: [Risk Title]

**Risk ID:** R-001  
**Date Identified:** ___________  
**Identified By:** ___________  
**Category:** ☐ Technical ☐ Resource ☐ Schedule ☐ Scope ☐ Budget ☐ External ☐ Other

**Risk Description:**  
[Detailed description of the risk]

**Trigger Conditions:**  
[What would cause this risk to occur?]

**Impact Assessment:**  
- **Impact Level:** ☐ Critical ☐ High ☐ Medium ☐ Low ☐ Negligible
- **Impact Score:** [1-5]
- **Impact Description:**  
  - Schedule impact: ___________
  - Budget impact: ___________
  - Quality impact: ___________
  - Scope impact: ___________

**Probability Assessment:**  
- **Probability Level:** ☐ Very High ☐ High ☐ Medium ☐ Low ☐ Very Low
- **Probability Score:** [1-5]
- **Probability Justification:** ___________

**Risk Score:** [Impact × Probability] = ___

**Risk Level:** ☐ Extreme ☐ High ☐ Medium ☐ Low ☐ Minimal

**Mitigation Strategy:**  
[Proactive actions to reduce probability or impact]
1. 
2. 
3. 

**Contingency Plan:**  
[Reactive plan if risk occurs]
1. 
2. 
3. 

**Risk Owner:** ___________  
**Mitigation Owner:** ___________  
**Review Date:** ___________

**Status:** ☐ Open ☐ Mitigating ☐ Occurred ☐ Closed

**Status History:**

| Date | Status | Notes | Updated By |
|------|--------|-------|------------|
| | | | |

---

## Common Project Risks (Pre-populated)

### Technical Risks

**R-T01: Data Loss During Asset Migration**
- **Impact:** Critical (5)
- **Probability:** Low (2)
- **Score:** 10 (Medium)
- **Mitigation:** 
  - Backup all source data before migration
  - Perform dry-run migrations
  - Validate asset counts at each phase
  - Keep source systems read-only until validation complete

**R-T02: Performance Degradation After Migration**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Establish performance baselines before migration
  - Conduct load testing
  - Implement CDN and caching strategies
  - Monitor performance continuously

**R-T03: Integration Compatibility Issues**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Early integration architecture validation
  - API contract testing
  - Dedicated integration testing phase
  - Have fallback plans for critical integrations

**R-T04: Security Vulnerability**
- **Impact:** Critical (5)
- **Probability:** Low (2)
- **Score:** 10 (Medium)
- **Mitigation:**
  - Security scanning in CI/CD
  - Penetration testing before go-live
  - Follow AEM security best practices
  - Regular security updates

### Resource Risks

**R-R01: Key Stakeholder Unavailability**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Identify backup decision-makers
  - Schedule critical sessions early
  - Record sessions for later review
  - Document decisions immediately

**R-R02: Technical Skill Gaps**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Early skills assessment (completed in discovery)
  - Comprehensive training program
  - Deskside coaching (20 hours allocated)
  - Pair programming for knowledge transfer

**R-R03: Developer Capacity**
- **Impact:** Medium (3)
- **Probability:** High (4)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Clear resource allocation
  - Protect development time from interruptions
  - Adjust timeline if capacity insufficient
  - Consider external development support

### Schedule Risks

**R-S01: Discovery Delays**
- **Impact:** Medium (3)
- **Probability:** Medium (3)
- **Score:** 9 (Low)
- **Mitigation:**
  - Buffer time in discovery schedule
  - Confirm stakeholder availability upfront
  - Prioritize critical sessions
  - Can combine sessions if needed

**R-S02: Migration Takes Longer Than Estimated**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Phased migration approach
  - MVP first (careers site - 5 pages)
  - Learn and adjust estimates
  - Automate where possible

**R-S03: UAT Delays**
- **Impact:** Medium (3)
- **Probability:** High (4)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Clear UAT plan and timeline
  - ABC owns UAT (per SOW)
  - Set clear acceptance criteria
  - Schedule UAT resources in advance
  - Define acceptable UAT duration

### Scope Risks

**R-SC01: Scope Creep**
- **Impact:** High (4)
- **Probability:** High (4)
- **Score:** 16 (High)
- **Mitigation:**
  - Clear scope definition in SOW
  - Formal change management process
  - Regular scope reviews
  - Document all change requests
  - Mutual agreement required for changes

**R-SC02: Undiscovered Requirements**
- **Impact:** Medium (3)
- **Probability:** Medium (3)
- **Score:** 9 (Low)
- **Mitigation:**
  - Thorough discovery process
  - Multiple stakeholder interviews
  - Review existing systems comprehensively
  - Prototype early for validation
  - Agile approach allows for course correction

**R-SC03: Integration Scope Underestimated**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Detailed integration discovery session
  - API documentation review
  - Spike integrations early
  - Clear integration responsibility matrix
  - Define integration MVP

### External Risks

**R-E01: Third-Party System Unavailability**
- **Impact:** Medium (3)
- **Probability:** Low (2)
- **Score:** 6 (Low)
- **Mitigation:**
  - Identify all external dependencies early
  - Build systems to degrade gracefully
  - Cache data where appropriate
  - Have fallback plans
  - SLAs with vendors

**R-E02: Network/Infrastructure Issues**
- **Impact:** High (4)
- **Probability:** Low (2)
- **Score:** 8 (Low)
- **Mitigation:**
  - Network assessment early
  - Bandwidth requirements documented
  - Off-hours migration windows if needed
  - Throttling strategies
  - Adobe Cloud Service SLAs

### Change Management Risks

**R-CM01: User Adoption Resistance**
- **Impact:** High (4)
- **Probability:** Medium (3)
- **Score:** 12 (Medium)
- **Mitigation:**
  - Early stakeholder engagement
  - Clear communication of benefits
  - Comprehensive training program
  - Change champions program
  - Hypercare support post-launch

**R-CM02: Training Inadequate**
- **Impact:** Medium (3)
- **Probability:** Medium (3)
- **Score:** 9 (Low)
- **Mitigation:**
  - Needs-based training design
  - Multiple training formats (hands-on, video, docs)
  - Authoring guide provided
  - Office hours and ongoing support
  - Measure training effectiveness

---

## Risk Review Schedule

**Discovery Phase:** Weekly risk review  
**Implementation Phase:** Weekly risk review  
**Post-Launch:** Monthly risk review (first 3 months)

**Risk Review Attendees:**
- ABC Project Manager
- Adobe Project Manager
- Technical Architect
- Customer Senior Project Sponsor (for high/extreme risks)

---

## Risk Escalation Process

**Medium Risks (Score 10-14):**
- Managed by project managers
- Reviewed weekly
- Mitigation plans documented
- Sponsors informed

**High Risks (Score 15-19):**
- Escalated to sponsors
- Active mitigation required
- Reviewed daily/weekly as needed
- May require scope/schedule/budget adjustment

**Extreme Risks (Score 20-25):**
- Immediate sponsor escalation
- Executive decision required
- May require project pause
- Comprehensive mitigation plan mandatory

---

## Risk Reporting

**Risk Status Summary (Updated Weekly):**

| Risk Level | Count | Trend |
|------------|-------|-------|
| Extreme (20-25) | | ↑ ↓ → |
| High (15-19) | | ↑ ↓ → |
| Medium (10-14) | | ↑ ↓ → |
| Low (5-9) | | ↑ ↓ → |
| Minimal (1-4) | | ↑ ↓ → |

**Closed Risks This Period:** ___  
**New Risks This Period:** ___

---

**Document Owner:** Project Manager  
**Last Updated:** ___________  
**Next Review Date:** ___________
