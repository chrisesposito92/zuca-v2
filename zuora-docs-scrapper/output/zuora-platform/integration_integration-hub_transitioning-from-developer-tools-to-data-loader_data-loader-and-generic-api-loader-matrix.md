---
title: "Data Loader and Generic API Loader Matrix"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/transitioning-from-developer-tools-to-data-loader/data-loader-and-generic-api-loader-matrix"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:02.970Z"
---

# Data Loader and Generic API Loader Matrix

Object and functions

## Object and Functions

| Generic API Loader | Data Loader | Alternative |
| --- | --- | --- |
| Generic API Loader ̧(Import or Create/Update/Delete/Cancel) | The same functionality to create, cancel,update, or delete records on Zuora objects is available directly in the Data Loader UI and the API. Users define the job and upload a csv. |  |
| Account | Import, Update, Delete | Programmatic Rest APIs |
| Accounting Code | Import, Update and Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Accounting Period | Import and Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Amendment | Import, Update and Delete | Programmatic Soap APIs |
| Charge Metrics | NA | The object is not supported. See, Construct SQL Queries in Data Query. |
| Charge Metrics Run | NA | The object is not supported. See, Construct SQL Queries in Data Query. |
| Communication Profile | NA | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Contact | Import, Update, Delete | Programmatic Rest APIs |
| Credit balance Adjustment | NA | The object is not supported. Please contact your Account Executive for Onboarding Invoice Settlement |
| Credit Memo | Import, Update, Cancel, DeleteApplying, Unapplying, Posting and Unposting are available as update actions | Programmatic Rest APIs |
| Debit Memo | Import, Update, Cancel, Delete Posting,unposting are available as update actions | Programmatic Rest APIs |
| Export | NA | Programmatic Rest APIs |
| Feature | Import, Update, Delete | Programmatic Soap APIs |
| Gateway Option | NA | Programmatic Rest APIs |
| Import | NA | Programmatic Rest APIs |
| Invoice | Import, Update,Delete, CancelPosting of Invoices is available as update action | Programmatic Rest APIs |
| Invoice Adjustment | NA | The object is not supported. Please contact your Account Executive for Onboarding Invoice Settlement |
| Invoice File | NA | The object is not supported. See List all files of an invoice. |
| Invoice Payment | NA | The object is not supported. Please contact your Account Executive for Onboarding Invoice Settlement |
| Invoice Split | NA | The object is not supported. You can split the Invoice, see Invoice management. |
| Invoice Split Item | NA | The object is not supported. You can split the Invoice, see Invoice management. |
| Payment | Import, Update, Delete, CancelPayments can be applied and unapplied as an update action | Programmatic Rest APIs |
| Payment Method | Not Supported | Programmatic Rest APIs |
| Payment Method Snapshot | NA | Programmatic Rest APIs Data Query |
| Payment Method Transaction Log | NA | Programmatic Rest APIs Data Query |
| Product | Import, Update, Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Product Rate Plan | Import, Update, Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Product Rate Plan Charge | Import, Update, Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Product Rate Plan Charge Tier | Import, Update, Delete | Deployment Manager for migrating configurations tenant to tenantProgrammatic Rest APIs |
| Rate Plan | NA | Subscription Template in Data LoaderProgrammatic Rest APIs |
| Rate Plan Charge | NA | Subscription Template in Data LoaderProgrammatic Rest APIs |
| Rate Plan Charge Tier | NA | Subscription Template in Data LoaderProgrammatic Rest APIs |
| Refund | Update, Delete, Cancel | Programmatic Rest APIs |
