---
title: "NetSuite custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/netsuite-connector-custom-fields/netsuite-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:01.206Z"
---

# NetSuite custom fields

The fields that are added automatically to NetSuite through the NetsSuite (Managed) Bundle

This reference lists the fields that are added automatically to NetSuite through the NetsSuite (Managed) Bundle.

## Using the fields in custom forms

You can add the custom fields to your own Entity and Transaction custom forms in NetSuite. If you choose to use the standard form or your own custom form, note the following:

-   You are responsible for the sequence of the Zuora custom fields on the Zuora subtab.

-   The Zuora custom fields must be displayed on your preferred form.


Additionally, some key custom fields come preconfigured with the edit permission restricted to the Administrator role. If you wish to use a different or custom role for the NetSuite Connector integration user, be sure to modify the access permissions accordingly to allow the different role to be able to modify the field values. The custom field access permissions can be found within NetSuite under Setup > Customization > Entity/Item/Transaction Body/Transaction Column Fields > edit field > Access tab.

## Item fields

| Field | Type |
| --- | --- |
| Zuora Charge Model | Text |
| Zuora Charge Type | Text |
| Zuora Created Date | Text |
| Zuora ID | Text |
| Zuora Product Name | Text |
| Zuora Product Rate Plan Charge Name | Text |
| Zuora Product Rate Plan Name | Text |
| Zuora Sync Date | Text |
| Zuora Tax Code | Text |
| Zuora Taxable | Boolean |
| Zuora Type | Text, but values will be PRODUCT, RATEPLAN, or CHARGE |

## Customer (Entity) fields

| Field | Type | Note |
| --- | --- | --- |
| Zuora Account MRR | Text |  |
| Zuora Auto Pay | Boolean | Allow editing without Administrator role. |
| Zuora Batch | Picklist: Batch1-Batch20 | Allow editing without Administrator role. |
| Zuora Bill Cycle Day | Picklist: 1-31 | Allow editing without Administrator role. |
| Zuora Bill To ID | Text |  |
| Zuora Bill To Tax Region | Text | Allow editing without Administrator role. |
| Zuora Bill To Work Email | Text | Allow editing without Administrator role. |
| Zuora Created Date | Text |  |
| Zuora CRM ID | Text | Allow editing without Administrator role. |
| Zuora Customer Service Rep Name | Text | Allow editing without Administrator role. |
| Zuora Default Payment Method | Text | Allow editing without Administrator role. |
| Zuora ID | Text |  |
| Zuora Purchase Order Number | Text | Allow editing without Administrator role. |
| Zuora Sales Rep | Text | Allow editing without Administrator role. |
| Zuora Sold To ID | Text |  |
| Zuora Sold To Work Email | Text | Allow editing without Administrator role. |
| Zuora Sync Date | Text |  |
| Zuora Tax Exempt Certificate ID | Text | Allow editing without Administrator role. |
| Zuora Tax Exempt Status | Text | Allow editing without Administrator role. |
| Zuora Updated Date | Text |  |

## Transaction (Header) fields

The next four sections list the Transaction (Header) fields.

## Common

| Field | Type |
| --- | --- |
| Zuora Created Date | Text |
| Zuora Customer ID (Payment) | Text |
| Zuora Customer ID (Sales) | Text |
| Zuora ID | Text |
| Zuora Integration Status | Text |
| Zuora Origin | Text. For example: NETSUITE or ZUORA |
| Zuora Reference Number | Text |
| Zuora Related Reference Number | Text |
| Zuora Related Transaction | RecordRef |
| Zuora Sync Date | Text |
| Zuora Type | Text |
| Zuora Updated Date | Text |

## Invoice/Credit Memo only

| Field | Type |
| --- | --- |
| Zuora Amount Without Tax | Text |
| Zuora Last Email Sent Date | Text |
| Zuora Posted Date | Text |
| Zuora Target Date | Text |
| Zuora Tax Amount | Text |
| Zuora Tax Exempt Amount | Text |

## Customer Payment only

| Field | Type |
| --- | --- |
| Zuora Payment Type | Text |
| Zuora Credit Card Type | Text |
| Zuora Payment Reference ID | Text |

## Customer Refund only

| Field | Type |
| --- | --- |
| Zuora Refund Reference ID | Text |
| Zuora Refund Type | Text |

## Transaction Column (Line) Fields: Invoice, Credit Memo

| Field | Type |
| --- | --- |
| Zuora Charge Date | Text |
| Zuora ID | Text |
| Zuora Item ID | Text, source from Item master, no override |
| Zuora Reference Number | Text |
| Zuora Service End Date | Text |
| Zuora Service Start Date | Text |
| Zuora Subscription Notes | Text |
| Zuora Subscription Number | Text |
| Zuora Sync Date | Text |
| Zuora Tax Rate | Text |
| Zuora Tax Rate Description | Text |
| Zuora Type | Text |

## Notes

-   If the sync is from NetSuite to Zuora, the account in NetSuite cannot have more than 80 contacts.

-   Custom lists permission is mandatory as well on the Netsuite side.
