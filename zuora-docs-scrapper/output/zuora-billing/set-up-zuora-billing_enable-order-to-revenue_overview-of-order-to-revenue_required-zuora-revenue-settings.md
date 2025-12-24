---
title: "Required Zuora Revenue settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/required-zuora-revenue-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:24.236Z"
---

# Required Zuora Revenue settings

Explore essential configurations and best practices for achieving accurate revenue accounting in Zuora Revenue.

We recommend the following required configurations and best practices to achieve proper revenue accounting results in Zuora Revenue.

Make sure that you configure the following settings in Zuora Revenue as given below.

| Setting | Setting Type | Recommended Value |
| --- | --- | --- |
| INVOICE_CONTRACT_RATABLE | Profile | Yes |
| ENABLE_CONTRACTUAL_PROSPECTIVE | Profile | Yes |
| ALLOW_OVERSTATED_INVOICE | Profile | Yes |
| SSP_WITHIN_FV_GRP_BY_COL | Profile | PRNT_CHRG_NUM : PRNT_CHRG_SEGMENTPRNT_CHRG_NUM : PRNT_CHRG_SEGMENT:BNDL_CFG_ID (If you are using bundle configuration and Zuora Billing application) |
| CREATE_RORD_CONTRA_ENTRY | Profile | No |
| CONSUME_DELETED_TRANSACTION | Profile | No |
| REPORTING_CURRENCY | Profile | Default to USD, but can be changed as per requirements |
