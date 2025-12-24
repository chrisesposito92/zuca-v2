---
title: "Set up soft freeze"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/system-configuration-for-month-end-process/set-up-soft-freeze"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:41.247Z"
---

# Set up soft freeze

Learn why setting up a soft freeze in Zuora Revenue is crucial for accurate financial reporting and preventing discrepancies during period closing.

Before you decide whether to set up soft freeze in Zuora Revenue, the following example can help you understand why soft freeze is important.

If a company has the following amounts in their books and the soft freeze is not set up for the batch collection job in Zuora Revenue.

| Opening Balance | $100K |
| --- | --- |
| Revenue Activity | $40K |
| Closing Balance | $60K |

When you are closing the period, another user submits the batch collection jobs to bring in new revenue contracts and the revenue that is released for the new revenue contracts is $10K. This will impact the revenue amount of the period that you are closing.

| Opening Balance | $100K |
| --- | --- |
| Revenue Activity | $40K + $10K |
| Closing Balance | $60K + $10K |

## Procedure

Complete the following steps to set up soft freeze in Zuora Revenue:

1.  Navigate to Setups > Application.

2.  Click the left pointing arrow icon to open the side menu and then click Soft Freeze.

3.  On the Soft Freeze page, select Jobs for the Type field. The predefined programs are listed for you to choose.

4.  To prevent a program from running, select the program line and set the Lock column value to Yes.

5.  In the Period Status column, choose the phase when you do not want to program to run. Valid options are as follows:

    -   Pending Open: The select job or action cannot be executed when you are opening the period. The program is available to be run only when the period is opened.

    -   Pending Close: The select job or action cannot be executed when you are closing the period. The program is available to be run only when the period is closed.

    -   Both: The select job or action cannot be executed when you opening or closing the period.

6.  Click the save icon to save your changes.

7.  Select Actions for the Type field and repeat step 4 ~ 6 to prevent an action from being executed.
