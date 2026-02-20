---
title: "Configure custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/configure-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:38.454Z"
---

# Configure custom fields

Guides you through configuring custom fields in the Promo Codes app at various levels, including app instance, campaign, and child campaign levels.

Custom fields in the Promo Codes app can be configured and stored at the following levels:

-   App instance level, where the custom fields are also called global custom fields.

-   Campaign level.

-   Child campaign level.


Custom fields are inherited from top to bottom. It indicates that all custom fields configured on the App instance will apply to all codes for this instance, all custom fields configured at the campaign level will apply to all its child campaigns, and all custom fields configured at the child campaign level will apply to all codes in this child campaign.

You can override custom attributes at the bottom level.

Take the following steps to create a custom field:

1.  Launch the Promotion Codes app from your Zuora tenant.
2.  Identify the level at which the custom field is created.

    -   If you want to create global custom fields, click Custom Fields on the Promotion Management page.

    -   If you want to create custom fields at the campaign level, click the Campaigns tab, enter the target campaign, and click Custom Fields .

    -   If you want to create custom fields at the child campaign level, navigate to the target child campaign, and click Custom Fields .


3.  Click Add Field .
4.  Enter the key and value for the custom field in the corresponding fields.
5.  Select the Require on Validate check box if you want to enable the additional validation for this custom field. The validate API will require the key-value pair if the Require on Validate check box is selected.
6.  Click Update to save the custom field.
