---
title: "Payment methods for customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/create-customer-accounts/payment-methods-for-customer-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:05.957Z"
---

# Payment methods for customer accounts

Zuora provides various payment method options, including Zuora Payment Method, External Payment Method, or None, to manage customer accounts effectively.

## Overview

Zuora offers three payment method options: Zuora Payment Method, External Payment Method, or None.

See Define Payment Methods and Create and Modify Payment Methods for Customer Accounts for more information.

## Payment Method Types

Select the desired payment method for this customer by clicking on the applicable radio button.

## Zuora Payment Method (managed by Zuora)

Select Zuora Payment Method to enter a specific electronic payment method for your customer. Electronic payment methods include Credit Card, Debit Card, and ACH. PayPal, and CC Reference Transactions are also available if PayPal is used as the payment gateway. These payment methods can also be used as external payment methods.

Prior to entering an electronic payment method for a customer account, you must first set up the Payment Method(s) and Payment Gateway used by your company. Zuora Payments supports a variety of payment gateways. See Payment Gateways for more information.

## External Payment Method

External Payments are payments made outside of Zuora (not using Zuora Payments). For example, a payment such as a wire transfer is considered an external payment because wire transfers are made outside of Zuora Payments.

The following payment method types are external payment methods at any time:

-   Cash
-   Check
-   Wire Transfer

## None Payment Method

Select None to indicate that there is no payment method associated with the account.

## About the CVV Code

The Card Verification Value (CVV) or Credit Card Security Code (CSC) is the three or four digit number located either on the front or back of a credit or debit card. As a merchant, you can request the CVV/CSC code from cardholders as a way to reduce fraudulent transactions and verify the identity of your customer. The CVV/CSC code can be entered by the end customer and passed to the gateway to authorize the card the first time the payment method is created in Zuora or when a payment method is updated.

This code is not stored by Zuora (and passed for recurring payments). PCI regulations prohibit storing this information to avoid it being accessed by others.
