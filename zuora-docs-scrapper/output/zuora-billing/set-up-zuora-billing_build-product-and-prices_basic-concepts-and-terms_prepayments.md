---
title: "Prepayments"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/prepayments"
product: "zuora-billing"
scraped_at: "2025-12-24T04:19:08.513Z"
---

# Prepayments

The prepayment feature allows customers to pay in advance for a specified number of periods, with fees credited back over time. Note that this feature is deprecated and not supported by certain integrations.

Note:

This feature is deprecated and available only for backward compatibility.

The prepayment option is used when a customer immediately pays up front (in advance) for a certain number of periods. The prepayment fees paid are associated with a specific product. Prepayment fees are subsequently credited back in successive months to offset the charges due for that product.

Note that the Order to Revenue feature or the Billing - Revenue Integration feature does not support the prepayment feature.

## Using the Prepayment Feature

In the product rate plan charge under Pre-Payment Rules , you can enter the number of periods a customer must prepay for the product. You can leave this field blank if it is not applicable. When adding a product rate plan charge to a subscription, you can edit the number of periods to prepay if needed.

In Zuora Billing, prepayment charges are triggered as soon as a contract becomes effective. When prepayments are triggered, an invoice is created ("prepayment invoice") to show that a specified prepayment amount has been received from the customer. The prepayment invoice is the first invoice created and precedes future invoices containing the actual charges to be collected for the prepaid product or service. Subsequent invoices coming after the prepayment invoice will reflect both a charge for the product plus a prepayment credit to offset the charge.

For example, customer Larry S. has a monthly subscription for $10.00 with a contract effective date of 12/1/2009 and service activation date of 1/1/2010. On 12/1/2009, Larry S. sends your company a check for $60.00 to prepay for the first six months of service. On 12/1/2009, an invoice is created for $60 and the prepayment is immediately applied to offset this prepayment invoice. On 1/1/2010, the first month's subscription fees are due and the invoice reflects both the $10 recurring charge plus a ($10) prepayment credit, resulting in a net invoice total amount due of $0.

Note:

Important: If a rate plan with a recurring pre-pay charge is removed during the pre-payment period, Zuora will not automatically return credit for the pre-payment.

## Prepayments and Invoice Charges

When your customer subscribes to a prepayment (for example, How Many Periods to Prepay = 3) in a single recurring rate plan charge subscription, Zuora’s rating and billing engine (RBE) automatically creates a new rate plan charge as a one-time fee. Zuora does this because we want to apply a fee for using the prepayment.

In this case, the subscription will look like the following:

-   Recurring charge of $50

    -   With prepayment of 3

-   One-time fee of $150

    -   This is the number of periods to prepay multiplied by the charge amount: $50 \* 3 = $150


Therefore, when you preview the subscription (for example, for three billing cycles), you will see the following:

-   Prepayment charge: $150

-   Recurring charge: 50

-   Prepayment credit: -50


Second invoice:

-   Recurring charge: 50

-   Prepayment credit: -50


Third invoice:

-   Recurring charge: 50

-   Prepayment credit: -50


This behavior will be applied when you generate an invoice.

Prepayment fees are subsequently credited back to the customer. However, a one-time charge is created because our business logic requires that we include a fee when customers use prepayment.

If you do not want to see this prepayment fee (because it makes it appear as if your customers are paying more), use the bill run filter and omit one-time charges to create a separate invoice dedicated only to prepayment fees.
