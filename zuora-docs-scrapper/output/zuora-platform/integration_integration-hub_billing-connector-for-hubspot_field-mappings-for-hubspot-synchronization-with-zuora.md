---
title: "Field mappings for HubSpot synchronization with Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/field-mappings-for-hubspot-synchronization-with-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:11.116Z"
---

# Field mappings for HubSpot synchronization with Zuora

The Zuora HubSpot integration provides predefined field mappings, allowing Zuora to convert synchronized data into recognizable fields for the HubSpot connector. Use this reference to learn about the field mappings.

## Company mappings

Company mapping involves linking or associating company-related data, such as company names, addresses, contacts, or other details, between Zuora and HubSpot.

| HubSpot field name | Zuora field name | Additional Information |
| --- | --- | --- |
| HubSpot Company | Zuora Account |  |
| name | name |  |
| id | CRM Account ID |  |
|  | Account Number | Auto numbered |
| Company currency | Currency | Uses the default currency in HubSpot |
| Contact | Contact |  |
| [Optional] Bill To Contact | Bill To Contact | The Bill To Contact has to be marked as Bill To in HubSpot via association. If no contact is marked, then the address of the company is used. |
| [Optional] Sold To Contact | Sold To Contact | The Sold To Contact has to be marked as Sold To in HubSpot via association. If no contact is marked, then the address of the company is used. |
|  | Auto-Pay | Default: false |
|  | Payment Term | Default: Due upon receipt |
|  | Bill Cycle Day | Default: 1st of the month |
|  | Billing Batch | Default: Batch 1 |

Contact

| Contact (HubSpot) | Company (Hubspot) | Contact (Zuora) | Additional information |
| --- | --- | --- | --- |
| id |  | crmId | This is a mandatory custom field that needs to be created during setup |
|  | State | State |  |
|  | Country | Country |  |
|  | City | City |  |
|  | Zipcode | Zipcode |  |
| First Name |  | First Name |  |
| Last Name |  | Last Name |  |

## Deal mappings

Deal mappings involve connecting data elements between Zuora and HubSpot. It requires aligning and synchronizing information like deal names, values, products, contacts, and other relevant details.

Synchronization between Deal and Orders

| HubSpot field name | Zuora field name | Additional information |
| --- | --- | --- |
| Closed Won Date | Order Date |  |
| Deal Type on order | Order Category | Automatically set to “New Sales” |
|  | Order Number | Auto generated in Zuora |

Synchronization between subscriptions

| Deal (HS) | Product (HS) | Subscription (Z) | Subscription Rate Plan (Z) | Subscription Rate Plan Charge (Z) | Description |
| --- | --- | --- | --- | --- | --- |
| id |  | HubSpotDealId__c |  |  | This custom field has to be created during setup. |
| Primary company |  | Subscription Owner |  |  |  |
| [Optional]Invoice Company |  | Invoice Owner |  |  | If a company is marked as “Invoice Owner” via association, then use a value. Else the primary company will be the invoice owner. |
| [Optional]Bill To Contact |  | Bill To Contact |  |  | If present, use value else, set to “Default from Account”. |
| [Optional]Sold To Contact |  | Sold to Contact |  |  | If present, use value else set to “Default from Account”. |
|  | id |  | ExternallyManagedPlanId |  |  |
|  | billing frequency |  |  | Billing Period |  |
|  | quantity |  |  | Quantity |  |
| Currency |  | Currency |  |  | If Zuora has multi-currency enabled, then the currency on the deal is set to the subscription’s currency. Else default HubSpot currency is used |
|  | Net Price |  |  | Price |  |
|  | term | Term Type |  |  | If Term = 0 in HubSpot, then Term Type = Evergreen in Zuora else set as “Termed”. |
| Closed won Date |  | Subscription Start Date |  |  |  |
|  |  | Subscription End Date |  |  | Subscription Start date + term |
| Closed won Date |  | Contract Effective Date |  |  |  |
| [Optional]Service Activation Date |  | Service Activation Date |  |  | The default date is null if not set on the property. |
| [Optional]Customer Acceptance Date |  | Customer Acceptance Date |  |  | The default date is null if not set on the property. |
|  |  | Auto renew: false |  |  | Default |
|  | [Optional]Billing Trigger Condition |  |  | Billing Trigger Condition | If not specified in the deal line property, the default is upon contract effectiveness. |

## Product Catalog Mappings

Product catalog mapping involves aligning and connecting product names, descriptions, pricing, SKUs, and other attributes between the Zuora and HubSpot connectors. It involves connecting and synchronizing data elements in product catalogs across platforms for consistent product information.

Note:

There is no separate flow that syncs only the product catalog. The connector overrides certain fields in the product charges during deal sync.

| Product (HS) | Product (Z) | Product Rate Plan (Z) | Product Rate Plan Charge (Z) | Additional information |
| --- | --- | --- | --- | --- |
| name | name | name | name |  |
| description | description | description | description |  |
| SKU | SKU |  |  |  |
| id |  | ExternalPlanId |  |  |
| Billing Frequency |  |  | Billing period |  |
| Price |  |  | Price |  |
|  | Effective Start Date: 01/01/2000 Effective End Date: 01/01/3000 | Effective Start Date: 01/01/2000 Effective End Date: 01/01/3000 | Effective Start Date: 01/01/2000 Effective End Date: 01/01/3000 | Default setting |
|  |  |  | List price: 1/billing period | Default setting |
|  |  |  | UOM: Each | Default setting |
|  |  |  | Charge Model: Per unit Pricing | Default setting |
|  |  |  | Charge Type:If the Billing Frequency in HubSpot product is “One Time”, create a “One Time” charge in Zuora. Else create a “recurring” type charge in Zuora | HubSpot does not have complex charge models, so the connector does not support usage type charge models. |
| Currency |  | Currency |  |  |

Note:

These charges are created with default setting, but they are overridden in the subscriptions deal line item. The master of product catalog is always HubSpot.
