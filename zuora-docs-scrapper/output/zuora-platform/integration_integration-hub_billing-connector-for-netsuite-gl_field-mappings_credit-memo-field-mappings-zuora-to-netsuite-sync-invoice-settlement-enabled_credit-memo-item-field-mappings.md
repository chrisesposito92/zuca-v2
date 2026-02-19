---
title: "Credit Memo Item Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/credit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/credit-memo-item-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:30:27.352Z"
---

# Credit Memo Item Field Mappings

This document provides mappings between credit memo item fields in Zuora and their corresponding fields in NetSuite, including details on default field names and potential modifications.

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| ProductRatePlanCharge.IntegrationId__NS | Item (item.internalId) | NetSuite item reference |
| CreditMemoItem.AmountWithoutTax | Amount |  |
| CreditMemoItem.Id | Zuora ID |  |
| CreditMemoItem.ChargeDate | Zuora Charge Date |  |
| CreditMemoItem.ServiceStartDate | Rev. Rec. Start DateRev. Rec. End DateService Start DateService End DateDefer Rev Rec.Rev. Rec. Schedule | See Detailed Delayed Revenue Recognition Rules. |
| CreditMemoItem.ServiceEndDate |  |  |
| Subscription.SubscriptionEndDate |  |  |
| ProductRatePlanCharge.RevRecCode |  |  |
| ProductRatePlanCharge.RevRecStart__NS |  |  |
| ProductRatePlanCharge.RevRecEnd__NS |  |  |
| ProductRatePlanCharge.RevRecTemplateType__NS |  |  |
| ProductRatePlanCharge.Name |  |  |
| RatePlanCharge.RevRecCode |  |  |
| Subscription.Notes | Zuora Subscription Notes |  |
| Subscription.Name | Zuora Subscription Number |  |
| Subscription.Project__NS | Job (job.internalId) | NetSuite Project reference |
