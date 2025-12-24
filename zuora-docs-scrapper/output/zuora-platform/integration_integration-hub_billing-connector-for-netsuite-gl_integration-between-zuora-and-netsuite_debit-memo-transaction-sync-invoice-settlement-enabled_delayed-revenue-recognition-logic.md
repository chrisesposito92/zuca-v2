---
title: "Delayed revenue recognition logic"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/delayed-revenue-recognition-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:03.527Z"
---

# Delayed revenue recognition logic

Learn about the delayed revenue recognition logic

This logic applies only if you have revenue recognition enabled in NetSuite and you have set the NetSuite Connector sync option NetSuite Revenue Recognition to `Yes`.

If a Zuora debit memo syncs to NetSuite before the Revenue Recognition Start Date is set (determined from the subscription), any debit memo charges configured with revenue recognition codes will be flagged as "delayed" revenue in NetSuite (on the corresponding transaction lines, Delay Rev Rec is set to `true` ). Therefore, the charge amounts displayed on these transaction lines will not be recognized from an accounting perspective.

Once the Revenue Recognition Date is set in Zuora, NetSuite Connector will update the appropriate NetSuite transaction lines to recognize the revenue (Delay Rev Rec is set to `false` ) and set the revenue recognition start and end dates accordingly.

Additionally, debit memos that are associated with a NetSuite project have special revenue recognition logic. The revenue distribution is calculated within NetSuite as the completed portion of this project.

## Detailed delayed revenue recognition rules

-   If the NetSuite Connector sync option NetSuite Revenue Recognition is set to `No`, the Rev Rec Start and Rev Rec End dates will be empty and Delay Rev Rec will be `false`.

-   If the Debit Memo Charge has a Rev Rec Code but the Charge’s NetSuite Rev Rec Template Type is `Variable` , the Rev Rec Start and End Dates will be empty and Delay Rev Rec will be `false`. The reason is that the revenue will be recognized based upon Project Status entered in NetSuite.


## Revenue recognition start date logic

-   If the debit memo charge does not have a Rev Rec Code, the debit memo item's Service Start Date will be mapped to the Rev Rec Start Date.

-   If the debit memo charge has a Rev Rec Code, the NetSuite Rev Rec Template Type is `Standard` , and the debit memo item's Trigger Date is populated:

    -   The Delay Rev Rec flag will be `false`.

    -   If the NetSuite Rev Rec Start Date Preference is `Use NetSuite Rev Rec Template` , no Zuora value will be mapped to the Rev Rec Start Date and NetSuite will calculate based upon the configuration of the Rev Rec Template within NetSuite.

    -   If the NetSuite Rev Rec Start Date Preference is not `Use NetSuite Rev Rec Template` :

        -   If the Trigger Date is before the Service Start Date:

            -   The debit memo item's Service Start Date will be mapped to the Rev Rec Start Date.

        -   If the Trigger Date is on or after the Service Start Date:

            -   If the debit memo charge's NetSuite Rev Rec Start Date Preference is `Charge Period Start`, the debit memo item's Service Start Date will be mapped to the Rev Rec Start Date.

            -   If the debit memo charge's NetSuite Rev Rec Start Date Preference is `Rev Rec Trigger Date`, the Trigger Date will be mapped to the Rev Rec Start Date.

-   If the debit memo charge has a Rev Rec Code but the debit memo item's Trigger Date is not populated, the Delay Rev Rec will be set to `true` and the debit memo item Service Start Date will be mapped to the Rev Rec Start Date temporarily.


## Revenue recognition end date logic

-   If the NetSuite Rev Rec Start Date Preference is `Use NetSuite Rev Rec Template`, no Zuora value will be mapped for the Rev Rec End Date and NetSuite will calculate based upon the configuration of the Rev Rec Template within NetSuite.

-   If the debit memo charge's NetSuite Rev Rec Start Date Preference is `Charge Period End`, the debit memo item Service End Date will be mapped to the Rev Rec End Date.

-   If the debit memo charge's NetSuite Rev Rec End Date Preference is `Subscription End Date`, the related Subscription End Date will be mapped to the Rev Rec End Date.
