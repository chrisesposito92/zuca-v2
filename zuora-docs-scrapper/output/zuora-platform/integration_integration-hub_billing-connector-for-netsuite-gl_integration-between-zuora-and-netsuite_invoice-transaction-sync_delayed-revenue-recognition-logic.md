---
title: "Delayed revenue recognition logic"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/delayed-revenue-recognition-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:19.616Z"
---

# Delayed revenue recognition logic

Learn about the delayed revenue recognition logic

This logic applies only if you have revenue recognition enabled in NetSuite and you have set the NetSuite Connector sync option NetSuite Revenue Recognition to `Yes`.

If a Zuora invoice syncs to NetSuite before its Revenue Recognition Date is set (determined from the subscription), any invoice charges configured with revenue recognition codes will be flagged as "delayed" revenue in NetSuite (on the transaction line, Delay Rev Rec is set to `true`). Because of this, the charge amount displayed in NetSuite will not be recognized from an accounting perspective.

Once the Revenue Recognition Date is set in Zuora, NetSuite Connector will update the appropriate NetSuite transaction lines to recognize the revenue (NetSuite Connector sets Delay Rev Rec to `false`) and set the revenue recognition start and end dates accordingly.

Additionally, invoices that are tied to project delivery have special revenue recognition logic that is calculated within NetSuite as work is fulfilled for that project.

## Detailed delayed revenue recognition rules

-   If the NetSuite Connector option NetSuite Revenue Recognition is set to `No`, the Rev Rec Start and Rev Rec End dates and Delay Rev Rec will be empty/`false`.
-   If the Invoice Charge has a Rev Rec Code but the Charge's NetSuite Rev Rec Template Type is "Variable", the Rev Rec Start/End Dates and Delay Rev Rec will be blank/false. This is because the revenue will be recognized based upon Project Status entered in NetSuite.

## Revenue recognition start date logic

-   If the invoice charge does not have a Rev Rec Code, the invoice item's Service Start Date will be mapped as the Rev Rec Start Date.
-   If the invoice charge has a Rev Rec Code, and the NetSuite Rev Rec Template Type is `Standard`, and the invoice item's Trigger Date is populated:
    -   The Delay Rev Rec flag will be `false`.
    -   If the NetSuite Rev Rec Start Date Preference is `Use NetSuite Rev Rec Template`, no Zuora value will be mapped for the Rev Rec Start Date and NetSuite will calculate based upon the configuration of the Rev Rec Template within NetSuite.
    -   Otherwise if the Trigger Date is before the Service Start Date:
        -   The invoice item's Service Start Date will be mapped as the Rev Rec Start Date.
    -   Otherwise, if the Trigger Date is on or after the Service Start Date:
        -   If the invoice charge's NetSuite Rev Rec Start Date Preference is `Charge Period Start`, the invoice item's Service Start Date will be mapped as the Rev Rec Start Date.
        -   Otherwise, if the invoice charge's NetSuite Rev Rec Start Date Preference is `Rev Rec Trigger Date`, the Trigger Date will be mapped as the Rev Rec Start Date.
-   If the invoice charge has a Rev Rec Code but the invoice item's Trigger Date is not populated, the Delay Rev Rec will be set to `true` and the invoice item Service Start Date will be mapped as the Rev Rec Start Date temporarily.

## Revenue recognition end date logic

-   If the NetSuite Rev Rec Start Date Preference is `Use NetSuite Rev Rec Template`, no Zuora value will be mapped for the Rev Rec End Date and NetSuite will calculate based upon the configuration of the Rev Rec Template within NetSuite.
-   Otherwise if the invoice charge's NetSuite Rev Rec End Date Preference is `Charge Period End`, the invoice item Service End Date will be mapped as the Rev Rec End Date.
-   Otherwise, if the invoice charge's NetSuite Rev Rec End Date Preference is `Subscription End Date`, the related Subscription End Date will be mapped as the Rev Rec End Date.
