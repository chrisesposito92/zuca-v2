---
title: "Zuora Billing UI (Orders UI)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/zuora-billing-ui-orders-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:24.344Z"
---

# Zuora Billing UI (Orders UI)

This article outlines the behavior changes in the Zuora Billing UI when the Orders UI is enabled, including the transition from subscription amendments to orders and the introduction of an Orders tab.

The following table lists the behavior changes you will see when the Orders UI is enabled:

| Before Orders Harmonization | Orders Harmonization |
| --- | --- |
| Create subscriptions from the Accounts or Subscriptions page in the Zuora Billing UI.Create subscription amendments from the Amendments page or subscription details page in the Zuora Billing UI. | From the All Subscriptions page and All Amendments page, there are no add new subscription and create new amendment buttons. They are replaced with the create new order button, which means you cannot edit subscriptions through amendments. You are encouraged to use Orders to perform the operations.In addition, you will see an Orders tab. See Orders Tutorials on creating and managing subscriptions using Orders UI.Customers can create orders from the Subscription list view. This option is available for all the Orders and Orders Harmonization customers. |
| Multiple subscription versions are generated if you create multiple amendments to the same subscription. Zuora generates a new subscription version for each subscription amendment.You can view the subscription version history in the Version part of the subscription details page. The Amendment numbers are displayed in the version history. | If you create an order with multiple changes to the same subscription, only one subscription version is generated. You will see Orders instead of Amendments in Subscription versions. |
| On the account details page, you can see all the relevant subscriptions and the corresponding amendments. | In addition to the existing subscription and amendment tabs, an Orders tab is also available on the account details page to display all the transactions that occurred for that account. |
| In the Subscription History Change section of the Subscription details page, you can see the change history of a subscription through amendments. | In the Subscription History Change section of the Subscription details page, you can see the change history of a subscription through both orders and amendments. See Viewing Subscription Change History . |
