---
title: "Field descriptions of the CSV output file"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/billingpreviewrun/field-descriptions-of-the-csv-output-file"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:16.442Z"
---

# Field descriptions of the CSV output file

This reference lists the description of the fields included in the output CSV file.

| Name | Description |
| --- | --- |
| Account: ID | The account ID of the invoice item owner. |
| Rate Plan Charge: ID | The ID of the rate plan charge associated with this invoice item. |
| Invoice Item: Charge Amount | The amount being charged for this invoice item. |
| Invoice Item: Processing Type | The kind of charge:chargediscountprepaymenttax |
| Invoice Item: Service Start Date | The start date of the service period associated with this invoice item. |
| Invoice Item: Service End Date | The end date of the service period associated with this invoice item. |
| Invoice Item: Charge Date | The date when the Invoice Item is created. |
| Invoice Item: ID | The ID of the rate plan charge that is associated with this invoice item. |
| Subscription: SubscriptionId | The ID of the subscription associated with the invoice item.If renewal is supported in the preview run, the corresponding subscription will be renewed. After the preview run is completed, the renewed subscription will be rolled back. Therefore, the subscription ID is transient for renewed subscriptions; you cannot retrieve information about the subscription by SubscriptionId from the Zuora system. |
| Invoice Item: AppliedToInvoiceItemId | Associates a discount invoice item to a specific invoice item. |
| Invoice Item: Quantity | The number of units for this invoice item. |
| Invoice Item: UOM | The units of this invoice item. |
| Invoice Item: ChargeType | The type of the charge:OneTimeRecurringUsage |
| Invoice Item: SubscriptionNumber | The subscription number of the invoice item. For example, A-S00000019. |
| Invoice Item: ChargeNumber | The charge number of the invoice item. For example, C-00000060. |
