---
title: "PaymentMethod"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/paymentmethod"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:40.168Z"
---

# PaymentMethod

The PaymentMethod object represents payment method details associated with a customer account.

Payment methods are the ways in which customers pay for their subscriptions. Your customers can choose a payment method from your company's list of preferred payment methods.

Electronic payment methods include credit cards, debit cards, bank transfers, and third-party processors, such as PayPal. Non-electronic methods, which must be made outside of Zuora Payments, are called external methods, and include checks, cash, and wire transfers.

You define payment methods in the web-based UI. The methods that you define are available for you to use for individual customer accounts in the API.

## Supported payment methods

| Payment method | Description |
| --- | --- |
| ACH | An Automated Clearing House (ACH) payment is a form of electronic funds transfer or bank transfer that provides a secure, efficient method of receiving payments through the ACH Network.ACH is also called direct debit. |
| Bank Transfer | This payment method includes the following types:SEPA. European Union payment integration for bank transfers in Euro denomination.Direct Debit UK (BACS)AU Direct Entry (BECS)Direct Debit DK (Betalingsservice)Direct Debit SE (Autogiro)Direct Debit CH (Lastschrift)Direct Debit NZ (BECS)AutomatischIncasso (NL)Lastschrift DE (Germany)Demande De Prelevement (FR)Domicil (Belgium)RID (Italy)Orden De Domiciliacion (Spain) |
| Cash | Cash is money in the physical form of currency, such as bank notes or coins. |
| CC Reference Transaction | A credit card reference transaction reuses existing credit card information. If you need to recharge a credit card and you are not storing the credit card information in your local database, then you can perform a CC reference transaction. This method of payment is available if PayPal is used as the payment gateway. |
| Check | A check is a negotiable instrument instructing a financial institution to pay a specific amount of a specific currency from a specified demand account held in the depositor's name with that institution. |
| Credit Card | Purchasers can use credit cards to buy goods based on the card holder’s promise to pay for these goods and services. Zuora support Visa, Mastercard, American Express and Discover cards. |
| Debit Card | A debit card is also called a banking card, check card or ATM card. It is used as an alternative to cash when making purchases. The funds for a debit card purchase are withdrawn directly from the bank account. Zuora support Signature (or PIN-less) debit cards that have a Visa or Mastercard logo. |
| PayPal | With PayPal, customers can send payments securely online using a stored value account that is linked to a credit card, Signature (PINless) debit card, or bank account. |
| Wire Transfer | A wire transfer is a method of transferring money from one person or institution to another. A wire transfer can be made from one bank account to another bank account or through a transfer of cash at a cash office. |
| Other | Use this option for other payment methods. |

The SOAP API does not support the following payment method types.

-   Adyen Apple Pay

-   Adyen Google Pay

-   Custom payment method type


## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   update()

-   delete()
