---
title: "Contract modifications for charge segment amendments"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing_1/contract-modifications-for-charge-segment-amendments"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:36.530Z"
---

# Contract modifications for charge segment amendments

Zuora Revenue processes charge segment amendments by creating or updating SO lines based on the amendment type, affecting the Skip CT Mod flag and triggering contract modification rules.

When Zuora Revenue is integrated with Zuora Billing by enabling the Billing - Revenue Integration feature, every charge segment in Zuora Billing is treated as a new SO line in Zuora Revenue. However, not every new SO line is treated as a new POB in Zuora Revenue. After a new SO line is created for a new subscription, different actions are taken by Zuora Revenue based on the nature of the amendments that occur to the existing charge segment. In some cases, the existing SO line is updated with another SO line being created. This new SO line might be or might not be treated as a new POB depending on the type of amendments. In other cases, the existing SO line is updated without creating another SO line.

The following sections explain how different types of amendments are processed in Zuora Revenue and how contractual prospective allocation is triggered for the existing SO line.

## Charge segment amendment processing

When a subscription is created, a new SO line is created in Zuora Revenue for the associated charge segment. After that, when charge segment amendments occur, Zuora Revenue will take appropriate actions based on the nature of amendments:

-   If the amendment is to add a product or renew the subscription, a new SO line is created in Zuora Revenue. The Skip CT Mod flag of this new SO line is set to No. The New POB contract modification rule is triggered.

-   If the amendment is to update the product for a price change or quantity change,

    1.  Zuora Revenue updates the existing SO line.

    2.  If the amendment effective date is the same as the charge segment start date, the Skip CT Mod flag is set to No. Otherwise, the Skip CT Mod flag is set to Yes.

    3.  A new SO line is also created in Zuora Revenue. The Skip CT Mod flag of this new line is set to No.

-   If the amendment belongs to one of the following types, Zuora Revenue will only update the existing SO line without creating a new SO line. The Skip CT Mod flag is set to No.

    -   Term & Conditions (term modification)

    -   Remove product

    -   Cancel subscription

    -   Suspend & Resume (contraction)

-   If the amendment belongs to Suspend & Resume (extension), Zuora Revenue will create a new SO line. The Skip CT Mod flag of this new line is set to No.


The above processing logic is also illustrated in the following table:

| Amendment type | Contract modification category | Create new charge segment | Zuora Revenue action | Skip CT Mod flag |
| --- | --- | --- | --- | --- |
| Create subscription | New POB | Yes | Create new SO line | No |
| Add product | New POB | Yes | Create new SO line | No |
| Renew subscription | New POB | Yes | Create new SO line | No |
| Update product | Price modification | Yes | Update existing SO line | Yes* |
| Create new SO line | No |  |  |  |
| Update product | Quantity modification | Yes | Update existing SO line | Yes* |
| Create new SO line | No |  |  |  |
| Terms & Conditions | Term modification | No | Update existing SO line | No |
| Remove product | Contraction | No | Update existing SO line | No |
| Cancel subscription | Contraction | No | Update existing SO line | No |
| Suspend & Resume | Contraction | No | Update existing SO line | No |
| Extension | Yes | Create new SO line | No |  |
| Note:* The Skip CT Mod flag is set to Yes only when the amendment is not to cancel the SO line. |  |  |  |  |

For example, a subscription is created for 12 months in Zuora Billing. Zuora Revenue will create a new SO line with the following details:

| Order Action Type | Transaction Type | Rate Plan Charge # | Rate Plan Charge Segment | SO Line Identifier | Start Date | End Date | Generated Reason Code | Qty | Total Contracted Billing |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Create subscription | SO | C-01201108 | 1 | O-0001.1 | 1/1/2019 | 12/31/2019 | Extension | 10 | 12000 |

The current open period is March 2019 and an amendment occurs to this subscription to decrease the quantity to 6 for the remaining periods. For this type of amendment, Zuora Revenue will first update the existing SO line for the existing charge segment #1 and then create a new SO line for charge segment #2. The Skip CT Mod flag of the new SO line is set to No. The amendment effective date (April 1, 2019) is different from the charge segment start date (January 1, 2019), so the Skip CT Mod flag of the updated SO line is set to Yes.
| Order Action Type | Transaction Type | Rate Plan Charge # | Rate Plan Charge Segment | SO Line Identifier | Start Date | End Date | Generated Reason Code | Qty | TCB |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Update product | SO | C-01201108 | 1 | O-0001.1 | 1/1/2019 | 3/31/2019 | Decrease Quantity | 10 | 3000 |
| Update product | SO | C-01201108 | 2 | O-0001.2 | 4/1/2019 | 12/31/2019 | Decrease Quantity | 6 | 5400 |

## Allocation treatment

Previously in Zuora Revenue, when the Skip CT Mod flag of the SO line is Yes, contract modification will not be triggered for the line. In the above example, the updated SO line (O-0001.1) might not be completely accounted and posted when it ends on March 31, 2019. The leftover revenue might be scheduled for future periods after the O-0001.1 SO line ends.

To support this scenario, the behavior of Zuora Revenue is changed when the Billing - Revenue Integration feature is enabled. When the Skip CT Mod flag of an updated SO line is set to Yes, the contractual prospective allocation will be triggered. As a result, the remaining revenue of the updated SO line can be deferred and released appropriately.

Meanwhile, the Skip CT Mod flag of the new SO line (O-0001.2) is set to No. The appropriate contract modification rule will be triggered based on the Generated Reason Code value of the SO line, which is Decrease Quantity in the above example.
