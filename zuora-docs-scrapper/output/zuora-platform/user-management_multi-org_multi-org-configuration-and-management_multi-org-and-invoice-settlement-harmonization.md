---
title: "Multi-Org and invoice settlement harmonization"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-and-invoice-settlement-harmonization"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:26.706Z"
---

# Multi-Org and invoice settlement harmonization

Use this reference to understand the constraints and unsupported functionalities in Zuora .

## Multi-Org and Invoice Settlement Harmonization

When Invoice Settlement Harmonization (ISH) is enabled within a Multi-Org environment, transaction types behave differently based on whether they are part of the Invoice Settlement framework or legacy settlement transactions.

-   Invoice Settlement (IS) transactions such as Invoices and payments are labeled with a specific organization (Org) identifier.
-   Legacy settlement transactions such as Invoice Item Adjustments (IIA) and Invoice Adjustments (IA), and Credit Balance Adjustments (CBA) are not Org-labeled and are not associated with a specific Org.

This distinction may require additional handling and reconciliation when working with org-specific and unlabeled accounting periods.

## Transaction Labeling Behavior

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

## Current Scope and Considerations

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
