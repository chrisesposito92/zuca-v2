---
title: "Create tax exemptions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/create-tax-exemptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:59.760Z"
---

# Create tax exemptions

Learn how to set up tax exemptions for customer accounts by configuring the necessary fields and options.

It is possible for a customer account to be tax exempt.

1.  Set Tax Exempt to Yes.
2.  Enter a certificate ID or an entity/use code.

    Specifying either Pending Verification or No are equivalent, and will apply taxes for this account.

    For more information about tax exemption certificates, refer to the following documentation from Zuora partner Avalara: Exemption Certificate Survival Guide .

    For more information about entity/use codes, refer to the following documentation from Zuora partner Avalara: Exempt Transactions .

3.  To enable tax exempt status for an account, edit the account and enter information in the Tax Exempt fields of the Billing and Payment Info section.

    | Field | Required? | Description |
    | --- | --- | --- |
    | Tax Exempt | Yes | Set this to Yes , No , or Pending Verification .If you set this to No or Pending Verification , Zuora Tax will apply taxes to the account. |
    | Certificate ID | See description | Any value provided by the merchant. |
    | Certificate Type | No | Typically, this is Reseller or a similar value to represent the document type. |
    | Issuing Jurisdiction | No | Typically, this is a state or government agency. |
    | Entity/Use Code | No | Specify an entity/use code used to apply exemptions in AvaTax. |
    | Description | No | Add a description. This field is optional. |
