---
title: "Create a Customer Account"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/create-a-customer-account"
product: "zuora-billing"
scraped_at: "2026-01-15T21:55:38.830Z"
---

# Create a Customer Account

This task topic explains how to create a customer account in Zuora Billing, including entering detailed information, selecting payment methods, and organizing accounts in batches for efficient billing operations.

When you create an account, provide as much detail as possible so that you can bill correctly. Strive for accurate and consistent spelling of a corporate name if it is a company. Your billing customer database is only as good as the data being entered into the system.

CRM Account ID, Sales Rep, CSR, and Notes are some of the many the fields that can be used to map information between your web site, SFA (Salesforce Automation), or CRM (customer relationship management) software and Zuora Billing. If you do not enter an account number, Zuora Billing assigns an account number that is unique to the account.

You can organize your customer accounts in batches, such as Batch 1 for US-based customers, Batch 2 for EMEA, and Batch 3 for Asia. When you set up Billing Operations, this gives you the flexibility of running bill runs based on batches. You can also choose from a list of default payment methods, including both electronic and external payment methods.

1.  Navigate to Customers > Customer Accounts in the left-hand navigation section.
2.  Click add new account.
3.  Enter the [Basic Information and Contacts](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/basic-information-and-contacts-for-customer-accounts) for the account. You can add a maximum of 2000 contacts to an account. If you select the Same as Bill To Contact check box during account creation, both the Bill To and Sold To contacts are updated upon updating either one because they are pointing to the same contact record. In this case, if you want to update only one of them, you have to first create another contact and update the Bill To or Sold To contact of the customer account to be the newly created one. After creating the customer account, you can specify a Ship To contact, in addition to the Bill To and Sold To contacts, for the account. For more information, see [Specify ship-to contact](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/ship-to-contacts/specify-ship-to-contact-for-an-existing-customer).
4.  Optional: Select a Parent account if you want to create a hierarchy of customer accounts and use Zuora's enterprise billing features.
5.  Specify the Account Name and Bill To Contact First and Last Name . A valid e-mail address is required if you want to send an invoice by email. To ensure the validity of the email address, you must follow the standard format, and it must not contain zero-width characters. For example, the following entries are invalid for an email address: ‘tom@’, ‘tom@website’, ‘@website’, and ‘@website.com’. The contact record contains information that you will need to keep and use for billing. A contact is linked to a customer account.

    -   If you are using another system that uses a name match for integration (for example, QuickBooks for accounting), the Name for your account must match the name for the account in your other system. Accounting systems have the following character limits for account names:
        -   QuickBooks® Desktop: 41 characters or fewer
        -   QuickBooks® Online: 100 characters or fewer
        -   Intacct: 100 characters or fewer

6.  Enter the [Payment Method](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/payment-methods-for-customer-accounts). You can add a maximum of 100 payment methods to an account.
7.  Enter the [Billing and Payment Information](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/billing-and-payment-information-for-customer-accounts).
8.  Click Additional Fields to include more information about your customer account, such as:

    -   Account Number
    -   CRM Account ID
    -   Sales Rep
    -   CSR
    -   PO Number
    -   Billing Batch
    -   Invoice Template
    -   Sequence Set
    -   Allow Invoice Editing
    -   Invoice Delivery Preferences
    -   Additional Email Addresses
    -   Credit Memo Template (This feature is in Limited Availability .)
    -   Debit Memo Template (This feature is in Limited Availability .)

9.  Click save. The customer account is saved with an `active` status. You can create subscriptions for this account and start charging them for your products or services.

See SOAP API [Account](https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account) object.

See REST API [Create Account](https://docs.zuora.com/en/zuora-platform/integration/apis/rest-api/resource-codes-for-billing-and-payments-rest-api) method.
