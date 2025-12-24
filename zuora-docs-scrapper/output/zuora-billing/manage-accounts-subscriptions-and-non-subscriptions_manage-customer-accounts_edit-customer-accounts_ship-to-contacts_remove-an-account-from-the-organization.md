---
title: "Remove an account from the organization"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/ship-to-contacts/remove-an-account-from-the-organization"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:51.920Z"
---

# Remove an account from the organization

This article explains how to remove an account from the organization.

When removing an account from the organization, you must transfer contacts from the organization to another organization if the contacts are being used by the accounts within the Customer Hierarchy.

For example, there are three organizations, A, B, and C.

-   B is the parent of C

-   A is the parent of B


If you are going to remove organization B, perform the following steps:

1.  Navigate to Customers > Customer Accounts in the left-hand navigation section and click the name of the specific customer account you want to update.
2.  Create a Ship To contact:
    1.  Scroll down to the Contacts section and click Create . The Create Contact dialog opens.
    2.  In the Allowed Contact Types section, select the Ship To checkbox. Only contacts with this checkbox selected can be specified as a Ship To contact.
    3.  Fill in the required information and click Save .
3.  In the Basic Information section on the account detail page, click Edit .
4.  From the Ship To list, select the contact you created in step 2.
5.  Click Save .
6.  Transfer B’s contacts to any of the other accounts, such as A or C, because these contacts are being used by the accounts within the Customer Hierarchy.
7.  Update B’s parent account to empty.
8.  Update C’s parent account to A.

Now you have organizations A and C.
