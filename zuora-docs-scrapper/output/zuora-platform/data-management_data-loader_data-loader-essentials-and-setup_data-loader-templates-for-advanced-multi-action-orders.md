---
title: "Data Loader templates for advanced multi-action orders"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-templates-for-advanced-multi-action-orders"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:26.051Z"
---

# Data Loader templates for advanced multi-action orders

This article provides reference templates for common order scenarios in Data Loader, such as renewing subscriptions, removing products, creating subscriptions with multiple rate plans, and adding products with recurring charges.

## Sample Templates

If there have been modifications to the tenant's configuration such as the addition of new custom fields or changes to existing one it's recommended to download a fresh template directly from the target tenant. This ensures that your template reflects the most up-to-date field configurations, maintaining alignment between your data and the tenant's current setup

The Zuora Data Loader Advanced Multi-Action template supports flexible data migration by allowing users to customize the CSV file based on the specific operation being performed. Users may remove unnecessary columns and retain only those required for the import. However, all mandatory fields identified by an asterisk (\*) in the template must be included to ensure successful processing and to avoid validation errors.

Customized templates may be reused for subsequent data loads as long as the tenant field configuration remains unchanged. If the tenant configuration is updated (for example, new custom fields are added or existing fields are modified), a new template must be downloaded from the target tenant to ensure alignment with the current schema..

## Add Product with Recurring Flat Fee Charge

The file is used to add a product with a recurring flat fee override to an existing account using Zuora's Data Loader Advance Multi-Action Template.

| Column Name | Description |
| --- | --- |
| Trigger Dates Trigger Date | The specific date when the order action is triggered. |
| Trigger Dates Name | Defines when the order takes effect (e.g., ContractEffective). |
| Subscriptions Subscription Number | Specifies the existing subscription number if modifying. Required if not creating a new one. |
| Processing Options Run Billing | Boolean flag indicating if billing should be triggered. Optional. |
| Processing Options Collect Payment | Boolean flag indicating if payment should be collected. Optional. |
| Order Date* | The effective date for the order. Required. |
| Order Actions Change Reason | Optional explanation for the order action. |
| IsNewTriggerDate | Boolean value that specifies whether a new trigger condition is defined. |
| IsNewSubscription | Indicates whether a new subscription is being created. Should be True for the first row of a new subscription. |
| IsNewOrderAction | Boolean flag indicating if a new order action is being defined. Required for each distinct action. |
| IsNewOrder* | Indicates if a new order is being created. Required and should be True for the first line of each new order. |
| IsNewCharge | Indicates if a new charge override is being applied. Should be True for the first override line. |
| Existing Account Number* | The customer account number to which the order is being added. Required. |
| Description | Optional text describing the order. |
| Charge Type* | Defines the type of charge (e.g., recurringFlatFee). Required. |
| Charge Product Rate Plan Charge Id* | ID of the charge in the product rate plan. Required. |
| Charge List Price | Price override for the charge. Optional if using default pricing. |
| Category | Optional descriptive field to classify the order. |
| Action Type* | Defines the action type such as addProduct. Required. |
| Action Product Rate Plan Id | ID of the product rate plan being added. Required for product-related actions. |

Note:

-   Only required columns (marked with an asterisk \*) must be included to process the job successfully.
-   This file is a minimal and effective template for adding a product to an existing account and customizing the charge price using charge overrides.
-   Columns unrelated to this specific use case (e.g., order line items, discounts, usage charges) are intentionally removed for clarity and ease of use.

## Renew Subscription and Remove Product

This file appears to handle a use case involving subscription renewal and product removal within a single order using multiple order actions.

| Column Name | Description |
| --- | --- |
| IsNewOrder* | Required. Indicates whether a new order is being created (True for the first row of the order). |
| Existing Account Number* | Required. Specifies the Zuora account number to which the order will be applied. |
| Order Date* | Required. The effective date of the order. |
| Category, Description | Optional metadata fields for order classification and notes. |
| Processing Options Collect Payment, Processing Options Run Billing | Flags to control billing and payment during processing. |
| IsNewSubscription | Indicates whether a new subscription is being created (True) or not. In this case, it's a renewal, so it references an existing subscription. |
| Subscriptions Subscription Number | Required for actions on existing subscriptions, such as renewals or product removals. |
| IsNewOrderAction | Required. Indicates the beginning of a new order action. Multiple True entries imply multiple actions in the same order. |
| Order Actions Change Reason | Optional. Use this field to document the reason for the order action (e.g., business justification). |
| IsNewTriggerDate, Trigger Dates Name, Trigger Dates Trigger Date | These columns control when the order action is triggered. Typically ContractEffective for renewals. |
| Action Type* | Required. Type of action such as renewSubscription, removeProduct. |
| Action Product Rate Plan Id | Required for actions involving product manipulation (e.g., add/remove). |
| IsNewCharge, Charge Product Rate Plan Charge Id*, Charge Type*, Charge List Price | Optional. Relevant if you are overriding pricing for a product being added, not used here. |

Note:

-   The file uses multiple rows to define distinct order actions (renew and remove product) in a single order, which is efficient for complex order workflows.
-   Only necessary columns are retained, making the file clean and focused.
-   Charge override fields are unused, as this file is not adding or customizing charges.
-   Use this template when you want to renew an existing subscription and remove a product within the same order.
-   Make sure IsNewOrder is marked True only on the first row.
-   For each action (renew, removeProduct), set IsNewOrderAction to True and provide appropriate fields.
-   If custom fields or new rate plans are added to the tenant, download a fresh template to capture updated configurations.

## Create Subscription with Multiple Rate Plans

This file is used to create a subscription with multiple rate plans and charge configurations.

| Column Name | Description |
| --- | --- |
| IsNewOrder | Indicates the start of a new order. Only marked True for the first row of the order. |
| Existing Account Number* | Identifies the customer account in Zuora Billing. Required. |
| Order Date* | Date on which the order is placed. Required. |
| IsNewSubscription | Marks whether a new subscription is being created. |
| Action Type* | Specifies the action to be performed (e.g., createSubscription). Required. |
| IsNewOrderAction, Order Actions Change Reason | Indicates if a new order action is being defined in the current row. |
| IsNewRatePlanSubscribeToRatePlans | Marks the addition of a new rate plan under the subscription. |
| Action Subscribe To Rate Plans Product Rate Plan Id* | Identifies the product rate plan being added. Required when subscribing to rate plans |
| IsNewCharge | Indicates the start of a new charge being configured. |
| Charge Product Rate Plan Charge Id* | Identifies the specific charge within the product rate plan. Required. |
| Charge Type* | Specifies the charge type (e.g., recurringTiered, oneTimeFlatFee). |
| Charge Tier Number* | Used for tiered charges to specify the tier index. |
| Charge Tier Price* | The price for that tier |
| Charge Tier Starting Unit*, Charge Tier Ending Unit | Used in tiered pricing to define unit ranges. |
| Charge List Price | Price for flat fee or one-time charges |

Note:

This template is designed to:

-   Create a new order and subscription.
-   Add multiple rate plans under the subscription.
-   Configure both tiered and flat fee charges within the same subscription.

Each row continues a specific part of the order structure. By marking IsNewOrderAction, IsNewCharge, and other flags appropriately, this structure supports complex product setups

## Field Support Considerations

-   Data Loader supports the following fields:

| OrderAction | ArrayofObject | Fields |
| --- | --- | --- |
| AddProduct | ChargeOverrides | ratingPropertiesOverrideisProrateParticlaMonthprorationunitdaysInMonthaccountReceivableAccCode |
| AddProduct | ChargeOverrides>Pricing> recurringdeliverybased | recurringdeliverybasedpricechangeoptionpriceincreaseoptiondeliveryschedulelistpricepriceIntervals |
| Create Subscription, Owner Transfer, Terms and Conditions |  | PaymentProfilePayment GatewayIDPaymentMethodID |
| Create Subscription |  | newSubOwnerAccount billtocontact taxInfo soldtocontact |

Note:

-   Data Loader does not support credit card fields
-   Scheduling orders fields are not supported.

## Data Dictionary for Advance Multi-Action Orders

See [Advance Multi-Action Order Data Dictionary](/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/orders/advance-multi-action-orders) and the following sample CSV files with Data:

-   [Add Product with Recurring Flat Fee Charge - Advance Multi-Action Orders- Sample 1.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e8ac92ac-216b-4db5-9dee-7802cc29062d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU4YWM5MmFjLTIxNmItNGRiNS05ZGVlLTc4MDJjYzI5MDYyZCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiOWJjYjcxMjNmODQwNDk3OGJmNWM5ODNiNjdjYTZmN2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.dCV5KUBcf4jLWEXapsgEXP1KnqVRXZX0m1yK8THhcqo&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_1.csv%22)

-   [Renew Subscription and Remove Product - Advance Multi-Action Orders- Sample 2.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49379add-eab6-451b-970d-05cf72506958?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5Mzc5YWRkLWVhYjYtNDUxYi05NzBkLTA1Y2Y3MjUwNjk1OCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiOTcwZGVkZGZjODY0NDczMGI4YjhlZTRjYmZhMTE5NDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.m7jVEpPrE97tBZoTY-pJbrSZ2YODlgkCRXrdbMOaBm0&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_2.csv%22)

-   [Create Subscription with Multiple Charges - Advance Multi-Action Orders- Sample 3.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/489a2610-2ecc-4121-add5-c0f19ffa2d5c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4OWEyNjEwLTJlY2MtNDEyMS1hZGQ1LWMwZjE5ZmZhMmQ1YyIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiNDQ5Mzc0ZWUwMjMyNDhiOTliMjc1MDAzYzc5ZWRkZjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.rDeDKAisBhfPpnPxy1mpW0J0J8JdcBss7bkmnuZnEhU&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_3.csv%22)

-   [Create Subscription with Multiple Charges - Advance Multi-Action Orders- Sample 4.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69b5a0a0-37f7-4fa3-9fc9-816e057a3566?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5YjVhMGEwLTM3ZjctNGZhMy05ZmM5LTgxNmUwNTdhMzU2NiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiZWZlODI1NWM2NWJmNDY5MmJiZWRiMmFjYTJiMWFlN2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.TZtM9sCEtoVBFIjT2_g1VRPdRGM-D_6kthk0GkCGlUk&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_4.csv%22)

-   [Create Subscription with Multiple Rate Plans - Advance Multi-Action Orders- Sample 5.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/af7a73d5-5486-420c-bed6-00ca5bbd8af1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFmN2E3M2Q1LTU0ODYtNDIwYy1iZWQ2LTAwY2E1YmJkOGFmMSIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiMmJhZjM0YTcxNzdjNDZjZjllYTcxMzkwMmUyYWZlYmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.1Fih5lz00jZaHHBu3jgkBScpKsLxE60O7i5PitKEfjs&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_5.csv%22)
