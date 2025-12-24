---
title: "Multi-Org limitations and invoice settlement harmonization"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/multi-org-limitations-and-invoice-settlement-harmonization"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:33.820Z"
---

# Multi-Org limitations and invoice settlement harmonization

Use this reference to understand the limitations and unsupported functionalities in Zuora .

If you want to enable the Multi-Org feature, it is best practice to check its compatibility with other features and its known limitations first.

The following table describes the various Zuora features and their functionalities that are unsupported by Zuora Multi-Org:

| Feature | Limitation |
| --- | --- |
| Invoice Settlement | Multi-Org is only supported for tenants that have Invoice Settlement enabled. |
| Zuora Billing - Enhanced Order-to-Revenue (OTR) feature | If you are using the enhanced OTR feature, the accounting periods cannot be set at the org level in Zuora Revenue. The accounting periods have to be the same across all org units. |
| Zuora 360 | Zuora 360 does not support integrating to multiple Salesforce environments. Currently, 360 sync supports a 1:1 mapping between Multi-Org tenant and one Salesforce org. |
| Mediation | Mediation does not segment events data based on Org configuration. |
| Marketplace/Connect Apps | For Marketplace Apps hosted on Connect Framework, each app instance is visible to all Org units. For example, Promo Code App, Zuora Collections. |
| Zuora OneID | For OneID users, org unit access can be managed within Multi-Org enabled Billing tenant. Managing Multi-Org user access within OneID is not supported. |
| Deployment Manager | Deployment Manager does not support Multi-Org contextual fields such as Organization Labels or Zuora-Org-Ids. Currently, the deployment of metadata objects using Deployment Manager will be unlabeled (without any Org level mapping) and the metadata deployed in the Multi-Org tenant will be visible at the parent node level (root org). |
| Tenant Settings | Tenant Settings will remain at the tenant level and will not be configurable at the Org level (e.g. Numbering and SKU formats, tax engine, accounting codes). Currently, all tenant-level settings are inherited by all org units in the Multi-Org tenant. |
| Enabling Multi-Org in a Multi-Entity Environment | Enabling Multi-Org in a Multi-Entity environment will be limited to the leaf entity level. |
| Intercompany transactions between Org Units | Multi-Org does not support intercompany transactions between Org Units. Upstream, downstream, and lateral intercompany transactions across different org units are not supported. |
| Multi-Org Object Model | Multi-Org does not support Many-to-Many relationship between Customer Account and Org Unit. |
| Zuora Billing | All files generated in Zuora Billing including DSE, AQuA, and reports do not map to the Org tag field. |
| Custom Objects | Multi Org does not support configuring Custom Objects and records on the custom objects at an org level. |
| Zuora Collections | Multi-Org is not supported with Zuora Collections. |
| Orders | The current behaviour allows users to create orders at an org level, where each order is associated with a single org unit. It does not support rolling orders for multiple orgs into one single order. |

## Multi-Org and Invoice Settlement Harmonization

When Invoice Settlement Harmonization (ISH) is enabled within a Multi-Org environment, transaction types behave differently based on whether they are part of the Invoice Settlement framework or legacy settlement transactions.

-   Invoice Settlement (IS) transactions (for example, Invoices, Payments) are labeled with a specific organization (Org) identifier.
-   Legacy settlement transactions (for example, Invoice Item Adjustments (IIA), Invoice Adjustments (IA), and Credit Balance Adjustments (CBA)) remain unlabeled and are not associated with a specific Org.

This distinction may require special handling and reconciliation processes when managing organization-specific and unlabeled accounting periods.

Transaction Labeling Behavior

| Transaction Identifier | Tansaction Term | Associated Organization |
| --- | --- | --- |
| U-2 | INV-1 for -$100 | US |
| U-2 | IIA-1 for -$20 | N/A |
| U-2 | IA-1 for -$30 | N/A |
| U-2 | CBA-1 for -$40 | N/A |

## Allocation to Accounting Periods

-   INV-1 (Invoice): Assigned to the Customer Accounting Period with the US Org label.
-   IIA-1 (Invoice Item Adjustment): Assigned to the Customer Accounting Period without an Org label.
-   IIA-1 Revenue Schedule: Allocated to an Accounting Period without org label.
-   IA-1 (Invoice Adjustment): Assigned to the Customer Accounting Period without an Org label.
-   CBA-1 (Credit Balance Adjustment): Assigned to the Customer Accounting Period without an Org label.

## Key Considerations and Limitations

1.  Org Labeling Constraints:
    -   IS transactions such as Invoices and Payments are Org-labeled.
    -   Legacy transactions such as IIA, IA, and CBA remain unlabeled, and may require reconciliation.
2.  Accounting Period Reconciliation:
    -   Since legacy settlement transactions do not carry an Org identifier, organizations must align unlabeled adjustments with Org-specific accounting periods.

The organization labeling is applied as follows:

| Transaction Item | Allocation | Organization Label |
| --- | --- | --- |
| INV-1 | with customer accounting period | US |
| IIA-1 | with customer accounting period | Unlabeled org |
| IIA-1 revenue schedule | with customer accounting period | Unlabeled org |
| IA-1 | with customer accounting period | Unlabeled org |
| CBA-1 | with customer accounting period | Unlabeled org |
