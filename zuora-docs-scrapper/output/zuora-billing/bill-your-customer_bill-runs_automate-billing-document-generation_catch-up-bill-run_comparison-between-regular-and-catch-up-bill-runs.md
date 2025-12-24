---
title: "Comparison between regular and catch-up bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run/comparison-between-regular-and-catch-up-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:13.064Z"
---

# Comparison between regular and catch-up bill runs

Zuora Billing supports regular and catch-up bill runs for data migration, with distinct differences in invoice generation and usage.

Zuora Billing supports two types of bill runs: regular bill runs and catch-up bill runs. You can use both bill runs for data migration. The major difference is that regular bill runs generate all invoices and invoice items, while catch-up bill runs automatically zero out all previous charges without generating invoices.

You can create both regular bill runs and catch-up bill runs on the Create Bill Run page through the Zuora UI. You can use catch-up bill runs only for data migration instead of regular billing.

The following table lists the comparison between regular bill runs and catch-up bill runs.

|  | Regular bill runs | Catch-up bill runs |
| --- | --- | --- |
| Requiring the Create Bill Runs user permission | Yes | Yes |
| Requiring the Manage Billing Settings permission | No | Yes |
| Option of the Enable catch-up bill run? billing rule | No | Yes |
| Invoice generation | Yes | No |
| Support for scheduled bill runs | Yes | No |
| Support for ad hoc bill runs | Yes | Yes |
| Support for canceling bill runs | Yes | No |
| Supported by the Zuora UI | Yes | Yes |
| Supported by the Zuora API | Yes | Yes |

## Catch-up bill run execution in data migration

Assume that your customer A001 has one subscription with number S001, and you want to migrate the data into Zuora.

-   The contract effective date of the subscription is 1 March 2017. The first term starts on 1 March 2017. The term length is 12 months, with a monthly billing frequency.

-   The start date of the current term is 1 March 2017. The migration cutover date is 30 June 2023. Therefore, all the invoices generated before 1 July 2023 are billed in the legacy system.


You can choose to create either a catch-up bill run or a regular bill run to migrate the data into Zuora. Two approaches have different bill run configurations and bill run execution results.

If you choose to migrate data through a catch-up bill run, you have to click Catch-Up Bill Run and set Target Date to 06/30/2023 in the Bill Run Dates section of the Create Bill Run page through the Zuora UI.

After the catch-up bill run is complete, the execution result is as follows:

-   No invoice is generated for customer A001.

-   The charge through dates on subscription S001 are set to 06/30/2023.

-   The next bill in Zuora will be generated on 1 July 2023, covering the period from 1 July 2023 to 31 July 2023.


If you choose to migrate data through a regular bill run, you have to click Regular Bill Run and set Target Date to 06/30/2023 in the Bill Run Dates section of the Create Bill Run page through the Zuora UI.

After the regular bill run is complete, the execution result is as follows:

-   One invoice with 76 invoice items is generated for customer A001.

    -   10 invoice items for 2017, respectively with the service period of:

        -   03/01/2017 to 03/31/2017

        -   04/01/2017 to 04/30/2017

        -   05/01/2017 to 05/31/2017

        -   06/01/2017 to 06/30/2017

        -   07/01/2017 to 07/31/2017

        -   08/01/2017 to 08/31/2017

        -   09/01/2017 to 09/30/2017

        -   10/01/2017 to 10/31/2017

        -   11/01/2017 to 11/30/2017

        -   12/01/2017 to 12/31/2017

    -   12 invoice items for each year from 2018 to 2022 Each invoice item has a service period ranging from the first day to the last day of a complete month in chronological order.

    -   6 invoice items for 2023, respectively with the service period of:

        -   01/01/2023 to 01/31/2023

        -   02/01/2023 to 02/03/2023

        -   03/01/2023 to 03/31/2023

        -   04/01/2023 to 04/30/2023

        -   05/01/2023 to 05/31/2023

        -   06/01/2023 to 06/30/2023

-   All of the invoice items are periods that were billed out of the legacy system.

-   The charge through dates on subscription S001 are set to 06/30/2023.

-   The invoice with 76 invoices must be written off to ensure that your customers do not receive any duplicate invoices. You can use one of the following API operations to write off invoice balance:

    -   [Create an external payment](https://www.zuora.com/developer/api-references/api/operation/POST_CreatePayment/)

    -   [Create a standalone credit memo from an invoice](https://www.zuora.com/developer/api-references/api/operation/POST_CreditMemoFromInvoice/)

    -   [Write off an invoice](https://www.zuora.com/developer/api-references/api/operation/PUT_WriteOffInvoice/)

    -   [CRUD: Create an invoice item adjustment](https://www.zuora.com/developer/api-references/older-api/operation/Object_POSTInvoiceItemAdjustment/)(not recommended)

-   The next bill in Zuora will be generated on 1 July 2023, covering the period from 1 July 2023 to 31 July 2023.
