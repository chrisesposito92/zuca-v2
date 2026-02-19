---
title: "Define payment terms"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/define-payment-terms"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:59.578Z"
---

# Define payment terms

Learn how to define payment terms for customers, including options for net and prox payment terms, and track changes using the Audit Trail.

Use the Define Payment Terms page to define when customers pay for their goods and services. It is common for such terms to be included in a customer’s license or services contract (the contract that governs the subscription).

No limit exists on the number of payment terms that can be created in a tenant.

The following payment term options are available:

-   Net Payment Term: For this option, the payment interval between the invoice date and the due date is a fixed number of days that you determine. The default payment term is Due Upon Receipt, which means the due date is the day the invoice is received.

-   Prox Payment Term: This option lets you define the day of the month for the invoice to be sent, the payment interval before the due date (in months), and the day of the month on which the due date occurs.


## Track Payment Terms Setting Changes Through Audit Trail

You can use Audit Trail to track changes on the Payment Terms setting. Use Data Query to run a report against the `auditsettingchangeevent` Audit Trail table to retrieve the records.

To retrieve the setting changes records, submit a data query through UI or API with the following SQL query:

SELECT username AS UpdatedBy, action AS Action, settingtype AS SettingType, attributename AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp, SettingObjectName FROM auditsettingchangeevent WHERE namespace <> 'UserManagement' AND settingtype = 'PaymentTerm' ORDER BY timestamp DESC LIMIT 100000
