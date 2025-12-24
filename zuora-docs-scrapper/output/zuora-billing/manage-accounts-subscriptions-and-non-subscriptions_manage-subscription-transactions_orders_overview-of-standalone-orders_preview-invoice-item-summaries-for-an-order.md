---
title: "Preview invoice item summaries for an order"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders/preview-invoice-item-summaries-for-an-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:16.394Z"
---

# Preview invoice item summaries for an order

This topic explains how to preview invoice item summaries for an order using synchronous or asynchronous API operations, including details on subtotal, total, tax, and discount amounts.

The Preview an order and Preview an order asynchronously API operations allow you to preview billing information for an order in a synchronous or asynchronous manner, respectively.

To preview the summary of each invoice item for an order, specify the `summarizeInvoiceItem` query parameter to `true` . With this parameter specified, an aggregated `invoiceItemSummary` field is returned in each Invoice object, offering a shortcut to access key billing information.

The `invoiceItemSummary` field provides a forecast of the number of future invoices, and the following information on each invoice:

-   Subtotal amount

-   Total amount

-   Tax amount

-   Discount amount

-   Service period start date and end date.


The following section provides an example of using this parameter to preview the invoice item summaries.

Suppose that you want to preview the billing information and invoice item summaries for a "create subscription" order that contains the following information:

-   The subscription subscribes to a product rate plan (id = 5a1aa0b2d51643b1800677023b14084d) that contains two charges:

    -   Charge A: Annual base price of $1000/year

    -   Charge B: Quarterly base price $10/quarter

-   The subscription account number is A00000135.

-   The subscription's initial term is 12 months.


You want the preview of the results to return synchronously. To achieve this, you can submit a request similar to the following sample. Note that if you want the preview results to return asynchronously, use the `/v1/async/orders/preview` as the endpoint. A job ID will be returned.

curl --location 'https://rest.apisandbox.zuora.com/v1/orders/preview?summarizeInvoiceItem=true' \\ --header 'Authorization: Bearer {your\_token}\\ \--header 'Content-Type: application/json' \\ \--data '{ "orderDate": "2025-01-01", "previewOptions": { "previewTypes": \["BillingDocs"\], "previewThruType": "TermEnd" }, "existingAccountNumber": "A00000135", "subscriptions": \[ { "orderActions": \[ { "type": "CreateSubscription", "createSubscription": { "terms":{ "initialTerm": { "termType": "TERMED", "period": 12, "periodType": "Month" }, "renewalSetting": "RENEW\_TO\_EVERGREEN" }, "subscribeToProducts":\[ { "productRatePlanId": "5a1aa0b2d51643b1800677023b14084d" } \] } } \] } \] }'

If the call succeeds, the returned response will contain an `invoiceItemSummary` section for each invoice. The `invoiceItemSummary` field contains 4 records, one for each quarter.

{ "success": true, "previewResult": { "invoices": \[ { "amount": 1040.00, "amountWithoutTax": 1040.00, "taxAmount": 0.00, "targetDate": "2026-01-01", "invoiceItems": \[ { "serviceStartDate": "2025-01-01", "serviceEndDate": "2025-03-31", "amountWithoutTax": 10.00, "taxAmount": 0.000000000, "chargeDescription": null, "chargeName": "Quarterly price ", "chargeNumber": null, "processingType": "Charge", "productName": "Cloud Service", "productRatePlanChargeId": "b99c7f5a5d284d418e8fcc960d1cdd04", "unitPrice": 10.000000000, "subscriptionNumber": null, "orderLineItemNumber": null, "additionalInfo": { "quantity": 1, "unitOfMeasure": "", "numberOfDeliveries": 0.000000000 } }, { "serviceStartDate": "2025-04-01", "serviceEndDate": "2025-06-30", "amountWithoutTax": 10.00, "taxAmount": 0.000000000, "chargeDescription": null, "chargeName": "Quarterly price ", "chargeNumber": null, "processingType": "Charge", "productName": "Cloud Service", "productRatePlanChargeId": "b99c7f5a5d284d418e8fcc960d1cdd04", "unitPrice": 10.000000000, "subscriptionNumber": null, "orderLineItemNumber": null, "additionalInfo": { "quantity": 1, "unitOfMeasure": "", "numberOfDeliveries": 0.000000000 } }, { "serviceStartDate": "2025-07-01", "serviceEndDate": "2025-09-30", "amountWithoutTax": 10.00, "taxAmount": 0.000000000, "chargeDescription": null, "chargeName": "Quarterly price ", "chargeNumber": null, "processingType": "Charge", "productName": "Cloud Service", "productRatePlanChargeId": "b99c7f5a5d284d418e8fcc960d1cdd04", "unitPrice": 10.000000000, "subscriptionNumber": null, "orderLineItemNumber": null, "additionalInfo": { "quantity": 1, "unitOfMeasure": "", "numberOfDeliveries": 0.000000000 } }, { "serviceStartDate": "2025-10-01", "serviceEndDate": "2025-12-31", "amountWithoutTax": 10.00, "taxAmount": 0.000000000, "chargeDescription": null, "chargeName": "Quarterly price ", "chargeNumber": null, "processingType": "Charge", "productName": "Cloud Service", "productRatePlanChargeId": "b99c7f5a5d284d418e8fcc960d1cdd04", "unitPrice": 10.000000000, "subscriptionNumber": null, "orderLineItemNumber": null, "additionalInfo": { "quantity": 1, "unitOfMeasure": "", "numberOfDeliveries": 0.000000000 } }, { "serviceStartDate": "2025-01-01", "serviceEndDate": "2025-01-01", "amountWithoutTax": 1000.00, "taxAmount": 0.000000000, "chargeDescription": null, "chargeName": "Yearly charge - 1000", "chargeNumber": null, "processingType": "Charge", "productName": "Cloud Service", "productRatePlanChargeId": "fd2b080774b74c568df340a36310ea05", "unitPrice": 1000.000000000, "subscriptionNumber": null, "orderLineItemNumber": null, "additionalInfo": { "quantity": 1, "unitOfMeasure": "", "numberOfDeliveries": 0.000000000 } } \], "invoiceItemSummary": \[ { "previewInvoiceSequence": 1, "subTotal": 1010.00, "discountAmount": 0.000000000, "taxAmount": 0.000000000, "total": 1010.000000000, "servicePeriodStartDate": "2025-01-01", "servicePeriodEndDate": "2025-03-31" }, { "previewInvoiceSequence": 2, "subTotal": 10.00, "discountAmount": 0.000000000, "taxAmount": 0.000000000, "total": 10.000000000, "servicePeriodStartDate": "2025-04-01", "servicePeriodEndDate": "2025-06-30" }, { "previewInvoiceSequence": 3, "subTotal": 10.00, "discountAmount": 0.000000000, "taxAmount": 0.000000000, "total": 10.000000000, "servicePeriodStartDate": "2025-07-01", "servicePeriodEndDate": "2025-09-30" }, { "previewInvoiceSequence": 4, "subTotal": 10.00, "discountAmount": 0.000000000, "taxAmount": 0.000000000, "total": 10.000000000, "servicePeriodStartDate": "2025-10-01", "servicePeriodEndDate": "2025-12-31" } \] } \] } }
