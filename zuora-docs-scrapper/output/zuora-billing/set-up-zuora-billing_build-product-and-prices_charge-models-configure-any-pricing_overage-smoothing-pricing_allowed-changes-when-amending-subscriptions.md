---
title: "Allowed changes when amending subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/overage-smoothing-pricing/allowed-changes-when-amending-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:42.534Z"
---

# Allowed changes when amending subscriptions

You can amend subscription rate plan charges by changing the Included Units and Number of Periods options, with specific conditions for Zuora user interface and SOAP API usage.

You can only change the Included Units and Number of Periods options on a rate plan charge from either the Zuora user interface or through SOAP API with the following conditions:

-   You are making an Add Product or Update Product amendment.

-   The product includes a Usage Charge of the Overage Pricing charge model.

-   For the Zuora SOAP API, you can only change `IncludedUnits` and `NumberOfPeriods` with a single `create()` or `amend()` call. You cannot change the options when using an `update()` call.


Note:

You must be on WSDL version 54.0 or higher to use this SOAP feature. See [Zuora WSDL](/zuora-platform/integration/apis/soap-api/zuora-wsdl) for information about downloading the current version.

For the Rolling Window model, the following table describes the additional changes allowed on subscription amendments.

| Overage Option when Smoothing | New Product Amendment | Update Product Amendment |
| --- | --- | --- |
| Apply overage as soon as it occurs | Can override both Number of Periods and Included Units | Cannot override Number of Periods or Included Units |
| Apply overage at the end of smoothing period | Can override both Number of Periods and Included Units | Can override both Number of Periods and Included Units |

## Managing rollover balances

When you amend a subscription that includes Rollover overage usage charges and access the Update Product amendment page (for tenants that do not have Orders enabled), you will see a Reset rollover check box. This option controls whether any existing rollover usages (unconsumed usage carried over from previous periods) are reset to zero as part of the amendment.

The Reset rollover option is only effective if the amendment includes other changes to the charge. If no other changes are made to the charge, the reset flag is ignored. If the amendment is later deleted, any rollover usages that were reset are not restored.
