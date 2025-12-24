---
title: "API example 2: Apply fixed amount discount charges to regular charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/api-example-2-apply-fixed-amount-discount-charges-to-regular-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:29.985Z"
---

# API example 2: Apply fixed amount discount charges to regular charges

Provides an example of applying a fixed amount discount charge to a regular one-time charge using a subscription level discount in a rate plan.

Apply a subscription level fixed amount discount charge RPC002 in rate plan RP002 to a regular one-time charge RPC001 in rate plan RP001 that starts from 2023-01-01. The fixed amount discount charge RPC002 has been configured as an enhanced discount in the product catalog.

| Request | POST /v1/orders/ |
| --- | --- |
| Request Body | { "orderDate": "$Today", "existingAccountNumber": "$AccountNum", "subscriptions": [ { "orderActions": [ { "type": "CreateSubscription", "triggerDates": [ { "name": "ContractEffective", "triggerDate": "$Today" }, { "name": "ServiceActivation", "triggerDate": "$Today" }, { "name": "CustomerAcceptance", "triggerDate": "$Today" } ], "createSubscription": { "terms": { "initialTerm": { "startDate": "$Today", "period": 12, "periodType": "Month", "termType": "TERMED" }, "renewalSetting": "RENEW_WITH_SPECIFIC_TERM", "renewalTerms": [ { "period": 12, "periodType": "Month" } ] }, "subscribeToProducts": [ { "productRatePlanId": "RP001" }, { "productRatePlanId":"RP002", "chargeOverrides":[{ "productRatePlanChargeId":"RPC002", "startDate": { "startDatePolicy": "AlignToApplyToCharge" }, "endDate": { "endDatePolicy": "FixedPeriod", "upToPeriodsType": "2023-02-01", "upToPeriods": }, "pricing": { "discount": { "discountAmount": 5.0, "applyDiscountTo": "ONETIME", "applyToBillingPeriodPartially": true, "discountLevel": "subscription", "discountApplyDetails": [ { "productRatePlanId": "RP001", "productRatePlanChargeId": "RPC001" } ] } }, "billing": { "billingPeriod": "Month" } }] }] ] } } ] } ], "processingOptions": { "runBilling": false, "collectPayment": false } } |
