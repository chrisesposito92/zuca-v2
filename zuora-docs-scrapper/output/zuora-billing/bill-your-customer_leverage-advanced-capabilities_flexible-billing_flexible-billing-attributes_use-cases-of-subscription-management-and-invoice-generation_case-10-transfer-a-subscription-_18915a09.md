---
title: "Case 10: Transfer a subscription with its bill-to contact already specified to a destination invoice account"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-10-transfer-a-subscription-with-its-bill-to-contact-already-specified-to-a-destination-invoice-account"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:15.098Z"
---

# Case 10: Transfer a subscription with its bill-to contact already specified to a destination invoice account

Explains the process of transferring a subscription with a pre-specified bill-to contact to a new invoice account, detailing the necessary steps for updating or clearing the bill-to contact and payment terms during the transfer.

When a subscription with the `billToContactId`field already specified is transferred to a destination invoice account, the `billToContactId`field must be either specified to a bill-to contact under the destination invoice account or be cleared to complete the invoice owner transfer. Clearing the `billToContactId`field is implemented by setting the`clearingExistingBillToContact`field to `true`.

During the invoice owner transfer, the `paymentTerm` field of the subscription can also be specified or cleared. Clearing the `paymentTerm` field is implemented by setting the`clearingExistingPaymentTerm`field to `true`.

As listed in the table below. Before the invoice owner transfer, a subscription S001 is originally created under account A00001. Steve America is specified as the bill-to contact of account A00001, and the default payment term of account A00001 is Net 30. Tom Lee is specified as the bill-to contact of the subscription S001, and the payment term of the subscription S001 is specified as Net 45. During the invoice owner transfer, an owner transfer order action is created with the destination invoice account set as A00002, the `billToContactId`field of the subscription S001 is specified as Richard Li under account A00002, and the `paymentTerm` field of the subscription S001 is specified as Net 50. After the invoice owner transfer, the subscription S001 is transferred to the destination invoice account A00002. The payment term of the subscription S001 is Net 50 and the bill-to contact is Richard Li. Thereby, Richard Li under the destination invoice account A00002 will be invoiced.

| Before transfer | After transfer |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account or Subscription | Bill To Contact | Payment Term | Account or Subscription | Invoice Number | Bill To Contact | Payment Term |
| A00001 | Steve America | Net 30 | A00002 | N/A | N/A | N/A |
| S001 | Tom Lee | Net 45 | S001 | INV001 | Richard Li | Net 50 |
