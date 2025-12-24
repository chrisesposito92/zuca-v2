---
title: "Charge Metrics objects and fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics/charge-metrics-objects-and-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:02.240Z"
---

# Charge Metrics objects and fields

This reference provides details on Charge Metrics objects and fields, including descriptions and field lists for ChargeMetrics and ChargeMetricsDiscountAllocationDetail objects.

Through the Charge Metrics service, you can access the following objects and fields. See Constructing SQL Queries in Data Query for more information.

| Object | Description |
| --- | --- |
| ChargeMetrics | This object contains the following fields. See Get charge metrics for field descriptions.idsubscriptionOwnerAccountNumberinvoiceOwnerAccountNumbersubscriptionNamechargeNumberratePlanChargeIdproductIdproductRatePlanIdproductRatePlanChargeIdamendmentIdamendmentTypestartDateendDatemrrGrossAmountmrrNetAmountmrrDiscountAmounttcvGrossAmounttcvNetAmounttcvDiscountAmountcurrencyCreatedDateUpdatedDate |
| ChargeMetricsDiscountAllocationDetail | This object contains the following fields. See Get discount allocation details for field descriptions.idchargeMetricsIdsubscriptionOwnerAccountNumberinvoiceOwnerAccountNumbersubscriptionNamechargeNumberratePlanChargeIdproductIdproductRatePlanIdproductRatePlanChargeIdamendmentIdamendmentTypestartDateendDatediscountChargeNumberdiscountMrrdiscountTcvcurrencyCreatedDateUpdatedDate |
