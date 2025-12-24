---
title: "Billing - Revenue Integration infrastructure overview"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration-infrastructure-overview_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:13.071Z"
---

# Billing - Revenue Integration infrastructure overview

Zuora Billing data is synced to Pre-staging tables, transformed into transaction lines for Staging, and then processed through the Data Collection job in Zuora Revenue.

The following diagram demonstrates the architecture of Zuora Billing - Revenue Integration. First, Zuora Billing object data need to be synced to Zuora Revenue Pre-staging tables without any processing. Then, data in the Pre-staging tables must be transformed into transaction lines that can be consumed by Zuora Revenue and loaded to the Staging tables. After that, the Data Collection job can be started for further revenue processing within Zuora Revenue.

![K2-overview-new.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c9d36444-1855-4c0f-bb19-ce3a125e23a9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM5ZDM2NDQ0LTE4NTUtNGMwZi1iYjE5LWNlM2ExMjVlMjNhOSIsImV4cCI6MTc2NjYzNzYxMSwianRpIjoiMzc2ZDA1Njg4ZDg1NDlmNDk4YWI5YjZiYjQ1ZTUxMmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RxRlyOwFbPO1dkXnOc3uTZ83FoRvB1fpb9wjdeXk4aU)

## Revenue Sync

During the Revenue Sync phase, Billing data goes through two layers from Zuora Billing to Zuora Revenue Pre-staging tables and then to Staging tables. The first layer is the Data Sync layer where the Billing data is saved to Zuora Revenue Pre-staging tables without any processing. The second layer is the Data Transformation layer where the Billing object data is transformed into Zuora Revenue transaction line data and saved to Staging tables.

## Data Sync layer

On the Data Sync layer, the following things happen in sequence:

1.  The data source objects are exported from Zuora Billing by using the Data Source API and AQuA API.
2.  The object data is imported into Zuora Revenue Pre-staging tables without processing.

## Export data source objects

Zuora Billing data source objects can be categorized into two groups:

-   State object: the object that records the current state of the information. All data on a State object will be synced into its corresponding RevPro Pre-Staging table.
-   Transaction object: the object that records an action or a snapshot in the system history. For a specified date range, a data source record will be synced if the updated timestamp falls within the specified date range.

The following table summarizes all the extracted Zuora Billing objects, their corresponding type, and Data Sync actions:

| Zuora Billing object | Object type | Data Sync action |
| --- | --- | --- |
| AccountAccounting CodeContactContactSnapshotProductProduct Rate PlanProduct Rate Plan ChargeProduct Rate Plan Charge Tier | State | Syncs all data into corresponding Pre-Staging tables in Zuora Revenue |
| AmendmentInvoice ItemInvoiceInvoice Item AdjustmentRate Plan ChargeRate PlanRate Plan Charge TierSubscriptionOrderOrder ActionCredit MemoCredit Memo ItemDebit MemoDebit Memo ItemCredit Balance Adjustment | Transaction | Only syncs data created or updated within the specified date range |

Note that each data object is synced separately.

## Import object data

The exported Zuora Billing object data is imported into Zuora Revenue Pre-staging tables without processing. Each object has its own specific Pre-staging table to save the synced data. For example, the Invoice object data is synced to the RPRO\_DS\_INVOICE\_G table.

Custom fields are also mapped into the corresponding table of their parent objects. However, custom field names in the synchronization destination table are normalized to a range from CF\_1 to CF\_50. Billing - Revenue Integration supports mapping a maximum of 50 custom fields.

## Data Transformation layer

On the Data Transformation layer, the source objects in the Pre-staging tables are transformed into corresponding Zuora Revenue transaction lines in the Staging tables (also known as Line Staging) based on the specified query filter.

## Transformation for regular lines

The following diagram describes the data transformation process for booking data:

![Booking data transformation](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c539819c-4030-4ba4-b81c-47179c0bfd01?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM1Mzk4MTljLTQwMzAtNGJhNC1iODFjLTQ3MTc5YzBiZmQwMSIsImV4cCI6MTc2NjYzNzYxMSwianRpIjoiOGZmY2QyOTA2NDA0NDk1MGE2YWI1ZDM4MTdjOTE4MTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bKA8jX0EzYsg2MxdKBmoEPMWITKS0XrGj8g5YjqD_PI)

Booking data transformation uses the query filter on Subscription, Order, or any other associated objects to determine the transformation scope. The RatePlanCharge object is used as the driving object and is joined with other objects to construct full information for transformation.

The following diagram describes the data transformation process for billing data:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8d50377b-97b6-423f-9392-1a2fa9311ee4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhkNTAzNzdiLTk3YjYtNDIzZi05MzkyLTFhMmZhOTMxMWVlNCIsImV4cCI6MTc2NjYzNzYxMSwianRpIjoiZDFiNDRkODU4NGIzNGQ2YmJkZGI0OTBlODJlMzUyMTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uISYHdZSKlDZJLT_uEbdwNJjWsKAlLqPqhDH3K3fhZo)

Billing data transformation uses the query filter on Invoices or any other associated objects to determine the scope. InvoiceItem, InvoiceItemAdjustment, CreditMemo, and DebitMemo are used as driving objects and are joined with other objects to construct full information for transformation.

Customization can be introduced at Staging after SO, INV, or CM lines are generated and before the collection of transaction lines.

## Transformation for discount lines

Because how a discount is applied to separate charges varies, Billing - Revenue Integration introduces custom logic to handle discount booking and billing lines. The following table describes how discount lines for booking and billing data are transformed:

|  | Percentage Discount | Fixed Amount Discount |
| --- | --- | --- |
| Discount lines for booking | When processing a percentage discount RPC line, Zuora Revenue looks for the corresponding regular charge's RPC id and discount booked value by looking up with the discount's RPC id from the discount charge contractual value table on the id field.If found, generate the discount SO line by using the information from the regular RPC and discount RPC. The discount SO line id is concatenated to:Reg_RPC_original_id.Reg_RPC_segment.Disc_RPC_original_id.Disc_RPC_segmentAdditionally:SO start date and end date should use regular charge's start date and end date.List price should always be zero.Sequence number should concatenate the regular charge one with the discount charge one in the following format: Reg_RPC.version\|\|Disc_RPC.version\|\|Subscription.version\|\|Disc_RPC.updated_date | When processing fixed-amount discount SO lines:List price should be set to zero.Sell price should be derived from the associated "RatePlanChargeTier.DiscountAmount".In any other ways, it is processed the same as regular charges. |
| Discount lines for billing | When processing a discount invoice item of a percentage discount, Zuora Revenue searches the regular charge's RPC id by looking for the appliedToInvoiceItemId field, and traverse to the regular charge's invoice item. For CreditMemo or DebitMemo, Zuora Revenue looks at Invoice_Item_Id field instead of the appliedToInvoiceItemId field.After the regular charge's RPC id is located, the SO line id is constructed in the following format:Reg_RPC_original_id.Reg_RPC_segment.Disc_RPC_original_id.Disc_RPC_segmentWhen processing an InvoiceItemAdjustment, Credit Memo, or Debit Memo, if the applied-to invoice item (SourceId in IIA, AppliedToItemId in CM or DM item) is a discount invoice item, the rules described above are also applicable. | Discount billing lines of a fixed-amount discount are processed the same as regular billing lines. |

## Data Collection

After Zuora Billing data is transformed into Staging tables, you can start to collect transaction lines into Zuora Revenue for further revenue processing.

The data collection process is similar to collecting data from other integrated upstream systems.
