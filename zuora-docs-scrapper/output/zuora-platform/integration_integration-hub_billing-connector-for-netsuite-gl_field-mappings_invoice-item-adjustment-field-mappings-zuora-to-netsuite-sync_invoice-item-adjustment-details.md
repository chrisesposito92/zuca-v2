---
title: "Invoice Item Adjustment Details"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/invoice-item-adjustment-field-mappings-zuora-to-netsuite-sync/invoice-item-adjustment-details"
product: "zuora-platform"
scraped_at: "2026-02-19T03:30:44.946Z"
---

# Invoice Item Adjustment Details

This document details the synchronization of Zuora Invoice Item Adjustments with NetSuite transaction line items, including field mappings and rules for revenue recognition and classification.

The Item referenced on the Zuora Invoice Item Adjustment is synced as NetSuite transaction line item.

| Source Field | Destination Field (Credit Memo/Invoice Line Item) | Notes |
| --- | --- | --- |
| ProductRatePlanCharge.IntegrationId__NS TaxationItem.AccountingCode | Internal ID | NetSuite item reference. If Adjustment.SourceType="InvoiceItem," lookup and map IntegrationId__NS from Zuora Charge, otherwise lookup and map AccountingCode from Zuora Tax. |
| InvoiceItemAdjustment.Amount | Amount |  |
| ProductRatePlanCharge.RevRecCode ProductRatePlanCharge.RevRecStart__NS ProductRatePlanCharge.RevRecEnd__NS ProductRatePlanCharge.RevRecTemplateType__NS ProductRatePlanCharge.RevRecTriggerCondition InvoiceItem.RevRecStartDate InvoiceItem.ServiceStartDate InvoiceItem.ServiceEndDate Subscription.SubscriptionEndDate | Rev. Rec. Start Date Rev. Rec. End Date Service Start Date Service End Date Rev. Rec. Schedule | See Detailed Delayed Revenue Recognition Rules . |
| Account.Class__NS | Class | If NetSuite Connector preference Invoice Line Class Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| Account.Department__NS | Department | If NetSuite Connector preference Invoice Line Department Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| Account.Location__NS | Location | If NetSuite Connector preference Invoice Line Location Mapping is Zuora Charge , no value will be mapped and NetSuite will default from the NetSuite Item reference. If Zuora Account , the value is mapped from the Zuora Account. See NetSuite Classifications for more information. |
| n/a | Tax (isTaxable) | If NetSuite Connector Advanced Setting Use Standard Invoice Sync is Yes , force to "false" to prevent NetSuite from calculating tax. Otherwise no value is mapped and NetSuite will set based on the NetSuite Item record. |
| Subscription.Project__NS | Job (job.internalId) | NetSuite Project reference |
