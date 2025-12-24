---
title: "Configurable Payment Retry tabs"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/payment/configurable-payment-retry-dashboard/configurable-payment-retry-tabs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:36.349Z"
---

# Configurable Payment Retry tabs

Descriptions of the Configurable Payment Retry tabs

The following table provides descriptions of the Configurable Payment Retry tabs.

| Overview | This tab contains metrics of the chosen timeframe (up to three months) in graphs and quick stat cards. In the Gateway Response Codes, you can view the top errors for failing payment retries. You can link all the displayed graphs and metrics to raw data in the Payments, Payments Retry, and Retry Log tabs. |
| --- | --- |
| Payments | This displays the raw data corresponding to all the payments done in the chosen timeframe. |
| Payment Runs | This displays details of the payment runs that were started in the chosen timeframe. |
| Retry Log | This displays the retry details of all billing documents which were re-tried in the chosen timeframe. |

On the Gateway Error Response in the Overview tab, you can view gateway processing errors and top trending collection issues. The table displays the below details:

| Columns | Definition |
| --- | --- |
| Count | The number of payments that have failed with a given combination of Gateway and Code and Description.Click on a particular Count in Gateway Error Response to view the list of payments that have failed with a given combination of Gateway and Code and Description. |
| Gateway | The failed payment gateway. |
| Code | The reason code for the payment failed. |
| Description | The description of the failed payment. |
| Decline Type | The decline type that was set in the CPR response code mapping.Note:There are times when the decline type of a particular response code is changed within a given month, in which case only the latest decline type is displayed in this table. However, this does not affect any other details in this table. |
| Number of Invoices | The total unique number of invoices that failed with a given combination of Gateway and Code and Description. |
| Collection Rate | The percentage of documents which failed on the first retry with a given combination of Gateway + Code + Description but were eventually collected successfully (NOTE: this doesn't take into account the documents that were collected externally (outside CPR))Note:This does not include documents collected externally (outside CPR). |

On the Payments tab, you can view the below details corresponding to data used to build the charts and stat cards: You can filter this data further based on any column value.

-   Payment Number

-   Status

-   Gateway

-   Error Code

-   Error Description

-   Attempt Number

-   Payment Total

-   Customer group


On the Payment Runs tab, you can view the below details corresponding to data used to build the charts and stat cards: You can filter this data further based on any column value.

-   Payment Run

-   Start Date

-   End Data

-   Payment Processed

-   Amount Collected

-   Payment Success


On the Retry Log tab, you can view the below details corresponding to data used to build the charts and stat cards: You can filter this data further based on any column.

-   Account Number

-   Document Number

-   Document Retry Status

-   Customer Group

-   Attempt Number

-   Next Attempt
