---
title: "Start the LT/ST reclassification process"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/long-term-and-short-term-reclassification/faqs-on-automated-ltst-process"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:14.779Z"
---

# Start the LT/ST reclassification process

Complete these steps in the UI to start the LT/ST reclassification process

1.  Navigate to Accounting > LT/ST Reclass.
2.  Click Reclass. The Reclass For Books window is displayed.
3.  From the Available Books list, select the book for which you want to run the LT/ST reclassification process, and then click the right arrow to move your selection to the Selected Books list and proceed to step 5 if you are using the version prior to 37.014.00.00 else proceed to step 4.

    Note:

    Only one LT/ST reclassification process can be started for one combination of revenue book and organization in the given period.

4.  From the Available Books list, select the book for which you want to run the LT/ST reclassification process, and select the applicable job option. (37.014.00.00 and onwards)

    | Job options | Description/procedure |
    | --- | --- |
    | Only compute (Computes LT/ST entries) | Manual creation of Journal Ledger entry and approval required after the compute job completion. |
    | Compute and Create JE (Computes and creates Journal Ledger entries) | Select the applicable values from the Category Code, Ex Rate Type, Activity Type Code, and Reason Code dropdown fields.Enable the Auto Approve field for MJE if required. You cannot configure this option during the run time. |

5.  Click the save icon. The LT/ST reclassification process is started. You can close the window.
6.  On the LT/ST Reclass page, wait for a few minutes for the process to complete and then click the Refresh icon.

    | Results | What to do next |
    | --- | --- |
    | For Only Compute - This process will create a batch for each combination of org and company codes in a Ready for Manual Journal status. This option is the same as the existing behavior before 37.014.00.00. | To view the LT/ST schedules that are created, hover the mouse over the line and then click the Download LT/ST Schedules icon. The LT/ST schedules are downloaded to your local system as a CSV file.To create manual JE based on the LT/ST schedules, complete the following steps. If the MJE_RC_LINE_FIELD_MAP lookup is already defined for the mapping between MJE reference columns and the RC line columns, Zuora Revenue will copy the values from the corresponding columns in the RC line table to the MJE reference columns when creating the manual JE. For more information about how to define this lookup, see MJE setups .Hover the mouse over the line and then click the Create Manual JE icon .In the New JE window, specify the appropriate category code, exchange rate type, activity type code, and reason code.Click the save icon. The MJE is created and a message is displayed to indicate whether the operation is successful.To view the MJE details or submit it for approval, navigate to File Upload > Manual JE. The name of the created MJE line starts with LT-ST in the Manual JE Entries section.Hover the mouse over this line to take appropriate actions to complete the standard MJE approval process. After the MJE is approved for the LT/ST schedules, it is ready to be transferred. |
    | For Compute and Create JE (37.014.00.00 and onwards) - This process will create a batch for each combination of org and company codes. This process generates manual journals and updates the status as Approved if Auto Approve is enabled or generates manual journals and updates the status as Manual JE Created if Auto Approve is not enabled. | Review the LT/ST schedules and MJEs that are created.Note:Approve the MJEs if Auto Approve option was not enabled. |

    If the status changes to Error, it means the LT/ST Reclass process failed.

    Navigate to Reports > Scheduled Jobs to find more information about the process. If there is no LT/ST Reclass process or its associated threads started, it might be because the required netting process has not been started for the current period or some required fields for the transactions are not populated (for example, the SOB ID field is empty).


## FAQs on automated LT/ST process

| Question | Answer |
| --- | --- |
| What is the frequency of the automated LT/ST process? | The system triggers the automated LT/ST computation once a day during non-peak hours of the PST time zone. |
| Which reports are impacted during the period with the automated LT/ST process? | While there is no impact on the RC RollForward report, the Netting / LTST report will display the output based on the last automation execution. |
| What is the impact on month-end user steps of LT/ST? | You will run the same jobs and processes. The execution time will be faster as it now runs in incremental mode. |
| How do I validate the completeness of LT/ST execution? | Optionally run the select * from rpro_rtp_wi_header_g where status = 'NEW'; query from Data query utility before closing the period to ensure no RCs are showing up in the queue |
| During period close & open, will the automation still run? | No, the automation is incompatible with the Period Close and Open Summarization. The automation will run only when the period status is Open. |
