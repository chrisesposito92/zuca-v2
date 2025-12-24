---
title: "Merge Accounts"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/configuration/merge-accounts"
product: "zuora-platform"
scraped_at: "2025-12-24T18:35:01.852Z"
---

# Merge Accounts

Guides you through the process of merging accounts in Salesforce and ensuring synchronization with Zuora.

In Salesforce, after accounts are merged, the information in the accounts are integrated into one master account, and the other accounts are deleted. Take the following steps to propagate the changes to Zuora and keep Zuora and Salesforce in sync.

1.  In Zuora, identify the customer accounts linked to the merged Salesforce accounts. Replace the old CRM ID on those customer accounts with the CRM ID of the Salesforce master account. This will ensure that all existing and future Zuora records are synced to the correct Salesforce account.
2.  In Zuora, use Owner Transfer Amendments to re-assign all subscriptions' Account Owner and Invoice Owner to the main Zuora customer account. This will ensure that future invoices and payments are created under one customer account only.
3.  DO NOT DELETE the merged accounts in Zuora. Even though the merged accounts were deleted in Salesforce, existing invoices, payments, and payment methods will remain with those old customer accounts in Zuora.
