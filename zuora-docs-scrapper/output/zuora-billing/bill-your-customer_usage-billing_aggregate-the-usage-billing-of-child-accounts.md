---
title: "Aggregate the usage billing of child accounts"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/aggregate-the-usage-billing-of-child-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:31.935Z"
---

# Aggregate the usage billing of child accounts

This feature aggregates usage records from child accounts and bills them through the parent account, requiring a matching unit of measure in the parent account's subscription.

This feature collects the usage records from child accounts and applies them to the parent account. The parent account must contain a subscription with a matching unit of measure (UOM). All of the usage records are rated and billed from the parent account, even if you have set the child account as the invoice owner.

Sample use case:

1.  A parent account subscribes to a service and maintains the subscription in its account.
2.  All of the child accounts use the service, and the usage records contain the account identification of the child accounts.
3.  Zuora links the usage records from the child account to the parent account that contains a subscription with a matching UOM. Zuora rates and bills the usage records from the parent account.

If the account in the example contains more than one subscription with a matching UOM, the usage records will be rated in all of the subscriptions as if the usage records were uploaded against the parent account. Click your username at the top right and navigate to Billing > Define Billing Rules, and enable the Include usage from child accounts when billing? setting.
