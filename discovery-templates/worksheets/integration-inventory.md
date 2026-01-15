# Integration Inventory

Comprehensive inventory of all system integrations for the ABC AEM implementation.

---

## Integration Summary

**Total Integrations:** ___  
**In Scope:** ___  
**Out of Scope:** ___  
**Future Phase:** ___

---

## Integration Master List

| ID | System Name | Type | Direction | Priority | Phase | Status |
|----|-------------|------|-----------|----------|-------|--------|
| INT-001 | Azure AD | Identity/SSO | Bidirectional | P0 | MVP | |
| INT-002 | Tealium iQX | Analytics | Outbound | P0 | MVP | |
| INT-003 | Marketo | Marketing | Bidirectional | P1 | Phase 2 | |
| INT-004 | Conductor | SEO | Inbound | P1 | MVP | |
| INT-005 | Seismic | Sales | Outbound | P0 | MVP | |
| INT-006 | Member Services (ECA) | Portal | Outbound | P0 | MVP | |
| INT-007 | OEA Portal | Portal | Outbound | P0 | Phase 2 | |
| INT-008 | OHP Portal | Portal | Outbound | P1 | Phase 2 | |
| INT-009 | GSO Portal | Portal | Outbound | P1 | Phase 2 | |
| INT-010 | ALM (Microfocus) | Workflow | Manual | P2 | N/A | |
| INT-011 | JIRA | Workflow | Manual | P2 | Future | |

---

## Integration Detail Templates

### INT-001: Azure AD (Single Sign-On)

**Integration Overview**
- **System Name:** Microsoft Azure Active Directory
- **Vendor:** Microsoft
- **Purpose:** Single Sign-On, user authentication and provisioning
- **Type:** Identity Management
- **Priority:** P0 (Must-have for MVP)

**Integration Pattern**
- **Direction:** Bidirectional
- **Protocol:** SAML 2.0
- **Authentication:** OAuth 2.0
- **Data Format:** SAML XML assertions

**Integration Points**
- **From AEM:** User authentication requests
- **To AEM:** User identity, group membership, attributes
- **Frequency:** Real-time (per login)
- **Volume:** ___ logins/day

**Technical Details**
- **Azure AD Endpoints:**
  - Login URL: ___________
  - Issuer/Entity ID: ___________
  - Certificate: ___________
  
- **AEM Configuration:**
  - IMS Organization: ___________
  - SAML Config: Adobe IMS
  - Group Sync: Yes
  - Auto-provisioning: Yes

**Data Mapping**
| Azure AD Attribute | AEM/IMS Attribute | Required |
|--------------------|-------------------|----------|
| userPrincipalName | email | Yes |
| displayName | name | Yes |
| memberOf | groups | Yes |
| department | profile/department | No |

**User Groups to Sync**
- DAM-Administrators
- DAM-PowerUsers
- DAM-Collaborators
- EDS-Authors
- EDS-Approvers
- CF-Authors (Content Fragment)

**Security Requirements**
- SAML 2.0 compliant
- Certificate-based trust
- Encrypted assertions
- Session timeout: ___ minutes
- MFA supported: Yes

**Dependencies**
- Azure AD app registration completed
- ABC IT to provide SAML metadata
- Network access to Azure AD endpoints
- Certificate exchange completed

**Testing Plan**
- [ ] SSO login flow
- [ ] User provisioning
- [ ] Group membership sync
- [ ] Session management
- [ ] Logout flow
- [ ] Error handling

**Contacts**
- **ABC Lead:** ___________ (Azure AD Administrator)
- **Adobe Lead:** ___________ (Technical Architect)

**Status:** ☐ Not Started ☐ In Progress ☐ Testing ☐ Complete

**Notes:**  


---

### INT-002: Tealium iQX (Tag Management & Analytics)

**Integration Overview**
- **System Name:** Tealium iQ Tag Management
- **Vendor:** Tealium
- **Purpose:** Analytics tracking, tag management, data collection
- **Type:** Analytics
- **Priority:** P0 (Must-have for MVP)

**Integration Pattern**
- **Direction:** Outbound (AEM to Tealium)
- **Protocol:** JavaScript
- **Integration Method:** Tag container embed
- **Data Format:** JavaScript data layer

**Integration Points**
- **Implementation:** Tealium iQ tag container loaded on all pages
- **Data Layer:** window.digitalData object
- **Events:** Page view, click, form submit, download, video play
- **Frequency:** Real-time per user action

**Technical Details**
- **Tealium Account ID:** ___________
- **Profile:** ___________
- **Environment:** Dev / QA / Prod
- **Container URL:** ___________

**Data Layer Specification**

```javascript
window.digitalData = {
  page: {
    pageInfo: {
      pageName: "",
      pageType: "",
      destinationURL: "",
      language: "en",
      platform: "AEM"
    },
    category: {
      primaryCategory: "",
      subCategory: ""
    }
  },
  user: {
    profile: {
      profileInfo: {
        userType: "", // member, provider, employer, guest
        planType: "", // individual, family, senior, employer
        memberID: "" // hashed
      }
    }
  },
  product: {
    productInfo: {
      productName: "",
      productID: "",
      productType: ""
    }
  },
  event: []
};

// Event push example
digitalData.event.push({
  eventName: "form_submit",
  eventAction: "submit",
  eventLabel: "contact_form",
  eventValue: ""
});
```

**Events to Track**
- Page view (automatic)
- Link clicks (external, download)
- Form submissions
- Video plays/completes
- Asset downloads (DAM)
- Search queries
- CTA clicks
- Errors (404, etc.)

**Custom Dimensions**
- User type (member, provider, employer, guest)
- Plan type
- Content type
- Campaign ID
- Site section

**Dependencies**
- Tealium account access
- Data layer specification approved
- Tag configuration in Tealium
- Testing environments available

**Testing Plan**
- [ ] Tag loads on all page types
- [ ] Data layer populated correctly
- [ ] All events fire
- [ ] No JavaScript errors
- [ ] Performance impact acceptable

**Contacts**
- **ABC Lead:** ___________ (Analytics Lead)
- **Adobe Lead:** ___________ (Technical Lead)
- **Tealium Contact:** ___________

**Status:** ☐ Not Started ☐ In Progress ☐ Testing ☐ Complete

---

### INT-005: Seismic (Sales Enablement) / Content Hub

**Integration Overview**
- **System Name:** Seismic
- **Vendor:** Seismic
- **Purpose:** Sales enablement, asset distribution to sales team
- **Type:** Asset Distribution
- **Priority:** P0 (Must-have for MVP)

**Integration Pattern**
- **Direction:** Outbound (Content Hub to Seismic)
- **Protocol:** Asset Selector API / REST API
- **Integration Method:** Asset selector component
- **Data Format:** JSON

**Integration Points**
- **Scenario 1:** Sales user selects asset from Content Hub within Seismic
- **Scenario 2:** Assets auto-sync from Content Hub to Seismic (if supported)
- **Frequency:** On-demand or scheduled sync

**Technical Details**
- **Integration Type:** Asset Selector (consulting support from Adobe per SOW)
- **Seismic API:** ___________
- **Authentication:** OAuth 2.0
- **Seismic Account:** ___________

**Asset Types for Seismic**
- Product brochures
- Sales presentations
- Case studies
- ROI calculators
- Proposal templates
- Competitive analysis
- Product sheets

**Metadata to Sync**
- Asset name
- Description
- Product/service tag
- Target audience
- Approval status
- Last updated date

**Sync Strategy**
- **Option 1:** Asset selector embedded in Seismic (user browses Content Hub)
- **Option 2:** Automatic sync of approved assets in specific collections
- **Decision:** ___________

**User Experience**
1. Sales rep logs into Seismic
2. Browses/searches for asset
3. Asset selector shows Content Hub assets
4. Rep selects and downloads/uses asset
5. Usage tracked in Content Hub

**Dependencies**
- Seismic API access
- Seismic account admin contact
- Asset selector API from Adobe
- SSO between Seismic and Content Hub (optional)
- Metadata schema alignment

**Testing Plan**
- [ ] Asset selector loads in Seismic
- [ ] Search and browse functionality
- [ ] Asset download/use
- [ ] Metadata display
- [ ] Usage tracking
- [ ] Performance

**Contacts**
- **ABC Lead:** ___________ (Sales Enablement)
- **Adobe Lead:** ___________ (DAM Strategist)
- **Seismic Contact:** ___________

**Status:** ☐ Not Started ☐ In Progress ☐ Testing ☐ Complete

**Notes:** Adobe provides consulting support only per SOW Section 5.

---

### INT-006: Member Services Portal (ECA & Mobile App) - Headless

**Integration Overview**
- **System Name:** Member Services (ECA Portal & Mobile App)
- **Type:** Customer Self-Service Portal
- **Purpose:** Deliver structured content to member portal and mobile app
- **Priority:** P0 (Pilot for headless)

**Integration Pattern**
- **Direction:** Outbound (AEM to Portal)
- **Protocol:** GraphQL API
- **Authentication:** JWT (JSON Web Token)
- **Data Format:** JSON

**Integration Points**
- **Content Delivered:** Product info, FAQs, help content, notifications
- **Consumption Method:** GraphQL queries from portal application
- **Frequency:** Real-time, cached at portal layer
- **Update Frequency:** As content is published in AEM

**Technical Details**
- **AEM GraphQL Endpoint:** https://{author}.adobeaemcloud.com/graphql/execute.json/{hash}
- **Authentication:** JWT token with client credentials
- **Content Models:** Product, FAQ, Policy
- **Caching:** Portal caches for ___ minutes

**GraphQL Queries**

**Product Information Query:**
```graphql
query GetProductInfo($productId: String!) {
  productList(filter: {productId: {_expressions: [{value: $productId, _operator: EQUALS}]}}) {
    items {
      _path
      productName
      productType
      shortDescription
      longDescription
      keyFeatures
      pricingSummary
      eligibility
      productImage {
        _path
        _authorUrl
      }
      documents {
        _path
        _authorUrl
      }
    }
  }
}
```

**FAQ Query:**
```graphql
query GetFAQs($category: String) {
  faqList(filter: {category: {_expressions: [{value: $category, _operator: EQUALS}]}}) {
    items {
      _path
      question
      answer
      category
      keywords
      relatedProducts {
        _path
        productName
      }
    }
  }
}
```

**Content Models Used**
- Product Information (INT-CF-001)
- FAQ (INT-CF-002)
- Policy Documents (INT-CF-003)

**Personalization**
- Filter by plan type
- Filter by member type
- Dynamic content based on user context

**API Security**
- JWT authentication
- Client credentials flow
- Token expiration: 1 hour
- Rate limiting: ___ requests/minute per client
- IP whitelisting (optional): ___________

**Caching Strategy**
- Portal-side cache: 15-30 minutes
- CDN cache: 5 minutes
- Purge on content publish: Yes
- Cache-Control headers: max-age=300

**Error Handling**
- Graceful degradation if API unavailable
- Fallback to cached content
- Error logging and monitoring
- Timeout: 5 seconds

**Dependencies**
- Content Fragment models created
- GraphQL schema published
- Portal API client credentials
- Network access between systems
- Content migrated to fragments

**Testing Plan**
- [ ] API authentication
- [ ] GraphQL queries return expected data
- [ ] Caching works correctly
- [ ] Cache invalidation on publish
- [ ] Performance (response time < 200ms)
- [ ] Error handling
- [ ] Load testing

**Pilot Scope**
- 5-10 products
- Top 20 FAQs
- One section of Member Services portal
- Success criteria: ___________

**Contacts**
- **ABC Lead:** ___________ (Portal Development Team Lead)
- **Adobe Lead:** ___________ (Technical Architect)
- **Portal Developer:** ___________

**Status:** ☐ Not Started ☐ In Progress ☐ Testing ☐ Complete

---

## Integration Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        ABC Systems                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────┐        ┌──────────────┐      ┌──────────────┐ │
│  │ Azure AD│◄──────►│  AEM Cloud   │◄────►│  Tealium iQX │ │
│  │  (SSO)  │  SAML  │   Service    │ JS   │ (Analytics)  │ │
│  └─────────┘        └──────┬───────┘      └──────────────┘ │
│                             │                                │
│                             │                                │
│               ┌─────────────┼─────────────┐                 │
│               │             │             │                 │
│               ▼             ▼             ▼                 │
│       ┌────────────┐ ┌────────────┐ ┌────────────┐         │
│       │    EDS     │ │ AEM Assets │ │  Content   │         │
│       │  (Public   │ │  + Content │ │ Fragments  │         │
│       │ Websites)  │ │    Hub     │ │ (Headless) │         │
│       └─────┬──────┘ └─────┬──────┘ └─────┬──────┘         │
│             │              │              │                 │
│             │              │              │                 │
│       ┌─────▼──────┐ ┌─────▼──────┐ ┌─────▼──────┐         │
│       │  Conductor │ │  Seismic   │ │  Portals   │         │
│       │    (SEO)   │ │  (Sales)   │ │  (Member,  │         │
│       └────────────┘ └────────────┘ │   OEA,     │         │
│                                     │   OHP,     │         │
│                                     │   GSO)     │         │
│                                     └────────────┘         │
│                                                              │
│       ┌────────────┐                                        │
│       │  Marketo   │  (Future Phase)                        │
│       │ (Marketing)│                                        │
│       └────────────┘                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Integration Responsibility Matrix (RACI)

| Integration | ABC Responsible | ABC Accountable | Adobe Consult | Adobe Inform |
|-------------|-----------------|-----------------|---------------|--------------|
| Azure AD SSO | IT Security | IT Leadership | Tech Architect | PM |
| Tealium | Analytics Lead | Marketing Dir | Tech Lead | PM |
| Seismic | Sales Enablement | Sales Dir | DAM Strategist | PM |
| Portals (Headless) | Portal Dev Lead | IT Leadership | Tech Architect | PM |
| Marketo | Marketing Team | Marketing Dir | Solution Analyst | PM |

- **R** = Responsible (does the work)
- **A** = Accountable (final approval)
- **C** = Consulted (provides input)
- **I** = Informed (kept in the loop)

---

## Integration Testing Checklist

### Per Integration

- [ ] Authentication/authorization works
- [ ] Data flows correctly in expected direction
- [ ] Error handling implemented
- [ ] Performance meets SLAs
- [ ] Security requirements met
- [ ] Monitoring/logging in place
- [ ] Documentation complete
- [ ] Runbook created
- [ ] Team trained
- [ ] UAT approved

---

## Integration Support & Maintenance

### Support Contacts

| System | Support Contact | Support Hours | Escalation |
|--------|----------------|---------------|------------|
| Azure AD | ABC IT | 24/7 | |
| Tealium | | | |
| Seismic | | | |
| AEM Cloud | Adobe Support | 24/7 | |

### Monitoring

- Integration health dashboard: ___________
- Alert recipients: ___________
- Response SLA: ___________

---

**Document Owner:** Technical Architect  
**Last Updated:** ___________  
**Next Review:** ___________
