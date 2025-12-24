---
title: "Customer accounts cancelation and Deletion"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/customer-accounts-cancelation-and-deletion"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:19.697Z"
---

# Customer accounts cancelation and Deletion

This document provides guidelines for canceling and deleting customer accounts, including conditions and exceptions for account deletion.

If a customer cancels their subscription and is no longer billed for services, the customer account can be canceled. A customer account can be set to cancelled status only after all subscriptions have been canceled. A customer account that has been canceled can be re-activated if needed.

## Notes

-   For account deletion, the system will start a backend job to remove all transactions under the accounts and change the status of the accounts to Canceled. This backend job is asynchronous and will take some time, depending on the job size.
-   An account cannot be deleted when both of the following conditions are met:
    Note: An exception to this limitation above is if the Enable force deletion for Account? setting is set to Yes , you can force delete an account that is the subscription owner of a subscription while the invoice owner is a different account. Force deleting this account deletes all its subscriptions, but the relevant invoices will not be impacted
    -   The account is either the invoice owner of a subscription or the subscription owner.
    -   The subscription's invoice owner and subscription owner are two different accounts.
-   An account cannot be deleted if this account has been involved in an Owner Transfer amendment, either as the current owner or as the previous owner.
