---
title: "Create a product plan"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/create-a-product-plan"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:42.414Z"
---

# Create a product plan

Learn how to create a product rate plan with multiple pricing and billing options, including adding charges and configuring attributes.

Complete the following steps to create a product rate plan. A single product can have multiple rate plans, each representing a unique pricing or billing option.

1.  Navigate to in the left navigation bar.
2.  Click the product name for which you want to add a rate plan.
3.  Click Add Plans.
4.  Specify the following fields for the rate plan:
5.  Click Add Charge. After you have created a product and added a product rate plan, you can create one or more charges within the rate plan. Each charge can be one of three charge types: one-time, recurring, or usage-based, with corresponding charge models such as flat fee, per unit, tiered, and volume.

    Note:

    All charge types and models from the legacy catalog are supported.

6.  Enter the following information:

    | Field | Description |
    | --- | --- |
    | Name | Enter a name for the charge. For example, Setup Fee. |
    | Description | Enter a description for the rate plan. This field is optional. |
    | Rates | Specify how the customer will be charged for the product or service. The available options are:One-Time - The charge is applied once.Recurring - The charge is applied at regular intervals, for example, monthly, annually.Usage - The charge is based on how much the customer uses. Often combined with pricing models like Per-Unit, Volume, or Tiered. |
    | Charge Model | Choose how the system calculates the charge based on quantity or usage. The available options are:Flat-Fee - A fixed price, regardless of quantity.Per-Unit - Price is calculated by multiplying a unit price by the quantity. This can be capped using Charge-Level Min/Max Rules.Volume - Price per unit depends on the total quantity, and a single rate is applied to the whole volume. This supports Tier-Level Min/Max Rules.Tiered - Each block of usage is charged at a different rate. This supports Tier-Level Min/Max Rules. |
    | Pricing | Set the price and select the currency in which it should be charged. You can:Manually enter the price in the field.Upload pricing for different regions or attributes using a CSV. See Upload pricing.Dynamic Pricing - Configure attribute-based pricing rules using a decision table. See Dynamic Pricing. |
    | Tax Mode | Choose how taxes are applied to the charge. The available options are:Non-Taxable - Tax is not applied to this charge.Tax Inclusive - The entered price includes tax.Tax Exclusive - Tax is added on top of the entered price. |
    | Billing Start Date | Choose when the billing for this charge should begin:Contract Effective - Billing starts when the contract is considered active.Service Activation - Billing begins when the service is actually delivered or activated.Customer Acceptance - Billing begins only after the customer has formally accepted the service/product. |
    | Accounting | Select appropriate accounts to determine how revenue and invoices are tracked:Accounts Receivable - An account that records amounts owed by customers.Recognized Revenue - An account where earned revenue is tracked (based on timing rules).Deferred Revenue - Used when you receive payment before delivering the service/product.See Accounting and Revenue Recognition. |
    | Revenue Accounts Revenue Recognition Timing | Choose when the system should recognize revenue for this charge.Upon Billing Document Posting Date - Revenue is recognized when the invoice or billing document is generated.Upon Order Activation Date - Revenue is recognized when the order becomes active, for example, service is delivered or the customer starts using the product.See Accounting and Revenue Recognition. |
    | Finance codesUse these settings to determine how revenue is recognized and reported in Zuora. These configurations define the accounting treatment of charges and how accounting entries are created. |  |
    | Revenue Recognition Rule | Select a revenue recognition rule to control when and how revenue is recognized for this charge. You can select one of the following options:Custom - Unlimited recognition - Recognizes the entire revenue amount at once, either when the charge is invoiced or when an invoice item adjustment is made. Use for one-time fees or upfront charges that do not need to be spread over time.Recognize daily over time - Spreads revenue evenly across each day of the service period. Use for recurring subscription fees where revenue should be recognized gradually, for example, a 12-month subscription fee recognized daily across the contract term.Recognize upon invoicing - Recognizes revenue in full immediately upon invoice generation. Use for charges where billing and recognition occur simultaneously, such as pay-as-you-go usage fees. |
    | Invoice Posted | Specify the accounting codes for accounting entries created when an invoice is posted.Accounts Receivable – Debit: Accounts Receivable, Credit: Accounts ReceivableDeferred Revenue – Debit: Deferred Revenue, Credit: Accounts ReceivableNote:Debit accounts are system-defined based on Zuora's accounting logic for revenue events, such as Accounts Receivable and Deferred Revenue. This ensures compliance with double-entry accounting rules and prevents errors. |
    | Revenue Recognized | Specify the accounting codes for journal entries created when revenue is recognized.Deferred Revenue – Debit: Deferred Revenue, Credit: Accounts ReceivableRecognized Revenue – Debit: Recognized Revenue, Credit: Accounts ReceivableNote:Debit accounts are system-defined based on Zuora's accounting logic for revenue events, such as Accounts Receivable and Deferred Revenue. This ensures compliance with double-entry accounting rules and prevents errors. |
    | External Integration | Configure this section if you use an external revenue recognition process. Define the Revenue Recognition Code and Trigger to determine how and when to recognize revenue externally.External Revenue Recognition Code - A reference code that maps the revenue schedule in Zuora to your external revenue recognition system. Used to determine how revenue should be recognized externally, for example, based on product, revenue type, or recognition rule.External Revenue Recognition Trigger - Defines the event or condition that triggers revenue recognition in the external system. For example, Invoice Posted, Payment Collected, Service Delivered. |
    | Legacy Revenue Reporting | Configure if you are still using Zuora's Legacy Deferred Revenue Reports instead of or alongside the latest revenue recognition capabilities.Include in Legacy Revenue Reports - Select this option to include the transactions in Zuora Growth Edition Deferred Revenue Reports. Useful when finance teams still rely on legacy reports during transition to the current revenue recognition engine. |

7.  Click Discounts. For detailed information, see [Create a product rate plan discount](/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/create-a-product-rate-plan-discount).
8.  Click Attributes. For detailed steps on configuring attributes in a rate plan, see [Using Attributes for Dynamic Pricing](/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/using-attributes-for-dynamic-pricing).
