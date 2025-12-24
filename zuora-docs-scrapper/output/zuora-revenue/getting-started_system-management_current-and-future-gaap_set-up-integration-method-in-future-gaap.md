---
title: "Set up integration method in future GAAP"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/current-and-future-gaap/set-up-integration-method-in-future-gaap"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:33.552Z"
---

# Set up integration method in future GAAP

Learn how to set up the integration method in Zuora Revenue under future GAAP (ASC 606) by navigating through the application and selecting the appropriate system level value.

In the latest version of Zuora Revenue, complete the following steps:

1.  In Zuora Revenue under the future GAAP (ASC 606), navigate to Setups > Application .
2.  Click the left pointing arrow to open the side menu and click Profiles .
3.  On the Profiles page, locate the RPRO\_GD\_INTG\_METHOD line.
4.  Hover the mouse over the line and click the edit icon .
5.  In the Edit Profile window, ensure that RPRO\_GD\_INTG\_METHOD is selected in the Lookup field.
6.  Click the save icon and close the window.
7.  In the System Level Value field, select one of the following integration methods:

    -   Process Arrangement in cGAAP and interface Arrangement to fGAAP
    -   Interface Transactions to cGAAP and fGAAP stage
    -   Interface Transactions to fGAAP (With this option, the transactions are loaded to the staging tables under the future GAAP only.)

    The integration method is applied to be setup.
