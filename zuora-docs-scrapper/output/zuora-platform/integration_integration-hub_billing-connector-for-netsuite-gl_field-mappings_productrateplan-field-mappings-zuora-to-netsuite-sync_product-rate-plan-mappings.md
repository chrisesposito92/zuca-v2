---
title: "Product Rate Plan Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/productrateplan-field-mappings-zuora-to-netsuite-sync/product-rate-plan-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:41.396Z"
---

# Product Rate Plan Mappings

This document outlines the mappings between Zuora Product Rate Plans and NetSuite fields, detailing how each field is synchronized and updated based on specific preferences and conditions.

| Source Field | Destination Field | Notes |
| --- | --- | --- |
| ProductRatePlan.Id ProductRatePlan.Name | Item Name/Number | If NetSuite Connector preference Item ID Mapping is Use Zuora Record Name , the Zuora Name will be used.If NetSuite Connector preference Item ID Mapping is Use Unique Zuora Internal ID , a value of “Zuora Rate Plan” + Zuora Id will be used.Notes:If select Use Zuora Record Name , you must ensure the Name is unique across Products, Rate Plans, and Charges.Whether this field is updated for subsequent updates is determined by the NetSuite Connector preference Product Catalog Sync Behavior . |
| ProductRatePlan.Id | Zuora ID |  |
| ProductRatePlan.Name | Display Name Zuora Product Rate Plan Name |  |
| ProductRatePlan.IntegrationId__NS | internalId | System ID. Update Zuora with NetSuite internalId after initial creation only. Map for subsequent updates. |
| ProductRatePlan.IntegrationStatus__NS | n/a | Update Zuora with "Complete" or "Error." |
| ProductRatePlan.ItemType__NS | n/a | Not mapped. Used to determine which NetSuite Item to create. Currently, "Non Inventory Sales," "Inventory," and "Services." |
| ProductRatePlan.SyncDate__NS | n/a | Update Zuora with current timestamp after the first successful sync. |
| ProductRatePlan.BillingPeriod__NS | Zuora Billing Period |  |
| ProductRatePlan.Price__NS | One of the following:pricingMatrix.currency.internalIdpricingMatrix.priceLevel.internalId=1pricingMatrix.priceLevel.priceList.valuerate | If you have selected to use multicurrency or advanced pricing, this is mapped to pricingMatrix. Otherwise, this is mapped to rate. |
| ProductRatePlan.MultiCurrencyPrice__NS | pricingMatrix.currency.internalIdpricingMatrix.priceLevel.internalId=1pricingMatrix.priceLevel.priceList.value | This is mapped only if you have selected to use multicurrency. |
| ProductRatePlan.Class_NS | Class | If not populated, mapped from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| ProductRatePlan.Department_NS | Department | If not populated, mapped from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| ProductRatePlan.Location_NS | Location | If not populated, mapped from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| Product.Name | Zuora Product Name |  |
| Product.IntegrationId__NS | Subitem Of (parent.internalid) |  |
| n/a | Zuora Type | "RATE_PLAN" |
| n/a | Zuora Sync Date | Current timestamp |
| n/a | Tax Schedule | Mapped from NetSuite Connector preference NetSuite Default Tax Schedule if populated. |
| ProductRatePlan.Subsidiary__NS | Subsidiary | If not populated, mapped from NetSuite Connector preference NetSuite Default Subsdiary if populated. See NetSuite Classifications for more information.Notes:Only mapped during create/link.This is available only for NetSuite OneWorld Edition. |
| ProductRatePlan.IncludeChildren__NS | Include Children | This is available only for NetSuite OneWorld Edition. |
