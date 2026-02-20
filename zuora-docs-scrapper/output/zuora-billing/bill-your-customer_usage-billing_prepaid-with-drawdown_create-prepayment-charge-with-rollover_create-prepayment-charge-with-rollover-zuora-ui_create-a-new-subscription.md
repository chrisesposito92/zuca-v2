---
title: "Create a new subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-prepayment-charge-with-rollover/create-prepayment-charge-with-rollover---zuora-ui/create-a-new-subscription"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:02.175Z"
---

# Create a new subscription

Learn how to manage subscription validity periods and usage records to optimize prepaid unit utilization.

1.  On the subscription details page, locate the three validity periods from the dropdown list in the upper right corner of the Prepayment Balance section.
2.  Select 01/01/2022 ~ 02/01/2022 from the Validity Period list.

    You will see the following table:
    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 0.00 | 1,000.00 |

3.  Upload usage records.

    Upload an 800-unit usage record in the first service period. On the subscription details page, you will see that the table has been updated:
    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 800.00 | 200.00 |

4.  Create bill runs.
    In this case, the bill run is triggered on Feb 1 2022 so that the units from the first validity period can be rolled over to the next validity period. After the bill run is created and posted, you will see the generated invoice listed on the bill run details page.

5.  On the subscription details page, select 02/01/2022 ~ 03/01/2022 from the Validity Period list.

    You will see the following table:
    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,200.00 | 0.00 | 1,200.00 |

6.  If you select 01/01/2022 ~ 02/01/2022 from the Validity Period list, you will see the following table:

    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 1,000.00 | 0.00 |

7.  Click Transaction Records.
    You will see that the displayed table has a Rolled Over type with \-200 units and a Rollover type with 200 units.

8.  Upload another usage record.
    Upload a 700-unit usage record in the second service period.

9.  On the subscription details page select 02/01/2022 ~ 03/01/2022 from the Validity Period list.

    If you set Rollover Application Option to Apply First:

    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 500.00 | 500.00 |

    If you set Rollover Application Option to Apply Last:

    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 700.00 | 300.00 |
