---
title: "Create a subscription using a standalone order"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders/create-a-subscription-using-a-standalone-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:11.396Z"
---

# Create a subscription using a standalone order

This task guides you through creating a subscription using a standalone order in Zuora Billing, without the need for a pre-defined product catalog.

This tutorial demonstrates how to place a standalone order to subscribe without pre-defining a product catalog in Zuora Billing.

To place a standalone order, define the charges that you are to subscribe to and create a subscription through the Create an order operation, as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | isFromExternalCatalog | To place a standalone order, you must specify the isFromExternalCatalog field to true . |
    | productRatePlanNumber | Specify a product rate plan number for the charge you define in the standalone order; for example, PRPN-001 . |
    | ratePlanName | Specify a rate plan name for the charge you define in the standalone order; for example, RPN-001 . |
    | name | Specify a charge name for the charge you define in the standalone order; for example, standalone charge . |
    | chargeType | Specify the charge type for the charge you define in the standalone order; for example, Recurring . |
    | chargeModel | Specify the charge model for the charge you define in the standalone order; for example, PerUnit . |
    | listPrice | Specify the actual sale price for the charge you define in the standalone order; for example, 100 . |
    | originalListPrice | Specify the extended list price (ELP) for the charge you define in the standalone order; for example, 1000 . |
    | uom | Specify the unit of measure (UOM) for the charge you define in the standalone order; for example, Each . |
    | taxCode | Specify the tax code for the charge you define in the standalone order; for example, Z-Tax . You need to use the taxCode field together with the taxMode field.If you are to apply no tax to the charge that you define in the standalone order, skip using the taxCode and taxMode fields. |
    | taxMode | Specify the tax mode for the charge you define in the standalone order; for example, TaxExclusive . You need to use the taxMode field together with the taxCode field.If you are to apply no tax to the charge that you define in the standalone order, skip using the taxCode and taxMode fields. |

2.  Ensure you define the default accounting codes for charges that you specify through a standalone order in Finance settings \> Manage Non-Subscription Items and Standalone Order of the Zuora Billing UI. Alternatively, you can directly specify the accounting codes through the relevant fields in a standalone order, such as `accountReceivableAccountingCode` and `adjustmentLiabilityAccountingCode`. For more information about the accounting code fields for charges in a standalone order, see the API Reference of the "Create an order" operation.
3.  Use the "Create an order" operation to create a standalone order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "a00001", "orderDate": "2024-01-01", "subscriptions": [ { "orderActions": [ { "createSubscription": { "subscribeToRatePlans": [ { "isFromExternalCatalog": true, "productRatePlanNumber": "PRPN-001", "ratePlanName": "RPN-001", "chargeOverrides": [ { "name": "standalone charge", "productRatePlanChargeNumber": "standalone prpc", "pobPolicy": "Placeholder", "productCategory": "standalone", "productClass": "classA", "productFamily": "Daddy", "productLine": "line", "chargeType": "Recurring", "chargeModel": "PerUnit", "accountReceivableAccountingCode": "arac", "adjustmentLiabilityAccountingCode": "alac", "adjustmentRevenueAccountingCode": "arac", "contractAssetAccountingCode": "cac", "contractLiabilityAccountingCode": "clac", "contractRecognizedRevenueAccountingCode": "crrac", "deferredRevenueAccountingCode": "drac", "recognizedRevenueAccountingCode": "rrac", "unBilledReceivablesAccountingCode": "urac", "isAllocationEligible": true, "isUnBilled": true, "taxCode": "Z-Tax", "taxMode": "TaxExclusive", "startDate": { "specificTriggerDate": "2024-01-01", "triggerEvent": "SpecificDate" }, "endDate": { "endDateCondition": "Subscription_End" }, "pricing": { "recurringPerUnit": { "listPrice": 100, "originalListPrice": 1000, "listPriceBase": "Per_Billing_Period", "quantity": 10, "uom": "Each" } }, "billing": { "billCycleType": "DefaultFromCustomer", "billingPeriod": "Month", "billingPeriodAlignment": "AlignToCharge", "billingTiming": "IN_ADVANCE" } } ] } ], "terms": { "initialTerm": { "period": 12, "periodType": "Month", "termType": "TERMED", "startDate": "2024-01-01" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "autoRenew": false } }, "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "2024-01-01" }, { "name": "ServiceActivation", "triggerDate": "2024-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2024-01-01" } ] } ] } ] } |
