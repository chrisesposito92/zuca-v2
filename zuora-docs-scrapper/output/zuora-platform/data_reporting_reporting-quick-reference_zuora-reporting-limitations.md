---
title: "Zuora Reporting limitations"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-quick-reference/zuora-reporting-limitations"
product: "zuora-platform"
scraped_at: "2026-02-20T21:17:45.832Z"
---

# Zuora Reporting limitations

Zuora Reporting limitations

Zuora Reporting has the following limitations:

-   When exporting report results, the export may fail with the error message "504 Gateway Time-out" if the CSV file is larger than 25MB.

-   When sending report results as an email attachment, the email will not be sent if the CSV file is larger than 25MB.

-   Zuora Reporting does not support [Data Access Control](/zuora-platform/security-and-identity/administrator-settings/data-access-control). Only users with the top-level tag in the Data Access Control hierarchy will be able to access the Zuora Reporting application.

-   In Zuora Reporting, the Charge Model field on the Rate Plan Charge or Product Rate Plan Charge objects will have values of 'CustomChargeModel' for any of the three following charge models: MultiAttributePricing, PreratedPerUnit, PreratedPricing, HighWaterMarkVolumePricing, HighWaterMarkTieredPricing.

-   In Zuora Reporting, the PaymentMethod.Type field is always treated as a text string instead of an enumeration field when creating report filters.
