---
title: "Reporting summarization"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/reporting-summarization"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:09.416Z"
---

# Reporting summarization

Reporting is one of the most important functionalities in Zuora Revenue. As a revenue user, a lot of reporting and reconciliation work is involved in their daily accounting practices. In Zuora Revenue, the reporting framework is closely related to the predefined summarization programs. It is because most reports are generated based on summarized data rather than the raw transaction data. For reports to be generated with correct data, you must know which summarization program is to be started and when is the best time to start summarization before you run the reports.

## Summarization process overview

The summarization process is critical for Zuora Revenue to derive revenue details from transaction data for reporting purposes. The main objective of the summarization process is to aggregate the transaction data and summarize it based on various data points such as Accounting Period, Accounting Schedule Type, or Accounting Segment. The summarization process is also important in deriving the accurate beginning balances and ending balances for each accounting period. If the summarization process is not run appropriately, the reporting functionality in Zuora Revenue cannot provide correct data.

In Zuora Revenue, the summarization process must run at different phases during the accounting period. Some summarization process underlies other accounting activities. For example, when the transfer accounting process is started, the summarization process automatically starts. Other summarization processes must be started manually at the right time, which involve the following programs:

| Summarization process | Predefined program to run |
| --- | --- |
| Period-open summarization | RevPro3.0 Reporting Current Period Open |
| Current period summarization | RevPro3.0 Reporting Summarize Current Period |
| Current period post summarization | RevPro3.0 Current Period Post Summarize Data |
| Period-close summarization | RevPro3.0 Reporting Current Period Close |

The following diagram illustrates how the summarization process fits in the whole cycle of an accounting period. Other activities that are critical to reporting are also included in the diagram. Details are explained below based on different phases of an accounting period.

![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/C_Perform_month_end_process/media/summarization-flow.jpg)

## Period-open phase

This is the first phase in opening a new accounting period. During the period-open phase, the open summarization process is required. To start the open summarization process, the RevPro3.0 Reporting Period Open program must be started as part of the period-open process.

The period-open summarization program will calculate the ending balance of the prior period and carry it forward to the beginning balance of the current open period. It also calculates the activity that is created in the prior periods. However, this program does not summarize the waterfall data.

## Current period summarization

After the period-open process is completed, the following Zuora Revenue activities are performed in the current open period. They are crucial activities based on the transactional revenue data.

-   Data collection
-   POB release
-   Event processing
-   Manual actions
-   Netting
-   MJE processing

The current period summarization process summarizes the newly collected and released transaction lines for the current period. During the summarization process, details that are related to both the accounting summary and waterfall are summarized. To start the current period summarization process, the RevPro3.0 Reporting Summarize Current Period program must be started.

This summarization program helps in calculating the key data points for the revenue reports, such as beginning balance, activity, addition, release, and ending balance. It also calculates the waterfall data for the current period.

The RevPro3.0 Reporting Summarize Current Period program can be run multiple times for the current period. Whenever there are any newly collected and released transaction lines, this summarization program needs to be run to get the reports correct. This program can be run based on all data or based on the incremental data changes to save time for the summarization process.

Beginning from version 37.004.00.00, an algorithm is implemented to run this program more efficiently. With this algorithm, the system can automatically determine the best level of summarization based on the current transaction volume, the total volume, and historical performance. You use the SUMMARIZATION\_LEVEL profile to control the system behavior regarding this program with the following options:

-   Auto This is the default value of this profile. The default value allows the system to automatically determine the summarization level.

-   Force Full Build When the profile is set to this value, the summarization program always run based on the full build. It summarizes all the revenue contracts that have accounting entries in the current open period.

-   Force Incremental When the profile is set to this value, the summarization program always run based on the incremental build. It summarizes only the revenue contracts that are affected after the last summarization in the given period. It does not summarize all the revenue contracts.


During the current period, the scanning program is required after the current period summarization is completed. This scanning program scans all the summarized revenue contracts to identify the extinct revenue contracts, which are fully amortized and have no future revenue. The extinct revenue contracts will be excluded from the waterfall reports.

During the transfer accounting and sweeping un-posted schedule process, the summarization process automatically occurs and there is no need to manually start any summarization program. For transfer accounting, Zuora Revenue automatically updates the un-posted and posted amount in the summarized data. During the sweeping process, un-posted accounting entries are moved from the current period to the next period and summarization is automatically done for the related revenue contracts.

## Current period post summarization

The post summarization process is a second-level summarization on top of the existing summarized data based on the fields that are selected in the Disclosure Aggregation configuration ( Setups > Application > Disclosure Aggregation ). Some key reports, such as Trial Balance and Period FX Waterfall, use the aggregated data from the post summarization process. To start this process, the RevPro3.0 Current Period Post Summarize Data program must be started.

This program must run at least once in the current open period. It might also need to be started depending on whether the Disclosure Aggregation configuration is changed in the current period. This program can be run more than once in the current period.

## Period-close phase

The period-close phase is a critical phase in closing any accounting period and data is aggregated for a given period in this phase. The period-close summarization process is mandatory in this phase to get the correct data for reporting. To start this summarization process, the RevPro3.0 Reporting Period Close program must be started. This program creates a snapshot of the current period waterfall report during the period-close process. The waterfall snapshot is created for all the closed periods and the snapshot tables will be used to get the waterfall report for the close period.

## Next period summarization

The Next Period Summarization job ( `RevPro3.0 Reporting Next Period Open` ) helps you to perform reporting summarization for the next unopened period while in the current period. Zuora recommends scheduling the Next Period Summarization job during non-peak business hours on a weekly/bi-weekly basis.

This change will drastically reduce the volume of eligible RCs to be summarized by the Period open Summarization job after you open the new period and enable you to open the next period quickly.

## FAQs on Next period summarization

Q : What is the impact on the current period summarization executed through a job or by Real-time mode?

A : The next period summarization does not impact the reporting summarization for the current period.

Q : Is this job incompatible with all other jobs during execution?

A : While the Next Period Summarization job is in progress, all other newly submitted jobs will remain pending. The other jobs will be executed after the Next Period Summarization job is completed. Hence, we recommend running this job during non-business hours

Q : Can I run this job on a daily or weekly basis?

A : Zuora recommends running this job on a weekly basis during non-business hours. However, you can decide to run it on a daily basis based on your business needs.

Q : What if an RC gets updated after being processed by Next Period Summarization?

A : All RCs that were updated after the last run of the Next Period Summarization job will be reprocessed either during the following Next Period Summarization job or through the Period Open Summarization job.

Q : Should I still run the Period Open Summarization process?

A : You must run the Period Open Summarization job after opening a new period.

Q : Will there be an impact on the period close & open process?

A : There will be no changes to your procedures as part of the period close & open process. You will continue to run the Period open Summarization job after opening a new period. If you are closing your books using CPD, it is automatically triggered by CPD.

## Key transaction data points

In Zuora Revenue, the summarization process is based on the following data points of the transaction data. It means, during the summarization process, data is grouped and aggregated based on these data points and stored as summarized data for all the transaction lines.

-   Line ID
-   Period ID
-   Schedule Type
-   Accounting Type ID
-   Accounting Segment

It is recommended to run all the predefined summarization programs listed in the Summarization process overview (above) section through the Period Open/Close Template in Zuora Revenue.

## Reports based on summarized data

The summarization process is critical to the following reports because these reports are generated based on the summarized data. If the summarization process is not run appropriately, the following reports will be impacted and might not provide accurate data.

-   Billing RollForward Report
-   Cost Capitalized Rollforward Report
-   Cost Insight
-   Disclosure - Contract Level
-   Period FX Waterfall
-   RC Rollforward Report
-   Revenue Book Comparison Report
-   Revenue Insight
-   Revenue Summary
-   Trial Balance Report
-   Unbill RollForward Report
-   Unsatisfied POB Balances
-   VC Insight
-   VC Rollforward Report
-   Waterfall Report
-   Revenue from Prior/Current CL/CA Report
-   Revenue from Prior/Current Satisfied POB(s)
