---
title: "Data collection changes"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing_1/data-collection-changes"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:38.968Z"
---

# Data collection changes

Explore the changes in data collection and validation processes in Zuora Revenue after enabling the Billing - Revenue Integration feature, including extended data structures and new transaction handling.

To support various subscription scenarios in Zuora Billing, the following changes happen in Zuora Revenue after the Billing - Revenue Integration feature is enabled, which will impact the data collection and validation process:

-   The data structure for RC lines is extended to support more subscription-based fields.

-   The CM-C (invoice cancelation) transaction lines can be collected without being associated with an invoice line.

-   The RSTRCT\_SO\_VAL\_UPD field is added for SO transaction type to restrict updating some amount fields of the SO line for usage and evergreen subscriptions.

-   When SO update transaction is uploaded to Zuora Revenue, it is no longer mandatory for the contractual value after the amendment to be greater than the total billed amount.


See the following sections for more details.

## Extended data structure for RC lines

Previously in Zuora Revenue, revenue contracts are based on sales order (SO) lines because SO is the most frequently used term in ERP systems.

To provide a seamless experience for Zuora Billing customers, data structures for revenue contract lines in Zuora Revenue are extended based on the terminology of subscriptions, amendments, and charges. When transactions are uploaded to Zuora Revenue, the following fields can be supported:

-   Subscription Name

-   Subscription Version

-   Subscription Start Date

-   Subscription End Date

-   Subscription Owner

-   Invoice Owner

-   Rate Plan Name

-   Rate Plan Charge #

-   Rate Plan Charge Name

-   Rate Plan Charge Version

-   Rate Plan Charge Model

-   Rate Plan Charge Type

-   Rate Plan Charge Trigger Event

-   Rate Plan Charge Segment

-   Rate Plan Charge Id

-   Original Rate Plan Charge Id

-   Subscription Type

-   Charge Level

-   Amendment Type

-   Amendment Reason

-   Ramp Deal Reference

-   Billing Complete

-   Average Pricing Method

-   Parent Charge Number

-   Parent Charge Segment

-   Price Format

-   Subscription Term Start Date

-   Subscription Term End Date


## Support to associate CM-C transaction with SO line

Previously in Zuora Revenue, the CM-C (invoice cancelation) transaction line must be associated with an invoice, which means the original invoice ID must be specified for the CM-C line to be uploaded to Zuora Revenue.

In Zuora Billing, there are cases when bill runs can generate credit memos that are not necessarily associated with invoices. To support this scenario, after the Billing - Revenue Integration feature is enabled, the input requirement of providing the original invoice ID for the CM-C line is removed. It means the Original Invoice ID field is no longer a mandatory field for CM-C transactions. Instead, the CM-C line can be associated with the original SO line by specifying the SO line ID. The revenue reversal will start from the last invoice backwards. If the last invoice is fully consumed, it will go to the penultimate invoice, and so on.

In the following example, the SO line C-00001.1 is created for a termed subscription, which is effective from January 1 to December 15, 2019.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Quantity | Contractual Value | Start Date | End Date | SO Line Id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1150 | 01-Jan-2019 | 15-Dec-2019 | C-00001.1 |

It is assumed the customer is billed annually. After the bill run, an invoice is created for $1200. The contractual value of the SO line is increased to $1200 based on the overstated invoice.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Quantity | Contractual Value | Start Date | End Date | SO Line ID | Invoice Line ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1200 | 01-Jan-2019 | 15-Dec-2019 | C-00001.1 |  |
| INV | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-00001.1 | INV1.1 |

In the next bill run, the charge segment is identified as over-billed by Zuora Billing. Then, a proration credit of $50 is generated for the period from December 16 to December 31, 2019. This proration credit is collected by Zuora Revenue as the CM-C transaction line with reference to the charge segment or the SO line ID. It is not necessary for the CM-C line to be associated with an invoice directly. After the CM-C line is collected, the contractual value of the SO line is decreased to $1150 again.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Quantity | Contracual Value | Start Date | End Date | SO Line ID | Invoice Line ID | SO Reference(Charge # & Charge Segment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1150 | 01-Jan-2019 | 15-Dec-2019 | C-00001.1 |  |  |
| INV | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-00001.1 | INV1.1 | C-00001.1 |
| CM-C | S-00001 | 1 | C-00001 | 1 | 1 | 10 | -50 | 16-Dec-2019 | 31-Dec-2019 | C-00001.1 | CM1.1 | C-00001.1 |

To support the Zuora Billing scenarios of usage charges and evergreen subscriptions, the RSTRCT\_SO\_VAL\_UPD field is added for the SO transaction type. When this field is set to Y, Zuora Revenue will not update the Ext. Sell Price, Ext. List Price, and Order Quantity of the original charge segment for charge segment amendments.

For example, the contractual amount of the following usage charge segment is 0 when the subscription is created.

| Charge Model | Charge # | Charge Segment | Quantity | Contractual Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- |
| Usage | C-00001 | 1 | 10 | 0 | 01-Jan-2019 | 31-Dec-2019 |

The following invoice is created after the bill run.

| Invoice # | Invoice Line Id | Invoice Date | Invoice Quantity | Invoice Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- |
| INV#1 | 10001.1 | 01-Jan-2019 | 100 | $1200 | 01-Jan-2019 | 31-Dec-2019 |

The invoice is considered as overage because the invoice amount is greater than the original SO line amount. The original SO line is updated based on the invoice amount as follows:

|  |
| --- |

When an amendment occurs to the original usage charge segment to increase the price from March 1, 2019. A new SO line is created for this amendment effective from March 1, 2019. The Ext. Sell Price, Ext. List Price, and Quantity of the original SO line remain the same.

| Charge Model | Charge # | Charge Segment | Quantity | Contractual Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- |
| Usage | C-00001 | 1 | 100 | $1200 | 01-Jan-2019 | 31-Dec-2019 |

The revenue recognized so far will not be reversed because this original SO line value is not changed.

Previously in Zuora Revenue, when a SO update occurs, if the contractual amount after the amendment is less than the total billed amount, this SO update transaction cannot pass the data validation process and will be marked as a failure. After the Billing - Revenue Integration feature is enabled, this data validation rule is removed. The SO update line that results in a lower contractual value than the total billed amount can be collected and processed by Zuora Revenue.

For example, the following SO line is created for a new subscription and it is completely billed for $1200.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Quantity | Contractual Value | Start Date | End Date | SO Line Id | Invoice Line Id | SO | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-00001.1 | C-00001.1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-00001 | 1 | C-00001 | 1 | 1 | 10 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-00001.1 | C-00001.1 |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

In the March-19 period, an amendment occurs to the original charge segment to reduce the quantity to 8 effective from March 1, 2019, which cancels the remaining value of the original subscription by $200. For this type of amendment, Zuora Revenue will update the original SO line and then create a new SO line as follows. The contractual amount of the original SO line after being updated is $200, which is less than the previously billed amount ($1200).

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Quantity | Contractual Value | Start Date | End Date | SO Line Id | Invoice Line Id | SO (Updated) | S-00001 | 1 | C-00001 | 2 | 1 | 10 | 200 | 01-Jan-2019 | 28-Feb-2019 | C-00001.1 |  | SO (New segment) | S-00001 | 1 | C-00001 | 2 | 2 | 8 | 800 | 01-Mar-2019 | 31-Dec-2019 | C-00001.2 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO (Updated) | S-00001 | 1 | C-00001 | 2 | 1 | 10 | 200 | 01-Jan-2019 | 28-Feb-2019 | C-00001.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| SO (New segment) | S-00001 | 1 | C-00001 | 2 | 2 | 8 | 800 | 01-Mar-2019 | 31-Dec-2019 | C-00001.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

In this case, Zuora Revenue will create a CM-C line for the variance of $1000 to reverse the billed revenue. This type of CM-C lines is considered as the system-generated credit memo, not a billing document that is created in the upstream system. For system-generated credit memos, an initial entry will not be created to avoid adjusting the liability balance and the AR balance is not impacted.
