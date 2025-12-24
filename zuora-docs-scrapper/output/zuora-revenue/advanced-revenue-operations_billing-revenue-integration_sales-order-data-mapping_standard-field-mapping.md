---
title: "Standard field mapping"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/sales-order-data-mapping/standard-field-mapping"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:57.292Z"
---

# Standard field mapping

This reference provides information on the standard field mapping.

The table columns represent the following information:

-   Zuora Billing Field: The standard fields extracted from Zuora Billing. It is displayed as the Input Value Label column in Zuora Revenue field mapping templates.

-   Zuora Revenue Staging Field Name: The user-friendly name for Zuora Revenue Staging fields.

-   Input Value Type: The data type of the field.

-   Description: : Additional information on field mappings.


| Zuora Billing Field | Zuora Revenue Staging Field Name | Input Value Type | Description |
| --- | --- | --- | --- |
| Entity.DisplayName | Business Unit | Character | This field is used to set application context for multiple organization customers in Zuora Revenue.This should be populated with the name of the tenant. If you have the Multi-entity feature enabled, it is populated with the entity display name. |
| Entity.EntityName | Company Code | Character | In general, this field is used to identify inter-company transactions.This should be populated with the name of the tenant. If you have the Multi-entity feature enabled, it is populated with the entity name. |
| Account.AccountNumber | Customer Number | Character | This field is a unique ID for a customer from the source that is used to track customer accounts in Zuora Revenue. |
| Account.Name | Customer Name | Character | This field is a unique ID for a customer from the source that is used to identify customer accounts by name in Zuora Revenue. |
| Account.Id | Account Id | Character | This field is a unique ID for a customer account. |
| Entity.HomeCurrency | Functional Currency | Character | This field refers to the main currency used by Business unit.If you have the Currency Conversion feature enabled, this is the home currency you set. If you do not have this feature enabled, this is the currency used in your invoices. |
| Account.Currency | Transaction Currency | Character | This field is used to identify the transaction currency for every transaction in Zuora Revenue. |
| RatePlan.Id | Rate Plan Id | Character | The unique ID of a rate plan. |
| RatePlan.Name | Rate Plan Name | Character | The name of a rate plan. |
| RatePlanCharge.ChargeNumber | Rate Plan Charge Num | Character | A unique number that identifies the charge. |
| RatePlanCharge.Name | Rate Plan Charge Name | Character | The name of a rate plan charge. |
| RatePlanCharge.Version | Rate Plan Charge Version | Number | This field is to identify the version of a rate plan charge. |
| RatePlanCharge.ChargeModel | Rate Plan Charge Model | Character | This field determines how to evaluate charges. The value inherits from ProductRatePlanCharge.ChargeModel |
| RatePlanCharge.ChargeType | Rate Plan Charge Type | Character | Specifies the type of charge. The value inherits from ProductRatePlanCharge.ChargeType. |
| RatePlanCharge.TriggerEvent | Rate Plan Charge Trigger Event | Character | Specifies when to start billing the customer for the charge. The value inherits from ProductRatePlanCharge.TriggerEvent and possible values include:ContractEffectiveServiceActivationCustomerAcceptance |
| RatePlanCharge.Segment | Rate Plan Charge Segment | Number | The identifying number of the subscription rate plan segment. Segments are numbered sequentially, starting with 1. |
| RatePlanCharge.Id | Rate Plan Charge Id | Character | The unique ID to identify a rate plan charge. |
| RatePlanCharge.OriginalId | Original Rate Plan Charge Id | Character | The original ID of the rate plan charge. |
| Product.Id | Product Id | Character | This field is the unique ID of a product from the Zuora Billing Product Catalog. |
| RatePlanCharge.OriginalOrderDate | Sales Order Date | Date | In Revenue, the booking date will be recorded as the Sale Order Date (SO book date) on the Contract item and used in the following areas:Transactions with sales order date on or before the open period will be considered for revenue processing.Deriving the standalone selling price for allocationDetermining exchange ratesDetermining configuration for Revenue PolicyFor data migration, Zuora recommends validating the rate charge.original order date for blank values. If there are charges with blank values, perform one-time backfill for data accuracy.See Sales order date mapping for more information. |
| Subscription.Id | Subscription ID | Character | The unique ID used to identify a subscription |
| Subscription.Name | Subscription Name | Character | The name of a subscription |
| Subscription.Version | Subscription Version | Number | The version of a subscription |
| Subscription.SubscriptionStartDate | Subscription Start Date | Date | The date when the subscription term starts. This date is the same as the start date of the original term, which isn't necessarily the start date of the current or new term. |
| Subscription.SubscriptionEndDate | Subscription End Date | Date | The date when the subscription term ends, where the subscription ends at midnight the day before. For example, if the SubscriptionEndDate is 12/31/2016, the subscriptions ends at midnight (00:00:00 hours) on 12/30/2016. This date is the same as the term end date or the cancelation date, as appropriate. |
| Subscription.Account.NameSubscription.CreatorAccount | Subscription Owner | Character | The name of the account associated with a subscription.If Subscription.Account.Name is selected for mapping, it is the current owner of the subscription.If Subscription.CreatorAccount is selected for mapping, it is the original owner of the subscription. |
| Subscription.TermType | Subscription Type | Character | Possible values are:TERMEDEVERGREEN |
| Subscription.CreatorInvoiceOwnerSubscription.InvoiceOwner | Invoice Owner | Character | The name of the customer account used in the invoice owner transfer use case.If Subscription.InvoiceOwner is selected for mapping, it is the current owner of the subscription.If Subscription.CreatorInvoiceOwner is selected for mapping, it is the original owner of the invoice. |
| Amendment.Id | Amendment Id | Character | This field is the unique ID of an amendment. |
| Amendment.Type | Amendment Type | Character | This field is used to identify the type of an amendment.If the Orders feature is enabled in your Zuora tenant, the Amendment Type field in Zuora Revenue is not mapped from any Zuora Billing field. |
| RatePlanCharge.EffectiveStartDate | Revenue Start Date | Date | The effective start date of the service period associated with a rate plan charge. If the associated charge is a one-time fee, then this date is the date of that charge. |
| RatePlanCharge.EffectiveEndDate | Revenue End Date | Date | The effective end date of the service period associated with a rate plan charge. Service ends one second before the date in this value. |
| RatePlanCharge.Quantity | Ordered Qty | Number | The default quantity of units, such as the number of authors in a hosted wiki service. Valid for all charge models except for Flat Fee pricing. |
| ChargeContractualValueAllCharges.Elp | Ext List Price | Number | The extended list price of a sales order. |
| ChargeContractualValueAllCharges.Amount | Ext Sell Price | Number | The extended selling price of a sales order. |
| ProductRatePlanCharge. ContractLiabilityAccountingCode.Name | Deferred Segments | Character | The name of the accounting code for contract liability. |
| ProductRatePlanCharge. ContractRecognizedRevenueAccountingCode.Name | Revenue Segments | Character | The name of the accounting code for the contract recognized revenue. |
| ProductRatePlanCharge. AdjustmentLiabilityAccountingCode.Name | Adjustment Liability Account | Character | The name of the adjustment liability accounting code. |
| ProductRatePlanCharge. AdjustmentRevenueAccountingCode.Name | Adjustment Revenue Account | Character | The name of the adjustment revenue accounting code. |
| ProductRatePlanCharge. UnbilledReceivablesAccountingCode.Name | Unbilled AR Account | Character | The name of the unbilled receivables accounting code. |
| ProductRatePlanCharge.ContractAssetAccountingCode. Name | Contract Asset Account | Character | The name of the contract asset accounting code. |
| ProductRatePlanCharge.Id | Product Rate Plan Charge Id | Character | The unique ID to identify a product rate plan charge. |
| ProductRatePlan.Id | Product Rate Plan Id | Character | The unique ID to identify a product rate plan. |
| RatePlanCharge.CreatedDate | Charge Created Date | Date | The date and time when the invoice item was created. |
| RatePlanCharge.UpdatedDate | Charge Last Update Date | Date | The date and time when the invoice item was last updated. |
| Ramp.Id | Ramp Id | Character | If you use the Ramp feature in Zuora Billing, add the Mapping field in the template to support the ramp functionality. As part of the Mapping of the Ramp.Id field, the Ramp.Number field is auto-populated in the revenue staging table's Ramp_deal_ref field if the charge participates in the Ramp. |
