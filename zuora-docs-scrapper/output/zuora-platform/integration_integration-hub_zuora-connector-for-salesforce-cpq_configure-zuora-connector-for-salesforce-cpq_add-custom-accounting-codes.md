---
title: "Add Custom Accounting Codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/add-custom-accounting-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:58.070Z"
---

# Add Custom Accounting Codes

Learn how to add custom accounting codes in Zuora Finance by editing default codes or creating new ones.

Zuora Finance provides a set of default accounting codes in Chart of Accounts. If you edited those out-of-the-box accounting codes or created additional accounting codes, you need to manually add the custom accounting codes.

1.  In Salesforce, navigate to Setup > Customize > Products > Fields.
2.  For each of the following fields, click the field label and edit the picklist values in the Values section and then click Save when done.

    -   Accounting Code if Zuora Finance is NOT enabled in your Zuora tenant
    -   Deferred Revenue Account if Zuora Finance is enabled in your Zuora tenant
    -   Recognized Revenue Account if Zuora Finance is enabled in your Zuora tenant
