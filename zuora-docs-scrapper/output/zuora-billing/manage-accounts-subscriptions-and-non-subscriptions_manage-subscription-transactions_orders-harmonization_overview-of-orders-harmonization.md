---
title: "Overview of Orders Harmonization"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:53.137Z"
---

# Overview of Orders Harmonization

This topic explains about Orders Harmonization, a feature that allows seamless integration of Orders with existing Subscribe and Amend functionalities in Zuora Billing.

This article introduces Orders Harmonization.

## What is Orders Harmonization?

Orders Harmonization is Orders in Harmonization mode, a path that allows Subscribe and Amend customers to adopt the Orders feature seamlessly and move to a modern architecture.

With Orders Harmonization enabled, you can access both Orders and existing Subscribe and Amend functionalities. This enables you to do the following:

-   Use the Orders UI and API to create and manage subscriptions.

-   Access new Zuora Billing features that require Orders.

-   Continue using the Subscribe and Amend REST and SOAP API to create and manage subscriptions.


## Enable Orders Harmonization

We recommend that all existing Zuora Billing Subscribe and Amend customers enable Orders Harmonization. Enabling Orders Harmonization does not impact your existing Subscribe and Amend API integrations or system functions.

Subscribe and Amend customers can enable Orders Harmonization through the self-service interface. See Feature Management.

For new Zuora Billing customers, Orders is enabled in your tenant by default. You cannot enable Orders Harmonization in this case.

## Best practices after enabling Orders Harmonization

Once Orders Harmonization is enabled, your tenant is in Orders Harmonization mode, with access to Orders and all features that require Orders. We recommend the following best practices:

-   Start using the Orders UI and API for ongoing transactions, and gradually phase out the transactions and traffic using Subscribe and Amend.

-   Keep the tenant in Orders Harmonization mode and do not re-enable Orders. Orders without Harmonization mode not only removes the access to Subscribe and Amend, but also requires you to make necessary integration changes, migrate historical amendment data, and test your use cases.


## How to tell whether harmonization is enabled?

If Orders Harmonization is enabled, you can see one of the following scenarios on your tenant:

-   When Orders Harmonization is enabled and the Subscribe and Amend UI is still in use, you can see a setting called Enable Order UI? in Billing Settings > Define Default Subscription and Order Settings of the UI.

-   When Orders Harmonization is enabled and the Orders UI is enabled, in addition to the preceding Enable Order UI? setting, you can also see both Amendments and Orders under the Customers tab in the left navigation menu.

    | Orders Harmonization Tenants with Subscribe and Amend UI in Use | Orders Harmonization Tenants with Orders UI Enabled |
    | --- | --- |
    |  |  |


## How does it work?

The following diagrams illustrate the API behavior mappings in the co-existence model of Orders with Subscribe and Amend:

-   For every subscription or amendment that you create using Subscribe and Amend APIs, an equivalent order is automatically generated in the system. This order has the change you make recorded on an order action. Note that if Orders Harmonization is enabled as of or after Zuora Release 2022.09.R2, the generation of the equivalent order for a subscription creation will be skipped by default. If you want to generate an equivalent order when creating a subscription using the Subscribe and Amend UI or API, configure the Skip amendment generation by subscribe setting to No . ![2023 Orders Harmonization Coexist Model - S_A part](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8ed6bbf1-7404-405c-8444-9cc94133b6f5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlZDZiYmYxLTc0MDQtNDA1Yy04NDQ0LTljYzk0MTMzYjZmNSIsImV4cCI6MTc3MTU1NzE2OCwianRpIjoiODE5Y2I5MTJhNGU2NGU3MGIyODczMWU3ZmUwODA2MGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.eynC-_gUhYtH7aRpWgr7_qXlN5ieTp8Wh5sVcp70Qrg)

-   For every order that you create using Orders API or Orders UI, an amendment is automatically generated in the system. The type of the amendment is "Composite" or the actual order action type, based on the rule below: ![2023 Orders Harmonization Coexist Model - Orders part](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6dc33c5a-bae7-4190-8c77-67104bc584ca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZkYzMzYzVhLWJhZTctNDE5MC04Yzc3LTY3MTA0YmM1ODRjYSIsImV4cCI6MTc3MTU1NzE2OCwianRpIjoiNjI2NWYzODYwZmQxNDk5YWFiMGNmMDkzOTU0NzRiY2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.W9PO4kcclqzJOXNQoffOZZaLn9CxDRnSJv4fAsjQw-U)

    -   If you create an order with multiple order actions, an amendment of type "Composite" is created. The Composite amendment is a subscription-level amendment that is used as a placeholder to bridge subscription versions.

    -   If you create an order with only one single order action of the type "Create subscription", an amendment of type "Composite" is created. The Composite amendment is a subscription-level amendment that is used as a placeholder to bridge subscription versions.

    -   If you create an order with only one single order action of a type other than "Create subscription", an amendment of the actual order action type is created to provide more useful information for business analysis.
