---
title: "Zuora Invoice Items"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-positive-field-mappings-zuora-to-netsuite-sync/zuora-invoice-items"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:25.799Z"
---

# Zuora Invoice Items

Zuora Invoice Items are synchronized as individual NetSuite Invoice line items, detailing fields such as Charge Amount, Charge Date, and Zuora ID.

Each Zuora Invoice Item is synced as a separate NetSuite Invoice line item.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| InvoiceItem.ChargeAmount | Amount | Charge Amount is the amount on the Transaction line. |
| InvoiceItem.ChargeDate | Charge Date | Charge Date is the date of transaction line. |
| InvoiceItem.Id | Zuora ID |  |
| InvoiceItem.Quantity | Quantity |  |
| ProductRatePlanCharge.RevRecCode ProductRatePlanCharge.RevRecStart__NS ProductRatePlanCharge.RevRecEnd__NS ProductRatePlanCharge.RevRecTemplateType__NS ProductRatePlanCharge.RevRecTriggerCondition InvoiceItem.RevRecStartDate InvoiceItem.ServiceStartDate InvoiceItem.ServiceEndDate Subscription.SubscriptionEndDate | Rev. Rec. Start Date Rev. Rec. End Date Service Start Date Service End Date Defer Rev. Rec. Rev. Rec. Schedule | See Detailed Delayed Revenue Recognition Rules . |
| InvoiceItem.IntegrationId__NS | itemList.line | Update Zuora after initial create; map during subsequent NetSuite item updates for delayed revenue recognition. |
| Account.Class__NS | Class | If NetSuite Connector preference Invoice Line Class Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| Account.Department__NS | Department | If NetSuite Connector preference Invoice Line Department Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| Account.Location__NS | Location | If NetSuite Connector preference Invoice Line Location Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| n/a | Income Account | Implied by NetSuite Item reference |
| n/a | Description | Defaulted from NetSuite Item |
| n/a | Tax (isTaxable) | If NetSuite Connector Advanced Setting Use Standard Invoice Sync is Yes , force to "false" to prevent NetSuite from calculating tax. Otherwise no value is mapped and NetSuite will set based on the NetSuite Item record. |
| ProductRatePlanCharge.IntegrationId__NS | ItemList (item.internalId) | NetSuite Item reference |
| Subscription.Name | Zuora Subscription Number |  |
| Subscription.Notes | Zuora Subscription Notes |  |
| Subscription.Project__NS | Job (job.internalId) | NetSuite Project reference |
| n/a | itemList.replaceAll | "false". Only applicable for updating Invoice for delayed revenue recognition. |
| InvoiceItem.ProcessingType | Zuora Item Type | For example, "Charge" |
