---
title: "Predefined programs"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/predefined-programs"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:54.276Z"
---

# Predefined programs

Explore the predefined programs in Zuora Revenue that facilitate quick initiation of processes, including a list of frequently used programs and their descriptions.

In Zuora Revenue, a set of predefined programs is provided to manually start a particular process quickly. When you navigate to Reports > Schedule Jobs to start a program, both the predefined and custom programs are listed for your selection in the Schedule Job/Job Groups window. For instructions about the UI procedure, see [Schedule jobs](/zuora-revenue/month-end-process/reports/schedule-jobs) .

The following table lists frequently used predefined programs and a short description for each program. The required parameters for each program vary and are not covered in this table.

| Program name | Description |
| --- | --- |
| RevPro3.0 Accounting Transfer | This program posts the unposted accounting entries (both the netting entries and LT/ST reclass entries) to the general ledger. For more information, see Transfer accounting . |
| RevPro3.0 Accounting Transfer Master | This program does the same thing as the RevPro3.0 Accounting Transfer program. The difference is that this master program will start more threads, which is more suitable for high-volume data. |
| RevPro3.0 Automate Datasync Setup Process | This program retrieves important Zuora Billing settings that have an impact on the revenue process and then automatically configures the profiles in Zuora Revenue accordingly. For more information, see Sync Zuora Billing settings to Zuora Revenue . |
| RevPro3.0 Billing Data Sync Scheduler Process | This program starts a temporary job to sync the data from Zuora Billing to Zuora Revenue Pre-staging tables without any processing. |
| RevPro3.0 Billing Entity ID Sync Process | This program syncs the entity information of the connected Zuora Billing tenant to Zuora Revenue. |
| RevPro3.0 Billing Fxrate Sync Process | This program syncs the currency exchange rates from Zuora Billing to Zuora Revenue. |
| RevPro3.0 Billing Settings Sync Process | This program syncs all Zuora Billing settings (tenant/T9/billing) from the connected Zuora Billing tenant into Zuora Revenue. |
| RevPro3.0 Current Period Post summarize Data | This program summarizes the reporting data based on the attributes that are selected in the Disclosure Aggregation application setup. This is a second-level summarization, which generates aggregated data used by some key reports, such as Trial Balance and Period FX Waterfall. For more information, see Reporting summarization . |
| RevPro3.0 Current Period Post summarize Data for Multi-Org | This program summarizes the reporting data based on the attributes that are selected in the Disclosure Aggregation application setup for all organizations or operating units. This is a second-level summarization, which generates aggregated data used by some key reports, such as Trial Balance and Period FX Waterfall. |
| RevPro3.0 Data Collection | This program collects the transaction data in the specified RC batch and group or updates the transaction lines in the revenue contracts. |
| RevPro3.0 Data Collection Master | This program does the same thing as the RevPro3.0 Data Collection program. The difference is that this master program will start more threads, which is more suitable for high-volume data. |
| RevPro3.0 Data Sync Process | This program loads a specified range of Zuora Billing object data into the Pre-staging tables of Zuora Revenue without any processing. For more information, see Run Data Sync jobs . |
| RevPro3.0 Event Process | This program processes the uploaded event data and then Zuora Revenue can take appropriate actions against the revenue or cost based on the processed events. For more information, see Release event . |
| RevPro3.0 Event Process Master | This program does the same thing as the RevPro3.0 Event Process program. The difference is that this master program will start more threads, which is more suitable for high-volume data. |
| RevPro3.0 Generate Forecast Master | This program creates forecast schedules for all the transaction lines within the associated POB. For more information, see Forecasting . |
| RevPro3.0 Immediate POB Release | This program releases the expired POBs. For more information, see Prerequisite activities . |
| RevPro3.0 Immediate POB Release Master | This program does the same thing as the RevPro3.0 Immediate POB Release program. The difference is that this master program will start more threads, which is more suitable for high-volume data. |
| RevPro3.0 Log Retention | This program helps to completely clean up (truncate) the log records in the RPRO_LOG_ACT_G table. For more information, see A closer look at RevPro Log Retention Program . |
| RevPro3.0 LTST Reclass | This program calculates the LT/ST balances and then creates the LT/ST reclass journal entries based on the CA or CL position of the revenue contract. For more information, see Start LT/ST reclassification process . |
| RevPro3.0 Move Previous schedules to current open period | This program moves the schedules from the previously closed period to the current open period. |
| RevPro3.0 Move Previous schedules to current open period for Multi-Org | This program moves the schedules from the previously closed period to the current open period on the revenue book level for all organizations/operating units in Zuora Revenue. |
| RevPro3.0 Multi-Org Immediate POB Release Master | This program releases the expired POBs at the revenue book level for all organizations or operating units in Zuora Revenue. |
| RevPro3.0 Multi-Org Netting Batch Process | This program starts the RevPro3.0 Netting Batch Process program for each organization or operating unit that is assigned to the current user role. |
| RevPro3.0 Netting Process | This program calculates the CA/CL balance and net position of the specified revenue contract and then creates the appropriate accounting entries. For more information, see Netting process . |
| RevPro3.0 Netting Process for Multi-Org | This program calculates the CA/CL balance and net position of every revenue contract and then creates the appropriate accounting entries for all organizations/operating units in Zuora Revenue. For more information, see Netting process . |
| RevPro3.0 Post summarize Data | This program summarizes the reporting data for any periods based on the attributes that are selected in the Disclosure Aggregation application setup. This is a second-level summarization, which generates aggregated data used by some key reports, such as Trial Balance and Period FX Waterfall. |
| RevPro3.0 RC Scanning Program Master | This program determines whether the revenue contract is either in the Dormant state or in the Extinct state. A dormant revenue contract still has revenue in the upcoming periods. An extinct revenue contract does not expect any revenue in the future. |
| RevPro3.0 RC Scanning Program Master for Multi-Org | This program determines whether the revenue contract is either in the Dormant state or in the Extinct state on the revenue book level for all organizations/operating units in Zuora Revenue. A dormant revenue contract still has revenue in the upcoming periods. An extinct revenue contract does not expect any revenue in the future. |
| RevPro3.0 RC Validation Process Master | This program validates the revenue contract data after contract modifications to make sure that revenue contract data is in sync with the state. |
| RevPro3.0 RC Validation Process Master for Multi-Org | This program validates the revenue contract data after contract modifications to make sure that the revenue contract data is in sync with the state. This program runs on the revenue book level for all organizations/operating units in Zuora Revenue. |
| RevPro3.0 Reporting Summarize Current Period | This program summarizes the newly collected and released transaction lines for the current period. During the summarization process, details that are related to both the accounting summary and waterfall are summarized. For more information, see Reporting summarization . |
| RevPro3.0 Reporting Summarize Current Period for Multi-Org | This program summarizes the newly collected and released transaction lines for the current period at the revenue book level for all organizations or operating units. |
| RevPro3.0 Revenue Data Sync Process | This program loads a specified range of Zuora Billing object data into Pre-staging tables of Zuora Revenue and then transforms the data into transaction lines in the Line Staging tables. For more information, see Run Revenue Sync jobs . |
| RevPro3.0 Revenue Sync Data Integrity Check Process | This program checks the data integrity for the revenue sync process and re-syncs the data if any integrity issue is found. |
| RevPro3.0 Subscription Term Number Generation Process | This program generates the term number for the subscription. |
| RevPro3.0 Sweep Unposted Schedules | This program moves the schedules that are on transfer hold to the next period. For more information, see Period-close activities . |
| RevPro3.0 Sweep Unposted Schedules for Multi-Org | This program moves the schedules that are on transfer hold to the next period at the revenue book level for all organizations or operating units that are set up in Zuora Revenue. |
| RevPro3.0 Sync Object Mapping | This program sets up the standard fields that are necessary for the object mapping in the Data Sync process. |
| RevPro3.0 VC Expiry | This program reverses the variable consideration entries if the condition of variable consideration for the POB is met for expiry. |
| RevPro3.0 VC Process | This program can perform different VC-related operations based on the uploaded VC file, such as updating VC estimates, clearing VC actuals, or canceling final actuals. For more information, see VC upload . |
| RevPro3.0 Zero Value Discounts CCV Cleanup Process | This program marks the non-genuine $0 discount lines that is generated as part of the CCV service. It is internally used by the Data Sync program. |
| RevPro3.0 Zuora Data Transformation | This program transforms the Zuora Billing object data in Pre-staging tables into transaction lines that will be stored in Staging tables of Zuora Revenue. For more information, see Run Data Transformation jobs. |
