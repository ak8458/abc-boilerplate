# Alberta Blue Cross Website Migration - Documentation Hub

## Welcome to the Migration Project

This document serves as the central hub for all Alberta Blue Cross website migration documentation. Use this as your starting point to navigate the comprehensive migration strategy and supporting materials.

---

## 🎯 Project Overview

**Project**: Migration of Alberta Blue Cross websites to AEM Edge Delivery Services

**Sites in Scope**:
- Main Website: https://www.ab.bluecross.ca/ (~300+ pages)
- Blog: https://blog.ab.bluecross.ca/ (pending analysis)
- Community: https://www.community.ab.bluecross.ca/ (pending analysis)

**Estimated Duration**: 16 weeks
**Estimated Total Pages**: 500+
**Methodology**: Content-Driven Development using specialized migration skills

---

## 📚 Documentation Structure

### Core Documents

#### 1. [Migration Strategy](./MIGRATION_STRATEGY.md) 📋
**Purpose**: Comprehensive migration strategy and project plan

**What's Inside**:
- Detailed 16-week timeline with 5 phases
- Team structure and resource requirements
- Quality assurance framework
- Risk management
- Success criteria
- Communication plan

**When to Use**: 
- Project planning and kickoff
- Stakeholder presentations
- Timeline and resource planning
- Phase gate reviews

#### 2. [Sitemap Analysis](./SITEMAP_ANALYSIS.md) 🔍
**Purpose**: Detailed analysis of all websites and page inventory

**What's Inside**:
- Complete breakdown of ~450 main website pages
- Content categorization (8 major categories)
- URL mapping strategy
- Complexity assessment
- Template identification
- Technical deep-dive findings

**When to Use**:
- Understanding site structure
- Planning migration batches
- Assessing page complexity
- URL redirect planning

#### 3. [Migration Tracking Template](./MIGRATION_TRACKING_TEMPLATE.md) 📊
**Purpose**: Day-to-day progress tracking and team coordination

**What's Inside**:
- Daily progress log template
- Category-by-category tracking tables
- Quality metrics dashboard
- Blocker and risk register
- Weekly velocity tracking
- Team capacity planning

**When to Use**:
- Daily updates by migration team
- Weekly status reports
- Progress monitoring
- Issue tracking

#### 4. [Skills Quick Reference Guide](./MIGRATION_SKILLS_QUICK_REFERENCE.md) ⚡
**Purpose**: Hands-on guide for executing migrations using the skills

**What's Inside**:
- Step-by-step workflows
- Command reference
- Quality gate checklists
- Troubleshooting guide
- Daily routine templates
- Common patterns

**When to Use**:
- Actively migrating pages
- Learning the migration skills
- Troubleshooting issues
- Daily execution

---

## 🚀 Quick Start Guide

### For Project Managers

**Week 1 Actions**:
1. Read [Migration Strategy](./MIGRATION_STRATEGY.md) (Section 1-2)
2. Review [Sitemap Analysis](./SITEMAP_ANALYSIS.md) (Section 1.1-1.2)
3. Set up [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md)
4. Schedule stakeholder kickoff meeting

**Daily Actions**:
- Check migration tracking document for progress
- Review blockers and risks
- Update stakeholders weekly

### For Migration Specialists (Content Team)

**First Day**:
1. Read [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md) (Sections 1-3)
2. Set up local AEM development environment
3. Run skills discovery: `./.agents/discover-skills`
4. Practice with one sample page migration

**Daily Workflow**:
1. Check [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md) for today's assignments
2. Use [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md) (Section 7: Common Workflows)
3. Migrate 4-5 pages in morning
4. QA and testing in afternoon
5. Update tracking document

### For Developers

**Setup**:
1. Review [Migration Strategy](./MIGRATION_STRATEGY.md) (Section 4: Toolkit)
2. Read [Sitemap Analysis](./SITEMAP_ANALYSIS.md) (Section 5: Technical Deep-Dive)
3. Set up local development environment
4. Review existing blocks in `/blocks` directory

**Focus Areas**:
- Custom block development (forms, calculators)
- Backend integrations (form submissions, APIs)
- Performance optimization
- Technical troubleshooting

### For Stakeholders

**Key Documents**:
1. [Migration Strategy](./MIGRATION_STRATEGY.md) - Executive Summary
2. [Sitemap Analysis](./SITEMAP_ANALYSIS.md) - Sections 1.1, 1.4, 6.2
3. Weekly status reports (using template in tracking doc)

**Key Review Points**:
- Phase gate reviews (end of each phase)
- Go/No-Go decisions (Pilot phase, Week 4)
- Launch readiness review (Week 15)

---

## 🎓 Understanding the Migration Skills

### What Are Skills?

Skills are specialized workflows stored in `.skills/` directory that guide the AI through specific migration tasks. Think of them as expert playbooks.

### Key Skills for This Migration

| Skill | Purpose | Used When |
|-------|---------|-----------|
| **page-import** | Orchestrates complete page migration | Every page (main workflow) |
| **scrape-webpage** | Extracts content from source page | Automatically by page-import |
| **identify-page-structure** | Analyzes sections and structure | Automatically by page-import |
| **authoring-analysis** | Maps content to blocks | Automatically by page-import |
| **generate-import-html** | Creates AEM-ready HTML | Automatically by page-import |
| **preview-import** | Verifies in local browser | Automatically by page-import |
| **block-inventory** | Lists available blocks | Phase 1, as needed |
| **content-modeling** | Designs content structures | Custom blocks, complex pages |
| **building-blocks** | Creates new blocks | When custom blocks needed |
| **testing-blocks** | Validates block functionality | After block development |

### How to Use Skills

**Simple Method (AI-Powered)**:
```
Just say: "Import this page: [URL]"
The AI will invoke the page-import skill and all sub-skills automatically.
```

**Manual Method**:
```bash
# Discover available skills
./.agents/discover-skills

# Read a specific skill
cat .skills/page-import/SKILL.md

# Follow the instructions in the skill
```

---

## 📈 Migration Phases at a Glance

### Phase 1: Discovery & Planning (Weeks 1-2)
**Goal**: Understand scope, prepare tools, design content models

**Key Activities**:
- Complete sitemap analysis (all sites)
- Block inventory
- Select pilot pages
- Design content models

**Deliverables**:
- Complete site inventory
- Block inventory document
- Content model specifications
- Pilot page selection

### Phase 2: Pilot Migration (Weeks 3-4)
**Goal**: Validate workflow with 15-20 representative pages

**Key Activities**:
- Migrate pilot pages using page-import skill
- Test and refine process
- Build any needed custom blocks
- Train team

**Deliverables**:
- 15-20 pilot pages complete
- Process documentation refined
- Go/No-Go decision

### Phase 3: Bulk Migration - Main Site (Weeks 5-10)
**Goal**: Migrate all ~300 main website pages

**Key Activities**:
- Systematic batch migration
- Daily progress tracking
- Quality assurance
- Issue resolution

**Deliverables**:
- All main site pages migrated
- Quality gates passed
- Issues resolved

### Phase 4: Blog & Community (Weeks 11-13)
**Goal**: Migrate blog and assess community site

**Key Activities**:
- Analyze blog structure
- Batch migrate blog posts
- Community site decision
- Community migration/integration

**Deliverables**:
- Blog fully migrated
- Community approach decided
- Community implementation (if applicable)

### Phase 5: Testing & Launch (Weeks 14-16)
**Goal**: Comprehensive testing and successful launch

**Key Activities**:
- Cross-browser testing
- Performance optimization
- SEO validation
- URL redirects implementation
- Staging review
- Production launch

**Deliverables**:
- All testing complete
- Redirects implemented
- Production launch
- Post-launch monitoring

---

## 🎯 Success Criteria

The migration is successful when:

✅ **Completeness**
- 100% of in-scope pages migrated
- All functionality preserved or replaced
- All content accurate

✅ **Quality**
- 95%+ pages pass all quality gates
- Lighthouse scores 90+
- Zero critical defects

✅ **SEO**
- All 301 redirects implemented
- No organic traffic loss after 30 days
- Zero new 404 errors

✅ **Performance**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Page load times improved

✅ **Accessibility**
- WCAG 2.1 AA compliance
- Keyboard navigation works
- Screen reader compatible

---

## 🛠️ Tools & Resources

### Project Tools

**Migration Skills**:
```bash
./.agents/discover-skills       # List all available skills
.skills/page-import/SKILL.md    # Main migration workflow
```

**AEM Development**:
```bash
aem up                          # Start local dev server
npm run lint                    # Check code quality
npm run lint:fix                # Auto-fix linting issues
```

**Testing**:
- Chrome DevTools (Lighthouse, Performance)
- axe DevTools (Accessibility)
- Browser testing (Chrome, Firefox, Safari, Edge)

### External Resources

**AEM Documentation**:
- [AEM Edge Delivery Documentation](https://www.aem.live/docs/)
- [Block Collection](https://www.aem.live/developer/block-collection)
- [David's Model](https://www.aem.live/docs/davidsmodel)

**Standards**:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)

---

## 📞 Communication & Reporting

### Daily Communication

**Team Standup** (15 minutes):
- What I completed yesterday
- What I'm working on today
- Any blockers

**Tracking Updates**:
- Update [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md) daily
- Log pages migrated
- Document issues

### Weekly Communication

**Status Report** (send to stakeholders):
- Use template in [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md)
- Include progress metrics
- Highlight achievements
- Note blockers and risks
- Preview next week's plan

**Team Retrospective**:
- What went well
- What could improve
- Process adjustments

### Phase Gate Reviews

**Phase Completion**:
- Demo of completed work
- Metrics review
- Lessons learned
- Go/No-Go for next phase

---

## ⚠️ Common Pitfalls & How to Avoid Them

### Pitfall 1: Skipping Quality Gates
**Problem**: Pages marked "complete" without full testing
**Solution**: Use checklist in [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md), every time

### Pitfall 2: Inconsistent Tracking
**Problem**: Migration tracking document not updated, losing visibility
**Solution**: Make updating tracking part of daily workflow, not optional

### Pitfall 3: Underestimating Complex Pages
**Problem**: Forms and calculators take much longer than expected
**Solution**: Identify complex pages early, allocate 3-4x time, involve developer

### Pitfall 4: Poor Communication
**Problem**: Stakeholders surprised by issues or delays
**Solution**: Weekly status reports, flag risks early, escalate blockers quickly

### Pitfall 5: Technical Debt
**Problem**: Quick fixes create maintenance burden
**Solution**: Follow content-driven development, build quality from start

---

## 🚨 When Things Go Wrong

### Issue: Migration falling behind schedule

**Actions**:
1. Review [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md) - identify bottlenecks
2. Prioritize Tier 1 and Tier 2 pages (see [Sitemap Analysis](./SITEMAP_ANALYSIS.md))
3. Consider adding team members
4. Discuss scope adjustment with stakeholders
5. Focus on MVP for launch, non-critical pages can follow

### Issue: Quality problems (failing quality gates)

**Actions**:
1. Pause new migrations
2. Focus on fixing existing pages
3. Review process - where is quality breaking down?
4. Additional training if needed
5. Adjust quality checkpoints in workflow

### Issue: Technical blockers (forms, integrations)

**Actions**:
1. Escalate to developer immediately
2. Document blocker in [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md)
3. Work on unblocked pages meanwhile
4. Consider workaround (e.g., external form link temporarily)
5. Stakeholder communication if impacts timeline

### Issue: Stakeholder concerns or changing requirements

**Actions**:
1. Document concerns/changes
2. Assess impact on timeline and scope
3. Review priorities - what's MVP vs nice-to-have
4. Update [Migration Strategy](./MIGRATION_STRATEGY.md) if major change
5. Communicate trade-offs clearly

---

## 📝 Document Maintenance

### Updating Documentation

**Migration Tracking**: Update daily (ongoing)
**Sitemap Analysis**: Update when new URLs discovered or structure changes
**Migration Strategy**: Update on major scope/timeline changes
**Skills Quick Reference**: Update when process improvements found

### Version Control

All documentation should be:
- Version controlled (Git)
- Updated with revision history
- Reviewed at phase gates
- Final version at project completion

---

## 🎓 Training & Onboarding

### New Team Member Onboarding

**Day 1**:
- [ ] Read this README
- [ ] Read [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md) (Sections 1-4)
- [ ] Set up local AEM environment
- [ ] Run `./.agents/discover-skills`
- [ ] Shadow experienced team member for 1 page migration

**Day 2**:
- [ ] Migrate 1 page independently with guidance
- [ ] Complete full quality gate checklist
- [ ] Review common patterns in [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md)

**Day 3**:
- [ ] Migrate 2-3 pages independently
- [ ] Start updating tracking document
- [ ] Join daily standup

**Week 1 Goal**: Confidently migrating 4-5 standard pages per day

---

## 📊 Key Metrics to Track

### Progress Metrics
- Total pages migrated / Total pages in scope
- Pages completed per day (velocity)
- Days ahead/behind schedule
- Completion percentage by category

### Quality Metrics
- Percentage passing all quality gates
- Average Lighthouse score
- Average Core Web Vitals
- Issue count by severity

### Efficiency Metrics
- Average time per page (by complexity)
- Rework rate (pages needing fixes)
- Blocker resolution time
- Team utilization

---

## 🎉 Project Milestones

| Milestone | Target Week | Description |
|-----------|-------------|-------------|
| Project Kickoff | Week 1 | Team assembled, plan approved |
| Discovery Complete | Week 2 | All sitemaps analyzed, models designed |
| Pilot Complete | Week 4 | 15-20 pages migrated, process validated |
| Main Site 50% | Week 7 | Half of main website migrated |
| Main Site Complete | Week 10 | All main website pages done |
| Blog Complete | Week 13 | All blog content migrated |
| Testing Complete | Week 15 | All quality gates passed |
| Production Launch | Week 16 | Live on new platform |
| Post-Launch Review | Week 20 | 30-day post-launch assessment |

---

## 📞 Contact & Support

### Project Team

**Migration Lead**: [Name]
**Content Specialists**: [Names]
**Developer**: [Name]
**QA Tester**: [Name]
**SEO Specialist**: [Name]

### Escalation Path

**Technical Issues**: Developer → Tech Lead
**Process Issues**: Migration Lead
**Stakeholder Issues**: Migration Lead → Project Sponsor
**Urgent Blockers**: Immediate team discussion

---

## 🔗 Quick Links

### Documentation
- [Migration Strategy](./MIGRATION_STRATEGY.md) - Comprehensive plan
- [Sitemap Analysis](./SITEMAP_ANALYSIS.md) - Site inventory and analysis
- [Migration Tracking](./MIGRATION_TRACKING_TEMPLATE.md) - Daily tracking
- [Skills Quick Reference](./MIGRATION_SKILLS_QUICK_REFERENCE.md) - How-to guide

### Project Files
- [URL Mapping Spreadsheet](TBD) - Old to new URL mapping
- [Testing Checklist](TBD) - Comprehensive testing checklist
- [Block Inventory](TBD) - Available and custom blocks

### External Links
- [AEM Edge Delivery Docs](https://www.aem.live/docs/)
- [Block Collection](https://www.aem.live/developer/block-collection)
- [Project Repository](TBD) - GitHub repo

---

## ✅ Pre-Flight Checklist

Before starting migration work, ensure:

**Environment**:
- [ ] Local AEM dev server running
- [ ] Access to source websites
- [ ] Development environment configured
- [ ] Git repository access

**Documentation**:
- [ ] Read Migration Strategy
- [ ] Familiar with Skills Quick Reference
- [ ] Tracking document set up
- [ ] Team member assignments clear

**Skills**:
- [ ] Discovered available skills (`./.agents/discover-skills`)
- [ ] Tested page-import skill with sample page
- [ ] Know how to run quality checks
- [ ] Comfortable with AEM preview

**Communication**:
- [ ] Added to team channels
- [ ] Standup meeting scheduled
- [ ] Know escalation process
- [ ] Have access to tracking documents

---

## 🎬 Let's Get Started!

You now have everything you need to execute a successful migration:

1. **Clear Strategy**: 16-week plan with defined phases
2. **Detailed Analysis**: Complete understanding of scope
3. **Proven Workflow**: Content-driven development with migration skills
4. **Quality Framework**: Six quality gates for every page
5. **Support System**: Documentation, tracking, and team

**Next Steps**:
1. Review [Migration Strategy](./MIGRATION_STRATEGY.md) with team
2. Complete Phase 1 (Discovery & Planning)
3. Execute Pilot Phase to validate workflow
4. Begin systematic bulk migration
5. Launch successfully!

**Remember**: This is a marathon, not a sprint. Maintain quality, communicate regularly, and celebrate milestones along the way.

Good luck! 🚀

---

## Document Control

**Version**: 1.0
**Last Updated**: January 13, 2026
**Maintained By**: Migration Team
**Review Frequency**: Weekly during active migration

---

## Feedback & Improvements

Found something unclear? Process improvement idea? 

Please update this documentation or raise with the team. This is a living document that should evolve as we learn.

**Documentation Feedback**: [Create issue or update directly]

---

**End of Migration README**

*For detailed information, please refer to the specific documents linked throughout this README.*
