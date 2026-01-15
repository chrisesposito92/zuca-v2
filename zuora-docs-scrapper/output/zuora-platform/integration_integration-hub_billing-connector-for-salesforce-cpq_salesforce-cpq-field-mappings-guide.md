---
title: "Salesforce CPQ field mappings guide"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-field-mappings-guide"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:48.796Z"
---

# Salesforce CPQ field mappings guide

This guide provides field mappings between Salesforce CPQ and Zuora for various entities including Account, Address, Order, Subscription, Order Line Items, and Product Catalog.

This document outlines the field mappings between Salesforce CPQ and Zuora for Account, Address, Order, Subscription, Order Line Items, and Product Catalog.

## Account

| SALESFORCE | ZUORA | DESCRIPTION |
| --- | --- | --- |
| ACCOUNT | ACCOUNT |  |
| Account Name | Account Name |  |
|  | Account Number | Auto generated in Zuora |
| Id | CRM Account ID |  |
| Account Currency | Currency |  |
|  | Bill Cycle day | Default: This sets the bill cycle day for the new account to the 1st day of the billing cycle. |
| Billing Address | Bill To Contact | If the Billing Address is provided, a Bill To contact with the first name and last name as <account name>_billTo is created. It is mandatory to have a Billing Address in SFDC CPQ, else sync will error out. |
| Shipping Address | Sold To Contact | If a Shipping Address is provided, then a Sold To Contact with the first name and last name as <account name>_soldTo is created. If empty in SFDC, then Bill To contact will be used as Sold To contact. |
| Note | Description |  |
| Account Owner | Sales Rep | The ID of the Account Owner |
|  | Auto-Pay | Default: Set to False |
| Parent Account ID | Parent | The connector uses the Parent Account ID from Salesforce to find the corresponding account in Zuora by referencing the CRM ID field. If the parent account doesn't exist in Zuora, the connector will create the account without the associated orders. |

## Contact

| SALESFORCE | ZUORA | DESCRIPTION |
| --- | --- | --- |
| ADDRESS | CONTACT |  |
| ID | CRM ID | As part of the connector setup, you will need to create this as a custom field. |
| Street | Address 1 |  |
| City | City |  |
| State/Province | State/Province |  |
| Zip/Postal Code | Postal Code |  |
| Country | Country |  |
| Email | Work Email |  |
| Mobile | Mobile Phone |  |

## Order

| SALESFORCE | ZUORA | DESCRIPTION |
| --- | --- | --- |
| ORDER | ORDER |  |
| Order Number | Order Number |  |
|  | Order status | The order status is determined by the dates set on the orders in Salesforce and the settings in your Billing Subscription configuration. |
| Account Name | Account | If the Zuora account doesn't exist, the Salesforce account is synced first. |
| Description | Description |  |
| Effective Date | Order Date |  |

## Subscription

If the Salesforce order product has an associated Subscription object), a subscription will be generated in Zuora.

## Non-usage charge-based subscriptions

Non-usage charge-based subscriptions are subscription plans that don't require payments based on usage metrics. Typically, they involve flat fees or recurring charges with no added expenses based on usage. Refer to this [section](#reference-6349__mappingofnonusagebasedsubscriptioncharges) for detailed information about the usage support.

The following table outlines the mapping of non-usage-based subscription charges.

| SALESFORCE | ZUORA |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| ORDER | ORDER PRODUCT | SUBSCRIPTION | SUBSCRIPTION | SUBSCRIPTION RATE PLAN | SUBSCRIPTION RATE PLAN CHARGE | DESCRIPTION |
|  |  | Start Date | Subscription Start Date |  |  |  |
|  |  | End Date | End Date |  |  | When 'subscription_term_in_days' is not used, the End Date in Zuora is calculated as the Subscription Start Date + the subscription term.When 'subscription_term_in_days' is used, the End Date in Zuora is the End Date in Salesforce + 1 day. |
| Effective Date |  |  | Contract Effective Date |  |  | When "trigger_dates_on_orders" is enabled |
| Customer AuthorizedDate |  |  | Customer acceptance date |  |  | When "trigger_dates_on_orders" is enabled |
| Company AuthorizedDate |  |  | Service activation date |  |  | When "trigger_dates_on_orders" is enabled |
| Currency ISO Code |  |  | Currency |  |  | Applicable only when multicurrency is enabled. |
|  |  | Subscription Type | Term Type |  |  | If the Subscription Type is Evergreen, it will remain Evergreen; otherwise, it will be set to 'Renew with Specific Term.' |
|  |  |  | Initial Term |  |  | The duration between the start date and end date on the subscription object will be in months or days, depending on whether "subscription_term_in_days" is enabled. |
|  |  |  | Period type |  |  | Months or days, depending on the enablement of 'subscription_term_in_days. |
|  |  | Subscription Number | Subscription Number |  |  | The subscription linked to the Order Product. |
| Contract Start Date |  |  | Contract Effective Date |  |  | The contract linked to the order. |
| [Optional]Subscription Owner Account |  |  | Subscription Owner Account |  |  | Create a custom field in SFDC with API name SubscriptionOwner__c of type Account Lookup |
| [Optional]Invoice Owner Account |  |  | Invoice Owner Account |  |  | Create a custom field in SFDC with API name InvoiceOwner__c of type Account Lookup |
| Bill To Contact or Billing Address |  |  | Bill To Contact |  |  | Use Bill To Contact if available; otherwise, use the Billing Address; if not, default it from the account. |
| Ship To Contact or Shipping Address |  |  | Sold To Contact |  |  | Use Ship To Contact if present, otherwise, use Shipping Address; if not, default it from account. |
| Payment Term |  |  | Payment Term |  |  |  |
|  |  |  | Renewal Setting |  |  | If the Subscription Type is Evergreen, it will be renewed as Evergreen; otherwise, it will be set to 'Renew with Specific Term.' |
|  |  |  | Renewal Term |  |  | The renewal term will be the same as the current term and is only applicable for non-evergreen subscriptions. |
|  | ID |  |  | Externally Managed PlanId |  |  |
|  | Product2 Id |  |  | External Catalog Plan Id |  | The ID of the product2 linked to the order product |
|  |  | Net Price |  |  | List Price | The Net Price field on the subscription object linked to the order product |
|  | Quantity |  |  |  | Quantity |  |
|  |  |  |  |  | Bill Cycle Type | Inherited from the product catalog:When "sfdc_use_list_price_base" is set to "true" and there is a recurring charge, it is defaulted to "Charge Trigger Day." |
|  | Order Product Number |  |  |  | Charge Number |  |
|  |  |  | Quote Number |  |  | The quote number of the Quote linked with the order |
|  |  |  | Quote Business Type |  |  | Type field on the Quote object |
|  |  |  | Quote Type |  |  | Type field on the Quote object |
|  |  | PO_Number__c | InvoiceGroupNumber |  |  | Create a custom field on the subscription object in Salesforce and add this mapping in the connector configuration to sync the invoice group numbers. |
|  |  | Billing Frequency |  |  | Billing Period | The API names of the billing frequency field must match the billing period values in Zuora. Map this field explicitly in the connector configuration from SBQQ__BillingFrequency__c to billingPeriod on the subscription to subscription rate plan charge custom field mapping option. |

## Usage-based charge subscription

Usage-based charges are fees that depend on how much a product or service is used. The charges can change based on how much or how often you use it, giving you flexible and scalable pricing options.

This table shows the mappings between the order item consumption schedules, rates, and the subscription object. All the other mappings for the subscription and order remain consistent with the ones mentioned previously.

| SALESFORCE | ZUORA |  |  |  |
| --- | --- | --- | --- | --- |
| ORDER ITEMCONSUMPTION SCHEDULE | ORDER ITEM CONSUMPTION RATE | SUBSCRIPTION RATE PLAN | SUBSCRIPTION RATE PLAN CHARGE | DESCRIPTION |
| ID |  | Externally Managed Plan Id |  | If the ID for product consumptionSchedule is managed externally, skip the syncing process. |
|  |  | External Catalog Plan Id |  | The product consumption schedule ID on the order item consumption schedule. |
|  |  |  | Tier Order | The connector categorizes the order item consumption rates by their lower bounds. |
|  | Price |  | Price | Applicable on each tier |
|  | Pricing Method |  | Price Format | Applicable on each tier |
|  | Lower Bound |  | Starting Unit | Applicable on each tier |
|  | Upper Bound -1 |  | Ending Unit | Unlike Zuora, Salesforce does not include upper bounds. |
|  | Cap |  | Cap | Relevant if Zuora allows for capping. |

## Order Line Items

When the order product in Salesforce does not have an associated Subscription object, an Order Line Item will be created.

| SALESFORCE | ZUORA | DESCRIPTION |  |
| --- | --- | --- | --- |
| ORDER | ORDER PRODUCT | ORDER LINE ITEM |  |
|  | Product Name | Item Name | The product's name, as indicated by the Product2 object. |
|  | Zuora Status | Item State | By default, configure the value to "SentToBilling", but if you want to configure a different status, create a custom field on the Salesforce Order Product object, called Zuora_Status__c. Ensure it is a picklist type and the values align with Zuora options.Then map Zuora_Status__c to itemState in the connector configuration on the Order Item to Order Line Item mapping configuration |
|  | Quantity | Quantity |  |
|  | Product ID | Product CodeProduct Rate Plan Charge ID | The ID of the Product2 in the Order Product.The corresponding one-time charge from the product catalog is used. |
| Effective Date |  | Transaction Start Date |  |
| Effective Date |  | Transaction End Date |  |
|  |  | Item Type: Product | Default value |
| ID |  | Purchase Order Number |  |
|  |  | LINE CATEGORY: Sales | Default value |
|  | Description | Description |  |
| Activated Date/ Effective Date |  | Bill Target Date | Assign the Activated Date if it exists; otherwise, use the Effective Date. |
|  | Unit Price | List Price Per Unit |  |
|  | Unit Price | Amount per unit |  |
| [Optional]Invoice Owner Account |  | Invoice Owner Account | Create a custom field in SFDC with API name InvoiceOwner__c of type Account Lookup |
| [Optional]OLI Owner Account |  | OLI Owner Account | Create a custom field in SFDC with API name SubscriptionOwner__c of type Account Lookup. The OLI Owner account must already exist in Zuora. |
| Bill To Contact or Billing Address |  | Bill To Contact | Use Bill To Contact if available, otherwise use Billing Address. |
| Ship To Contact or Shipping Address |  | Sold To Contact | If Ship To Contact is available, use it; otherwise, use the Shipping Address or default it |

## Product Catalog

The product catalog doesn't synchronize on its own. Orders override the product catalog at the subscription rate plan charge level during syncing.

## Non-usage-based products

The following table outlines the mapping of non-usage-based products.

| SALESFORCE | ZUORA | DESCRIPTION |  |  |  |
| --- | --- | --- | --- | --- | --- |
| PRODUCT2 | CONSUMPTION SCHEDULE | PRODUCT | PRODUCT RATE PLAN | PRODUCT RATE PLAN CHARGE |  |
| Product Code |  | SKU |  |  | The combination of product code and product ID is used to verify the existence of a product in Zuora. |
| Accounting Code |  |  |  |  | Create a custom field under Product in Salesforce with the API name Z_Accounting_Code__c. If not present, it defaults to "Accounts Receivable." |
| Product ID |  |  | Externally Managed Plan Ids |  | This ID serves as a determinant for product existence in Zuora. If the product exists, syncing is bypassed. |
| Product Name |  | Name | Name | Name |  |
|  |  | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Default setting |
|  |  |  | Currency |  | Applicable if Flexible Billing Attribute is enabled. All currencies from the product2's PriceBook entries are activated. |
| Pricing Method |  |  |  | Charge Model | If the Pricing Method is List, then Per Unit Pricing. Otherwise, it defaults to Flat Fee Pricing. |
| Charge Type |  |  |  | Charge Type | Supports Recurring, One Time, and Usage charges. If empty, it defaults to a One-time charge in Zuora. |
| Billing Frequency |  |  |  | Billing Period | If the billing frequency is "Invoice Plan," it will be set to "Subscription Term" in Zuora. If left empty, it defaults to "Month". |
| Tax Code |  |  |  | Tax Code |  |
| Tax Mode |  |  |  | Tax Mode | Set the custom field API name as "TaxMode__c" to explicitly define its value. If not specified for taxable charges, it will default to "Tax Exclusive". |
| Deferred Revenue Account |  |  |  |  | Create a custom field in Salesforce under Product with the API name Z_Deferred_Revenue_Account__c. If not present, it defaults to "Accounts Receivable". |
| Recognized Revenue Account |  |  |  |  | Create a custom field in Salesforce under Product with API name Z_Recognized_Revenue_Account__c. If not present,it defaults to "Accounts Receivable" |
| Taxable |  |  |  | Taxable |  |
|  |  |  |  | Accounting Code = "Accounts Receivable" | Default value |
|  |  |  |  | Deferred Revenue Account = "Accounts Receivable" | Default value |
|  |  |  |  | Bill Cycle Type = "Default from customer" | Default value |
|  |  |  |  | Trigger Event = "Contract Effective" | Default value |
| Quantity Unit of Measure |  |  |  | UOM = "Each" | If not provided, it defaults to "Each." |

## Usage-based products

The following table describes the mapping for usage-based products. Refer to this [section](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/orders-sync-between-salesforce-cpq-and-zuora#concept-2603__supportforusagebasedorders) for detailed information about the usage support.

| SALESFORCE | ZUORA | DESCRIPTION |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| PRODUCT2 | PRODUCT CONSUMPTION SCHEDULE | CONSUMPTION SCHEDULE | PRODUCT | PRODUCT RATE PLAN | PRODUCT RATE PLAN CHARGE |  |
| Name |  |  | Name |  |  |  |
| Product Code |  |  | SKU |  |  |  |
| Name |  | Name |  | Name |  | The product's name combined with the name of the consumption schedule. |
|  |  |  | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Effective Start Date: 01/01/2000Effective End Date:01/01/3000 | Default value |
|  | ID |  |  | Externally Managed Plan Ids |  |  |
| Description |  |  |  | Description |  |  |
|  |  | Name |  |  | Name |  |
|  |  | Type |  |  | Charge Model | If the type is "Range," use the volume model. If it's "Slab," use the tiered model. |
|  |  |  |  |  | Charge Type = "Usage" | Default value |
|  |  | Unit of Measure |  |  | UOM |  |
| Billing Frequency |  |  |  |  | Billing Period |  |
| Tax Code |  |  |  |  | Tax Code |  |
| Taxable |  |  |  |  | Taxable |  |
|  |  |  |  |  | Default Qty = 1 | Default value |
|  | Currency ISO Code |  |  |  | Currency |  |
|  |  |  |  |  | Tier. From = 0 | Default value |
|  |  |  |  |  | Tier.To = 1 | Default value |
|  |  |  |  |  | Tier.List price | Default value |
|  |  |  |  |  | Tier.Price format | Depending on the pricing method on the consumption rate object, the fee can be determined as either a flat rate or per unit |
