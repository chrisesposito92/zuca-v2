---
title: "NextChargeDate"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-subscription-and-related-objects/nextchargedate"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:28.957Z"
---

# NextChargeDate

The Next Charge Date for a subscription is determined by the rate plan charge's Invoice Through Date in Zuora, which is the earliest date among multiple charges with different billing periods.

NextChargeDate

| The subscription's Next Charge Date is the rate plan charge's Invoice Through Date (Zuora API Name: RatePlanCharge.<wbr/>ChargedThroughDate) in Zuora. For example, if the charge was last invoiced from 05/01/2014 to 05/31/2014, the charge's Invoice Through Date and subscription's Next Charge Date would be 06/01/2014. If the subscription has multiple rate plan charges which have different billing periods, it would be the earliest Invoice Through Date of one the charges. |
| --- |
