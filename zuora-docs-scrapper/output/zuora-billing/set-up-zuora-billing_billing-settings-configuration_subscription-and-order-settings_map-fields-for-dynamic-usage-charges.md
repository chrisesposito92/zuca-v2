---
title: "Map fields for Dynamic Usage Charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/map-fields-for-dynamic-usage-charges"
product: "zuora-billing"
scraped_at: "2026-01-15T21:54:58.646Z"
---

# Map fields for Dynamic Usage Charges

Use the Fields Mapping For Dynamic Usage Charges page under Billing Settings to control how Dynamic Usage Charges (DUCs) are generated from usage records.

Map usage record custom fields to Dynamic Usage Charge (DUC) custom fields on the Product Rate Plan Charge (PRPC) so key attributes flow from usage to DUCs for invoicing and reporting.

The same configuration defines the DUC generation rule so DUCs are grouped and created by the same account, the same parent recurring product charge (PRPC), and the same mapped field values. Different mapped values (for example, different contract IDs or invoice-group values) result in multiple DUCs for the same account and PRPC combination. All mapping fields are treated as required grouping fields during validation. If you do not configure any mappings, DUCs are grouped only by account + PRPC.

Note: This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

1.  On the Billing Settings page, click Fields Mapping For Dynamic Usage Charges..

    The mappings page is displayed. Each row includes the following details:

    -   Source Object – Fixed to Usage. Only Usage and its fields are supported as mapping sources.
    -   Source Field – A standard or custom field on the Usage object that you want to copy from.
    -   Target Field – A custom field on Product Rate Plan Charge that is used by Dynamic Usage Charges as the destination field.

    All configured mapping fields are also used as grouping keys when DUCs are generated.

2.  To define a new mapping, click the Add New button.
3.  From the Source Field drop-down list, select the usage field you want to map (for example, a contract ID or logical grouping attribute).
4.  From the Target Field drop-down list, select the DUC custom field on PRPC that should receive the value (for example, a matching contract or invoice-group field).
5.  Click the save icon to save the configuration.

The mapping configuration on this page directly controls how DUCs are created and populated when the rating pipeline runs. When a DUC is generated, the rating pipeline reads the active field mapping configuration from Billing and copies values for each configured source field on Usage into the corresponding DUC custom field on the PRPC-based Dynamic Usage Charge.

Each time you update the mapping, a new change log entry is generated per field.
