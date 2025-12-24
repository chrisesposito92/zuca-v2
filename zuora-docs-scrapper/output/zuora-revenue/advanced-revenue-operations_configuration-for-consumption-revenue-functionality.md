---
title: "Configuration for Consumption Revenue Functionality"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configuration-for-consumption-revenue-functionality"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:58.479Z"
---

# Configuration for Consumption Revenue Functionality

As the implementation team or system administrators, you must complete the following configurations as needed for the Consumption Revenue functionality to work in the desired way.

1.  . The POB template configuration determines the revenue recognition method in Zuora Revenue.
2.  (Optional): This task is required only if the POB template called Consumption Ratable with VC is enabled. Enable appropriate VC types for the POB template to facilitate the VC accounting needs.
3.  This task schedules the revenue accrual event for Zuora Revenue to process the usage data.

## Configure POB templates

The following POB templates are predefined to facilitate the consumption usage related features and reports:

-   Consumption Ratable without VC : This template is to support consumption models where the revenue recognition method is ratable over term and without consideration of VC upon Booking.
-   Consumption Ratable with VC: This template is to support consumption models where the revenue recognition method is ratable over term with the consideration of VC upon Booking.
-   Consumption PayGo: This template is to support consumption models where the revenue recognition method is incurred as usage is billed.
-   Consumption - Usage Event : This template is to support consumption models where the revenue recognition method is Immediate Using Open Period and there is a committed amount for this usage performance obligation.
-   Consumption - Usage Event (Non-Committed) : This template is to support consumption models where the revenue recognition method is Immediate Using Open Period and there is no committed amount for this usage performance obligation.

To configure the POB template for the Consumption Revenue functionality, complete the following steps:

1.  Navigate to Policies > Performance Obligations.
2.  Select the predefined POB template that suits your need to edit the revenue treatment timing.
3.  In the Edit POB Template window, select either Ratable or Immediate as the revenue treatment timing for the POB template.
4.  Save your changes and close the window.

After the predefined POB templates are all set, you do not need to define the assignment rules for each template because they are also predefined.

Note:

Only the predefined templates are enabled for the Consumption Revenue functionality. Any copy of the predefined template will not be processed by the Consumption Revenue functionality.

## Enable VC Types

Two VC types are by default created to facilitate the VC accounting needs. You must enable them within the POB template called Consumption Ratable with VC.

-   VC Estimates\_Consumption

    Enable this type to support revenue accrual for estimation VC related to Consumption.

-   VC Rollover

    Enable this type for automation in calculating roll-forward balance based on actual usage revenue recognized.


To enable VC accounting for the Consumption Revenue functionality, the outlined steps are as follows:

1.  Navigate to Setup > Application > Accounting Setup to create or enable appropriate VC accounts.
2.  Navigate to Policies > Variable Consideration to define VC rules or formulas for the consumption VC types.
3.  Navigate to Policies > Performance Obligations to map the VC type to the POB template called Consumption Ratable with VC, revenue recognition upon booking.

For step-by-step instructions about general VC configurations, see VC setup and VC upload. . For information about how to manually upload VC to Zuora Revenue, see VC upload.

## Configure the Consumption Revenue Policy

After consumption usage data is manually uploaded or automatically synced to Zuora Revenue, usage data needs to be processed by the system to generate the revenue waterfall. A predefined job called RevPro3.0 Process Usage to Revenue Conversion is used to do this conversion. The consumption policy determines how frequently this job is scheduled to run to process the usage data.

To configure the Consumption policy, complete the following steps:

1.  Navigate to Policies > Consumption. The consumption policy configuration history is tracked as versions. From the Version drop-down list, you can see the frequency that is currently in use as well as the version history.
2.  To change the current frequency, select the latest version from the drop-down list and click Edit.
3.  In the Frequency section, specify the frequency with which the RevPro3.0 Process Usage to Revenue Conversion job is to run. It can be either daily or weekly on a specific day of the week.
4.  Save your changes.

The RevPro3.0 Process Usage to Revenue Conversion job is scheduled based on the frequency that you just configure. The previously scheduled job based on the previous version of the policy is canceled. You can navigate to Reports > Schedule Jobs to view the job schedule.
