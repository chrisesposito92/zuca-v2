---
title: "Contract Asset Netting"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-asset-netting"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:01.257Z"
---

# Contract Asset Netting

The netting process in Zuora Revenue involves moving over-recognized amounts from contract liability to contract asset, ensuring accurate balance sheet reporting. This process can be executed at the transaction line or application level, with specific system configurations required.

The accounting entries booked in Zuora Revenue are always on the Contract Liability side unless the Right to Bill flag is set to Yes for the line. In this circumstance, for the balance sheet to be correctly reported, the over-recognized amount needs to be moved from contract liability (CL) to contract asset (CA). To accomplish this goal, you must run the netting process in Zuora Revenue. The netting process can be done at two levels:

-   Transaction line level The netting entries are created against each line for the revenue contract that is eligible for the netting process.
-   Application level The MJE functionality is used to book the entries for the netting amount.

Note:

-   Only the revenue contracts that are not put on hold can participate in the netting process.
-   Revenue contracts that are summarized by Real Time Summarization.

## Required system configuration

The netting process requires the following setups in Zuora Revenue:

-   Setups > Application > Profiles

    -   The ALLOW\_NETTING\_PROCESS profile is set to Yes to enable the netting process.
    -   The NETTING\_PROCESS\_LEVEL profile is specified to determine whether the netting process is done at the application level or transaction line level.
    -   The NETTING\_ON\_NEGATIVE\_RC profile determines whether to create netting entries for the revenue contract that has all negative lines.
    -   The NETTING\_RC\_MJE profile specifies whether to include MJE lines in the revenue contract for CA/CL netting.
    -   Real-time summarization is a prerequisite for the automated netting process, which is applicable from 37.014 and onwards.

Note:

-   37.014.00.00 onwards, the system automates the run of CACL Netting based on the activities of the RC throughout the period. Previously, CACL Netting determinations were triggered manually during the month-end process through a job for the entire period. The ALLOW\_NETTING\_PROCESS profile and LTST Enabled radio button must be configured to No if you do not wish to use the automated Netting feature. Contact [Zuora Global Support](https://www.zuora.com/support-center/) if you cannot configure the setting to No.

-   Setups > Application > Revenue Books

    -   ![clipboard_ee5f04402ec77cecd8a5d0e5ae39ad692.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f38a2a81-8696-40a5-bcdd-6f1deaf7a5c8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzOGEyYTgxLTg2OTYtNDBhNS1iY2RkLTZmMWRlYWY3YTVjOCIsImV4cCI6MTc3MTcwODc5NCwianRpIjoiZmEyNTZkZjRiNDU0NDU1NmJhMjkxODM5MmU2OTNmMjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.fjtdi5XG4CGZvDWdGHlrJAzbf4rxXmL28u05caLS0zI)

-   Setups > Application > Accounting Setup > Account Type

    -   The Include In Netting switch is toggled to Yes for each account that will participate in the netting process.
-   Setups > Security > Roles

    -   The role of the user who will start the netting process has full access to the Netting Process sub-menu in the role privilege settings.

## Procedure

Complete the following steps to start the netting process in the UI:

1.  Navigate to Reports > Schedule Jobs.
2.  Click the add icon (+) . The Schedule Job/Job Groups window is displayed.
3.  In the Schedule Program tab, select RevPro3.0 Netting Process as the program name and specify other fields as necessary.
4.  Click the Program Parameters tab to specify the required parameters.

    Note:

    Earlier in the program parameters, you were able to provide a period name; this may also be a past period value. You will no longer be able to do so.

5.  To start the job, click Submit Job.
6.  (Application level only) If netting is enabled at the application level, after the Rev3.0 Netting Process program is complete, navigate to Accounting > Netting Process and then click Perform Netting.

## Processing logic

For the current open period, Zuora Revenue determines whether the revenue contract is in CL or CA position for the account types with netting enabled based on the following rules:

-   If the recognized revenue amount is more than the invoice amount (Cr - Dr < 0), the revenue contract is in CA position.
-   If the recognized revenue amount is less than the invoice amount (Cr - Dr > 0), the revenue contract is in CL position.
-   Whenever all the lines in an RC are 'Negative', such a case is an exception to the CA/CL Calculation formula. In other words, when all the lines in an RC are negative, it will always be in CL status.

## Netting currency

When there is more than one transaction currency in the revenue contract, the Lowest Common Currency is identified for all related account types and used for the netting process. The exchange rate of each line is used to identify the value in the lowest common currency, which can be one of the following:

-   Transaction currency
-   Functional currency
-   Reporting currency

## Scenario - Netting in transaction currency

In the following scenario, the transaction currency of all lines is the same. The lowest common currency is transaction currency, USD. The net contract liability amount (Cr - Dr) in USD is -1000, which is negative. This revenue contract is eligible for netting.

| Company Code | RC ID | Line ID | Account Type | Cr - Dr | T.curr | F.curr | F.Ex.Rate | G.Ex.Rate | Ex. Rate Date | Cr - Dr(T.curr) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 121 | 1 | ContractLiability | -1000 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -1000 |
| 100 | 121 | 1 | AdjustmentLiability | -300 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -300 |
| 100 | 121 | 2 | AdjustmentLiability | 300 | USD | USD | 1.00 | 1.00 | 01/01/2019 | 300 |

## Scenario - Netting in functional currency

In the following scenario, all the lines have the same functional currency. The lowest common currency is the functional currency, USD. The net contract liability amount in USD is -1250, which is negative. This revenue contract is eligible for netting.

| Company Code | RC ID | Line ID | Account Type | Cr - Dr | T.curr | F.curr | F.Ex.Rate | G.Ex.Rate | Ex. Rate Date | Cr - Dr(F.curr) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 122 | 1 | ContractLiability | -1000 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -1000 |
| 100 | 122 | 1 | AdjustmentLiability | -300 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -300 |
| 100 | 122 | 2 | ContractLiability | -1000 | SGD | USD | 0.25 | 1.00 | 01/01/2019 | -250 |
| 100 | 122 | 2 | AdjustmentLiability | 300 | SGD | USD | 1.00 | 1.00 | 01/01/2019 | 300 |

## Scenario - Netting in reporting currency

In the following scenario, the transaction currencies of the lines are all different. As a result, the reporting currency is used in netting. The net contract liability amount in reporting currency is -700, which is negative. This revenue contract is eligible for netting.

| Company Code | RC ID | Line ID | Account Type | Cr - Dr | T.curr | F.curr | F.Ex.Rate | G.Ex.Rate | Ex. Rate Date | Cr - Dr(R.curr) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 123 | 1 | ContractLiability | -1000 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -1000 |
| 100 | 123 | 1 | AdjustmentLiability | -300 | USD | USD | 1.00 | 1.00 | 01/01/2019 | -300 |
| 100 | 123 | 2 | ContractLiability | -1000 | SGD | USD | 0.25 | 1.00 | 01/01/2019 | -250 |
| 100 | 123 | 2 | AdjustmentLiability | 300 | USD | USD | 1.00 | 1.00 | 01/01/2019 | 300 |
| 100 | 123 | 3 | ContractLiability | -1000 | SGD | SGD | 0.25 | 1.00 | 01/01/2019 | -250 |
| 100 | 123 | 3 | AdjustmentLiability | 300 | SGD | SGD | 1.00 | 1.00 | 01/01/2019 | 300 |

## Netting at transaction line level

When netting is done at the transaction line level and the revenue contract is in CA position, different actions are taken on each transaction line, depending on the net CL amount (Cr - Dr) of the line:

-   If Cr - Dr = 0, no accounting entry is created for the line.
-   If Cr - Dr > 0, the CA account gets credited and the balance sheet account type is Debit.
-   If Cr - Dr < 0, the CA account gets debited and the balance sheet account type is Credit.

For example, there is one revenue contract 121 in the system.

| RC# | Company Code | CA Amount | CL Amount | T.Curr | F.Curr | Ex.Rate.Date | F.Ex.Rate | G.Ex.Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 121 | 100 | 1000 |  | USD | USD | 01/01/2019 | 1.00 | 1.00 |

After the netting process is run at the transaction line level, the accounting entries are created as follows:

Note: 37.014.00.00 onwards, during the period, the system computes Netting and creates an Accounting schedule. You are only required to run a Netting job to complete activities for applicable revenue contracts. This is applicable if you have configured the system to perform an automated Netting process.

| Company Code | RC ID | Line ID | Accounting Type | Period | Dr | Cr |
| --- | --- | --- | --- | --- | --- | --- |
| 100 | 121 | 1 | Contract Asset | JAN-19 | 1000 | 0 |
| 100 | 121 | 1 | Contract Liability | JAN-19 |  | 1000 |
| 100 | 121 | 1 | Contract Asset | JAN-19 | 300 |  |
| 100 | 121 | 1 | Contract Liability | JAN-19 |  | 300 |
| 100 | 121 | 2 | Contract Asset | JAN-19 |  | 300 |
| 100 | 121 | 2 | Contract Liability | JAN-19 | 300 |  |

## Netting at an application level

When netting is done at the application line, the top-sided journal entries are created for the CA amount.

For example, there is only one revenue contract 121 in the system.

| C# | Company Code | CA Amount | CL Amount | T.Curr | F.Curr | Ex.Rate.Date | F.Ex.Rate | G.Ex.Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 121 | 100 | 1000 |  | USD | USD | 01/01/2019 | 1.00 | 1.00 |

Zuora Revenue will book the following MJE:

| JE Header | JE Line# | T Curr | F Curr | Ex. Rate Date | F. Ex Rate | G. Ex Rate | Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| JE-125 | 1 | USD | USD | 01/01/2019 | 1 | 1 | 1000 |

After MJE is approved, the following schedules are created.

| Company Code | Accounting Type | Period | Dr | Cr |
| --- | --- | --- | --- | --- |
| 100 | Contract Asset | JAN-19 | 1000 | 0 |
| 100 | Contract Liability | JAN-19 |  | 1000 |
| 100 | Contract Asset | FEB-19 |  | 1000 |
| 100 | Contract Liability | FEB-19 | 1000 |  |

Note: 37.014.00.00 onwards, during the period, the system computes Netting. You are only required to run a Netting job and create MJE for Netting. This is applicable if you have configured the system to perform an automated Netting process.

## FAQs on Automated Netting process

Q : What is the frequency of the automated Netting?

A : The system triggers the automated Netting once a day during non-peak hours of the PST time zone.

Q : Which reports are impacted during the period with the automated Netting process?

A : While there is no impact on the RC RollForward report, the Netting/LTST report will display the output based on the last automation execution.

Q : What is the impact on month-end user steps of automated Netting?

A : You will run the same jobs and processes. The execution time will be faster as it now runs in incremental mode.

Q : How do I validate the completeness of Netting execution?

A : Optionally run the `select * from rpro_rtp_wi_header_g where status = 'NEW';` query from Data query utility before closing the period to ensure no RCs are showing up in the queue

Q : During period close & open, will the automation still run?

A : No, the automation is incompatible with the Period Close and Open Summarization. The automation will run only when the period status is Open.

Q : Can I run Netting for an entire period?

A : To run Netting for an entire period, configure Include all RCs parameter to Yes.

Q : What happens if Transfer Accounting is performed daily or on weekly basis?

A : The old netting schedules will be reversed, and new schedules will be created for the new amount
