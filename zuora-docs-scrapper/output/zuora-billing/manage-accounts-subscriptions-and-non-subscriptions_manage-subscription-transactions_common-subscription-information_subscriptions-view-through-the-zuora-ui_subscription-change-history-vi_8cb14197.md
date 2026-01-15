---
title: "View Versioned Subscription Change History"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-change-history-view/view-versioned-subscription-change-history"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:02.261Z"
---

# View Versioned Subscription Change History

This task topic explains how to view the change history of a subscription, including details on subscription versions and order actions.

When a change is made to a subscription (such as an Add product amendment and a Renew subscription order action), a new version of the subscription is created. The corresponding order action or amendment type of each subscription version indicates the change made to the subscription.

You can view the change history of a subscription on the subscription detail page.

You can also query the Subscription Status History data source, see [Query data through Subscription Status History data source](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/query-data-through-subscription-status-history-data-source).

To view the change history of a subscription:

1.  Navigate to Customers > Subscriptions in the left-hand navigation section.
2.  Select the subscription that you want to view the change history.
3.  In the Subscription detail screen, scroll to the Subscription change history area. You can see a table that lists the detailed change information for each version of the subscription.

Each row in the change history table stands for a subscription version. Based on the mode of your tenant: [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) (Orders and S/A co-existent), the table can contain corresponding columns that indicate the detailed change information.

For an Orders tenant, the Subscription change history table is like below:

![subscription_change_history_for_orders](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/65dd6675-8e19-4213-936c-b52c6c9461a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1ZGQ2Njc1LThlMTktNDIxMy05MzZjLWI1MmM2Yzk0NjFhNiIsImV4cCI6MTc2ODYwMDU1NiwianRpIjoiZDU4NDNjODk4YzZhNDEwYmE4ZTk2MWExZGRlNjEwMTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.E5_vWyIMkLGzJRapJn4NUEESOzJ2oGw7oTC0d0uf2x4)

It contains the following columns:

-   Version: Identifies a certain version of the subscription.
-   Order Number: Identifies the order that contributes to this version of the subscription. This column is present in Orders tenants or co-existent tenants.
-   Order Action: The order actions that have impacted the subscription and taken place in a particular order. If multiple order actions are present in this column, you can click the plus icon (+) in the Version column to display a list of the order actions. At most five order actions can be displayed.
-   Order Details: The detailed change information tagged for each order action in the order.
-   Created By
-   Created On
-   Order Date
-   Contract Effective
-   Service Activation: This column is present if [Zuora is configured to require service](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/set-default-subscription-and-order-settings) activation.
-   Customer Acceptance: This column is present if Zuora is configured to require customer acceptance.

For an [Orders Harmonization](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/set-default-subscription-and-order-settings) (Orders and S/A co-existent) tenant, the table is like below:

![subscription_change_history_for_orders_hamonization](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec171007-70fb-43cf-92f4-6a49a34cba39?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjMTcxMDA3LTcwZmItNDNjZi05MmY0LTZhNDlhMzRjYmEzOSIsImV4cCI6MTc2ODYwMDU1NiwianRpIjoiYTg5Y2IxNDVlOGY4NGMwYmI4YjIwODllY2ZiNzY5MzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.ufgCW97eDIe2ufBa1teGR048ZVVr1DmIVln3F2Bn_1Q)

It contains the following columns:

-   Version: Identifies a certain version of the subscription.
-   Order Number: Identifies the order that contributes to this version of the subscription. This column is present in Orders tenants or co-existent tenants.
-   Amendment Number: Identifies the amendment that contributes to this version of the subscription. This column is present in S/A tenants or co-existent tenants.
-   Action: The order actions that have impacted the subscription and taken place in a particular order. If multiple order actions are present in this column, you can click the plus icon (+) in the Version column to display a list of the order actions. At most five order actions can be displayed.
-   Details: The detailed change information tagged for each order action in the order.
-   Created By
-   Created On
-   Order Date
-   Contract Effective
-   Service Activation : This column is present if [Zuora is configured to require service](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/set-default-subscription-and-order-settings).

-   Customer Acceptance: This column is present if Zuora is configured to require customer acceptance.

For a Subscribe/Amend tenant, the Subscription change history table is like below:

![subscription_change_history_for_subscribe_and_amend](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e562677c-7133-42ed-bca7-0ff55120959f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU1NjI2NzdjLTcxMzMtNDJlZC1iY2E3LTBmZjU1MTIwOTU5ZiIsImV4cCI6MTc2ODYwMDU1NiwianRpIjoiODkxOWMxMzY0YmM5NDZlZmEzZjk3ZGFiNzUxZGQ3ZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.-PorMY6LFLTE6Hk7tW4AmYUWWi7OzJfFHlylohesRX8)

It contains the following columns:

-   Version: Identifies a certain version of the subscription.
-   Amendment Number: Identifies the amendment that contributes to this version of the subscription. This column is present in S/A tenants or co-existent tenants.
-   Amendment Type
-   Details: The detailed change information tagged for each amendment.
-   Created By
-   Created On
-   Booking Date: The last booking date of the subscription.
-   Contract Effective
-   Service Activation: This column is present if Zuora is configured to require service activation.

-   Customer Acceptance: This column is present if Zuora is configured to require customer acceptance.
