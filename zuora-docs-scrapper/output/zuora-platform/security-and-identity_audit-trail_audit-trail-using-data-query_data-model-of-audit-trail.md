---
title: "Data Model of Audit Trail"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:04.747Z"
---

# Data Model of Audit Trail

Track Audit Trail records, including user login histories, management settings, and changes to product settings and business objects.

You can use Data Query to retrieve Audit Trail records for tracking user login histories, user management settings, product setting changes, and business object changes. For more information on data query, see [Overview of Data Query](/zuora-platform/data/data-query/overview-of-data-query)The Audit Trail records are stored in the following tables:

-   `[auditloginevent](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail/table-auditloginevent)`

-   `[auditsettingchangeevent](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail/table-auditsettingchangeevent)`

-   `[auditobjectchangeevent](/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/data-model-of-audit-trail/table-auditobjectchangeevent)`
