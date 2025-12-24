---
title: "Customer accounts import"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/import-customer-accounts/customer-accounts-import"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:32.652Z"
---

# Customer accounts import

This topic explains how to import customer accounts into the Zuora system using a CSV file, including required column headers and field specifications.

If you already have a list of your customers from another database (for example, Salesforce.com, Excel, QuickBooks, or another source), you can quickly enter data in Zuora system by importing all your customer accounts as a CSV file.

## Required Column Headers

When you import a file, the first row (cell A horizontal) must have a specific set of headers.

The column headers for customer accounts, contacts, and payment methods are listed below.

## Customer Accounts

The following headers are available when you import the customer account information. The headers in bold are required and must have values provided. Also, see here for the required fields. Other headers are optional.

-   Id : Auto-generated 32-character ID for the account, not the account number. Example: `aa1010101d1cf385011d21d4b44d00a0` As this field is auto-generated, you do not need to provide any value for this required field.

-   Customer Name

-   Account Number: Unique number assigned to the account. If configured in Zuora, can be auto-generated and prefixed. Example: `CA00001122`

-   Sold To: If you do not want to update the value of the Sold To contact, do not include this column in the import file.

-   Bill To: If you do not want to update the value of the Bill To contact, do not include this column in the import file.

-   CRM Account ID

-   Auto-Pay

-   Default Payment Method: If you do not want to update the value of the Default Payment Method, do not include this column in the import file.

-   Payment Term

-   PO Number

-   Allow Invoice Editing

-   Batch

-   Bill Cycle Day : To set the bill cycle day automatically, specify `Auto-set` (case-sensitive) in this column. See Auto-set Option for more information.

-   Invoice Delivery By Email

-   Invoice Delivery By Print

-   Account Balance

-   Currency

-   Status

-   Description

-   Created By

-   Updated By

-   Created On

-   Updated On

-   Sales Rep

-   CSR

-   Last Invoiced

-   Notes

-   Custom Field

-   Required Custom Field


For Customer Accounts, the following fields are required fields:

-   Id

-   Customer Name

-   Bill Cycle Day

-   Required Custom Field


## Customer Contacts

The following headers are available when you import the customer contact information. The headers in bold are required and must have values provided. Also, see here for the required fields. Other headers are optional.

-   Id

-   First Name

-   Last Name

-   Nick Name

-   Work Email

-   Personal Email

-   Work Phone

-   Mobile Phone

-   Home Phone

-   Other Phone

-   Other Phone Type

-   Fax

-   Country

-   Address 1

-   Address 2

-   City

-   State/Province

-   Postal Code

-   Customer Account

-   Created By

-   Updated By

-   Created On

-   Updated On

-   Is Bill To

-   Is Sold To

-   County

-   Tax Region

-   Description


Note:

-   The customer account must have a unique name, that is, the combination of the first name and the last name. If a customer already has a contact with that name, subsequent contact records with the same name are rejected as duplicates even if other column values are different. When duplicates occur, the message saying "Contact already exists with this name <first+' '+last>. Are you sure you want to save?" is displayed. This message is only informational. If multiple contacts are rejected during the import, the message might appear multiple times in the result. To solve this problem, the indicated contacts must be manually entered, created with the SOAP contact object, or imported again after you can change the names to avoid collisions. It is highly recommended to check for duplicated names before you import the file of contacts.

-   The Customer Account is the account ID of the customer. This column is required to import the contact information. To obtain the appropriate customer account IDs for contacts, export the customer accounts that you previously imported by clicking Export Customer Accounts. In the exported CSV file, do a lookup to combine the contacts with the customer account IDs.

-   (Zuora Tax users only) Although the country column is not required by the import, using Zuora Tax requires that sold-to contacts must include a country and a state or province, if the country is USA or Canada.


For Customer Contacts, the following fields are required fields:

-   First Name

-   Last Name

-   Customer Account


## Payment Method

The following headers are available when you import the customer contact information. The headers in bold are required and must have values provided. Also, see here for the required fields. Other headers are optional.

-   Id

-   Customer Account

-   Payment Method Type

-   Credit Card Type

-   Credit Card Number

-   Bank Identification Number

-   Expiration Year

-   Expiration Month

-   Credit Card Holder Name

-   Credit Card Address1

-   Credit Card Address2

-   Credit Card Country

-   Credit Card State

-   Credit Card City

-   Credit Card Postal Code

-   Last Transaction

-   Last Transaction Time

-   Created By

-   Updated By

-   Created On

-   Updated On

-   Is Default

-   Consecutive Failed Payments

-   Status

-   Email

-   Phone


For Payment Method, the following fields are required fields:

-   Customer Account

-   Payment Method Type
