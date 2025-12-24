---
title: "Basic concepts and terms of Multi-Org"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/basic-concepts-and-terms-of-multi-org"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:31.156Z"
---

# Basic concepts and terms of Multi-Org

This article provides the essential concepts and terms of Zuora Multi-Org and the Org Context Switcher functionality.

Before you start with Zuora Multi-Org, understanding some basic concepts and essential terms is recommended to help you make better choices or decisions while interacting with it.

## Company

This is the root of your organizational hierarchy and also a root Org Unit. This is the only location where your org admin can define the Reporting Currency.

## Tenant

A tenant can be any Zuora tenant in any environment or type. Your organization can have different tenants, like development, testing, and production. Zuora Multi-Org shall be available in your Central SBX and Production environments

## Organizational Hierarchy (Org hierarchy)

The org hierarchy represents the grouping of an organization based on geo-location, products or target markets. These groups together make up your business.

## Org Unit

An Org Unit is a child of the parent company (root). An Org Unit can be a branch with additional child Org Units defined under it or a leaf with no children under it. For example, Western Europe and Central Europe are branch-level Org Units and Austria, Germany, France, and Spain are leaf-level Org Units.

## Org Context Switcher

The Org Context Switcher is a UI widget that lists all the Org Units created in the Multi-Org hierarchy. After you log in from the Zuora UI, you can switch context between the Org Units that you have permission to access using the Org Context Switcher.

![Org context switcher home page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/59e29bbc-90c0-4380-8362-c891c75ee6a3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU5ZTI5YmJjLTkwYzAtNDM4MC04MzYyLWM4OTFjNzVlZTZhMyIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiMThkNGZmY2M2ZmJlNDVhNDlkN2U2YTZmNWM2NjllYTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9ShQpDmCjz8aIQppXvC6N8FCQQeUNmBpgKmKLSbtv_M)

The Org Context Switcher is on the upper right of the page, next to your login username. When you click the current org display name, the Multi-Org hierarchy is displayed. You can click the checkbox against the Org Unit display name from the org context switcher to set the scope of accessible orgs. You can select one or more Org Units to view data, based on your permission to access. Also, you can search for an Org Unit by its display name in the search organizations field. The Org Units that you do not have permission to access will be unselectable. For example, if the user is granted access to the leaf org only (Acme UK), in the org context switcher, the branch orgs will still show up, but the user won't be able to select them.

While a default Org Unit is assigned to each user at the time of user creation/definition, the user can change their default Org Unit upon first login in accordance with their personalization requirements.

![Default org selector](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/de6eb2ef-1750-40f9-80a9-ff726dee3b63?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRlNmViMmVmLTE3NTAtNDBmOS04MGE5LWZmNzI2ZGVlM2I2MyIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiZjBiMGZmMmVlNzhlNDgwMmEwNjMwMGI2YzQyMzBmYjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q7mCDG5fG1X1hqwWdflzBu362yz14XT6EN8ywtV59MY)

How to use the Org Context Switcher?

The Org Switcher is primarily used to define the working context by org(s). i.e. You can use the Org Context Switcher to filter out the various Org Units and access the objects that are in context within the selected Org units. The working context can be one of the following scenarios:

1.  List Page - The list page of each of the objects including the Customer Accounts, Products, etc., enlists only those objects that are accessible in the current org context. For example, when Acme France and Acme Spain are selected in the Org Context Switcher, the Customer Accounts list page will show the list of all the customer accounts that belong only to one of these two Org Units.

    ![Customer account list page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/46249215-b89f-4926-8bde-21537e82645a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ2MjQ5MjE1LWI4OWYtNDkyNi04YmRlLTIxNTM3ZTgyNjQ1YSIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiOTI3Nzc5NjIxOTE2NDc5NzgzNTkxZWU5OGMzMDk1MmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.U0Gp3jTepkmFWhS0hysmE-ahEKv156QTmKxTdR0pD4k)

2.  Assign org label to an object - When you create or edit objects like Customer Accounts or Products, you need to explicitly label the org(s) that need to be associated with that object. This can be done using the Org Picker. The Org Picker will show a sub-tree of the org hierarchy in which only the org(s) that you have selected using the Org Context Switcher are selectable. For example, while creating a Product in the Product Catalog, you must specify all the org units to which you wish to make the product available. In the Org Picker dropdown in the New Product Creation page, you are only able to select the org units that you have selected in the Org Context Switcher. You can select the org unit(s) from this list to make the product available to those org units.

    ![Select org units](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fd435a03-bacb-4bef-b983-b7c21748db9b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkNDM1YTAzLWJhY2ItNGJlZi1iOTgzLWI3YzIxNzQ4ZGI5YiIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiYTFmOTRlYjNlYTM1NDcwZTlmM2Y0NTMyOGMyNzc3Y2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.XHd4TrbGosyec5QcIA_NGiBBBVeN2CIT3q1C74r1w0g)

    ![Org selection result](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0082ccf9-d9d0-4939-ac4f-ac1b620d954a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAwODJjY2Y5LWQ5ZDAtNDkzOS1hYzRmLWFjMWI2MjBkOTU0YSIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiNTcwZjZiMTE2MzkwNDU5YzlkMWM4M2MyMjEyMjllOTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EAM0WAf7WkVwqMilQyRTM797otEJt2van6_NQ6yY-xk)


## Org Picker

Almost similar to the Org Context Switcher, the Org Picker appears on the Billing UI across each and every Billing capability and permits you to select one or more Org Units from the Org Picker, where applicable. For example, when you are creating a customer account, a customer account can be assigned to one and only one Org Unit, whereas at the time of user creation, a user can be assigned to one or more Org Units from the org picker.

![Org picker UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/030a076c-486d-4d54-99d8-b3b91aa4c43f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAzMGEwNzZjLTQ4NmQtNGQ1NC05OWQ4LWIzYjkxYWE0YzQzZiIsImV4cCI6MTc2NjYzOTkwOCwianRpIjoiNjQ2YmY4NTQzZWNlNGM0MWE3MDFlNmI4OTE1MTM2ZjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-h7ulNg85N1XeA-_JGrJ07NP5i1MvNiY9qEF51smmS8)

## User Access in Multi-Org Across One or Multiple Org Units Edit Section

This currency is used to create financial reports including corporate roll-up reporting for Multi-Org business. The Reporting Currency is defined at the root level and inherited by the child org units. The child org units cannot change or override their reporting currency. Your business can have only one reporting currency.

## Reporting Currency

This currency is used to create financial reports including corporate roll-up reporting for Multi-Org business. The Reporting Currency is defined at the root level and inherited by the child org units. The child org units cannot change or override their reporting currency. Your business can have only one reporting currency.

## Functional Currency

This currency is used by each org unit for their financial reporting. Each org unit in the org hierarchy can define a different functional currency. Once set, the functional currency cannot be changed. The exchange rate settings will be configured at the root level while creating your organization's tenant and inherited by the child org units.

## Transaction Currency

This currency is used in the product catalog and by the customer account. It is inherited from the product rate plan charge and remains the same for different Zuora processes including Invoice, Payment, Credit, and Debit memos. As an exception, Transaction APIs will allow the creation of transactions in a currency different from the billing account or product rate plan charge. In such cases, the transaction currency will be the currency in which the transactions are created via the API.
