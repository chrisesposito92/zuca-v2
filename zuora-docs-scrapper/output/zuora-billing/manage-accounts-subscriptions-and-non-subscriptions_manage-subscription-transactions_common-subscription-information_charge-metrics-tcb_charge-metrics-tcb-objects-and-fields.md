---
title: "Charge Metrics TCB objects and fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics-tcb/charge-metrics-tcb-objects-and-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:19.838Z"
---

# Charge Metrics TCB objects and fields

This topic provides a detailed overview of the objects and fields related to Charge Metrics TCB, accessible through Data Query.

The following table lists the objects and fields related to Charge Metrics TCB (total contracted billing).

You can access these objects and fields through Data Query. For more information, see Construct SQL Queries in Data Query and Common use cases of retrieving Charge Metrics TCB through Data Query .

| Object | Description |
| --- | --- |
| ChargeMetricsTcb | A charge metrics record for accessing the TCB metric date of Rate Plan Charges.This object contains the following fields:IdSubscriptionOwnerAccountNumberInvoiceOwnerAccountNumberSubscriptionNameSubscriptionOwnerAccountIdInvoiceOwnerAccountIdSubscriptionIdRatePlanChargeIdProductIdProductRatePlanIdProductRatePlanChargeIdChargeNumberStartDateEndDateAmendmentIdAmendmentTypeTcbGrossAmountTcbNetAmountTcbDiscountAmountCurrencyCreatedDateUpdatedDate |
| ChargeMetricsTcbDiscount | The discount allocation details for accessing the TCB metric data of Discount Rate Plan Charges.This object contains the following fields:IdSubscriptionOwnerAccountNumberInvoiceOwnerAccountNumberSubscriptionNameSubscriptionOwnerAccountIdInvoiceOwnerAccountIdChargeNumberRatePlanChargeIdProductIdProductRatePlanIdProductRatePlanChargeIdStartDateEndDateAmendmentIdAmendmentTypeDiscountRatePlanChargeIdDiscountChargeNumberDiscountTcbCurrencyCreatedDateUpdatedDate |
