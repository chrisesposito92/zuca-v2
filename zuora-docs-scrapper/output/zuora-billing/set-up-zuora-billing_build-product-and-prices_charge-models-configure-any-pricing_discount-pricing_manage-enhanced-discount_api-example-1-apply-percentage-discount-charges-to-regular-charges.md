---
title: "API example 1: Apply percentage discount charges to regular charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/api-example-1-apply-percentage-discount-charges-to-regular-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:27.210Z"
---

# API example 1: Apply percentage discount charges to regular charges

This example demonstrates how to apply a subscription-level percentage discount charge to a regular recurring charge, with specific start and end dates, using the API.

Apply a subscription level percentage discount charge RPC002 in rate plan RP002 to a regular recurring charge RPC001 in rate plan RP001. The discount charge RPC002 starts 2 weeks after the regular charge RPC001 starts and lasts for 3 months. The percentage discount charge RPC002 has been configured as an enhanced discount in the product catalog.

| Request | POST /v1/orders/ |
| --- | --- |
| Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "createSubscription": { "terms": { "initialTerm": { "startDate": "$Today", "period": 12, "periodType": "Month", "termType": "TERMED" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ] }, "subscribeToProducts": [ { "productRatePlanId": "RP001" }, { "productRatePlanId":"RP002", "chargeOverrides":[{ "productRatePlanChargeId":"RPC002", "startDate": { "startDatePolicy": "FixedPeriodAfterApplyToChargeStartDate", "startPeriodsType": "Weeks", "periodsAfterChargeStart": 2 }, "endDate": { "endDatePolicy": "FixedPeriod", "upToPeriodsType": "Months", "upToPeriods": "3" }, "pricing": { "discount": { "discountPercentage": 10, "applyDiscountTo": "RECURRING", "applyToBillingPeriodPartially": true, "discountLevel": "subscription", "discountApplyDetails": [ { "productRatePlanId": "RP001”, "productRatePlanChargeId": "RPC001" } ] } } }] }] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |
