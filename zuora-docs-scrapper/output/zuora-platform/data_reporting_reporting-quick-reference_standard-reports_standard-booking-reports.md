---
title: "Standard Booking reports"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-quick-reference/standard-reports/standard-booking-reports"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:07.205Z"
---

# Standard Booking reports

This reference lists the outcomes, drivers, and actions of Standard Booking reports

## Outcomes

| Report | Description |
| --- | --- |
| Active Subscribers (As of today) | A count of active subscribers by account currency, as of today. An active subscriber is defined as an account with at least one effective rate plan charge. Because each account can only have a single account currency, the total number of active subscribers is the sum of the number of active subscribers across all account currencies.This report is based on the Rate Plan Charge data source. |
| Booking Report | The booking amount, which indicates the value of a contract signed with a prospective customer for a given period of time. |
| Booking VS Billing Variance Report | A comparison between the total booking and total billing amounts for the same sales order line item. |
| MRR Changes Forecast Report | The forecasted monthly recurring revenue (MRR) changes with different change types, such as new MRR and churn MRR, for a given period of time. The default setting is one year forecast from today.Note:For Evergreen subscription, the charges without end date will be set to 9999-Dec-31, by default.For Auto-renew subscription, the recurring charges end date will be set to 9999-Dec-31, by default. |
| MRR Forecast Report | The forecasted monthly recurring revenue (MRR) for a specific date. You need to update the date in the following report filters to meet your needs:MRR Forecast: StartDateMRR Forecast: EndDateThe date in these filters must be the same.Note:For Evergreen subscription, the charges without end date will be set to 9999-Dec-31, by default.For Auto-renew subscription, the recurring charges end date will be set to 9999-Dec-31, by default. |
| Total Contracted Billing (TCB) | The total contracted billing (TCB) for all time. Only available if you have the Order Metrics feature enabled.This report is based on the Order Tcb data source. |
| Total Extended List Price (ELP) | The total extended list price (ELP) for all time. Only available if you have the Order Metrics feature enabled.This report is based on the Order Elp data source.Note: If your Zuora tenant was provisioned after July 9, 2019, this standard report is not available. |
| Total MRR | The total gross monthly recurring revenue (MRR) as of today.The Total MRR report is based on the Rate Plan Charge data source, which does not include discounts. If you want to include discounts, use the Total Net MRR report. Therefore, you might see different results when comparing the Total MRR report to the Total Net MRR report. |
| Total Net MRR | The total monthly recurring revenue (MRR) as of today, net of subscription and charge level discounts. Only available if you have the Order Metrics feature enabled.The Total Net MRR report is based on the Order Mrr data source. You might see different results when comparing the Total Net MRR report to the Total MRR report because the Total MRR report is based on the Rate Plan Charge data source, which does not include discounts. |
| Total Order Quantity by Unit of Measure | The total order quantity by unit of measure, as of today. Only available if you have the Order Metrics feature enabled.This report is based on the Order Quantity data source. |

## Drivers

| Report | Description |
| --- | --- |
| Cancelled CMRR | The contracted monthly recurring revenue (CMRR) lost through canceled subscriptions over time. This report only considers charges where the charge end date condition is "Align to Subscription End."This report is based on the Rate Plan Charge data source, which does not include discounts. |
| Cancelled subscriptionsFormerly, Churned Subscriptions | A count of subscriptions that were canceled each month.This report is based on the Subscription data source. |
| CMRR by account | The current contracted monthly recurring revenue (CMRR) by customer account.This report is based on the Rate Plan Charge data source, which does not include discounts. |
| CMRR by product | The current contracted monthly recurring revenue (CMRR) by product.This report is based on the Rate Plan Charge data source, which does not include discounts. |
| ELP Changes | The change in extended list price (ELP) each month, broken down by order action type. Only available if you have the Order Metrics feature enabled.This report is based on the Order Elp data source.Note: If your Zuora tenant was provisioned after July 9, 2019, this standard report is not available. |
| MRR by account | The total gross monthly recurring revenue (MRR) by account, as of today.The MRR by account report is based on the Rate Plan Charge data source, which does not include discounts. Use the Net MRR by account report if you want to include discounts. You may see different results when comparing the MRR by account report to the Net MRR by account report. |
| MRR by productFormerly, Today's MRR by Product | The total gross monthly recurring revenue (MRR) by product, as of today.This report is based on the Rate Plan Charge data source, which does not include discounts. |
| Net MRR by account | The total monthly recurring revenue (MRR) by account, as of today, net of subscription and charge level discounts. Only available if you have the Order Metrics feature enabled.The Net MRR by account report is based on the Order Mrr data source. You may see different results when comparing the Net MRR by account report to the MRR by account report because the MRR by account report is based on the Rate Plan Charge data source, which does not include discounts.In the Order Mrr data source, the account that is joined to an Order Mrr object is the invoice owner account, not necessarily the subscription owner account. This means that you may see different results when comparing the Net MRR by account report to the MRR values displayed on account pages in the Zuora UI. |
| Net MRR by product | The total monthly recurring revenue (MRR) by product, as of today, net of subscription and charge level discounts. Only available if you have the Order Metrics feature enabled.The Net MRR by product report is based on the Order Mrr data source. You may see different results when comparing the Net MRR by product report to the MRR by product report because the MRR by product report is based on the Rate Plan Charge data source, which does not include discounts. |
| New CMRR | The contracted monthly recurring revenue (CMRR) added as a result of new subscriptions.This report is based on the Rate Plan Charge data source, which does not include discounts. |
| New subscriptions | A count of new subscriptions each month.This report is based on the Subscription data source. |
| Subscription changes | The number of subscriptions affected by each type of amendment each month.This report is based on the Rate Plan data source. |
| Subscription retention by cohort | For each subscription cohort (a group of subscriptions starting in the same month), this report tracks the number of subscriptions that were canceled in the following months and the number of subscriptions that remain active.This report is based on the Subscription data source. |
| Subscription term length | The average initial and renewal terms lengths for active subscriptions, grouped by the month in which the subscription started.This report is based on the Subscription data source. |
| TCB Changes | The change in total contracted billing (TCB) each month, broken down by order action type. Only available if you have the Order Metrics feature enabled.This report is based on the Order Tcb data source. |
| Total MRR Changes (in Last Month) | Breakdown of the changes in monthly recurring revenue (MRR) in the previous month, net of subscription and charge level discounts.This report is based on the Order Mrr data source. |

## Actions

| Report | Description |
| --- | --- |
| Accounts with subscriptions to be canceled in the next 30 days | A list of all accounts with subscriptions that have a cancelation date in the next 30 days.This report is based on the Subscription data source. |
| Accounts with subscriptions up for renewal in next 30 days | A list of all accounts with subscriptions that have a renewal date in the next 30 days.This report is based on the Subscription data source. |
