---
title: "Product Rate Plan Charge Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/productrateplancharge-field-mappings-zuora-to-netsuite-sync/product-rate-plan-charge-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:41.383Z"
---

# Product Rate Plan Charge Mappings

This document provides mappings for product rate plan charges between Zuora and NetSuite, detailing field correspondences and specific conditions for data synchronization.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| PRPC.RecognizedRevAccountPRPC.AccountingCode | Income Account | Use RecognizedRevAccount (new field R166) value unless blank, then use AccountingCode.NetSuite lookup to retrieve internalId based on full name.GL Account full name. For example, Parent Record : Child Record. Spaces before and after the colon are required. If blank in Zuora, default to the NetSuite Default Income Account configured in NetSuite's accounting preferences. |
| PRPC.ChargeModel | Zuora Charge Model |  |
| PRPC.ChargeType | Zuora Charge Type |  |
| PRPC.CreatedDate | Zuora Created Date |  |
| PRPC.Description | Sales Description |  |
| PRPC.Id | Zuora ID |  |
| PRPC.IdPRPC.Name | Item ID | If NetSuite Connector preference Item ID Mapping is Use Zuora Record Name , the Zuora Name will be used.If NetSuite Connector preference Item ID Mapping is Use Unique Zuora Internal ID , a value of “Zuora Charge” + Zuora Id will be used.Notes:If select Use Zuora Record Name , you must ensure the Name is unique across Products, Rate Plans, and Charges.Whether this field is updated for subsequent updates is determined by the NetSuite Connector preference Product Catalog Sync Behavior . |
| PRPC.Name | Display Name | Only map during create to allow for migration. |
| PRPC.Name | Zuora Product Rate Plan Charge Name |  |
| PRPC.NumberOfPeriod | n/a |  |
| PRPC.ProductRatePlanId | n/a |  |
| PRPC.RevRecCode | Rev Rec Schedule | Revenue Recognition Template. The Zuora value must match the NetSuite Name. |
| PRPC.RevRecTriggerCondition | n/a |  |
| PRPC.SmoothingModel | n/a |  |
| PRPC.Taxable | Taxable (isTaxable) | Only mapped if NetSuite Connector Advanced Setting Use Standard Invoice Sync is No . Otherwise no value is explicitly mapped. |
| PRPC.Taxable | Zuora Is Taxable |  |
| PRPC.TaxCode | Zuora Tax Code |  |
| PRPC.TaxCode | Avalara Tax Code | Only mapped if NetSuite Connector Advanced Setting Use Standard Invoice Sync is No – Use NetSuite Avatax . Otherwise no value is mapped.Note: Only applicable if AvaTax module is used in NetSuite. |
| PRPC.IntegrationId__NS | Internal ID | System ID. Update Zuora with NetSuite internalId after initial creation only; map for subsequent updates. |
| PRPC.IntegrationStatus__NS | n/a | Update Zuora with "Complete" or "Error." |
| PRPC.ItemType__NS | n/a | Not mapped; used to determine which NetSuite Item to create. Currently, "Non Inventory Sales," "Inventory," and "Services." |
| PRPC.SyncDate__NS | n/a | Update Zuora with current timestamp after initial creation only. |
| ProductRatePlan.Name | Zuora Product Rate Plan Name |  |
| Product.Name | Zuora Product Name |  |
| n/a | Zuora Type | "CHARGE" |
| n/a | Rate | Not mapped. The price is determined on invoice. |
| n/a | Zuora Sync Date | Current timestamp |
| n/a | Price | "custom"The Price Level RecordRef. Prices will be determined per Zuora transaction, so use the custom price level in NetSuite. No price levels will be created on the NetSuite item master. |
| PRPC.DeferredRevenueAccount__NS | Deferred Revenue Account | NetSuite lookup to retrieve internalId based on full name (cache value by map). |
| n/a | Tax Schedule | Mapped from NetSuite Connector preference NetSuite Default Tax Schedule if populated. |
| PRPC.Class__NS | Class | If not populated, mapped from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| PRPC.Department__NS | Department | If not populated, mapped from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| PRPC.Location__NS | Location | If not populated, mapped from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| PRPC.Subsidiary__NS | Subsidiary | If not populated, mapped from NetSuite Connector preference NetSuite Default Subsidiary if populated. See NetSuite Classifications for more information.Notes:Only mapped during create/link.This is available only for NetSuite OneWorld Edition. |
| PRPC.IncludeChildren__NS | Include Children | This is available only for NetSuite OneWorld Edition. |
