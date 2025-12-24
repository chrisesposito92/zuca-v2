---
title: "BillingPreviewRun"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/billingpreviewrun"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:11.289Z"
---

# BillingPreviewRun

The BillingPreviewRun object generates a preview of future invoice items for multiple customer accounts through a billing preview run.

A billing preview run asynchronously generates a downloadable CSV file containing a preview of invoice item data for a batch of customer accounts. Alternatively, you can use data source to query Billing Preview Run Result if you do not want a CSV file to be generated.

You can run up to 20 billing preview runs in batches concurrently. A single batch of customer accounts can only have one billing preview run at a time. So you can have up to 20 batches running at the same time. If you create a billing preview run for all customer batches, you cannot create another billing preview run until this preview run is completed.

Note: As of Zuora R181, WSDL version 61.0, the feature formerly known as forecast API was renamed to Billing Preview API. Zuora recommends that you upgrade to this latest version as soon as possible. Download WSDL version 61.0+ to use the Billing Preview API.

## Supported calls

You can use this object with the following calls:

-   create

-   query


To preview invoice items for a single customer account, do not use BillingPreviewRun. Use BillingPreview() instead.

If you have the Invoice Settlement feature enabled, the BillingPreviewRun create() call is not supported. The alternative is to use the Create a billing preview run REST API operation.

## Walkthroughs and use cases

The BillingPreviewRun object gets invoice item previews for multiple customer accounts. To use this object:

1.  Call "create" using the BillingPreviewRun object. Results are generated asynchronously. If setup, a notification is sent on completion.
2.  Call query with the `ResultFileUrl` field of the BillingPreviewRun object to obtain download URL for the results in zipped CSV format. See [Field descriptions of the CSV output file](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/billingpreviewrun/field-descriptions-of-the-csv-output-file) for more information about the generated CSV result file.

## Notifications

You can create email and callout notifications to signal that the billing preview run completed successfully and results are available for download or completed with errors. To create a billing preview run notification and select the following options:

-   Define Notification : Zuora Billing

-   Event Category : Billing Preview RunCompletion

-   Billing Preview Run Status : Completion or Error


See "Create and edit notifications" and "Supported event types" for more information.
