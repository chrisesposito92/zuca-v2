---
title: "Preview billing for a standalone order"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders/preview-billing-for-a-standalone-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:14.024Z"
---

# Preview billing for a standalone order

This task guides you through the process of previewing billing for a standalone order by defining charges and using the "Preview an order" operation.

This tutorial demonstrates how to preview billing for a standalone order.

To preview a standalone order, define the charges that you are to subscribe to and preview billing through the Preview an order operation, as follows:

1.  Determine the values of the following fields:

    | Variable | Description |
    | --- | --- |
    | isFromExternalCatalog | To preview a standalone order, you must specify the isFromExternalCatalog field to true . |
    | ratePlanName | Specify a rate plan name for the charge you define in the standalone order; for example, RPN-001 . |
    | chargeName | Specify a charge name for the charge you define in the standalone order; for example, standalone charge . |
    | chargeType | Specify the charge type for the charge you define in the standalone order; for example, Recurring . |
    | chargeModel | Specify the charge model for the charge you define in the standalone order; for example, PerUnit . |
    | listPrice | Specify the actual sale price for the charge you define in the standalone order; for example, 100 . |
    | originalListPrice | Specify the extended list price (ELP) for the charge you define in the standalone order; for example, 1000 . |
    | uom | Specify the unit of measure (UOM) for the charge you define in the standalone order; for example, Each . |
    | taxCode | Specify the tax code for the charge you define in the standalone order; for example, Z-Tax . You need to use the taxCode field together with the taxMode field.If you are to apply no tax to the charge that you define in the standalone order, skip using the taxCode and taxMode fields. |
    | taxMode | Specify the tax mode for the charge you define in the standalone order; for example, TaxExclusive . You need to use the taxMode field together with the taxCode field.If you are to apply no tax to the charge that you define in the standalone order, skip using the taxCode and taxMode fields. |

2.  Ensure you define the default accounting codes for charges that you specify through a standalone order in Finance settings \> Manage Non-Subscription Items and Standalone Order of the Zuora Billing UI. Alternatively, you can directly specify the accounting codes through the relevant fields in a standalone order, such as `accountReceivableAccountingCode` and `adjustmentLiabilityAccountingCode` . For more information about the accounting code fields for charges in a standalone order, see the API Reference of the "Preview an order" operation.
3.  Specify the preview option fields as necessary, such as `previewThruType` and `previewTypes` . For more information about the preview option fields, see the API Reference of the "Preview an order" operation.
4.  Use the "Preview an order" operation to preview billing for a standalone order under an existing account:

    | Request | POST /v1/orders/preview |
    | --- | --- |
    | Request Body | { "orderDate": "2024-01-01", "existingAccountNumber": "a00001", "subscriptions": [ { "orderActions": [ { "createSubscription": { "subscribeToProducts": [ { "isFromExternalCatalog": true, "ratePlanName": "standalone rateplan demo", "chargeOverrides": [ { "chargeNumber": "standalone charge demo10", "name": "standalone charge", "productRatePlanChargeNumber": "standalone prpc", "pobPolicy": "Placeholder", "productCategory": "standalone", "productClass": "classA", "productFamily": "Placeholder", "productLine": "line", "chargeType": "Recurring", "chargeModel": "PerUnit", "accountReceivableAccountingCode": "arac", "adjustmentLiabilityAccountingCode": "alac", "adjustmentRevenueAccountingCode": "arac", "contractAssetAccountingCode": "cac", "contractLiabilityAccountingCode": "clac", "contractRecognizedRevenueAccountingCode": "crrac", "deferredRevenueAccountingCode": "drac", "recognizedRevenueAccountingCode": "rrac", "unBilledReceivablesAccountingCode": "urac", "taxCode": "taxCode", "taxMode": "TaxExclusive", "startDate": { "specificTriggerDate": "2024-01-01", "triggerEvent": "SpecificDate" }, "endDate": { "endDateCondition": "Subscription_End" }, "pricing": { "recurringPerUnit": { "listPrice": 100, "originalListPrice": 2000, "listPriceBase": "Per_Billing_Period", "quantity": 10, "uom": "Each" } }, "billing": { "billCycleType": "DefaultFromCustomer", "billingPeriod": "Month", "billingPeriodAlignment": "AlignToCharge", "billingTiming": "IN_ADVANCE" } } ] } ], "terms": { "initialTerm": { "period": 12, "periodType": "Month", "termType": "TERMED", "startDate": "2024-01-01" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ], "autoRenew": false } }, "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "2024-01-01" }, { "name": "ServiceActivation", "triggerDate": "2024-01-01" }, { "name": "CustomerAcceptance", "triggerDate": "2024-01-01" } ] } ] } ], "previewOptions": { "previewThruType": "SpecificDate", "specificPreviewThruDate": "2024-03-01", "previewTypes": [ "BillingDocs", "OrderDeltaMetrics", "ChargeMetrics", "OrderMetrics" ] } } |
