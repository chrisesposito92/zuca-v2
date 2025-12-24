---
title: "Email credit memos automatically upon posting bill run"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/download-or-email-memo-documents/email-credit-memos-automatically-upon-posting-bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:14.806Z"
---

# Email credit memos automatically upon posting bill run

Learn how to email credit memos automatically upon posting bill run

If credit memos are generated during the bill run, you can set to email the credit memos upon posting.

You must configure the following settings to enable emailing credit memo PDFs automatically upon posting bill run.

1.  Configure the customer account setting.
    1.  Navigate to Customers > Customer Accounts in the navigation section.
    2.  On the All Customer Accounts page, click the customer account that the credit memo belongs to.
    3.  On the customer account detail page, select the Email check box in the Invoice Delivery Preferences field.
    4.  Click Edit in the Key Contacts section of the Bill To contact.
    5.  Specify the work email address on the Edit Contact page.
2.  Configure the notification setting.
    1.  Navigate to Extension Studio > Events & Notifications in the left navigation menu.
    2.  Locate the Credit Memo Posted within a Bill Run of Auto-Post notification defined on the Credit Memo Posted event and click the Edit icon ![icon-edit-gray.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e1f025d-0818-475a-998e-aeb6e880baa6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMWYwMjVkLTA4MTgtNDc1YS05OThlLWFlYjZlODgwYmFhNiIsImV4cCI6MTc2NjY1MTcxMywianRpIjoiNzhhNWY3MTRiYjJhNDM5NGI5MjdmNTA2NTlhNzY0NjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jY-e9MbHHdwrhAhpWbs_efFedPqhfoRwQ4XJf57dYc8) .
    3.  Select the Email check box and the Include Credit Memo PDF check box in the Delivery Options section.
    4.  Click Save.
3.  Click your username at the top right corner and navigate to Billing > Define Billing Rules.
4.  Set the Support Bill Run Auto-Post? billing rule to Yes.
5.  When creating a bill run, select the following checkboxes in the Processing Rules section.

    -   Auto-Post documents upon completion of Bill Run

    -   Email documents after Auto-Post is complete
