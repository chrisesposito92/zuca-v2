---
title: "Debit Memo Item Field Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/debit-memo-field-mappings-zuora-to-netsuite-sync-invoice-settlement-enabled/debit-memo-item-field-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:10.743Z"
---

# Debit Memo Item Field Mappings

The Destination column lists the default names for the fields in NetSuite. Your fields may have been modified from the default values.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| ProductRatePlanCharge.IntegrationId__NS | Item (item.internalId) | NetSuite item reference |
| DebitMemoItem.Id | Zuora ID |  |
| DebitMemoItem.AmountWithoutTax | Amount | Charge Amount is the amount on the Transaction line. |
| DebitMemoItem.ChargeDate | Charge Date | Charge Date is the date of the transaction line. |
| DebitMemoItem.Quantity | Quantity |  |
| DebitMemoItem.ProcessingType | Zuora Item Type | For example, "Charge" |
| DebitMemoItem.ServiceStartDate | Rev. Rec. Start DateRev. Rec. End DateService Start DateService End DateDefer Rev Rec.Rev. Rec. Schedule | See Detailed Delayed Revenue Recognition Rules. |
| DebitMemoItem.ServiceEndDate |  |  |
| Subscription.SubscriptionEndDate |  |  |
| ProductRatePlanCharge.RevRecCode |  |  |
| ProductRatePlanCharge.RevRecStart__NS |  |  |
| ProductRatePlanCharge.RevRecEnd__NS |  |  |
| ProductRatePlanCharge.RevRecTemplateType__NS |  |  |
| ProductRatePlanCharge.Name |  |  |
| RatePlanCharge.RevRecCode |  |  |
| Subscription.Name | Zuora Subscription Number |  |
| Subscription.Notes | Zuora Subscription Notes |  |
| Subscription.Project__NS | Job (job.internalId) | NetSuite Project reference |
| n/a | itemList.replaceAll | "false". Only applicable for updating Invoice for delayed revenue recognition. |
