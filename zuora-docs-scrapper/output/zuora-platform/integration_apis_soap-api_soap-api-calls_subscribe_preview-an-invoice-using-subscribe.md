---
title: "Preview an invoice using subscribe()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe/preview-an-invoice-using-subscribe"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:12.203Z"
---

# Preview an invoice using subscribe()

Learn how to preview an invoice using the subscribe() call.

To include taxation items for the corresponding invoices in the result, you must use WSDL version 120 or higher.

1.  Call `subscribe()` , passing the appropriate product rate plan and charge data.
2.  Populate `PreviewOptions` :

    1.  Set `EnablePreviewMode` to `true` .
    2.  Set `NumberOfPeriods` to the number of billing periods to include in the preview invoice, or
    3.  Set `PreviewThroughTermEnd` to preview the invoice through the end of a termed subscription (WSDL 51.0+).

    -   You can only set `NumberOfPeriods` or `PreviewThroughTermEnd` , but not both.

    -   As an alternative to `NumberOfPeriods` or `PreviewThroughTermEnd` , you can set the `InvoiceTargetDate` in the `SubscribeOptions` to preview to a specific date.

    -   If neither `NumberOfPeriods` nor `PreviewThroughTermEnd` nor `InvoiceTargetDate` are specified when `EnablePreviewMode` = `true`, then 1 billing period will be previewed by default.


3.  Zuora returns an `InvoiceData` node in the SubscribeResult , which contains the invoice and resulting invoice items.
