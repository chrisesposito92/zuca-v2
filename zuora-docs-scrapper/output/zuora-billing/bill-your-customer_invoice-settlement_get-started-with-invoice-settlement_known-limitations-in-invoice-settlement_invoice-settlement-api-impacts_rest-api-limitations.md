---
title: "REST API limitations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement/invoice-settlement-api-impacts/rest-api-limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:16.247Z"
---

# REST API limitations

If you have the Invoice Settlement feature enabled, REST API operations have the following known limitations.

| Operation/Field | Limitations |
| --- | --- |
| SecondPaymentReferenceId field | You can use the Create payment operation to create external payments, but the SecondPaymentReferenceId field cannot be passed during the process. This field indicates the transaction ID returned by the payment gateway if an additional transaction for the payment exists. |
| SourceType | You can use the following operations to retrieve refund information, but the SourceType field is not returned in the response body, which indicates whether the refund is to refund a payment or a credit memo.Get all refundsGet refund |
| Source and SourceName fields | You can use the Get payments and Get payment operations to retrieve payment information, but the Source and SourceName fields are not returned in the response body.Source indicates how the payment was created, whether through the API, manually, import, or payment run.SourceName indicates the payment run number or file name. |
