---
title: "Close current period from Close Process dashboard"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/close-current-period-from-close-process-dashboard_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:10.670Z"
---

# Close current period from Close Process dashboard

Learn how to efficiently close the current period and open the next one using the Close Process dashboard in Zuora Revenue.

Use the Period Close Tasks tab as a central point to complete all period-close tasks to close the current and open the next period by the organization that is set up in Zuora Revenue. During the period-close phase, you can complete the tasks as defined in the period-close template from the Close Process dashboard.

## Advantages

A period-close template is mandatory for the automation of the month-end process. Compared with closing a period based on a template from the previous Accounting > Period Open/Close page, the Close Process dashboard has the following advantages:

-   The overall UI experience is improved. Task owners can complete their period-close tasks more efficiently with this dashboard.

-   The RevPro3.0 Reporting Current Period Close and the RevPro3.0 Reporting Current Period Open programs are triggered as part of the automated month-close process. You no longer need to add the program to your period-close template specifically.

-   Closing a period and opening the next one are combined in this dashboard. You no longer need to create a period-open template. Only a period-close template is required to be created in the system.


## Prerequisites

For the Period Close Tasks tab to work, the following configurations are needed:

-   Ensure all task owners have full access to the Period Close Tasks tab in the Close Process dashboard. Otherwise, this tab is not visible to them. For information, see [Manage user access](/zuora-revenue/getting-started/user-management/user-access) .

-   The soft freeze must be configured in Zuora Revenue to prevent the programs or actions that might cause data discrepancies from happening during the period-close process. After the period-close process is started from this tab, the system will apply the soft freeze. For step-by-step instructions, see [Set up soft freeze](/zuora-revenue/month-end-process/period-close-activities).

-   Create the period-close template to list the required period-close tasks in sequence. The period-close tasks defined in the template will be displayed in this tab. Task owners can start doing their jobs from this tab. For step-by-step instructions, see [Create Period Close/Open templates](/zuora-revenue/month-end-process/month-end-processing) .
    Note: If you already have the RevPro3.0 Reporting Current Period Close program listed as a task in the existing period-close template, it will not appear in the Perform Task section on this tab. It is because the system will automatically start the same program. In the new period-close template, you can exclude this program.


Complete the following steps [provided here](/zuora-revenue/month-end-process/close-current-period-from-close-process-dashboard/procedure) to close the current period and open the next one.

## Result

When the system closes the current period and opens the next one, the following programs automatically start in sequence. The period status changes from Soft Close to Closed, then to Pending Open. The period label also changes to the name of the next period during this process.

-   RevPro3.0 Reporting Current Period Close

-   RevPro3.0 Change Period Status Process

-   RevPro3.0 Execute Period Close & Open Process

-   RevPro3.0 Reporting Current Period Open


![pending-open.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/da96a51c-affa-4dd3-872c-742571acd731?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRhOTZhNTFjLWFmZmEtNGRkMy04NzJjLTc0MjU3MWFjZDczMSIsImV4cCI6MTc2NjYzNzA2OCwianRpIjoiYzcyODViOGNkMjE1NDNjMTk0MzJiODE0MmI3OThkNDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uLDK56Jsh7oVwr5nO8pGl9migZt9ccRBkl50X9_0AYM)

After all programs are completed successfully, the next period is opened and displayed as the current period on this tab.
