---
title: "SubmitContractOrder Plugin setup"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/use-zuora-for-salesforce-cpq-connector-with-orders/submitcontractorder-plugin-setup"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:15.188Z"
---

# SubmitContractOrder Plugin setup

This guide explains how to set up the SubmitContractOrder Plugin to enable backfill of subscription-related information from Salesforce to Zuora, including the addition of required custom fields and field mappings.

When you submit Salesforce Contract to Zuora, Zuora Connector for Salesforce CPQ will backfill the subscription-related information to the Salesforce records. To enable the backfill process, you must add the required custom fields.

Note:

This functionality is only available if you have the Orders feature enabled.

## Addition of required custom fields in Zuora

To enable the Order backfill upon Contract submission to Zuora, you must add the following custom fields to Zuora Order Action.

Note:

The custom fields must be added as indexed custom fields.

| Object | Custom Field Label | API Name | Field Type |
| --- | --- | --- | --- |
| Zuora Order Action | SBQQ Subscription Number | sfdcSubscriptionNumber__c | Text (18) |
| SBQQ Subscription Id | sfdcSubscriptionId__c | Text (18) |  |
| Description | sfdcDescription__c | Text(255) |  |

## Field mappings

The following table lists the field mappings of the backfill process.

| Salesforce CPQ Object | Salesforce Field | Zuora Field | Zuora Object | Notes |
| --- | --- | --- | --- | --- |
| SBQQ__Subscription__c | OrderNumber__c | OrderNumber | Order |  |
| SBQQ__Subscription__c | OrderId__c | Id | Order |  |
| SBQQ__Subscription__c | OrderActionId__c | Id | OrderAction |  |
| SBQQ__Subscription__c | OrderActionType__c | - | - | Derived programmatically and stored in salesforce.Possible values are : AddProduct, UpdateProduct, RemoveProduct, and RenewSubscription. |
| SBQQ__Subscription__c | ChargeNumber__c | ChargeNumber | RatePlanCharge |  |
| SBQQ__Subscription__c | RatePlanId__c | RatePlanId | RatePlanCharge |  |
| SBQQ__Subscription__c | RatePlanChargeId__c | Id | RatePlanCharge |  |

## Limits

The backfill process has the following limits:

-   As the Orders REST API only supports querying an Order by the OrderNumber, the Order Backfill process service could not handle the case where the OrderNumber is not back populated due to timeout or any other unexpected reason after the creation of the subscription.
-   As the Orders REST API does not support querying Orders by a list of OrderNumbers, the Orders have to be queried one by one. There might be a performance issue if the volume is high in a specific transaction. In that case, the mitigation is to skip the backfill process if the Contract has been backfilled previously.
-   Multi-Entity is not supported.
-   `ZSBConnectorUtils.makeAmendmentSummaries()` does not return correct amendment details for subscriptions with UpdateProduct actions when the Orders feature is enabled for your tenant.
