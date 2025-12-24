---
title: "Key data points"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-clca-report/key-data-points"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:37.508Z"
---

# Key data points

The data points that are important to the Revenue from Prior/Current CA/CL Report and how to derive these data points

When the Revenue from Prior/Current CL/CA report is generated, the following data points must be determined and derived:

-   The beginning balance for the current period/quarter/year

-   The billings and initial adjustment entries for the current period/quarter/year

-   The net revenue that is recognized in the current period/quarter/year

-   The billings for the right-to-bill lines

-   The net CA/CL additions

-   The net CA/CL revenue


## Beginning balance

The beginning balance of the current period/quarter/year is derived from the ending balance of the prior period/quarter/year, which is based on the following formula:

Ending balance = Beginning balance + Additions - Releases

For example, a subscription of $1200 is booked in the JAN-19 period and is billed for one quarter. In Zuora Revenue, the RC Rollforward Report for the JAN-19 period is generated as follows. The term *Net* considers the revenue from both the Contract Liability and the Adjustment Liability balance sheet accounts. Billing happens monthly.

| Accounting period | Net beginning balance | Net additions | Net release | Net ending balance |
| --- | --- | --- | --- | --- |
| JAN-19 | 0 | 300 | 100 | 200 |

After the JAN-19 period is closed, the net ending balance from the prior period is carried forward to the FEB-19 period as the net beginning balance. So, the RC Rollforward Report for the FEB-19 period is as follows:

| Accounting period | Net beginning balance | Net additions | Net release | Net ending balance |
| --- | --- | --- | --- | --- |
| FEB-19 | 200 | 0 | 100 | 100 |

## Net additions

The net additions include the overall billings that are associated with the transaction line or the revenue contract. In Zuora Revenue, an addition is an initial entry or initial reporting entry. The net of these entries is net additions, which will be used to calculate the ending balance for the accounting period.

These accounting entries are created in Zuora Revenue in one of the following circumstances:

-   When an invoice or a credit memo is processed in Zuora Revenue, an initial entry will be created against the Contract Liability balance sheet account.

-   When revenue allocation is performed within the revenue contract, an initial reporting entry will be created against the Adjustment Liability balance sheet account.


For example, a subscription is billed for $600 in the JAN-19 period and the subscription is eligible for allocation. Based on the SSP and relative allocation, the carve-out revenue is ($55). The following accounting entries are created in Zuora Revenue. The net of these entries will be net additions, which is $545 in this example.

| Accounting period | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- |
| JAN-19 | Contract Liability |  | 600 | Yes | Yes |
|  | Adjustment Liability(carve-out line) | -55 |  | No | Yes |

In the following example, a subscription has two products. One product has the right to bill and the other does not. This subscription is billed for the JAN-19 period.

| Product | Billings | Right to Bill |
| --- | --- | --- |
| Digital Services | $1200 | N |
| SaaS Plan | $600 | Y |

The total billings for this subscription is $1800. When billings are processed in Zuora Revenue, the following accounting entries are created. The net of these entries will be net additions, which is $1800 in this example.

| Accounting period | Product | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- | --- |
| JAN-19 | Digital Services | Contract Liability |  | 1200 | Yes | No |
|  | SaaS Plan | Contract Liability |  | 600 | Yes | No |

## Net release

The term *release* in the RC Rollforward report indicates the revenue recognized in the current period/quarter/year against the transaction line within the revenue contract. The net release value can be reconciled with the overall revenue activities in the Waterfall report for the given period/quarter/year.

When the net release is calculated, revenue from the Contract Liability and Adjustment Liability balance sheet accounts need to be included. Besides, the unbilled revenue that is booked for the Unbilled AR balance sheet account must be excluded.

For example, a subscription for 6 months is billed for $600 in the JAN-19 period. This subscription is eligible for allocation. Based on SSP and relative allocation, the carve-out revenue is ($55). The revenue released in JAN-19 is $100. The following accounting entries are created in Zuora Revenue. The Net Release for the JAN-19 period is -90.83 (= Cr-Dr = 9.17-100).

| Accounting period | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- |
| JAN-19 | Contract Liability | 100 |  | No | No |
|  | Adjustment Liability(carve-out line) |  | 9.17(=55/6) | No | No |

## Unbilled AR billings

The unbilled AR billings is to calculate the billings that are associated with the right-to-bill transaction lines. To calculate unbilled AR billings, the Contract Liability balance sheet account needs to be considered.

Unbilled AR Billings = Billings from right-to-bill transaction lines

The unbilled AR billings amount can be calculated by sum up the Unbilled Billings column from the right-to-bill transaction lines in the Unbill RollForward Report.

For example, when revenue is released for a right-to-bill transaction line and billing has not occurred, the accounting entries are created as follows:

| Accounting period | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- |
| JAN-19 | Unbilled AR | 100 |  | No | No |
|  | Revenue |  | 100 | No | No |

However, this is not the true Contract Liability balance. When billing occurs in January, Zuora Revenue will perform the unbilled conversion to offset unbilled AR balance and move it to Contract Liability. The accounting entries are created as follows:

| Accounting period | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- |
| JAN-19 | Contract Liability |  | 100 | Yes | No |
|  | Unbilled AR |  | 100 | No | No |
|  | Revenue | 100 |  | No | No |
|  |  |  |  |  |  |
|  | Contract Liability | 100 |  | No | No |
|  | Revenue |  | 100 | No | No |

The Unbilled AR Billings will be 100 for this example.

## Net CA/CL addition

The net CA/CL addition is the true billings that are associated with the transaction lines with the Right to Bill flag set to N. This amount is calculated based on Net Additions and Unbilled AR Billings.

Net CA/CL Additions = Net Additions - Unbilled AR Billings

## Net CA/CL release

The net CA/CL release is the revenue that is recognized from the Contract Liability and Adjustment Liability balance sheet accounts in the current period. The net CA/CL release excludes the unbilled revenue that is recognized from the Unbilled AR balance sheet account in the current period. With net CA/CL release, you can easily tell the true revenue from the Unbilled AR account and the revenue from the Contract Liability account for disclosure purposes. The Net CA/CL Release can be calculated based on the following formula:

Net CA/CL Release = Net Release - Unbilled AR Billings

For example, a subscription has two products. One has the right to bill and the other does not.

| Product | Bookings | Billings | Start Date | End Date | Right to Bill |
| --- | --- | --- | --- | --- | --- |
| Digital Services | $1200 | $300 | 01-Jan-2019 | 31-Dec-2019 | N |
| SaaS Plan | $600 | $300 | 01-Jan-2019 | 30-Jun-2019 | Y |

When this subscription is billed ($300 for each line) for the JAN-19 period, the accounting entries are created in Zuora Revenue as follows:

| Accounting period | Product | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- | --- |
| JAN-19 | Digital Services | Contract Liability |  | 300 | Yes | No |
|  | SaaS Plan | Contract Liability |  | 300 | Yes | No |

The total billings for the subscription is $600 and the total additions is $600. When revenue is released, the following accounting entries are created:

| Accounting period | Product | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- | --- |
| JAN-19 | Digital Services | Contract Liability | 100 |  | No | No |
|  |  | Revenue |  | 100 | No | No |
|  | SaaS Plan | Contract Liability | 50 |  | No | No |
|  |  | Revenue |  | 50 | No | No |

When net CA/CL release is calculated, revenue from the right-to-bill transaction must be excluded. So, only the Digital Services line is considered. The net CA/CL release is $150 for this example.

When the right-to-bill transaction line is released before billing, the release is against the Unbilled account.

| Accounting period | Product | Balance sheet | Dr | Cr | Initial entry | Initial reporting entry |
| --- | --- | --- | --- | --- | --- | --- |
| JAN-19 | SaaS Plan | Unbill | 50 |  | No | No |
|  |  | Revenue |  | 50 | No | No |

## Unbilled AR revenue

The Net Revenue from the Waterfall report comes from CL, CA, and the Unbilled AR revenue. The Total Release from the RC Rollforward report comes from CL and CA. So, the Unbilled AR Revenue can be calculated based on the following formula:

Unbilled AR Revenue = Net Revenue (Waterfall) - Total Release (RC Rollforward)

The Unbill RollRollforward Report can also be used to derive Unbilled AR Revenue, which equals the sum of unbilled revenue from right-to-bill transaction lines.

Unbilled AR Revenue = Unbilled revenue from right-to-bill transaction lines \= Unbilled Revenue (From right-to-bill transaction lines in Unbill Rollforward Report)
